// // Single source of truth for facts shown on more than one page.
// // Change a number here and it updates everywhere.
 
// // Riddhi Management Consultancy (the parent group), Ahmedabad, Gujarat, India.
// export const FOUNDED_YEAR = 2012;
 
// // Computed, so it never goes stale ("15+" would be wrong for a 2012 start).
// export const YEARS_OF_EXPERIENCE = new Date().getFullYear() - FOUNDED_YEAR;
 
// // Home page -> "Global Reach" section.
// // NOTE: if these are group-level (Riddhi + NYMPH) figures, keep them as they
// // are; if they are NYMPH-only, confirm the numbers before publishing.
// export const REACH_STATS = [
//     { key: "businesses", end: 500, suffix: "+", label: "Businesses Empowered" },
//     { key: "countries", end: 25, suffix: "+", label: "Countries Served" },
//     { key: "experience", end: YEARS_OF_EXPERIENCE, suffix: "+", label: "Years of Experience" },
//     { key: "satisfaction", end: 98, suffix: "%", label: "Client Satisfaction" },
// ];
 
// // About page -> "Our Journey" tiles. Deliberately different from the Home
// // stats so the two pages don't repeat each other.
// export const ABOUT_FACTS = [
//     { key: "founded", value: String(FOUNDED_YEAR), label: "Established in Ahmedabad" },
//     { key: "experts", value: "300+", label: "Experts and professionals" },
//     { key: "industries", value: "20+", label: "Industries covered" },
// ];
 
// Single source of truth for facts shown on more than one page.
// Everything here comes from the client's "Website Content" document.

// Riddhi Management Consultancy (parent group), Ahmedabad, Gujarat, India.
export const FOUNDED_YEAR = 2012;

// Computed so it never goes stale.
export const YEARS_OF_EXPERIENCE = new Date().getFullYear() - FOUNDED_YEAR;

export const REGISTRATION_TEXT =
    "Registered with the Ministry of Corporate Affairs (MCA), Government of India";

// Markets named in the client's Global Expansion copy.
export const MARKETS = [
    "USA",
    "Canada",
    "Europe",
    "United Kingdom",
    "Gulf Region",
    "Australia",
    "New Zealand",
];

export const SECTORS = [
    "Information Technology",
    "Healthcare & Biotech",
    "Hospitality Management",
    "Energy & Utilities",
    "Industrial & Heavy Machinery",
    "Logistics & Supply Chain",
    "Real Estate & Infrastructure",
];

export const CONTACT = {
    email: "info@nymphinternational.com",
    // TODO: confirm the country code with the client. The document gives
    // "+1-9574-544-288" but quotes Indian Standard Time hours, and a 10-digit
    // number starting with 9 looks like an Indian mobile (+91).
    phone: "+1-9574-544-288",
    phoneHref: "+19574544288",
    hours: "Monday to Friday, 10:30 AM to 5:30 PM IST",
};

// REMOVED on purpose: the old placeholder stats (500+ businesses, 25+ countries,
// 98% satisfaction, 300+ experts, 20+ industries). None of them appear in the
// client's document, which lists 7 sectors and "over a decade" of experience.
// Only restore them if the client confirms the numbers in writing.s
