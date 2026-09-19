import {
    CalendarMonthOutlined,
    CheckCircleOutlined,
    GroupsOutlined,
    LocationOnOutlined,
    PaymentsOutlined,
} from "@mui/icons-material";
import { Box, Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { SECTORS } from "../Data/CompanyData";
import {
    SHOW_SAMPLE_NOTICE,
    beforeYouRegister,
    learningPoints,
    trainingFormats,
    upcomingPrograms,
} from "../Data/TrainingData";

const cardSx = {
    border: "1px solid #F1F1F1",
    transition: "all .3s ease",
    "&:hover": {
        transform: "translateY(-6px)",
        boxShadow: "0 10px 30px var(--primary-light-color)",
    },
};

function TrainingWorkshops() {
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
                        seminars for teams, leaders and campuses, built around real case
                        studies and measurable outcomes.
                    </Typography>
                    <Button
                        component={Link}
                        to="/contact"
                        className="btn-main text-white px-4 py-2 mt-4"
                        data-aos="fade-up"
                    >
                        Request a Program
                    </Button>
                </Grid>
                <Grid
                    size={{ xs: 12, md: 6.5 }}
                    className="d-none d-md-inline-block right-side"
                    data-aos="zoom-in"
                >
                    <Box className="hero-section h-100 w-100" aria-hidden="true"></Box>
                </Grid>
            </Grid>

            {/* 2. THE THREE FORMATS ----------------------------------- */}
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

            {/* 3. LEARNING APPROACH ----------------------------------- */}
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

            {/* 4. SECTORS --------------------------------------------- */}
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

            {/* 5. PROGRAMS (sample data) ------------------------------ */}
            <Box className="mx-2 mx-md-4 mt-5">
                <Typography
                    className="fs-20 text-main fw-medium"
                    data-aos="fade-up"
                    gutterBottom
                >
                    UPCOMING PROGRAMS
                </Typography>
                <Typography
                    component="h2"
                    className="fw-bold c-f fs-32 mb-3"
                    data-aos="fade-up"
                >
                    Find a Program That Fits
                </Typography>

                {SHOW_SAMPLE_NOTICE && upcomingPrograms.length > 0 && (
                    <Box
                        className="p-2 px-3 mb-3 border-10 bg-light-purple fs-14"
                        sx={{ borderLeft: "4px solid var(--primary-color)" }}
                    >
                        Sample programs for design review. Titles, dates, locations and
                        fees will be replaced with real programs.
                    </Box>
                )}

                {upcomingPrograms.length > 0 ? (
                    <Grid container spacing={2}>
                        {upcomingPrograms.map((program) => {
                            const details = [
                                { key: "audience", icon: GroupsOutlined, text: program.audience },
                                { key: "date", icon: CalendarMonthOutlined, text: program.date },
                                { key: "location", icon: LocationOnOutlined, text: program.location },
                                { key: "fee", icon: PaymentsOutlined, text: program.fee },
                            ];
                            return (
                                <Grid
                                    data-aos="fade-up"
                                    key={program.id}
                                    size={{ xs: 12, md: 4 }}
                                >
                                    <Box
                                        className="p-3 bg-white border-10 h-100 d-flex flex-column"
                                        sx={cardSx}
                                    >
                                        <Box
                                            className="px-3 py-1 mb-2 fs-14 bg-light-purple text-main fw-medium"
                                            sx={{ borderRadius: "999px", alignSelf: "flex-start" }}
                                        >
                                            {program.format}
                                        </Box>
                                        <Typography
                                            variant="h5"
                                            component="h3"
                                            className="fw-bold mb-2 c-f"
                                            sx={{ lineHeight: 1.2 }}
                                        >
                                            {program.title}
                                        </Typography>
                                        <Typography variant="body2" className="text-grey mb-3">
                                            {program.description}
                                        </Typography>

                                        <Box className="d-flex flex-column gap-2 mb-3 fs-14">
                                            {details.map((detail) => {
                                                const DetailIcon = detail.icon;
                                                return (
                                                    <Box
                                                        key={detail.key}
                                                        className="d-flex align-items-start gap-2"
                                                    >
                                                        <DetailIcon
                                                            className="text-main"
                                                            fontSize="small"
                                                        />
                                                        <span>{detail.text}</span>
                                                    </Box>
                                                );
                                            })}
                                        </Box>

                                        <Box className="mt-auto">
                                            <Button
                                                component={Link}
                                                to="/contact"
                                                className="btn-main text-white px-4 py-2"
                                            >
                                                Enquire
                                            </Button>
                                        </Box>
                                    </Box>
                                </Grid>
                            );
                        })}
                    </Grid>
                ) : (
                    <Box className="p-4 border-10 bg-grey text-center" data-aos="fade-up">
                        <Typography className="fw-medium c-f" gutterBottom>
                            Upcoming programs will be announced soon.
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

            {/* 6. BEFORE YOU REGISTER (from the client's terms) ------- */}
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
        </Box>
    );
}

export default TrainingWorkshops;