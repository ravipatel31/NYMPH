// /**
//  * Seminar & workshop types and helpers for NYMPH International.
//  * The events themselves now come from the API (see EventsContext.tsx), so
//  * add, change or remove events through the backend, not in this file.
//  * Past events drop off the site automatically (see getUpcomingEvents).
//  */

// export type Currency = "INR" | "USD";
// export type EventRegion = "India" | "International";

// export interface SeminarEvent {
//     id: string;
//     title: string;
//     days: 1 | 2;
//     startDate: string;
//     endDate: string;
//     time: string;
//     city: string;
//     country: string;
//     region: EventRegion;
//     venueName: string | null;
//     venueAddress: string | null;
//     currency: Currency;
//     price: number;
//     groupPrice: number;
//     groupMinSize: number;
// }

// export const CONTACT_PHONE = "+91 95745 44288";
// export const CONTACT_PHONE_HREF = "tel:+919574544288";

// /* ------------------------------------------------------------------ */
// /* Campus / GIDC programs                                              */
// /* ------------------------------------------------------------------ */

// export interface CampusProgram {
//     id: string;
//     title: string;
//     duration: string;
//     audience: string;
//     detail?: string;
//     /** Shown as a "Free" badge. Only set where the client document says so. */
//     free: boolean;
// }

// export const campusPrograms: CampusProgram[] = [
//     {
//         id: "real-problems",
//         title: "Real Problems Facing Enterprises in India",
//         duration: "1.5 hours",
//         audience: "GIDCs, colleges and universities",
//         free: true,
//     },
//     {
//         id: "job-vs-business",
//         title: "Job vs. Business",
//         duration: "1.5 hours",
//         audience: "Specially designed for students",
//         free: true,
//     },
//     {
//         id: "starting-a-business",
//         title: "Starting & Developing a Business in India",
//         duration: "One-day seminar · 7.5 hours",
//         audience: "Colleges and universities",
//         detail: "With practical exposure",
//         free: false,
//     },
// ];

// /* ------------------------------------------------------------------ */
// /* Inclusions                                                          */
// /* ------------------------------------------------------------------ */

// export const feeInclusions = [
//     "Morning tea with breakfast",
//     "Lunch",
//     "High tea",
//     "Study materials kit",
//     "Post-seminar consultation",
// ];

// export const afterPayment = [
//     "Payment receipt",
//     "Official invitation letter",
//     "Important seminar guidelines",
// ];

// /**
//  * The client document asks for these sections ("Conference details should
//  * contain: Benefits, Who should attend, Terms & conditions, Payment
//  * options") but supplies no content yet. Fill any list below and the matching
//  * section appears on the Training & Workshops page automatically.
//  */
// export const eventBenefits: string[] = [];
// export const whoShouldAttend: string[] = [];
// export const paymentOptions: string[] = [];

// /* ------------------------------------------------------------------ */
// /* Helpers                                                             */
// /* ------------------------------------------------------------------ */

// const MONTHS = [
//     "Jan",
//     "Feb",
//     "Mar",
//     "Apr",
//     "May",
//     "Jun",
//     "Jul",
//     "Aug",
//     "Sep",
//     "Oct",
//     "Nov",
//     "Dec",
// ];

// function parseLocalDate(iso: string): Date {
//     const [y, m, d] = iso.split("-").map(Number);
//     return new Date(y, m - 1, d);
// }

// export interface EventDateParts {
//     /** "29" or "19–20" */
//     day: string;
//     /** "Nov" */
//     month: string;
//     year: string;
//     /** "29 Nov 2026" or "19–20 Dec 2026" */
//     range: string;
// }

// export function getEventDateParts(event: SeminarEvent): EventDateParts {
//     const start = parseLocalDate(event.startDate);
//     const end = parseLocalDate(event.endDate);
//     const month = MONTHS[start.getMonth()];
//     const year = String(start.getFullYear());
//     const day =
//         event.startDate === event.endDate
//             ? String(start.getDate())
//             : `${start.getDate()}–${end.getDate()}`;
//     return { day, month, year, range: `${day} ${month} ${year}` };
// }

// export function formatMoney(currency: Currency, amount: number): string {
//     return currency === "INR"
//         ? `₹${amount.toLocaleString("en-IN")}`
//         : `US$${amount.toLocaleString("en-US")}`;
// }

// /** Events that have not finished yet, soonest first. */
// export function getUpcomingEvents(
//     events: SeminarEvent[],
//     now: Date = new Date(),
// ): SeminarEvent[] {
//     const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
//     return events
//         .filter((e) => parseLocalDate(e.endDate) >= today)
//         .sort(
//             (a, b) =>
//                 parseLocalDate(a.startDate).getTime() -
//                 parseLocalDate(b.startDate).getTime(),
//         );
// }

// /** "India, UAE and Vietnam" style list of distinct countries. */
// export function joinList(items: string[]): string {
//     if (items.length <= 1) return items.join("");
//     return `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`;
// }

// /* ------------------------------------------------------------------ */
// /* Routing & pricing helpers                                           */
// /* ------------------------------------------------------------------ */

// /** Event list page. The detail route is `${EVENTS_LIST_PATH}/:eventId`. */
// export const EVENTS_LIST_PATH = "/training&workshop";
// export const EVENTS_LIST_SEMINARS_PATH = `${EVENTS_LIST_PATH}`;

// /** Shareable URL path for one event, e.g. /training&workshops/dubai-19-dec-2026 */
// export const getEventPath = (eventId: string): string =>
//     `${EVENTS_LIST_PATH}/${eventId}`;

// export const getEventById = (
//     events: SeminarEvent[],
//     eventId?: string,
// ): SeminarEvent | undefined => events.find((e) => e.id === eventId);

// export const isEventPast = (event: SeminarEvent, now: Date = new Date()): boolean => {
//     const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
//     return parseLocalDate(event.endDate) < today;
// };

// /** Per-participant price after applying the group rate. */
// export const getUnitPrice = (event: SeminarEvent, participants: number): number =>
//     participants >= event.groupMinSize ? event.groupPrice : event.price;

// /**
//  * Display-only total. The backend must recalculate this from its own copy of
//  * the prices before creating the Razorpay order; never trust the client amount.
//  */
// export const getTotalAmount = (event: SeminarEvent, participants: number): number =>
//     getUnitPrice(event, participants) * participants;

/**
 * Seminar & workshop types and helpers for NYMPH International.
 * The events themselves now come from the API (see EventsContext.tsx), so
 * add, change or remove events through the backend, not in this file.
 * Past events drop off the site automatically (see getUpcomingEvents).
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
export const whoMayAttendIntro =
    "This strategic leadership conference is a high-level leadership seminar that focuses on " +
    "development of sustainable competitive strategies, motivational strategies, business ethics, " +
    "horizontal and vertical integration strategies, multicultural implications on business growth, " +
    "and development of individual leadership styles based on key leadership theories and practices. " +
    "You may attend this conference if you are:";

export const whoShouldAttend: string[] = [
    "An entrepreneur.",
    "A professional such as an accountant, business manager, engineer, realtor, contractor or consultant.",
    "A government or private-sector employee who wants to improve their performance in the job.",
    "A university or college lecturer or professor.",
    "An individual who seeks knowledge for growth and development.",
];

/** One-line version of the list above, for the seminar cards. */
export const whoMayAttendShort =
    "Entrepreneurs, professionals, employees, academics and anyone seeking growth.";

export const eventBenefits: string[] = [
    "Chance to understand business management disciplines in depth.",
    "Opportunities to learn how to develop your current business globally.",
    "Opportunities to set up your company's branches, new plants and units globally.",
    "Professional and knowledge growth.",
    "Global networking and collaboration.",
    "Spotting new market opportunities.",
    "The power of in-person trust.",
    "Explore different countries and cultures.",
    "Unrivalled real-world education.",
    "Opportunity to understand the pathway of the USA Business Visa, Green Card and Citizenship.",
];

/** How many benefits the seminar card shows before "+ N more". */
export const CARD_BENEFIT_COUNT = 3;

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
export function getUpcomingEvents(
    events: SeminarEvent[],
    now: Date = new Date(),
): SeminarEvent[] {
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    return events
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

export const getEventById = (
    events: SeminarEvent[],
    eventId?: string,
): SeminarEvent | undefined => events.find((e) => e.id === eventId);

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