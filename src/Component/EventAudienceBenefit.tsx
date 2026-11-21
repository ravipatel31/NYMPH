import { CheckCircleOutlined } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import { eventBenefits, whoMayAttendIntro, whoShouldAttend } from "../Data/EventData";

/** "Who may attend" + "Benefits" blocks for the seminar details page. */
export default function EventAudienceBenefits() {
    if (whoShouldAttend.length === 0 && eventBenefits.length === 0) return null;

    return (
        <Box className="mt-4">
            {whoShouldAttend.length > 0 && (
                <Box className="mb-4">
                    <Typography component="h2" className="fw-bold c-f fs-24 mb-2">
                        Who May Attend
                    </Typography>
                    {whoMayAttendIntro && (
                        <Typography className="fs-16 mb-2">{whoMayAttendIntro}</Typography>
                    )}
                    <Box className="d-flex flex-column gap-2">
                        {whoShouldAttend.map((item) => (
                            <Box key={item} className="d-flex align-items-start gap-2">
                                <CheckCircleOutlined className="text-main" />
                                <Typography className="fs-16">{item}</Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>
            )}

            {eventBenefits.length > 0 && (
                <Box>
                    <Typography component="h2" className="fw-bold c-f fs-24 mb-2">
                        Benefits of Joining Us
                    </Typography>
                    <Grid container spacing={1.5}>
                        {eventBenefits.map((item) => (
                            <Grid key={item} size={{ xs: 12, sm: 6 }} className="d-flex align-items-start gap-2">
                                <CheckCircleOutlined className="text-main" />
                                <Typography className="fs-16">{item}</Typography>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            )}
        </Box>
    );
}