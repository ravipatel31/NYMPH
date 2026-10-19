// import {
//     CalendarMonthOutlined,
//     CheckCircleOutlined,
//     GroupsOutlined,
//     LocationOnOutlined,
//     PaymentsOutlined,
// } from "@mui/icons-material";
// import { Box, Button, Grid, Typography } from "@mui/material";
// import { Link } from "react-router-dom";
// import { SECTORS } from "../Data/CompanyData";
// import {
//     SHOW_SAMPLE_NOTICE,
//     beforeYouRegister,
//     learningPoints,
//     trainingFormats,
//     upcomingPrograms,
// } from "../Data/TrainingData";

// const cardSx = {
//     border: "1px solid #F1F1F1",
//     transition: "all .3s ease",
//     "&:hover": {
//         transform: "translateY(-6px)",
//         boxShadow: "0 10px 30px var(--primary-light-color)",
//     },
// };

// function TrainingWorkshops() {
//     return (
//         <Box>
//             {/* 1. HERO ------------------------------------------------ */}
//             <Grid
//                 container
//                 sx={{ height: { xs: "fit-content", md: "calc(100vh - 80px)" } }}
//                 className="position-relative g-bg pb-3 pb-md-0"
//             >
//                 <Grid
//                     size={{ xs: 12, md: 5.5 }}
//                     className="my-0 my-md-auto"
//                     sx={{ px: { xs: 2, md: 3 }, pt: 5, zIndex: 2 }}
//                 >
//                     <Typography
//                         className="text-second fw-medium fs-20"
//                         data-aos="fade-up"
//                         gutterBottom
//                         sx={{ letterSpacing: "2px" }}
//                     >
//                         TRAINING & WORKSHOPS
//                     </Typography>
//                     <Typography
//                         component="h1"
//                         className="fw-medium fs-58 c-f mt-2 mb-3"
//                         data-aos="fade-up"
//                         sx={{ whiteSpace: { xs: "normal", md: "nowrap" } }}
//                     >
//                         Practical Learning
//                         <br />
//                         for Real-World{" "}
//                         <span className="text-main" style={{ fontStyle: "italic" }}>
//                             Results
//                         </span>
//                     </Typography>
//                     <Typography data-aos="fade-up">
//                         Tailored corporate training, hands-on masterclasses and immersive
//                         seminars for teams, leaders and campuses, built around real case
//                         studies and measurable outcomes.
//                     </Typography>
//                     <Button
//                         component={Link}
//                         to="/contact"
//                         className="btn-main text-white px-4 py-2 mt-4"
//                         data-aos="fade-up"
//                     >
//                         Request a Program
//                     </Button>
//                 </Grid>
//                 <Grid
//                     size={{ xs: 12, md: 6.5 }}
//                     className="d-none d-md-inline-block right-side"
//                     data-aos="zoom-in"
//                 >
//                     <Box className="hero-section h-100 w-100" aria-hidden="true"></Box>
//                 </Grid>
//             </Grid>

//             {/* 2. THE THREE FORMATS ----------------------------------- */}
//             <Box className="mx-2 mx-md-4 mt-5">
//                 <Typography
//                     className="fs-20 text-main fw-medium"
//                     data-aos="fade-up"
//                     gutterBottom
//                 >
//                     HOW WE TEACH
//                 </Typography>
//                 <Typography
//                     component="h2"
//                     className="fw-bold c-f fs-32 mb-4"
//                     data-aos="fade-up"
//                 >
//                     Three Formats, One Practical Approach
//                 </Typography>

//                 <Grid container spacing={2}>
//                     {trainingFormats.map((format) => {
//                         const Icon = format.icon;
//                         return (
//                             <Grid
//                                 data-aos="fade-up"
//                                 key={format.id}
//                                 size={{ xs: 12, md: 4 }}
//                             >
//                                 <Box className="p-4 bg-white border-10 h-100" sx={cardSx}>
//                                     <Box className="p-2 border-50 bg-purple d-inline-flex">
//                                         <Icon className="text-white fs-32" />
//                                     </Box>
//                                     <Typography
//                                         variant="h5"
//                                         component="h3"
//                                         className="fw-bold my-3 mb-1 c-f"
//                                         sx={{ lineHeight: 1.2 }}
//                                     >
//                                         {format.title}
//                                     </Typography>
//                                     <Typography className="fs-14 text-main fw-medium mb-2">
//                                         For {format.audience.toLowerCase()}
//                                     </Typography>
//                                     <Typography variant="body2" className="text-grey">
//                                         {format.description}
//                                     </Typography>
//                                 </Box>
//                             </Grid>
//                         );
//                     })}
//                 </Grid>
//             </Box>

//             {/* 3. LEARNING APPROACH ----------------------------------- */}
//             <Grid container spacing={2} className="p-4 py-5 my-5 bg-grey">
//                 {learningPoints.map((point) => {
//                     const Icon = point.icon;
//                     return (
//                         <Grid
//                             data-aos="fade-up"
//                             key={point.id}
//                             size={{ xs: 12, md: 4 }}
//                             className="d-flex align-items-start gap-3"
//                         >
//                             <Box className="bg-light-purple p-2 border-50 d-inline-flex">
//                                 <Icon className="text-main" />
//                             </Box>
//                             <Box>
//                                 <Typography
//                                     variant="h6"
//                                     component="h3"
//                                     className="fw-bold c-f"
//                                 >
//                                     {point.title}
//                                 </Typography>
//                                 <Typography variant="body2" className="text-grey">
//                                     {point.description}
//                                 </Typography>
//                             </Box>
//                         </Grid>
//                     );
//                 })}
//             </Grid>

//             {/* 4. SECTORS --------------------------------------------- */}
//             <Box className="mx-2 mx-md-4">
//                 <Typography
//                     className="fs-20 text-main fw-medium"
//                     data-aos="fade-up"
//                     gutterBottom
//                 >
//                     SECTORS
//                 </Typography>
//                 <Typography
//                     component="h2"
//                     className="fw-bold c-f fs-32 mb-3"
//                     data-aos="fade-up"
//                 >
//                     Programs Across Diverse Industries
//                 </Typography>
//                 <Box className="d-flex flex-wrap gap-2" data-aos="fade-up">
//                     {SECTORS.map((sector) => (
//                         <Box
//                             key={sector}
//                             className="bg-light-purple px-3 py-1 fs-14"
//                             sx={{ borderRadius: "999px" }}
//                         >
//                             {sector}
//                         </Box>
//                     ))}
//                 </Box>
//             </Box>

//             {/* 5. PROGRAMS (sample data) ------------------------------ */}
//             <Box className="mx-2 mx-md-4 mt-5">
//                 <Typography
//                     className="fs-20 text-main fw-medium"
//                     data-aos="fade-up"
//                     gutterBottom
//                 >
//                     UPCOMING PROGRAMS
//                 </Typography>
//                 <Typography
//                     component="h2"
//                     className="fw-bold c-f fs-32 mb-3"
//                     data-aos="fade-up"
//                 >
//                     Find a Program That Fits
//                 </Typography>

//                 {SHOW_SAMPLE_NOTICE && upcomingPrograms.length > 0 && (
//                     <Box
//                         className="p-2 px-3 mb-3 border-10 bg-light-purple fs-14"
//                         sx={{ borderLeft: "4px solid var(--primary-color)" }}
//                     >
//                         Sample programs for design review. Titles, dates, locations and
//                         fees will be replaced with real programs.
//                     </Box>
//                 )}

//                 {upcomingPrograms.length > 0 ? (
//                     <Grid container spacing={2}>
//                         {upcomingPrograms.map((program) => {
//                             const details = [
//                                 { key: "audience", icon: GroupsOutlined, text: program.audience },
//                                 { key: "date", icon: CalendarMonthOutlined, text: program.date },
//                                 { key: "location", icon: LocationOnOutlined, text: program.location },
//                                 { key: "fee", icon: PaymentsOutlined, text: program.fee },
//                             ];
//                             return (
//                                 <Grid
//                                     data-aos="fade-up"
//                                     key={program.id}
//                                     size={{ xs: 12, md: 4 }}
//                                 >
//                                     <Box
//                                         className="p-3 bg-white border-10 h-100 d-flex flex-column"
//                                         sx={cardSx}
//                                     >
//                                         <Box
//                                             className="px-3 py-1 mb-2 fs-14 bg-light-purple text-main fw-medium"
//                                             sx={{ borderRadius: "999px", alignSelf: "flex-start" }}
//                                         >
//                                             {program.format}
//                                         </Box>
//                                         <Typography
//                                             variant="h5"
//                                             component="h3"
//                                             className="fw-bold mb-2 c-f"
//                                             sx={{ lineHeight: 1.2 }}
//                                         >
//                                             {program.title}
//                                         </Typography>
//                                         <Typography variant="body2" className="text-grey mb-3">
//                                             {program.description}
//                                         </Typography>

//                                         <Box className="d-flex flex-column gap-2 mb-3 fs-14">
//                                             {details.map((detail) => {
//                                                 const DetailIcon = detail.icon;
//                                                 return (
//                                                     <Box
//                                                         key={detail.key}
//                                                         className="d-flex align-items-start gap-2"
//                                                     >
//                                                         <DetailIcon
//                                                             className="text-main"
//                                                             fontSize="small"
//                                                         />
//                                                         <span>{detail.text}</span>
//                                                     </Box>
//                                                 );
//                                             })}
//                                         </Box>

//                                         <Box className="mt-auto">
//                                             <Button
//                                                 component={Link}
//                                                 to="/contact"
//                                                 className="btn-main text-white px-4 py-2"
//                                             >
//                                                 Enquire
//                                             </Button>
//                                         </Box>
//                                     </Box>
//                                 </Grid>
//                             );
//                         })}
//                     </Grid>
//                 ) : (
//                     <Box className="p-4 border-10 bg-grey text-center" data-aos="fade-up">
//                         <Typography className="fw-medium c-f" gutterBottom>
//                             Upcoming programs will be announced soon.
//                         </Typography>
//                         <Typography variant="body2" className="text-grey mb-3">
//                             Need training for your team or campus now? Tell us your goals and
//                             we'll shape a program around them.
//                         </Typography>
//                         <Button
//                             component={Link}
//                             to="/contact"
//                             className="btn-main text-white px-4 py-2"
//                         >
//                             Request a Program
//                         </Button>
//                     </Box>
//                 )}
//             </Box>

//             {/* 6. BEFORE YOU REGISTER (from the client's terms) ------- */}
//             <Box className="mx-2 mx-md-4 my-5 p-4 border-10 bg-grey">
//                 <Typography
//                     component="h2"
//                     className="fw-bold c-f fs-24 mb-3"
//                     data-aos="fade-up"
//                 >
//                     Before You Register
//                 </Typography>
//                 <Grid container spacing={2}>
//                     {beforeYouRegister.map((item) => (
//                         <Grid
//                             data-aos="fade-up"
//                             key={item}
//                             size={{ xs: 12, md: 6 }}
//                             className="d-flex align-items-start gap-2"
//                         >
//                             <CheckCircleOutlined className="text-main" />
//                             <Typography className="fs-16">{item}</Typography>
//                         </Grid>
//                     ))}
//                 </Grid>
//                 <Typography className="fs-14 text-grey mt-3">
//                     Full Terms & Conditions apply.
//                 </Typography>
//             </Box>
//         </Box>
//     );
// }

// export default TrainingWorkshops;


import {
    CheckCircleOutlined,
    PhoneInTalk,
    SchoolOutlined,
    ScheduleOutlined,
} from "@mui/icons-material";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import EventCard from "../Component/EventCard";
import RegistrationDialog from "../Component/RegistrationDialog";
import { SECTORS } from "../Data/CompanyData";
import {
    CONTACT_PHONE,
    CONTACT_PHONE_HREF,
    afterPayment,
    campusPrograms,
    eventBenefits,
    feeInclusions,
    getUpcomingEvents,
    joinList,
    paymentOptions,
    whoShouldAttend,
    type SeminarEvent,
} from "../Data/EventData";
import {
    beforeYouRegister,
    learningPoints,
    trainingFormats,
} from "../Data/TrainingData";

const cardSx = {
    border: "1px solid #F1F1F1",
    transition: "all .3s ease",
    "&:hover": {
        transform: "translateY(-6px)",
        boxShadow: "0 10px 30px var(--primary-light-color)",
    },
};

type RegionFilter = "All" | "India" | "International";

/** A heading + checklist block that only renders once the client supplies content. */
function ChecklistSection({ title, items }: { title: string; items: string[] }) {
    if (items.length === 0) return null;
    return (
        <Grid size={{ xs: 12, md: 6 }} data-aos="fade-up">
            <Typography component="h3" className="fw-bold c-f fs-20 mb-2">
                {title}
            </Typography>
            <Box className="d-flex flex-column gap-2">
                {items.map((item) => (
                    <Box key={item} className="d-flex align-items-start gap-2">
                        <CheckCircleOutlined className="text-main" />
                        <Typography className="fs-16">{item}</Typography>
                    </Box>
                ))}
            </Box>
        </Grid>
    );
}

function TrainingWorkshops() {
    const [region, setRegion] = useState<RegionFilter>("All");
    const [registerEvent, setRegisterEvent] = useState<SeminarEvent | null>(null);
    const { hash } = useLocation();

    // Support deep links such as /training&workshops#seminars (used on the home page).
    useEffect(() => {
        if (!hash) return;
        const id = hash.replace("#", "");
        const timer = window.setTimeout(() => {
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }, 100);
        return () => window.clearTimeout(timer);
    }, [hash]);

    const upcoming = useMemo(() => getUpcomingEvents(), []);
    const countries = useMemo(
        () => Array.from(new Set(upcoming.map((e) => e.country))),
        [upcoming],
    );
    const nextId = upcoming[0]?.id;

    const visible = upcoming.filter((e) => region === "All" || e.region === region);
    const filters: { key: RegionFilter; count: number }[] = [
        { key: "All", count: upcoming.length },
        { key: "India", count: upcoming.filter((e) => e.region === "India").length },
        {
            key: "International",
            count: upcoming.filter((e) => e.region === "International").length,
        },
    ];

    const showExtraDetails =
        eventBenefits.length > 0 || whoShouldAttend.length > 0 || paymentOptions.length > 0;

    return (
        <Box>
            {/* 1. HERO ------------------------------------------------ */}
            <Grid
                container
                sx={{ height: { xs: "fit-content", md: "calc(100vh - 80px)" } }}
                className="position-relative g-bg pb-3 pb-md-0"
            >
                <Grid
                    size={{ xs: 12, md: 5.5 }}
                    className="my-0 my-md-auto"
                    sx={{ px: { xs: 2, md: 3 }, pt: 5, zIndex: 2 }}
                >
                    <Typography
                        className="text-second fw-medium fs-20"
                        data-aos="fade-up"
                        gutterBottom
                        sx={{ letterSpacing: "2px" }}
                    >
                        TRAINING & WORKSHOPS
                    </Typography>
                    <Typography
                        component="h1"
                        className="fw-medium fs-58 c-f mt-2 mb-3"
                        data-aos="fade-up"
                        sx={{ whiteSpace: { xs: "normal", md: "nowrap" } }}
                    >
                        Practical Learning
                        <br />
                        for Real-World{" "}
                        <span className="text-main" style={{ fontStyle: "italic" }}>
                            Results
                        </span>
                    </Typography>
                    <Typography data-aos="fade-up">
                        Tailored corporate training, hands-on masterclasses and immersive
                        seminars, workshops for teams, leaders and campuses.
                    </Typography>

                    {upcoming.length > 0 && (
                        <Box
                            className="d-flex align-items-center gap-4 mt-4"
                            data-aos="fade-up"
                        >
                            <Box>
                                <Typography className="fw-bold text-main" sx={{ fontSize: 32, lineHeight: 1 }}>
                                    {upcoming.length}
                                </Typography>
                                <Typography variant="body2">Upcoming seminars</Typography>
                            </Box>
                            <Box
                                aria-hidden="true"
                                sx={{ width: "1px", height: 44, bgcolor: "var(--primary-light-color)" }}
                            />
                            <Box>
                                <Typography className="fw-bold text-main" sx={{ fontSize: 32, lineHeight: 1 }}>
                                    {countries.length}
                                </Typography>
                                <Typography variant="body2">Countries</Typography>
                            </Box>
                        </Box>
                    )}

                    <Box className="d-flex flex-column flex-md-row gap-1 gap-md-3">
                        <Button
                            component="a"
                            href="#seminars"
                            className="btn-main text-white px-4 py-2 mt-4"
                            data-aos="fade-up"
                        >
                            View Upcoming Seminars
                        </Button>
                        <Button
                            component={Link}
                            to="/contact"
                            variant="outlined"
                            className="btn-outlined-main text-main px-4 py-2 mt-4"
                            data-aos="fade-up"
                        >
                            Request a Program
                        </Button>
                    </Box>
                </Grid>
                <Grid
                    size={{ xs: 12, md: 6.5 }}
                    className="d-none d-md-inline-block right-side"
                    data-aos="zoom-in"
                >
                    <Box className="hero-section h-100 w-100" aria-hidden="true"></Box>
                </Grid>
            </Grid>

            {/* 2. UPCOMING SEMINARS (main feature) -------------------- */}
            <Box id="seminars" className="mx-2 mx-md-4 mt-5" sx={{ scrollMarginTop: "90px" }}>
                <Typography
                    className="fs-20 text-main fw-medium"
                    data-aos="fade-up"
                    gutterBottom
                >
                    UPCOMING SEMINARS
                </Typography>
                <Typography
                    component="h2"
                    className="fw-bold c-f fs-32 mb-2"
                    data-aos="fade-up"
                >
                    Business Seminars Built on Real Case Studies
                </Typography>
                {upcoming.length > 0 && (
                    <Typography className="text-grey mb-3" data-aos="fade-up">
                        One and two-day seminars across {joinList(countries)}. Book as a group
                        of 3 or more and every participant gets the group rate.
                    </Typography>
                )}

                {upcoming.length > 0 ? (
                    <>
                        <Box
                            className="d-flex flex-wrap gap-2 mb-4"
                            role="group"
                            aria-label="Filter seminars by region"
                            data-aos="fade-up"
                        >
                            {filters.map((f) => {
                                const active = region === f.key;
                                return (
                                    <Button
                                        key={f.key}
                                        onClick={() => setRegion(f.key)}
                                        aria-pressed={active}
                                        disabled={f.key !== "All" && f.count === 0}
                                        variant={active ? "contained" : "outlined"}
                                        className={
                                            active
                                                ? "btn-main text-white px-3 py-1"
                                                : "btn-outlined-main text-main px-3 py-1"
                                        }
                                        sx={{ borderRadius: "999px", textTransform: "none" }}
                                    >
                                        {f.key} ({f.count})
                                    </Button>
                                );
                            })}
                        </Box>

                        <Grid container spacing={2}>
                            {visible.map((event) => (
                                <Grid key={event.id} size={{ xs: 12, md: 6, lg: 4 }}>
                                    <EventCard
                                        event={event}
                                        isNext={event.id === nextId}
                                        onRegister={setRegisterEvent}
                                    />
                                </Grid>
                            ))}
                        </Grid>

                        <Box
                            className="mt-4 p-3 border-10 bg-light-purple fs-14"
                            sx={{ borderLeft: "4px solid var(--primary-color)" }}
                        >
                            Prices are per participant. Group rates apply to bookings of 3 or
                            more. Seminar venues marked "to be announced" will be confirmed to
                            registered participants.
                        </Box>
                    </>
                ) : (
                    <Box className="p-4 border-10 bg-grey text-center" data-aos="fade-up">
                        <Typography className="fw-medium c-f" gutterBottom>
                            New seminar dates will be announced soon.
                        </Typography>
                        <Typography variant="body2" className="text-grey mb-3">
                            Need training for your team or campus now? Tell us your goals and
                            we'll shape a program around them.
                        </Typography>
                        <Button
                            component={Link}
                            to="/contact"
                            className="btn-main text-white px-4 py-2"
                        >
                            Request a Program
                        </Button>
                    </Box>
                )}
            </Box>

            {/* 3. WHAT'S INCLUDED ------------------------------------- */}
            <Grid container spacing={3} className="p-4 py-5 my-5 bg-grey">
                <Grid size={{ xs: 12, md: 6 }} data-aos="fade-up">
                    <Typography component="h2" className="fw-bold c-f fs-24 mb-2">
                        Seminar Fees Include
                    </Typography>
                    <Box className="d-flex flex-column gap-2 mt-3">
                        {feeInclusions.map((item) => (
                            <Box key={item} className="d-flex align-items-start gap-2">
                                <CheckCircleOutlined className="text-main" />
                                <Typography className="fs-16">{item}</Typography>
                            </Box>
                        ))}
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }} data-aos="fade-up">
                    <Typography component="h2" className="fw-bold c-f fs-24 mb-2">
                        After Payment You Receive
                    </Typography>
                    <Box className="d-flex flex-column gap-2 mt-3">
                        {afterPayment.map((item) => (
                            <Box key={item} className="d-flex align-items-start gap-2">
                                <ScheduleOutlined className="text-main" />
                                <Typography className="fs-16">{item}</Typography>
                            </Box>
                        ))}
                    </Box>
                </Grid>
            </Grid>

            {/* 4. BENEFITS / WHO SHOULD ATTEND / PAYMENT (shown once content exists) */}
            {showExtraDetails && (
                <Grid container spacing={3} className="mx-0 mx-md-3 mb-5 px-2 px-md-0">
                    <ChecklistSection title="Benefits" items={eventBenefits} />
                    <ChecklistSection title="Who Should Attend" items={whoShouldAttend} />
                    <ChecklistSection title="Payment Options" items={paymentOptions} />
                </Grid>
            )}

            {/* 5. FOR GIDCs, COLLEGES & UNIVERSITIES ------------------ */}
            <Box className="mx-2 mx-md-4 mb-5">
                <Typography
                    className="fs-20 text-main fw-medium"
                    data-aos="fade-up"
                    gutterBottom
                >
                    FOR GIDCs, COLLEGES & UNIVERSITIES
                </Typography>
                <Typography
                    component="h2"
                    className="fw-bold c-f fs-32 mb-3"
                    data-aos="fade-up"
                >
                    Campus and Industry-Association Seminars
                </Typography>

                <Grid container spacing={2}>
                    {campusPrograms.map((program) => (
                        <Grid key={program.id} size={{ xs: 12, md: 4 }} data-aos="fade-up">
                            <Box className="p-4 bg-white border-10 h-100 d-flex flex-column" sx={cardSx}>
                                <Box className="d-flex align-items-center justify-content-between mb-3">
                                    <Box className="p-2 border-50 bg-purple d-inline-flex">
                                        <SchoolOutlined className="text-white fs-32" />
                                    </Box>
                                    {program.free && (
                                        <Box
                                            className="bg-light-purple text-main fw-medium fs-14 px-3 py-1"
                                            sx={{ borderRadius: "999px" }}
                                        >
                                            Free
                                        </Box>
                                    )}
                                </Box>
                                <Typography
                                    variant="h6"
                                    component="h3"
                                    className="fw-bold c-f mb-1"
                                    sx={{ lineHeight: 1.25 }}
                                >
                                    {program.title}
                                </Typography>
                                <Typography className="fs-14 text-main fw-medium mb-2">
                                    {program.duration}
                                </Typography>
                                <Typography variant="body2" className="text-grey">
                                    {program.audience}
                                    {program.detail ? ` · ${program.detail}` : ""}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>

                <Box
                    className="d-flex flex-column flex-md-row align-items-md-center gap-2 gap-md-4 mt-3 p-3 border-10 bg-light-purple"
                    data-aos="fade-up"
                >
                    <Typography className="fw-medium c-f">
                        Interested in bringing a seminar to your campus or industrial estate?
                        We reply within one business day.
                    </Typography>
                    <Box className="d-flex flex-wrap gap-2 ms-md-auto">
                        <Button
                            component="a"
                            href={CONTACT_PHONE_HREF}
                            variant="outlined"
                            className="btn-outlined-main text-main px-3 py-1"
                        >
                            <PhoneInTalk fontSize="small" />
                            &nbsp; {CONTACT_PHONE}
                        </Button>
                        <Button
                            component={Link}
                            to="/contact"
                            className="btn-main text-white px-3 py-1"
                        >
                            Send an Enquiry
                        </Button>
                    </Box>
                </Box>
            </Box>

            {/* 6. THE THREE FORMATS ----------------------------------- */}
            <Box className="mx-2 mx-md-4 mt-5">
                <Typography
                    className="fs-20 text-main fw-medium"
                    data-aos="fade-up"
                    gutterBottom
                >
                    HOW WE TEACH
                </Typography>
                <Typography
                    component="h2"
                    className="fw-bold c-f fs-32 mb-4"
                    data-aos="fade-up"
                >
                    Three Formats, One Practical Approach
                </Typography>

                <Grid container spacing={2}>
                    {trainingFormats.map((format) => {
                        const Icon = format.icon;
                        return (
                            <Grid
                                data-aos="fade-up"
                                key={format.id}
                                size={{ xs: 12, md: 4 }}
                            >
                                <Box className="p-4 bg-white border-10 h-100" sx={cardSx}>
                                    <Box className="p-2 border-50 bg-purple d-inline-flex">
                                        <Icon className="text-white fs-32" />
                                    </Box>
                                    <Typography
                                        variant="h5"
                                        component="h3"
                                        className="fw-bold my-3 mb-1 c-f"
                                        sx={{ lineHeight: 1.2 }}
                                    >
                                        {format.title}
                                    </Typography>
                                    <Typography className="fs-14 text-main fw-medium mb-2">
                                        For {format.audience.toLowerCase()}
                                    </Typography>
                                    <Typography variant="body2" className="text-grey">
                                        {format.description}
                                    </Typography>
                                </Box>
                            </Grid>
                        );
                    })}
                </Grid>
            </Box>

            {/* 7. LEARNING APPROACH ----------------------------------- */}
            <Grid container spacing={2} className="p-4 py-5 my-5 bg-grey">
                {learningPoints.map((point) => {
                    const Icon = point.icon;
                    return (
                        <Grid
                            data-aos="fade-up"
                            key={point.id}
                            size={{ xs: 12, md: 4 }}
                            className="d-flex align-items-start gap-3"
                        >
                            <Box className="bg-light-purple p-2 border-50 d-inline-flex">
                                <Icon className="text-main" />
                            </Box>
                            <Box>
                                <Typography
                                    variant="h6"
                                    component="h3"
                                    className="fw-bold c-f"
                                >
                                    {point.title}
                                </Typography>
                                <Typography variant="body2" className="text-grey">
                                    {point.description}
                                </Typography>
                            </Box>
                        </Grid>
                    );
                })}
            </Grid>

            {/* 8. SECTORS --------------------------------------------- */}
            <Box className="mx-2 mx-md-4">
                <Typography
                    className="fs-20 text-main fw-medium"
                    data-aos="fade-up"
                    gutterBottom
                >
                    SECTORS
                </Typography>
                <Typography
                    component="h2"
                    className="fw-bold c-f fs-32 mb-3"
                    data-aos="fade-up"
                >
                    Programs Across Diverse Industries
                </Typography>
                <Box className="d-flex flex-wrap gap-2" data-aos="fade-up">
                    {SECTORS.map((sector) => (
                        <Box
                            key={sector}
                            className="bg-light-purple px-3 py-1 fs-14"
                            sx={{ borderRadius: "999px" }}
                        >
                            {sector}
                        </Box>
                    ))}
                </Box>
            </Box>

            {/* 9. BEFORE YOU REGISTER (from the client's terms) ------- */}
            <Box className="mx-2 mx-md-4 my-5 p-4 border-10 bg-grey">
                <Typography
                    component="h2"
                    className="fw-bold c-f fs-24 mb-3"
                    data-aos="fade-up"
                >
                    Before You Register
                </Typography>
                <Grid container spacing={2}>
                    {beforeYouRegister.map((item) => (
                        <Grid
                            data-aos="fade-up"
                            key={item}
                            size={{ xs: 12, md: 6 }}
                            className="d-flex align-items-start gap-2"
                        >
                            <CheckCircleOutlined className="text-main" />
                            <Typography className="fs-16">{item}</Typography>
                        </Grid>
                    ))}
                </Grid>
                <Typography className="fs-14 text-grey mt-3">
                    Full Terms & Conditions apply.
                </Typography>
            </Box>

            <RegistrationDialog
                event={registerEvent}
                open={registerEvent !== null}
                onClose={() => setRegisterEvent(null)}
            />
        </Box>
    );
}

export default TrainingWorkshops;