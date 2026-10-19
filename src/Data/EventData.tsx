/**
 * Seminar & workshop data for NYMPH International.
 * Source: client document "Seminars.docx". Edit this file to add, change or
 * remove events. Past events drop off the site automatically (see
 * getUpcomingEvents), so nothing needs deleting after the date passes.
 */

export type Currency = "INR" | "USD";
export type EventRegion = "India" | "International";

export interface SeminarEvent {
    id: string;
    title: string;
    days: 1 | 2;
    startDate: string;
    endDate: string;
    time: string;
    city: string;
    country: string;
    region: EventRegion;
    venueName: string | null;
    venueAddress: string | null;
    currency: Currency;
    price: number;
    groupPrice: number;
    groupMinSize: number;
}

export const CONTACT_PHONE = "+91 95745 44288";
export const CONTACT_PHONE_HREF = "tel:+919574544288";

const AMA_VENUE = {
    venueName: "Ahmedabad Management Association (AMA)",
    venueAddress:
        "ATIRA Campus, Dr. Vikram Sarabhai Marg, IIM Road, Vastrapur, Ahmedabad, Gujarat 380015",
};

export const seminarEvents: SeminarEvent[] = [
    {
        id: "ahmedabad-29-nov-2026",
        title: "Financial Problems & Survival Strategies of Businesses in India",
        days: 1,
        startDate: "2026-11-29",
        endDate: "2026-11-29",
        time: "9:00 AM – 5:00 PM",
        city: "Ahmedabad",
        country: "India",
        region: "India",
        ...AMA_VENUE,
        currency: "INR",
        price: 2999,
        groupPrice: 2599,
        groupMinSize: 3,
    },
    {
        id: "ahmedabad-13-dec-2026",
        title: "Financial Problems & Survival Strategies of Businesses in India",
        days: 1,
        startDate: "2026-12-13",
        endDate: "2026-12-13",
        time: "9:00 AM – 5:00 PM",
        city: "Ahmedabad",
        country: "India",
        region: "India",
        ...AMA_VENUE,
        currency: "INR",
        price: 2999,
        groupPrice: 2599,
        groupMinSize: 3,
    },
    {
        id: "dubai-19-dec-2026",
        title: "Strategic Business Architecture & Sustainable Financial Planning",
        days: 2,
        startDate: "2026-12-19",
        endDate: "2026-12-20",
        time: "9:30 AM – 6:15 PM",
        city: "Dubai",
        country: "United Arab Emirates",
        region: "International",
        venueName: "Howard Johnson by Wyndham",
        venueAddress:
            "Khalid Bin Al Waleed Road, Al Raffa / Al Souq Al Kabeer, Bur Dubai, Dubai, United Arab Emirates",
        currency: "USD",
        price: 449,
        groupPrice: 425,
        groupMinSize: 3,
    },
    {
        id: "hanoi-23-jan-2027",
        title: "Cash Flow, Capital & Resilience: Financial Mastery for Businessmen",
        days: 2,
        startDate: "2027-01-23",
        endDate: "2027-01-24",
        time: "9:30 AM – 6:15 PM",
        city: "Hanoi",
        country: "Vietnam",
        region: "International",
        venueName: "FTE Ba Dinh",
        venueAddress:
            "268 Buoi Street, Ngoc Ha Ward, Ba Dinh District, Hanoi, Vietnam",
        currency: "USD",
        price: 449,
        groupPrice: 425,
        groupMinSize: 3,
    },
    {
        id: "malaysia-13-feb-2027",
        title: "Systems, Technology & Financial Mastery",
        days: 2,
        startDate: "2027-02-13",
        endDate: "2027-02-14",
        time: "9:30 AM – 6:15 PM",
        city: "Malaysia",
        country: "Malaysia",
        region: "International",
        venueName: null,
        venueAddress: null,
        currency: "USD",
        price: 449,
        groupPrice: 425,
        groupMinSize: 3,
    },
    {
        id: "singapore-27-feb-2027",
        title: "Smart Operations & Practical AI for Modern Businesses",
        days: 2,
        startDate: "2027-02-27",
        endDate: "2027-02-28",
        time: "9:30 AM – 6:15 PM",
        city: "Singapore",
        country: "Singapore",
        region: "International",
        venueName: null,
        venueAddress: null,
        currency: "USD",
        price: 499,
        groupPrice: 475,
        groupMinSize: 3,
    },
];

/* ------------------------------------------------------------------ */
/* Campus / GIDC programs                                              */
/* ------------------------------------------------------------------ */

export interface CampusProgram {
    id: string;
    title: string;
    duration: string;
    audience: string;
    detail?: string;
    /** Shown as a "Free" badge. Only set where the client document says so. */
    free: boolean;
}

export const campusPrograms: CampusProgram[] = [
    {
        id: "real-problems",
        title: "Real Problems Facing Enterprises in India",
        duration: "1.5 hours",
        audience: "GIDCs, colleges and universities",
        free: true,
    },
    {
        id: "job-vs-business",
        title: "Job vs. Business",
        duration: "1.5 hours",
        audience: "Specially designed for students",
        free: true,
    },
    {
        id: "starting-a-business",
        title: "Starting & Developing a Business in India",
        duration: "One-day seminar · 7.5 hours",
        audience: "Colleges and universities",
        detail: "With practical exposure",
        free: false,
    },
];

/* ------------------------------------------------------------------ */
/* Inclusions                                                          */
/* ------------------------------------------------------------------ */

export const feeInclusions = [
    "Morning tea with breakfast",
    "Lunch",
    "High tea",
    "Study materials kit",
    "Post-seminar consultation",
];

export const afterPayment = [
    "Payment receipt",
    "Official invitation letter",
    "Important seminar guidelines",
];

/**
 * The client document asks for these sections ("Conference details should
 * contain: Benefits, Who should attend, Terms & conditions, Payment
 * options") but supplies no content yet. Fill any list below and the matching
 * section appears on the Training & Workshops page automatically.
 */
export const eventBenefits: string[] = [];
export const whoShouldAttend: string[] = [];
export const paymentOptions: string[] = [];

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

const MONTHS = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

function parseLocalDate(iso: string): Date {
    const [y, m, d] = iso.split("-").map(Number);
    return new Date(y, m - 1, d);
}

export interface EventDateParts {
    /** "29" or "19–20" */
    day: string;
    /** "Nov" */
    month: string;
    year: string;
    /** "29 Nov 2026" or "19–20 Dec 2026" */
    range: string;
}

export function getEventDateParts(event: SeminarEvent): EventDateParts {
    const start = parseLocalDate(event.startDate);
    const end = parseLocalDate(event.endDate);
    const month = MONTHS[start.getMonth()];
    const year = String(start.getFullYear());
    const day =
        event.startDate === event.endDate
            ? String(start.getDate())
            : `${start.getDate()}–${end.getDate()}`;
    return { day, month, year, range: `${day} ${month} ${year}` };
}

export function formatMoney(currency: Currency, amount: number): string {
    return currency === "INR"
        ? `₹${amount.toLocaleString("en-IN")}`
        : `US$${amount.toLocaleString("en-US")}`;
}

/** Events that have not finished yet, soonest first. */
export function getUpcomingEvents(now: Date = new Date()): SeminarEvent[] {
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    return seminarEvents
        .filter((e) => parseLocalDate(e.endDate) >= today)
        .sort(
            (a, b) =>
                parseLocalDate(a.startDate).getTime() -
                parseLocalDate(b.startDate).getTime(),
        );
}

/** "India, UAE and Vietnam" style list of distinct countries. */
export function joinList(items: string[]): string {
    if (items.length <= 1) return items.join("");
    return `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`;
}

/* ------------------------------------------------------------------ */
/* Routing & pricing helpers                                           */
/* ------------------------------------------------------------------ */

/** Event list page. The detail route is `${EVENTS_LIST_PATH}/:eventId`. */
export const EVENTS_LIST_PATH = "/training&workshop";
export const EVENTS_LIST_SEMINARS_PATH = `${EVENTS_LIST_PATH}`;

/** Shareable URL path for one event, e.g. /training&workshops/dubai-19-dec-2026 */
export const getEventPath = (eventId: string): string =>
    `${EVENTS_LIST_PATH}/${eventId}`;

export const getEventById = (eventId?: string): SeminarEvent | undefined =>
    seminarEvents.find((e) => e.id === eventId);

export const isEventPast = (event: SeminarEvent, now: Date = new Date()): boolean => {
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    return parseLocalDate(event.endDate) < today;
};

/** Per-participant price after applying the group rate. */
export const getUnitPrice = (event: SeminarEvent, participants: number): number =>
    participants >= event.groupMinSize ? event.groupPrice : event.price;

/**
 * Display-only total. The backend must recalculate this from its own copy of
 * the prices before creating the Razorpay order; never trust the client amount.
 */
export const getTotalAmount = (event: SeminarEvent, participants: number): number =>
    getUnitPrice(event, participants) * participants;