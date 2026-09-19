// import { AccountBalanceWallet, AccountBalanceWalletOutlined, ArrowRightAlt, CampaignOutlined, CheckCircleOutlined, Foundation, MemoryOutlined, PeopleAltOutlined, School, SignalCellularAltOutlined, SignalCellularAltRounded, TrackChangesOutlined, TrendingUpOutlined, WebhookOutlined } from '@mui/icons-material'
// import { Box, Button, Grid, List, ListItem, Typography } from '@mui/material'
// import React from 'react'

// function Services() {

//     const services = [
//         {
//             id: 1,
//             title: "Strategy & Growth Consulting",
//             description:
//                 "Drive long-term growth with proven strategies and market insights.",
//             icon: <TrackChangesOutlined className="text-main fs-32" />,
//         },
//         {
//             id: 2,
//             title: "Financial Consulting",
//             description:
//                 "Optimize financial preformance with expert advice and planning",
//             icon: <AccountBalanceWalletOutlined className="text-main fs-32" />,
//         },
//         {
//             id: 3,
//             title: "Operations & Supply Chain Consutling",
//             description:
//                 "Improve efficiency and streamline operations for better results.",
//             icon: <WebhookOutlined className="text-main fs-32" />,
//         },
//         {
//             id: 4,
//             title: "Technology & Digital Transformation",
//             description:
//                 "Leverage technology to innovate and stay ahead in a digital world.",
//             icon: <MemoryOutlined className="text-main fs-32" />,
//         },
//         {
//             id: 5,
//             title: "Human resources Consulting",
//             description:
//                 "Build Stronger teams with people-centric HR strategies.",
//             icon: <PeopleAltOutlined className="text-main fs-32" />,
//         },
//         {
//             id: 6,
//             title: "Sales & Marketing Consulting",
//             description:
//                 "Enhance your brand, reach and revenue with data-driven strategies.",
//             icon: <CampaignOutlined className="text-main fs-32" />,
//         },
//     ];

//     return (
//         <Box>
//             <Grid container sx={{ height: { xs: "fit-content", md: 'calc(100vh - 80px)' } }} className='position-relative g-bg'>
//                 <Grid size={{ xs: 12, md: 5.5 }} className='my-0 my-md-auto' sx={{ px: { xs: 2, md: 3 }, pt: 5, zIndex: 2 }}>
//                     <Typography className='text-second fw-medium fs-20' data-aos="fade-up" gutterBottom sx={{ letterSpacing: "2px" }}>OUR SERVICES</Typography>
//                     <Typography className='fw-medium fs-58 c-f mt-2' sx={{ whiteSpace: { xs: "normal", md: "nowrap" } }} data-aos="fade-up">Comprehensive Solutions</Typography>
//                     <Typography className='fw-medium mb-3 fs-58 c-f' data-aos="fade-up" sx={{ whiteSpace: { xs: "auto", md: 'nowrap' } }}>for a <span className='text-main' style={{ fontStyle: 'italic' }}>Global Future</span></Typography>
//                     <Typography data-aos="fade-up">At NYMPH International LLp, we offre a range of specialized services designed to help individuals and businesses achieve their goals across borders. From training and consulting to visa support, we are your trusted partner in global growth.</Typography>
//                 </Grid>
//                 <Grid size={{ xs: 12, md: 6.5 }} className='d-none d-md-inline-block right-side' data-aos="zoom-in">
//                     <Box className='hero-section h-100 w-100'></Box>
//                 </Grid>
//             </Grid>

//             <Box className='mt-5'>
//                 <Grid container spacing={1.5} className='mx-2 mx-md-4'>
//                     <Grid size={{ xs: 12, md: 4 }}>
//                         <Box className='d-flex align-items-start gap-4'>
//                             <Box className='bg-light-purple p-3 border-50'>
//                                 <School className='text-main' sx={{ fontSize: '48px' }} />
//                             </Box>
//                             <Box>
//                                 <Box className='mb-2'>
//                                     <Typography variant='body2' className='text-main fw-bold mb-1'>CORPORATE TRAINING</Typography>
//                                     <Typography variant='h4' className='fw-medium c-f'>Empowering Talent</Typography>
//                                 </Box>
//                                 <Typography variant='body1' className='text-grey'>We provides training at different colleges/universities world wide via and also provide training to different corporate sectors.</Typography>
//                             </Box>
//                         </Box>
//                     </Grid>
//                     <Grid size={{ xs: 12, md: 6 }}>
//                         <Box className='border border-primary border-10 h-100 w-100'></Box>
//                     </Grid>
//                     <Grid size={{ xs: 12, md: 2 }}>
//                         <Box className='p-3 bg-grey border-10'>
//                             <Box className='d-flex align-items-center gap-2'>
//                                 <Box className='bg-light-purple p-2 border-50'>
//                                     <Foundation className='text-main' />
//                                 </Box>
//                                 <Box>
//                                     <Typography variant='subtitle2' className='text-grey'>Global <br /> Unviversities</Typography>
//                                 </Box>
//                             </Box>
//                             <hr />
//                             <Box className='d-flex align-items-center gap-2'>
//                                 <Box className='bg-light-purple p-2 border-50'>
//                                     <PeopleAltOutlined className='text-main' />
//                                 </Box>
//                                 <Box>
//                                     <Typography variant='subtitle2' className='text-grey'>Corporate <br /> Sectors</Typography>
//                                 </Box>
//                             </Box>
//                             <hr />
//                             <Box className='d-flex align-items-center gap-2'>
//                                 <Box className='bg-light-purple p-2 border-50'>
//                                     <TrendingUpOutlined className='text-main' />
//                                 </Box>
//                                 <Box>
//                                     <Typography variant='subtitle2' className='text-grey'>Practical <br /> Learning</Typography>
//                                 </Box>
//                             </Box>
//                         </Box>
//                     </Grid>
//                 </Grid>

//                 <Grid container spacing={2} className='p-4 mt-md-5 py-5 bg-grey'>
//                     <Grid size={{ xs: 12, md: 4 }} className='d-flex gap-3 align-items-start'>
//                         <Box className='bg-light-purple p-3 border-50'>
//                             <SignalCellularAltOutlined className='text-main' sx={{ fontSize: '48px' }} />
//                         </Box>
//                         <Box>
//                             <Box>
//                                 <Typography className="fs-16  text-main fw-bold" data-aos="fade-up" gutterBottom>BUSINESS CONSULTING</Typography>
//                                 <Typography variant='h4' className="fw-bold my-3 mt-1 c-f" data-aos="fade-up">Stretegic Guidance<br />for Sustainable Growth</Typography>
//                                 <Typography className="fs-16 text-grey" data-aos="fade-up">We help business navigate challenges and unlock new opportunities through experts consulting and tailored strategies.</Typography>
//                             </Box>
//                             <Box>
//                                 {/* <a href="#" className="text-main">Explore  <ArrowRightAlt /></a> */}
//                             </Box>
//                         </Box>
//                     </Grid>
//                     <Grid size={{ xs: 12, md: 'grow' }}>
//                         <Grid container spacing={2}>
//                             {services.map((service) => (
//                                 <Grid
//                                     data-aos="fade-up"
//                                     key={service.id}
//                                     size={{ xs: 12, sm: 6, md: 4 }}
//                                 >
//                                     <Box
//                                         className="p-3 bg-white border-10 h-100"
//                                         sx={{
//                                             border: "1px solid #F1F1F1",
//                                             transition: "all .3s ease",
//                                             "&:hover": {
//                                                 transform: "translateY(-6px)",
//                                                 boxShadow: "0 10px 30px var(--primary-light-color)",
//                                             },
//                                         }}
//                                     >
//                                         <Box className="p-2 border-50 bg-light-purple d-inline-flex">
//                                             {service.icon}
//                                         </Box>

//                                         <Typography
//                                             variant="h5"
//                                             className="fw-bold my-3 mb-2 c-f"
//                                             sx={{ lineHeight: 1.2 }}
//                                         >
//                                             {service.title}
//                                         </Typography>

//                                         <Typography
//                                             variant="body2"
//                                             // color="text.secondary"
//                                             className='text-grey'
//                                         // sx={{ lineHeight: 1.8 }}
//                                         >
//                                             {service.description}
//                                         </Typography>
//                                     </Box>
//                                 </Grid>
//                             ))}
//                         </Grid>
//                     </Grid>
//                 </Grid>
//                 <Grid container spacing={1.5} className='mx-2 mx-md-4 my-4'>
//                     <Grid size={{ xs: 12, md: 4 }}>
//                         <Box className='d-flex align-items-start gap-4'>
//                             <Box className='bg-light-purple p-3 border-50'>
//                                 <School className='text-main' sx={{ fontSize: '48px' }} />
//                             </Box>
//                             <Box>
//                                 <Box className='mb-2'>
//                                     <Typography variant='body2' className='text-main fw-bold mb-1'>VISAS</Typography>
//                                     <Typography variant='h4' className='fw-medium c-f'>Your Global Education Partner</Typography>
//                                 </Box>
//                                 <Typography variant='body1' className='text-grey'>We support students in finding colleges/universities world wide as per their education qulaifications for further education.</Typography>
//                             </Box>
//                         </Box>
//                     </Grid>
//                     <Grid className='bg-grey d-flex flex-md-row flex-column align-items-center gap-2' size={{ xs: 12, md: 8 }}>
//                         <Box className='border border-primary border-10 h-100 w-50'></Box>
//                         <Box className='p-2'>
//                             <Typography variant='h5' className='text-main mb-1 fw-medium'>Our Visa Services are Available For</Typography>
//                             <Grid container spacing={2} className='mt-3 align-items-stretch'>
//                                 <Grid size={{xs:'grow'}} >
//                                     <Box className='w-100 border border-50' sx={{height:'80px'}}></Box>
//                                 </Grid>
//                                 <Grid  size={'auto'}>
//                                     <hr className='h-100 border m-0' />
//                                 </Grid>
//                                 <Grid size={{xs:'grow'}} >
//                                     <Box className='w-100 border border-50' sx={{height:'80px'}}></Box>
//                                 </Grid>
//                                 <Grid  size={'auto'}>
//                                     <hr className='h-100 border m-0' />
//                                 </Grid>
//                                 <Grid size={{xs:'grow'}} >
//                                     <Box className='w-100 border border-50' sx={{height:'80px'}}></Box>
//                                 </Grid>
//                             </Grid>
//                             <Grid container spacing={2} className='mt-3 align-items-stretch'>
//                                 <Grid size={{xs:'grow'}} >
//                                     <Box className='w-100 border border-50' sx={{height:'80px'}}></Box>
//                                 </Grid>
//                                 <Grid  size={'auto'}>
//                                     <hr className='h-100 border m-0' />
//                                 </Grid>
//                                 <Grid size={{xs:'grow'}} >
//                                     <Box className='w-100 border border-50' sx={{height:'80px'}}></Box>
//                                 </Grid>
//                                 <Grid  size={'auto'}>
//                                     <hr className='h-100 border m-0' />
//                                 </Grid>
//                                 <Grid size={{xs:'grow'}} >
//                                     <Box className='w-100 border border-50' sx={{height:'80px'}}></Box>
//                                 </Grid>
//                             </Grid>
//                             <Grid container spacing={2} className='mt-3 align-items-stretch'>
//                                 <Grid size={{xs:'grow'}} >
//                                     <Box className='w-100 border border-50' sx={{height:'80px'}}></Box>
//                                 </Grid>
//                                 <Grid  size={'auto'}>
//                                     <hr className='h-100 border m-0' />
//                                 </Grid>
//                                 <Grid size={{xs:'grow'}} >
//                                     <Box className='w-100 border border-50' sx={{height:'80px'}}></Box>
//                                 </Grid>
//                                 <Grid  size={'auto'}>
//                                     <hr className='h-100 border m-0' />
//                                 </Grid>
//                                 <Grid size={{xs:'grow'}} >
//                                     <Box className='w-100 border border-50' sx={{height:'80px'}}></Box>
//                                 </Grid>
//                             </Grid>
//                         </Box>
//                     </Grid>
//                 </Grid>
//             </Box>
//         </Box>
//     )
// }

// export default Services


import {
    AccountBalanceWalletOutlined,
    CampaignOutlined,
    FlightTakeoffOutlined,
    HandshakeOutlined,
    MemoryOutlined,
    PeopleAltOutlined,
    PublicOutlined,
    School,
    SignalCellularAltOutlined,
    TrackChangesOutlined,
    TrendingUpOutlined,
    WebhookOutlined,
} from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import { MARKETS, SECTORS } from "../Data/CompanyData";

/* ------------------------------------------------------------------ */
/* Content (wording from the client's content document)                */
/* ------------------------------------------------------------------ */

// Business Consulting: the eight areas, in the client's order.
const consultingAreas = [
    {
        id: 1,
        title: "Strategy & Growth Consulting",
        description:
            "Drive long-term growth with proven strategies and market insights.",
        icon: <TrackChangesOutlined className="text-main fs-32" />,
    },
    {
        id: 2,
        title: "Global Expansion",
        description:
            "Enter and grow in new markets with end-to-end investment and business development support.",
        icon: <PublicOutlined className="text-main fs-32" />,
    },
    {
        id: 3,
        title: "Financial Consulting",
        description:
            "Optimize financial performance with expert advice and planning.",
        icon: <AccountBalanceWalletOutlined className="text-main fs-32" />,
    },
    {
        id: 4,
        title: "Operations & Supply Chain Consulting",
        description:
            "Improve efficiency and streamline operations for better results.",
        icon: <WebhookOutlined className="text-main fs-32" />,
    },
    {
        id: 5,
        title: "Technology & Digital Transformation",
        description:
            "Leverage technology to innovate and stay ahead in a digital world.",
        icon: <MemoryOutlined className="text-main fs-32" />,
    },
    {
        id: 6,
        title: "Human Resources Consulting",
        description: "Build stronger teams with people-centric HR strategies.",
        icon: <PeopleAltOutlined className="text-main fs-32" />,
    },
    {
        id: 7,
        title: "Sales & Marketing Consulting",
        description:
            "Enhance your brand, reach and revenue with data-driven strategies.",
        icon: <CampaignOutlined className="text-main fs-32" />,
    },
    {
        id: 8,
        title: "Mergers & Acquisitions",
        description:
            "Guiding businesses through buy-side and sell-side transactions, due diligence, business valuation and post-merger integration (PMI) to ensure smooth transactions.",
        icon: <HandshakeOutlined className="text-main fs-32" />,
    },
];

const trainingAudiences = [
    {
        id: 1,
        title: "Workforce teams",
        description:
            "Tailored corporate training programs designed to upskill teams across diverse industry sectors.",
        icon: <PeopleAltOutlined className="text-main" />,
    },
    {
        id: 2,
        title: "Entrepreneurs and leaders",
        description:
            "Practical, hands-on masterclasses for ambitious individuals, entrepreneurs and business leaders that drive measurable real-world success.",
        icon: <TrendingUpOutlined className="text-main" />,
    },
    {
        id: 3,
        title: "Colleges and universities",
        description:
            "Immersive seminars and workshops that bridge the gap between academic learning and real-world application.",
        icon: <School className="text-main" />,
    },
];

const mobilityServices = [
    {
        id: 1,
        title: "Overseas Education Advisory",
        description:
            "Dedicated guidance helping ambitious students identify and secure admissions to leading global universities that match their qualifications.",
        icon: <School className="text-main" />,
    },
    {
        id: 2,
        title: "Global Mobility Support",
        description:
            "End-to-end guidance through complex foreign entry and operational setups.",
        icon: <FlightTakeoffOutlined className="text-main" />,
    },
];

const cardSx = {
    border: "1px solid #F1F1F1",
    transition: "all .3s ease",
    "&:hover": {
        transform: "translateY(-6px)",
        boxShadow: "0 10px 30px var(--primary-light-color)",
    },
};

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

function Services() {
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
                        OUR SERVICES
                    </Typography>
                    <Typography
                        component="h1"
                        className="fw-medium fs-58 c-f mt-2 mb-3"
                        data-aos="fade-up"
                        sx={{ whiteSpace: { xs: "normal", md: "nowrap" } }}
                    >
                        Comprehensive Solutions
                        <br />
                        for a{" "}
                        <span className="text-main" style={{ fontStyle: "italic" }}>
                            Global Future
                        </span>
                    </Typography>
                    <Typography data-aos="fade-up">
                        At NYMPH International LLP, we offer a range of specialized
                        services designed to help individuals and businesses achieve their
                        goals across borders. From training and consulting to global
                        expansion and mobility guidance, we are your trusted partner in
                        global growth.
                    </Typography>
                </Grid>
                <Grid
                    size={{ xs: 12, md: 6.5 }}
                    className="d-none d-md-inline-block right-side"
                    data-aos="zoom-in"
                >
                    <Box className="hero-section h-100 w-100" aria-hidden="true"></Box>
                </Grid>
            </Grid>

            {/* 2. BUSINESS CONSULTING (8 areas) ----------------------- */}
            <Grid container spacing={2} className="p-4 mt-4 py-5 bg-grey">
                <Grid
                    size={{ xs: 12, md: 4 }}
                    className="d-flex gap-3 align-items-start"
                >
                    <Box className="bg-light-purple p-3 border-50">
                        <SignalCellularAltOutlined
                            className="text-main"
                            sx={{ fontSize: "48px" }}
                        />
                    </Box>
                    <Box>
                        <Typography
                            className="fs-16 text-main fw-bold"
                            data-aos="fade-up"
                            gutterBottom
                        >
                            BUSINESS CONSULTING
                        </Typography>
                        <Typography
                            variant="h4"
                            component="h2"
                            className="fw-bold my-3 mt-1 c-f"
                            data-aos="fade-up"
                        >
                            Strategic Guidance
                            <br />
                            for Sustainable Growth
                        </Typography>
                        <Typography className="fs-16 text-grey" data-aos="fade-up">
                            We help businesses navigate challenges and unlock new
                            opportunities through expert consulting and tailored
                            strategies.
                        </Typography>
                    </Box>
                </Grid>

                <Grid size={{ xs: 12, md: "grow" }}>
                    <Grid container spacing={2}>
                        {consultingAreas.map((area) => (
                            <Grid
                                data-aos="fade-up"
                                key={area.id}
                                size={{ xs: 12, sm: 6, md: 4 }}
                            >
                                <Box className="p-3 bg-white border-10 h-100" sx={cardSx}>
                                    <Box className="p-2 border-50 bg-light-purple d-inline-flex">
                                        {area.icon}
                                    </Box>
                                    <Typography
                                        variant="h5"
                                        component="h3"
                                        className="fw-bold my-3 mb-2 c-f"
                                        sx={{ lineHeight: 1.2 }}
                                    >
                                        {area.title}
                                    </Typography>
                                    <Typography variant="body2" className="text-grey">
                                        {area.description}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>

            {/* 3. GLOBAL EXPANSION + MARKETS -------------------------- */}
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
                    <Grid container spacing={2}>
                        {MARKETS.map((market) => (
                            <Grid
                                data-aos="fade-up"
                                key={market}
                                size={{ xs: 6, sm: 4, md: 3 }}
                            >
                                <Box className="border border-light border-10 text-white text-center p-3 h-100 d-flex align-items-center justify-content-center gap-2">
                                    <PublicOutlined fontSize="small" />
                                    {market}
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>

            {/* 4. CORPORATE TRAINING ---------------------------------- */}
            <Box className="mx-2 mx-md-4 my-5">
                <Grid container spacing={3}>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Box className="d-flex align-items-start gap-4">
                            <Box className="bg-light-purple p-3 border-50">
                                <School className="text-main" sx={{ fontSize: "48px" }} />
                            </Box>
                            <Box>
                                <Box className="mb-2">
                                    <Typography
                                        variant="body2"
                                        className="text-main fw-bold mb-1"
                                    >
                                        CORPORATE TRAINING
                                    </Typography>
                                    <Typography
                                        variant="h4"
                                        component="h2"
                                        className="fw-medium c-f"
                                    >
                                        Empowering Talent
                                    </Typography>
                                </Box>
                                <Typography variant="body1" className="text-grey">
                                    Training that connects learning to real-world results,
                                    from corporate workforces to university campuses, through
                                    practical, case-study-driven programs.
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid size={{ xs: 12, md: 8 }}>
                        <Grid container spacing={2}>
                            {trainingAudiences.map((audience) => (
                                <Grid
                                    data-aos="fade-up"
                                    key={audience.id}
                                    size={{ xs: 12, sm: 4 }}
                                >
                                    <Box
                                        className="p-3 bg-white border-10 h-100"
                                        sx={cardSx}
                                    >
                                        <Box className="bg-light-purple p-2 border-50 d-inline-flex">
                                            {audience.icon}
                                        </Box>
                                        <Typography
                                            variant="h6"
                                            component="h3"
                                            className="fw-bold my-2 c-f"
                                            sx={{ lineHeight: 1.2 }}
                                        >
                                            {audience.title}
                                        </Typography>
                                        <Typography variant="body2" className="text-grey">
                                            {audience.description}
                                        </Typography>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>

                    <Grid size={12}>
                        <Typography className="fw-medium c-f mb-2" data-aos="fade-up">
                            Sectors we train across
                        </Typography>
                        <Box className="d-flex flex-wrap gap-2" data-aos="fade-up">
                            {SECTORS.map((sector:any) => (
                                <Box
                                    key={sector}
                                    className="bg-light-purple px-3 py-1 fs-14"
                                    sx={{ borderRadius: "999px" }}
                                >
                                    {sector}
                                </Box>
                            ))}
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            {/* 5. OVERSEAS EDUCATION + GLOBAL MOBILITY + DISCLAIMER --- */}
            <Grid container spacing={3} className="p-4 py-5 bg-grey">
                <Grid
                    size={{ xs: 12, md: 4 }}
                    className="d-flex align-items-start gap-4"
                >
                    <Box className="bg-light-purple p-3 border-50">
                        <PublicOutlined className="text-main" sx={{ fontSize: "48px" }} />
                    </Box>
                    <Box>
                        <Typography variant="body2" className="text-main fw-bold mb-1">
                            OVERSEAS EDUCATION & GLOBAL MOBILITY
                        </Typography>
                        <Typography
                            variant="h4"
                            component="h2"
                            className="fw-medium c-f"
                        >
                            Guidance for Studying and Setting Up Abroad
                        </Typography>
                    </Box>
                </Grid>

                <Grid size={{ xs: 12, md: "grow" }}>
                    <Grid container spacing={2}>
                        {mobilityServices.map((service) => (
                            <Grid
                                data-aos="fade-up"
                                key={service.id}
                                size={{ xs: 12, sm: 6 }}
                            >
                                <Box className="p-3 bg-white border-10 h-100" sx={cardSx}>
                                    <Box className="bg-light-purple p-2 border-50 d-inline-flex">
                                        {service.icon}
                                    </Box>
                                    <Typography
                                        variant="h5"
                                        component="h3"
                                        className="fw-bold my-3 mb-2 c-f"
                                        sx={{ lineHeight: 1.2 }}
                                    >
                                        {service.title}
                                    </Typography>
                                    <Typography variant="body2" className="text-grey">
                                        {service.description}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>

                    <Box
                        className="p-3 mt-3 border-10 bg-white"
                        data-aos="fade-up"
                        sx={{ borderLeft: "4px solid var(--primary-color)" }}
                    >
                        <Typography className="fw-medium c-f" gutterBottom>
                            Important note
                        </Typography>
                        <Typography className="fs-14">
                            We operate strictly as corporate growth advisors, not visa
                            agencies. No member of our firm works as a visa agent.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Services;