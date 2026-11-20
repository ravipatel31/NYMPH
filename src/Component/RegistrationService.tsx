

import { SeminarEvent } from "../Data/EventData";

/**
 * Seminar registration -> backend (saves the row + emails the admin).
 * Relative URL on purpose: on https://nymphinternational.com it becomes
 *   https://nymphinternational.com/api/v1/manage/registration/create-registration
 * and in local dev CRA forwards /api to the "proxy" in package.json.
 * Set REACT_APP_REGISTRATION_URL only if the API lives on another host.
 */
const REGISTRATION_URL =
    process.env.REACT_APP_REGISTRATION_URL ||
    "/api/v1/manage/registration/create-registration";

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

export interface RegistrationPayload extends RegistrationFormValues {
    eventId: string;
    /** Hidden anti-spam field. Must stay empty. */
    website: string;
}

export interface RegistrationResult {
    id: number;
    referenceCode: string;
}

export function buildRegistrationPayload(
    event: SeminarEvent,
    values: RegistrationFormValues,
): RegistrationPayload {
    return {
        eventId: event.id,
        fullName: values.fullName.trim(),
        email: values.email.trim(),
        phone: values.phone.trim(),
        organisation: values.organisation.trim(),
        designation: values.designation.trim(),
        city: values.city.trim(),
        participants: values.participants,
        additionalParticipants: values.additionalParticipants.trim(),
        notes: values.notes.trim(),
        acceptedTerms: values.acceptedTerms,
        website: "",
    };
}

/** Throws Error(message) with the API's message when the request is rejected. */
export async function submitRegistration(payload: RegistrationPayload): Promise<RegistrationResult> {
    let res: Response;
    try {
        res = await fetch(REGISTRATION_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });
    } catch {
        throw new Error("Could not reach the server. Please check your connection and try again.");
    }

    const json = await res.json().catch(() => null);
    if (!res.ok || !json?.status) {
        throw new Error(json?.message || "Something went wrong. Please try again.");
    }
    return json.data as RegistrationResult;
}
