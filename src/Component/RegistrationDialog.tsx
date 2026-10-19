import { CheckCircleOutlined, Close } from "@mui/icons-material";
import {
    Box,
    Button,
    Checkbox,
    Dialog,
    DialogContent,
    DialogTitle,
    FormControlLabel,
    FormHelperText,
    Grid,
    IconButton,
    MenuItem,
    TextField,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import {
    SeminarEvent,
    formatMoney,
    getEventDateParts,
    getTotalAmount,
    getUnitPrice,
} from "../Data/EventData";
import {
    RegistrationFormValues,
    buildRegistrationPayload,
    submitRegistration,
} from "./RegistrationService";

const MAX_PARTICIPANTS = 10;

// Purple labels, focus border and checkbox. Errors stay red.
const purpleFieldSx = {
    "& .MuiInputLabel-root:not(.Mui-error)": { color: "var(--primary-color)" },
    "& .MuiInputLabel-root.Mui-focused:not(.Mui-error)": { color: "var(--primary-color)" },
    "& .MuiOutlinedInput-root:not(.Mui-error) .MuiOutlinedInput-notchedOutline": {
        borderColor: "var(--primary-light-color)",
    },
    "& .MuiOutlinedInput-root:not(.Mui-error):hover .MuiOutlinedInput-notchedOutline": {
        borderColor: "var(--primary-color)",
    },
    "& .MuiOutlinedInput-root.Mui-focused:not(.Mui-error) .MuiOutlinedInput-notchedOutline": {
        borderColor: "var(--primary-color)",
    },
    "& .MuiSelect-icon": { color: "var(--primary-color)" },
    "& .MuiCheckbox-root": { color: "var(--primary-color)" },
    "& .MuiCheckbox-root.Mui-checked": { color: "var(--primary-color)" },
};

const emptyForm: RegistrationFormValues = {
    fullName: "",
    email: "",
    phone: "",
    organisation: "",
    designation: "",
    city: "",
    participants: 1,
    additionalParticipants: "",
    notes: "",
    acceptedTerms: false,
};

type Errors = Partial<Record<keyof RegistrationFormValues, string>>;

function validate(values: RegistrationFormValues): Errors {
    const errors: Errors = {};
    if (values.fullName.trim().length < 2) errors.fullName = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
        errors.email = "Please enter a valid email address.";
    const digits = values.phone.replace(/\D/g, "");
    if (digits.length < 7 || digits.length > 15)
        errors.phone = "Please enter a valid phone number, including country code.";
    if (values.organisation.trim().length < 2)
        errors.organisation = "Please enter your organisation or business name.";
    if (values.participants < 1 || values.participants > MAX_PARTICIPANTS)
        errors.participants = `Choose between 1 and ${MAX_PARTICIPANTS} participants.`;
    if (!values.acceptedTerms) errors.acceptedTerms = "Please accept the terms to continue.";
    return errors;
}

interface RegistrationDialogProps {
    event: SeminarEvent | null;
    open: boolean;
    onClose: () => void;
}

export default function RegistrationDialog({ event, open, onClose }: RegistrationDialogProps) {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

    const [values, setValues] = useState<RegistrationFormValues>(emptyForm);
    const [errors, setErrors] = useState<Errors>({});
    const [submitting, setSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState("");
    const [doneName, setDoneName] = useState<string | null>(null);

    // Fresh form every time the dialog opens (or switches to another event).
    useEffect(() => {
        if (open) {
            setValues(emptyForm);
            setErrors({});
            setSubmitError("");
            setSubmitting(false);
            setDoneName(null);
        }
    }, [open, event?.id]);

    if (!event) return null;

    const date = getEventDateParts(event);
    const unitPrice = getUnitPrice(event, values.participants);
    const total = getTotalAmount(event, values.participants);
    const groupApplied = values.participants >= event.groupMinSize;

    const setField =
        <K extends keyof RegistrationFormValues>(key: K) =>
        (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            const raw = e.target.value;
            const next = (key === "participants" ? Number(raw) : raw) as RegistrationFormValues[K];
            setValues((prev) => ({ ...prev, [key]: next }));
            if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
        };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const found = validate(values);
        setErrors(found);
        if (Object.keys(found).length > 0) return;

        setSubmitting(true);
        setSubmitError("");
        try {
            await submitRegistration(buildRegistrationPayload(event, values));
            setDoneName(values.fullName.trim());
        } catch (err) {
            console.error("[Registration] failed", err);
            setSubmitError("Something went wrong. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <Dialog
            open={open}
            onClose={submitting ? undefined : onClose}
            fullWidth
            maxWidth="sm"
            fullScreen={fullScreen}
            scroll="paper"
            aria-labelledby="registration-title"
        >
            <DialogTitle
                id="registration-title"
                className="bg-purple d-flex align-items-start justify-content-between gap-2"
                sx={{ color: "#fff !important" }}
            >
                <Box>
                    <Typography sx={{ color: "#fff !important", fontWeight: 700, fontSize: 20, lineHeight: 1.25 }}>
                        {doneName ? "Registration received" : "Register for this seminar"}
                    </Typography>
                    <Typography sx={{ color: "#fff !important", fontSize: 14, mt: 0.5, opacity: 0.95 }}>
                        {event.title}
                    </Typography>
                    <Typography sx={{ color: "#fff !important", fontSize: 14, opacity: 0.95 }}>
                        {date.range} · {event.city}
                    </Typography>
                </Box>
                <IconButton
                    onClick={onClose}
                    aria-label="Close registration form"
                    disabled={submitting}
                    sx={{ color: "#fff", mt: -0.5, mr: -1 }}
                >
                    <Close />
                </IconButton>
            </DialogTitle>

            <DialogContent dividers>
                {doneName ? (
                    <Box className="text-center py-4">
                        <CheckCircleOutlined className="text-main" sx={{ fontSize: 56 }} />
                        <Typography className="fw-bold c-f fs-24 mt-2">
                            Thank you, {doneName}
                        </Typography>
                        <Typography className="text-grey mt-2">
                            Your registration details for {event.city} on {date.range} have been
                            captured. Online payment will be available shortly.
                        </Typography>
                        <Button onClick={onClose} className="btn-main text-white px-4 py-2 mt-3">
                            Close
                        </Button>
                    </Box>
                ) : (
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        noValidate
                        sx={{ pt: 1, ...purpleFieldSx }}
                    >
                        <Grid container spacing={2}>
                            <Grid size={{ xs: 12 }}>
                                <TextField
                                    label="Full name"
                                    value={values.fullName}
                                    onChange={setField("fullName")}
                                    error={!!errors.fullName}
                                    helperText={errors.fullName}
                                    autoComplete="name"
                                    required
                                    fullWidth
                                />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <TextField
                                    label="Email"
                                    type="email"
                                    value={values.email}
                                    onChange={setField("email")}
                                    error={!!errors.email}
                                    helperText={errors.email}
                                    autoComplete="email"
                                    required
                                    fullWidth
                                />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <TextField
                                    label="Phone / WhatsApp"
                                    type="tel"
                                    value={values.phone}
                                    onChange={setField("phone")}
                                    error={!!errors.phone}
                                    helperText={errors.phone || "Include country code"}
                                    autoComplete="tel"
                                    required
                                    fullWidth
                                />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <TextField
                                    label="Organisation / business"
                                    value={values.organisation}
                                    onChange={setField("organisation")}
                                    error={!!errors.organisation}
                                    helperText={errors.organisation}
                                    autoComplete="organization"
                                    required
                                    fullWidth
                                />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <TextField
                                    label="Designation"
                                    value={values.designation}
                                    onChange={setField("designation")}
                                    autoComplete="organization-title"
                                    fullWidth
                                />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <TextField
                                    label="Your city"
                                    value={values.city}
                                    onChange={setField("city")}
                                    autoComplete="address-level2"
                                    fullWidth
                                />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <TextField
                                    select
                                    label="Number of participants"
                                    value={values.participants}
                                    onChange={setField("participants")}
                                    error={!!errors.participants}
                                    helperText={
                                        errors.participants ||
                                        `Group rate from ${event.groupMinSize} participants`
                                    }
                                    fullWidth
                                >
                                    {Array.from({ length: MAX_PARTICIPANTS }, (_, i) => i + 1).map((n) => (
                                        <MenuItem key={n} value={n}>
                                            {n}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>

                            {values.participants > 1 && (
                                <Grid size={{ xs: 12 }}>
                                    <TextField
                                        label="Names of other participants (optional)"
                                        value={values.additionalParticipants}
                                        onChange={setField("additionalParticipants")}
                                        multiline
                                        minRows={2}
                                        fullWidth
                                    />
                                </Grid>
                            )}

                            <Grid size={{ xs: 12 }}>
                                <TextField
                                    label="Anything we should know? (optional)"
                                    value={values.notes}
                                    onChange={setField("notes")}
                                    multiline
                                    minRows={2}
                                    fullWidth
                                />
                            </Grid>

                            {/* Price summary */}
                            <Grid size={{ xs: 12 }}>
                                <Box className="bg-light-purple border-10 p-3">
                                    <Box className="d-flex justify-content-between fs-14">
                                        <span>
                                            {values.participants} × {formatMoney(event.currency, unitPrice)}
                                            {groupApplied ? " (group rate)" : ""}
                                        </span>
                                    </Box>
                                    <Box className="d-flex justify-content-between align-items-center mt-1">
                                        <Typography className="fw-medium c-f">Total payable</Typography>
                                        <Typography className="fw-bold c-f" sx={{ fontSize: 24 }}>
                                            {formatMoney(event.currency, total)}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>

                            <Grid size={{ xs: 12 }}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={values.acceptedTerms}
                                            onChange={(e) => {
                                                setValues((prev) => ({
                                                    ...prev,
                                                    acceptedTerms: e.target.checked,
                                                }));
                                                if (errors.acceptedTerms)
                                                    setErrors((prev) => ({ ...prev, acceptedTerms: undefined }));
                                            }}
                                        />
                                    }
                                    label="I agree to the seminar terms & conditions."
                                />
                                {errors.acceptedTerms && (
                                    <FormHelperText error>{errors.acceptedTerms}</FormHelperText>
                                )}
                            </Grid>
                        </Grid>

                        {submitError && (
                            <Typography color="error" className="fs-14 mt-2" role="alert">
                                {submitError}
                            </Typography>
                        )}

                        <Box className="d-flex flex-column flex-sm-row justify-content-end gap-2 mt-3">
                            <Button
                                onClick={onClose}
                                disabled={submitting}
                                variant="outlined"
                                className="btn-outlined-main text-main px-4 py-2"
                            >
                                Cancel
                            </Button>
                            <Button
                                type="submit"
                                disabled={submitting}
                                className="btn-main text-white px-4 py-2"
                            >
                                {submitting ? "Submitting…" : "Submit Registration"}
                            </Button>
                        </Box>
                    </Box>
                )}
            </DialogContent>
        </Dialog>
    );
}