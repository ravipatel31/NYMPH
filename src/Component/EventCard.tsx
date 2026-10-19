import {
    AccessTimeOutlined,
    ApartmentOutlined,
    ArrowForward,
    GroupsOutlined,
    LocationOnOutlined,
} from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import {
    EVENTS_LIST_SEMINARS_PATH,
    SeminarEvent,
    formatMoney,
    getEventDateParts,
    getEventPath,
} from "../Data/EventData";

// MUI Typography can override inherited colour, so force white on purple.
const whiteSx = { color: "#fff !important" };

const cardSx = {
    border: "1px solid #F1F1F1",
    transition: "all .3s ease",
    "&:hover": {
        transform: "translateY(-6px)",
        boxShadow: "0 10px 30px var(--primary-light-color)",
    },
};

interface EventCardProps {
    event: SeminarEvent;
    /** "full" for the Training page, "compact" for the home page list. */
    variant?: "full" | "compact";
    /** Adds a "Next seminar" badge. */
    isNext?: boolean;
    /** Opens the registration form (full variant). */
    onRegister?: (event: SeminarEvent) => void;
}

export default function EventCard({
    event,
    variant = "full",
    isNext = false,
    onRegister,
}: EventCardProps) {
    const date = getEventDateParts(event);
    const durationLabel = event.days === 1 ? "1 day" : "2 days";

    /* ---------------- Compact (home page) ---------------- */
    if (variant === "compact") {
        return (
            <Box
                component={Link}
                to={`${EVENTS_LIST_SEMINARS_PATH}/${event.id}`}
                className="bg-white border-10 d-flex align-items-stretch overflow-hidden text-decoration-none"
                sx={{ ...cardSx, color: "inherit" }}
                data-aos="fade-up"
                aria-label={`${event.title}, ${event.city}, ${date.range}`}
            >
                <Box
                    className="bg-purple text-white d-flex flex-column align-items-center justify-content-center px-3 py-2 text-center"
                    sx={{ minWidth: { xs: 84, sm: 104 } }}
                >
                    <Typography className="fw-bold" sx={{ ...whiteSx, fontSize: 24, lineHeight: 1.1 }}>
                        {date.day}
                    </Typography>
                    <Typography className="fs-14" sx={{ ...whiteSx, letterSpacing: "2px" }}>
                        {date.month.toUpperCase()}
                    </Typography>
                    <Typography className="fs-14" sx={whiteSx}>
                        {date.year}
                    </Typography>
                </Box>

                <Box className="p-3 flex-grow-1 d-flex flex-column justify-content-center">
                    <Box className="d-flex flex-wrap align-items-center gap-2 mb-1">
                        <Typography className="fs-14 text-main fw-medium">
                            {event.city}
                            {event.country !== event.city ? `, ${event.country}` : ""}
                        </Typography>
                        {isNext && (
                            <Box
                                className="bg-light-purple text-main fs-14 fw-medium px-2"
                                sx={{ borderRadius: "999px" }}
                            >
                                Next seminar
                            </Box>
                        )}
                    </Box>
                    <Typography
                        component="h3"
                        className="fw-bold c-f"
                        sx={{ lineHeight: 1.25, fontSize: 17 }}
                    >
                        {event.title}
                    </Typography>
                    <Typography className="fs-14 text-grey mt-1">
                        {durationLabel} · from {formatMoney(event.currency, event.groupPrice)}{" "}
                        / person
                    </Typography>
                </Box>

                <Box className="d-none d-sm-flex align-items-center pe-3 text-main">
                    <ArrowForward />
                </Box>
            </Box>
        );
    }

    /* ---------------- Full (Training & Workshops page) ---------------- */
    const venueTba = event.venueName === null;

    return (
        <Box
            className="bg-white border-10 h-100 d-flex flex-column overflow-hidden"
            sx={cardSx}
            data-aos="fade-up"
        >
            {/* Date header */}
            <Box className="bg-purple text-white px-3 py-3 d-flex align-items-center justify-content-between gap-2">
                <Box>
                    <Typography className="fw-bold" sx={{ ...whiteSx, fontSize: 30, lineHeight: 1 }}>
                        {date.day}
                    </Typography>
                    <Typography className="fs-14 mt-1" sx={{ ...whiteSx, letterSpacing: "2px" }}>
                        {date.month.toUpperCase()} {date.year}
                    </Typography>
                </Box>
                <Box className="d-flex flex-column align-items-end gap-1">
                    {isNext && (
                        <Box
                            className="bg-white text-main fs-14 fw-medium px-2"
                            sx={{ borderRadius: "999px" }}
                        >
                            Next seminar
                        </Box>
                    )}
                    <Box
                        className="fs-14 px-2"
                        sx={{
                            ...whiteSx,
                            borderRadius: "999px",
                            border: "1px solid rgba(255,255,255,.6)",
                        }}
                    >
                        {durationLabel}
                    </Box>
                </Box>
            </Box>

            {/* Body */}
            <Box className="p-3 d-flex flex-column flex-grow-1">
                <Typography className="fs-14 text-main fw-medium mb-1">
                    {event.region === "India" ? "India" : "International"} · Business Seminar
                </Typography>
                <Typography
                    variant="h6"
                    component="h3"
                    className="fw-bold c-f mb-3"
                    sx={{ lineHeight: 1.25 }}
                >
                    <Link
                        to={getEventPath(event.id)}
                        className="c-f text-decoration-none"
                        style={{ color: "inherit" }}
                    >
                        {event.title}
                    </Link>
                </Typography>

                <Box className="d-flex flex-column gap-2 mb-3 fs-14">
                    <Box className="d-flex align-items-start gap-2">
                        <LocationOnOutlined className="text-main" fontSize="small" />
                        <span>
                            {event.city}
                            {event.country !== event.city ? `, ${event.country}` : ""}
                        </span>
                    </Box>
                    <Box className="d-flex align-items-start gap-2">
                        <AccessTimeOutlined className="text-main" fontSize="small" />
                        <span>{event.time}</span>
                    </Box>
                    <Box className="d-flex align-items-start gap-2">
                        <ApartmentOutlined className="text-main" fontSize="small" />
                        {venueTba ? (
                            <span className="text-grey" style={{ fontStyle: "italic" }}>
                                Venue will be announced soon
                            </span>
                        ) : (
                            <span>
                                <strong>{event.venueName}</strong>
                                <br />
                                <span className="text-grey">{event.venueAddress}</span>
                            </span>
                        )}
                    </Box>
                </Box>

                {/* Pricing */}
                <Box className="mt-auto">
                    <Box className="bg-light-purple border-10 p-3 mb-3">
                        <Typography className="fs-14 text-grey">Per participant</Typography>
                        <Typography className="fw-bold c-f" sx={{ fontSize: 28, lineHeight: 1.2 }}>
                            {formatMoney(event.currency, event.price)}
                        </Typography>
                        <Box className="d-flex align-items-center gap-1 fs-14 text-main fw-medium mt-1">
                            <GroupsOutlined fontSize="small" />
                            {formatMoney(event.currency, event.groupPrice)} each for groups of{" "}
                            {event.groupMinSize}+
                        </Box>
                    </Box>

                    <Box className="d-flex flex-column flex-sm-row gap-2">
                        <Button
                            component={Link}
                            to={getEventPath(event.id)}
                            variant="outlined"
                            className="btn-outlined-main text-main px-3 py-2 flex-fill"
                        >
                            View Details
                        </Button>
                        <Button
                            onClick={() => onRegister?.(event)}
                            className="btn-main text-white px-3 py-2 flex-fill"
                        >
                            Register Now
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}