import { Box, Grid, Typography } from "@mui/material";
import australia from "../Assets/Images/Countries/australia.svg";
import canada from "../Assets/Images/Countries/canada.svg";
import europe from "../Assets/Images/Countries/europe.svg";
import newZealand from "../Assets/Images/Countries/new-zealand.svg";
import uae from "../Assets/Images/Countries/uae.svg";
import uk from "../Assets/Images/Countries/uk.svg";
import usa from "../Assets/Images/Countries/usa.svg";

/** Markets shown as map cards. Change a label or the order here. */
const MARKET_CARDS: { name: string; map: string }[] = [
    { name: "USA", map: usa },
    { name: "Canada", map: canada },
    { name: "Europe", map: europe },
    { name: "UK", map: uk },
    { name: "UAE", map: uae },
    { name: "Australia", map: australia },
    { name: "New Zealand", map: newZealand },
];

const cardSx = {
    position: "relative",
    aspectRatio: "1 / 0.92",
    overflow: "hidden",
    borderRadius: "6px",
    backgroundColor: "rgba(255, 255, 255, 0.14)",
    transition: "transform .3s ease, background-color .3s ease, box-shadow .3s ease",
    "& .market-accent": { width: 28, transition: "width .3s ease" },
    "&:hover": {
        transform: "translateY(-6px)",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        boxShadow: "0 12px 30px rgba(0, 0, 0, 0.3)",
    },
    "&:hover .market-accent": { width: 56 },
};

export default function GlobalExpansionSection() {
    return (
        <Grid container spacing={3} className="p-4 p-md-5 my-4 bg-dark-purple">
            <Grid size={{ xs: 12, md: 5 }}>
                <Typography
                    className="fs-16 text-second fw-bold"
                    data-aos="fade-up"
                    gutterBottom
                >
                    GLOBAL EXPANSION
                </Typography>
                <Typography
                    variant="h4"
                    component="h2"
                    className="fw-bold my-3 mt-1 c-f text-white"
                    data-aos="fade-up"
                >
                    Take Your Business Global
                </Typography>
                <Typography className="fs-16 text-white mb-3" data-aos="fade-up">
                    Expand your business globally with end-to-end investment and
                    business-entry support across the USA, Canada, Europe, the UK, the
                    Gulf, Australia, and New Zealand.
                </Typography>
                <Typography className="fs-16 text-white" data-aos="fade-up">
                    We empower entrepreneurs and investors to grow globally. We offer
                    curated investment opportunities and business development services
                    across these markets, along with guidance for business entry.
                </Typography>
            </Grid>

            <Grid size={{ xs: 12, md: 7 }}>
                <Typography
                    className="text-white mb-2"
                    variant="body2"
                    data-aos="fade-up"
                >
                    Markets we support
                </Typography>
                <Grid className='justify-content-start' container spacing={2}>
                    {MARKET_CARDS.map((market) => (
                        <Grid
                            data-aos="fade-up"
                            key={market.name}
                            size={{ xs: 6, sm: 4, md: 3 }}
                        >
                            <Box sx={cardSx}>
                                <Box
                                    component="img"
                                    src={market.map}
                                    alt=""
                                    aria-hidden="true"
                                    loading="lazy"
                                    decoding="async"
                                    sx={{
                                        position: "absolute",
                                        top: "6%",
                                        left: 0,
                                        width: "100%",
                                        height: "70%",
                                        objectFit: "contain",
                                    }}
                                />
                                <Box
                                    sx={{
                                        position: "absolute",
                                        left: { xs: 12, md: 18 },
                                        bottom: { xs: 10, md: 14 },
                                    }}
                                >
                                    <Box
                                        className="market-accent"
                                        sx={{
                                            height: 3,
                                            borderRadius: 2,
                                            bgcolor: "var(--secondary-color)",
                                            mb: 0.75,
                                        }}
                                    />
                                    <Typography
                                        component="h3"
                                        className="fw-bold text-white"
                                        sx={{
                                            fontSize: { xs: 15, md: 18 },
                                            letterSpacing: "1px",
                                            textTransform: "uppercase",
                                            lineHeight: 1.2,
                                        }}
                                    >
                                        {market.name}
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
}