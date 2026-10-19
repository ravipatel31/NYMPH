import {
    AccessTimeOutlined,
    ApartmentOutlined,
    ArrowBack,
    ArrowForward,
    CheckCircleOutlined,
    GroupsOutlined,
    LocationOnOutlined,
    PhoneInTalk,
    ScheduleOutlined,
    ShareOutlined,
} from "@mui/icons-material";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import RegistrationDialog from "./RegistrationDialog";
import {
    CONTACT_PHONE,
    CONTACT_PHONE_HREF,
    EVENTS_LIST_PATH,
    EVENTS_LIST_SEMINARS_PATH,
    afterPayment,
    feeInclusions,
    formatMoney,
    getEventById,
    getEventDateParts,
    isEventPast,
} from "../Data/EventData";

// MUI Typography can override inherited colour, so force white on purple.
const whiteSx = { color: "#fff !important" };

function EventDetails() {
    const { eventId } = useParams<{ eventId: string }>();
    const event = getEventById(eventId);

    const [registerOpen, setRegisterOpen] = useState(false);
    const [shareMessage, setShareMessage] = useState("");

    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, [eventId]);

    // Helpful tab title / share title for this seminar.
    useEffect(() => {
        if (!event) return;
        const previous = document.title;
        document.title = `${event.title} | NYMPH International`;
        return () => {
            document.title = previous;
        };
    }, [event]);

    /* ---------- Unknown event id ---------- */
    if (!event) {
        return (
            <Box className="text-center px-3 py-5 my-5">
                <Typography component="h1" className="fw-bold c-f fs-32 mb-2">
                    Seminar not found
                </Typography>
                <Typography className="text-grey mb-4">
                    This seminar link may be out of date. Browse the current seminars instead.
                </Typography>
                <Button
                    component={Link}
                    to={EVENTS_LIST_SEMINARS_PATH}
                    className="btn-main text-white px-4 py-2"
                >
                    Explore Seminars
                </Button>
            </Box>
        );
    }

    const date = getEventDateParts(event);
    const past = isEventPast(event);
    const venueTba = event.venueName === null;
    const location = `${event.city}${event.country !== event.city ? `, ${event.country}` : ""}`;
    const mapsUrl = event.venueAddress
        ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              `${event.venueName ?? ""} ${event.venueAddress}`,
          )}`
        : "";

    const handleShare = async () => {
        const url = window.location.href;
        const text = `${event.title} – ${date.range}, ${location}`;
        try {
            if (typeof navigator.share === "function") {
                await navigator.share({ title: event.title, text, url });
                return;
            }
            await navigator.clipboard.writeText(url);
            setShareMessage("Link copied");
        } catch (err) {
            // User dismissed the share sheet, or clipboard is blocked.
            if ((err as Error)?.name !== "AbortError") setShareMessage("Copy the link from the address bar");
        }
        window.setTimeout(() => setShareMessage(""), 2500);
    };

    return (
        <Box>
            {/* HEADER ------------------------------------------------- */}
            <Box className="bg-dark-purple px-3 px-md-5 py-4 py-md-5">
                <Link
                    to={EVENTS_LIST_SEMINARS_PATH}
                    className="d-inline-flex align-items-center gap-1 mb-3 text-decoration-none"
                    style={{ color: "#fff" }}
                >
                    <ArrowBack fontSize="small" /> All seminars
                </Link>

                <Box className="d-flex flex-column flex-md-row align-items-md-center gap-3 gap-md-4">
                    <Box
                        className="bg-purple text-center px-4 py-3 border-10"
                        sx={{ minWidth: 150, alignSelf: { xs: "flex-start", md: "center" } }}
                    >
                        <Typography className="fw-bold" sx={{ ...whiteSx, fontSize: 38, lineHeight: 1 }}>
                            {date.day}
                        </Typography>
                        <Typography className="fs-16 mt-1" sx={{ ...whiteSx, letterSpacing: "2px" }}>
                            {date.month.toUpperCase()}
                        </Typography>
                        <Typography className="fs-16" sx={whiteSx}>
                            {date.year}
                        </Typography>
                    </Box>

                    <Box>
                        <Box className="d-flex flex-wrap gap-2 mb-2">
                            <Box
                                className="fs-14 px-3 py-1"
                                sx={{ ...whiteSx, borderRadius: "999px", border: "1px solid rgba(255,255,255,.6)" }}
                            >
                                {event.region === "India" ? "India" : "International"} · Business Seminar
                            </Box>
                            <Box
                                className="fs-14 px-3 py-1"
                                sx={{ ...whiteSx, borderRadius: "999px", border: "1px solid rgba(255,255,255,.6)" }}
                            >
                                {event.days === 1 ? "1 day" : "2 days"}
                            </Box>
                            {past && (
                                <Box className="fs-14 px-3 py-1 bg-white text-main fw-medium" sx={{ borderRadius: "999px" }}>
                                    Seminar completed
                                </Box>
                            )}
                        </Box>
                        <Typography
                            component="h1"
                            className="fw-bold"
                            sx={{ ...whiteSx, fontSize: { xs: 26, md: 38 }, lineHeight: 1.2 }}
                        >
                            {event.title}
                        </Typography>
                        <Typography className="fs-16 mt-2" sx={{ ...whiteSx, opacity: 0.95 }}>
                            {date.range} · {location}
                        </Typography>
                    </Box>
                </Box>
            </Box>

            {/* BODY --------------------------------------------------- */}
            <Grid container spacing={3} className="px-3 px-md-5 py-4 py-md-5">
                {/* Left: details */}
                <Grid size={{ xs: 12, md: 7, lg: 8 }}>
                    <Typography component="h2" className="fw-bold c-f fs-24 mb-3">
                        Seminar Details
                    </Typography>

                    <Box className="d-flex flex-column gap-3 mb-4">
                        <Box className="d-flex align-items-start gap-3">
                            <Box className="bg-light-purple p-2 border-50 d-inline-flex">
                                <ScheduleOutlined className="text-main" />
                            </Box>
                            <Box>
                                <Typography className="fw-medium c-f">Date</Typography>
                                <Typography className="text-grey">
                                    {date.range}
                                    {event.days === 2 ? " (two-day seminar)" : " (one-day seminar)"}
                                </Typography>
                            </Box>
                        </Box>
                        <Box className="d-flex align-items-start gap-3">
                            <Box className="bg-light-purple p-2 border-50 d-inline-flex">
                                <AccessTimeOutlined className="text-main" />
                            </Box>
                            <Box>
                                <Typography className="fw-medium c-f">Time</Typography>
                                <Typography className="text-grey">
                                    {event.time}
                                    {event.days === 2 ? " each day" : ""}
                                </Typography>
                            </Box>
                        </Box>
                        <Box className="d-flex align-items-start gap-3">
                            <Box className="bg-light-purple p-2 border-50 d-inline-flex">
                                <LocationOnOutlined className="text-main" />
                            </Box>
                            <Box>
                                <Typography className="fw-medium c-f">Location</Typography>
                                <Typography className="text-grey">{location}</Typography>
                            </Box>
                        </Box>
                        <Box className="d-flex align-items-start gap-3">
                            <Box className="bg-light-purple p-2 border-50 d-inline-flex">
                                <ApartmentOutlined className="text-main" />
                            </Box>
                            <Box>
                                <Typography className="fw-medium c-f">Venue</Typography>
                                {venueTba ? (
                                    <Typography className="text-grey" sx={{ fontStyle: "italic" }}>
                                        Venue will be announced soon. Registered participants will be
                                        informed as soon as it is confirmed.
                                    </Typography>
                                ) : (
                                    <>
                                        <Typography className="text-grey">{event.venueName}</Typography>
                                        <Typography className="text-grey">{event.venueAddress}</Typography>
                                        <a
                                            href={mapsUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-main fs-14"
                                        >
                                            View on map
                                        </a>
                                    </>
                                )}
                            </Box>
                        </Box>
                    </Box>

                    <Grid container spacing={3} className="mb-3">
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <Typography component="h3" className="fw-bold c-f fs-20 mb-2">
                                Seminar Fees Include
                            </Typography>
                            <Box className="d-flex flex-column gap-2">
                                {feeInclusions.map((item) => (
                                    <Box key={item} className="d-flex align-items-start gap-2">
                                        <CheckCircleOutlined className="text-main" />
                                        <Typography className="fs-16">{item}</Typography>
                                    </Box>
                                ))}
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <Typography component="h3" className="fw-bold c-f fs-20 mb-2">
                                After Payment You Receive
                            </Typography>
                            <Box className="d-flex flex-column gap-2">
                                {afterPayment.map((item) => (
                                    <Box key={item} className="d-flex align-items-start gap-2">
                                        <CheckCircleOutlined className="text-main" />
                                        <Typography className="fs-16">{item}</Typography>
                                    </Box>
                                ))}
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>

                {/* Right: pricing & actions */}
                <Grid size={{ xs: 12, md: 5, lg: 4 }}>
                    <Box
                        className="bg-white border-10 p-4"
                        sx={{
                            border: "1px solid #F1F1F1",
                            boxShadow: "0 10px 30px var(--primary-light-color)",
                            position: { md: "sticky" },
                            top: { md: 100 },
                        }}
                    >
                        <Typography className="fs-14 text-grey">Per participant</Typography>
                        <Typography className="fw-bold c-f" sx={{ fontSize: 36, lineHeight: 1.2 }}>
                            {formatMoney(event.currency, event.price)}
                        </Typography>
                        <Box className="d-flex align-items-center gap-1 fs-14 text-main fw-medium mt-1 mb-3">
                            <GroupsOutlined fontSize="small" />
                            {formatMoney(event.currency, event.groupPrice)} each for groups of{" "}
                            {event.groupMinSize}+
                        </Box>

                        {past ? (
                            <Typography className="text-grey mb-3">
                                This seminar has been completed. See our upcoming seminars.
                            </Typography>
                        ) : (
                            <Button
                                onClick={() => setRegisterOpen(true)}
                                className="btn-main text-white px-4 py-2 w-100 mb-2"
                            >
                                Register Now
                            </Button>
                        )}

                        <Button
                            onClick={handleShare}
                            variant="outlined"
                            className="btn-outlined-main text-main px-4 py-2 w-100"
                        >
                            <ShareOutlined fontSize="small" />
                            &nbsp; Share this seminar
                        </Button>
                        <Typography
                            className="fs-14 text-main text-center mt-1"
                            role="status"
                            aria-live="polite"
                            sx={{ minHeight: 22 }}
                        >
                            {shareMessage}
                        </Typography>

                        <Box className="mt-3 pt-3" sx={{ borderTop: "1px solid #F1F1F1" }}>
                            <Typography className="fs-14 text-grey mb-1">Questions? Call us</Typography>
                            <a
                                href={CONTACT_PHONE_HREF}
                                className="text-main fw-medium d-inline-flex align-items-center gap-1"
                            >
                                <PhoneInTalk fontSize="small" /> {CONTACT_PHONE}
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>

            {/* EXPLORE MORE ------------------------------------------- */}
            <Box className="text-center bg-light-purple px-3 py-5">
                <Typography component="h2" className="fw-bold c-f fs-24 mb-2">
                    Looking for a different date or city?
                </Typography>
                <Typography className="text-grey mb-3">
                    See every upcoming seminar across India and our international locations.
                </Typography>
                <Button
                    component={Link}
                    to={EVENTS_LIST_SEMINARS_PATH}
                    className="btn-main text-white px-4 py-2"
                >
                    Explore More Seminars &nbsp;
                    <ArrowForward fontSize="small" />
                </Button>
                <Box className="mt-2">
                    <Link to={EVENTS_LIST_PATH} className="text-main fs-14">
                        Back to Training & Workshops
                    </Link>
                </Box>
            </Box>

            <RegistrationDialog
                event={event}
                open={registerOpen}
                onClose={() => setRegisterOpen(false)}
            />
        </Box>
    );
}

export default EventDetails;