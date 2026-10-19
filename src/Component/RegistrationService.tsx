import {
    Currency,
    SeminarEvent,
    getEventDateParts,
    getTotalAmount,
    getUnitPrice,
} from "../Data/EventData";

export interface RegistrationFormValues {
    fullName: string;
    email: string;
    phone: string;
    organisation: string;
    designation: string;
    city: string;
    participants: number;
    additionalParticipants: string;
    notes: string;
    acceptedTerms: boolean;
}

export interface RegistrationPayload {
    registrationId: string;
    createdAt: string;
    /** Becomes "paid" once the Razorpay payment is verified by the backend. */
    status: "pending_payment";
    event: {
        id: string;
        title: string;
        dates: string;
        time: string;
        city: string;
        country: string;
        venueName: string | null;
    };
    pricing: {
        currency: Currency;
        participants: number;
        unitPrice: number;
        totalAmount: number;
        groupRateApplied: boolean;
    };
    attendee: {
        fullName: string;
        email: string;
        phone: string;
        organisation: string;
        designation: string;
        city: string;
    };
    additionalParticipants: string;
    notes: string;
    acceptedTerms: boolean;
}

/**
 * In-memory store until the backend is ready. Cleared on page refresh.
 */
const registrations: RegistrationPayload[] = [];

const newId = (): string =>
    typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `reg_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;

export function buildRegistrationPayload(
    event: SeminarEvent,
    values: RegistrationFormValues,
): RegistrationPayload {
    return {
        registrationId: newId(),
        createdAt: new Date().toISOString(),
        status: "pending_payment",
        event: {
            id: event.id,
            title: event.title,
            dates: getEventDateParts(event).range,
            time: event.time,
            city: event.city,
            country: event.country,
            venueName: event.venueName,
        },
        pricing: {
            currency: event.currency,
            participants: values.participants,
            unitPrice: getUnitPrice(event, values.participants),
            totalAmount: getTotalAmount(event, values.participants),
            groupRateApplied: values.participants >= event.groupMinSize,
        },
        attendee: {
            fullName: values.fullName.trim(),
            email: values.email.trim(),
            phone: values.phone.trim(),
            organisation: values.organisation.trim(),
            designation: values.designation.trim(),
            city: values.city.trim(),
        },
        additionalParticipants: values.additionalParticipants.trim(),
        notes: values.notes.trim(),
        acceptedTerms: values.acceptedTerms,
    };
}

/**
 * TEMPORARY: stores the registration in a variable and logs it.
 *
 * TODO (backend + Razorpay):
 *  1. POST the payload to the backend (e.g. POST /api/registrations).
 *  2. Backend recalculates the amount, saves the registration and creates a
 *     Razorpay order (INR for Indian events; USD needs international payments
 *     enabled on the Razorpay account).
 *  3. Open Razorpay Checkout with the returned order id.
 *  4. Verify the payment signature on the backend, mark the registration
 *     "paid", then send the receipt, invitation letter and guidelines.
 * Keep this function's signature so the dialog needs no changes.
 */
export async function submitRegistration(
    payload: RegistrationPayload,
): Promise<{ ok: true; registrationId: string }> {
    registrations.push(payload);
    console.log("[Registration] submitted:", payload);
    return { ok: true, registrationId: payload.registrationId };
}

export const getStoredRegistrations = (): RegistrationPayload[] => [...registrations];