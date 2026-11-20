// Single source of truth for the inclusions and terms shown in the registration dialog.
// Bump TERMS_VERSION whenever the wording changes: it is stored with every registration
// so you can prove which terms a registrant accepted.
export const TERMS_VERSION = "2026-11-17";

export const SEMINAR_INCLUSIONS: string[] = [
    "Morning tea with breakfast",
    "Lunch",
    "High tea",
    "Study materials kit",
    "Post-consultation",
];

export const SEMINAR_TERMS: string[] = [
    "All seminar fees are non-refundable once registration is submitted and payment is made.",
    "The registration fee includes only the items listed under \"What's included\". Travel and accommodation are not included.",
    "Your seat is confirmed only after our team has contacted you and payment has been received.",
    "The organisers may update the schedule, venue or speakers where necessary and will inform registered participants.",
];
