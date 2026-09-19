import {
    BuildOutlined,
    MenuBookOutlined,
    PeopleAltOutlined,
    School,
    TrendingUpOutlined,
} from "@mui/icons-material";

// Static content for the Training & Workshops page and the Home overview.
// Wording comes from the client's content document unless marked SAMPLE.

// Shows a "sample content" notice above the programs list. Set to false
// once real programs are added.
export const SHOW_SAMPLE_NOTICE = true;

// The three delivery formats named in the client document.
export const trainingFormats = [
    {
        id: 1,
        title: "Corporate Training",
        audience: "Companies and workforce teams",
        description:
            "Tailored programs designed to upskill workforce teams across diverse industry sectors.",
        icon: PeopleAltOutlined,
    },
    {
        id: 2,
        title: "Masterclasses",
        audience: "Individuals, entrepreneurs and business leaders",
        description:
            "Practical, hands-on masterclasses that drive measurable real-world success.",
        icon: TrendingUpOutlined,
    },
    {
        id: 3,
        title: "Seminars & Workshops",
        audience: "Colleges and universities",
        description:
            "Immersive seminars and workshops that bridge the gap between academic learning and real-world application.",
        icon: School,
    },
];

export const learningPoints = [
    {
        id: 1,
        title: "Case-study driven",
        description: "Immersive programs built around real business cases.",
        icon: MenuBookOutlined,
    },
    {
        id: 2,
        title: "Hands-on",
        description:
            "Practical sessions where participants apply what they learn.",
        icon: BuildOutlined,
    },
    {
        id: 3,
        title: "Real-world results",
        description:
            "Learning designed to drive measurable success, not just theory.",
        icon: TrendingUpOutlined,
    },
];

/**
 * @typedef {Object} Program
 * @property {number} id
 * @property {string} title
 * @property {string} format
 * @property {string} audience
 * @property {string} description
 * @property {string} date
 * @property {string} location
 * @property {string} fee
 */

// SAMPLE programs for design review. Titles and descriptions are placeholders
// based on the client's themes. Dates, locations and fees are deliberately
// "to be announced" so nothing false can be published.
// Set this to [] to see the empty state.
/** @type {Program[]} */
export const upcomingPrograms = [
    {
        id: 1,
        title: "Global Business Expansion Masterclass",
        format: "Masterclass",
        audience: "Entrepreneurs, investors and business leaders",
        description:
            "A practical session on taking a business into international markets, from choosing a market to the first steps of entry.",
        date: "Date to be announced",
        location: "Location to be announced",
        fee: "Fee to be announced",
    },
    {
        id: 2,
        title: "Corporate Leadership Workshop",
        format: "Corporate Training",
        audience: "Managers and leadership teams",
        description:
            "A case-study-driven program that builds leadership and decision-making skills for teams across industry sectors.",
        date: "Date to be announced",
        location: "Location to be announced",
        fee: "Fee to be announced",
    },
    {
        id: 3,
        title: "From Classroom to Boardroom",
        format: "Seminar",
        audience: "University students and faculty",
        description:
            "A seminar that connects academic learning to real-world business practice.",
        date: "Date to be announced",
        location: "Location to be announced",
        fee: "Fee to be announced",
    },
];

// From the client's Participant Acknowledgment. Confirm final wording with the
// client and link the full Terms & Conditions page once it exists.
export const beforeYouRegister = [
    "Registration fees are non-refundable and non-transferable.",
    "Provide accurate details about your education, current position, work experience and business background.",
    "Dates, venues, speakers and agendas may change. Rely only on official notices from NYMPH International LLP.",
    "You are responsible for booking and funding your own travel and accommodation.",
    "Sessions may be photographed or recorded for promotional and educational purposes.",
];