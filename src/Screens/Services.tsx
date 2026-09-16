import { AccountBalanceWallet, AccountBalanceWalletOutlined, ArrowRightAlt, CampaignOutlined, CheckCircleOutlined, Foundation, MemoryOutlined, PeopleAltOutlined, School, SignalCellularAltOutlined, SignalCellularAltRounded, TrackChangesOutlined, TrendingUpOutlined, WebhookOutlined } from '@mui/icons-material'
import { Box, Button, Grid, List, ListItem, Typography } from '@mui/material'
import React from 'react'

function Services() {

    const services = [
        {
            id: 1,
            title: "Strategy & Growth Consulting",
            description:
                "Drive long-term growth with proven strategies and market insights.",
            icon: <TrackChangesOutlined className="text-main fs-32" />,
        },
        {
            id: 2,
            title: "Financial Consulting",
            description:
                "Optimize financial preformance with expert advice and planning",
            icon: <AccountBalanceWalletOutlined className="text-main fs-32" />,
        },
        {
            id: 3,
            title: "Operations & Supply Chain Consutling",
            description:
                "Improve efficiency and streamline operations for better results.",
            icon: <WebhookOutlined className="text-main fs-32" />,
        },
        {
            id: 4,
            title: "Technology & Digital Transformation",
            description:
                "Leverage technology to innovate and stay ahead in a digital world.",
            icon: <MemoryOutlined className="text-main fs-32" />,
        },
        {
            id: 5,
            title: "Human resources Consulting",
            description:
                "Build Stronger teams with people-centric HR strategies.",
            icon: <PeopleAltOutlined className="text-main fs-32" />,
        },
        {
            id: 6,
            title: "Sales & Marketing Consulting",
            description:
                "Enhance your brand, reach and revenue with data-driven strategies.",
            icon: <CampaignOutlined className="text-main fs-32" />,
        },
    ];

    return (
        <Box>
            <Grid container sx={{ height: { xs: "fit-content", md: 'calc(100vh - 80px)' } }} className='position-relative g-bg'>
                <Grid size={{ xs: 12, md: 5.5 }} className='my-0 my-md-auto' sx={{ px: { xs: 2, md: 3 }, pt: 5, zIndex: 2 }}>
                    <Typography className='text-second fw-medium fs-20' data-aos="fade-up" gutterBottom sx={{ letterSpacing: "2px" }}>OUR SERVICES</Typography>
                    <Typography className='fw-medium fs-58 c-f mt-2' sx={{ whiteSpace: { xs: "normal", md: "nowrap" } }} data-aos="fade-up">Comprehensive Solutions</Typography>
                    <Typography className='fw-medium mb-3 fs-58 c-f' data-aos="fade-up" sx={{ whiteSpace: { xs: "auto", md: 'nowrap' } }}>for a <span className='text-main' style={{ fontStyle: 'italic' }}>Global Future</span></Typography>
                    <Typography data-aos="fade-up">At NYMPH International LLp, we offre a range of specialized services designed to help individuals and businesses achieve their goals across borders. From training and consulting to visa support, we are your trusted partner in global growth.</Typography>
                </Grid>
                <Grid size={{ xs: 12, md: 6.5 }} className='d-none d-md-inline-block right-side' data-aos="zoom-in">
                    <Box className='hero-section h-100 w-100'></Box>
                </Grid>
            </Grid>

            <Box className='mt-5'>
                <Grid container spacing={1.5} className='mx-2 mx-md-4'>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Box className='d-flex align-items-start gap-4'>
                            <Box className='bg-light-purple p-3 border-50'>
                                <School className='text-main' sx={{ fontSize: '48px' }} />
                            </Box>
                            <Box>
                                <Box className='mb-2'>
                                    <Typography variant='body2' className='text-main fw-bold mb-1'>CORPORATE TRAINING</Typography>
                                    <Typography variant='h4' className='fw-medium c-f'>Empowering Talent</Typography>
                                </Box>
                                <Typography variant='body1' className='text-grey'>We provides training at different colleges/universities world wide via and also provide training to different corporate sectors.</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box className='border border-primary border-10 h-100 w-100'></Box>
                    </Grid>
                    <Grid size={{ xs: 12, md: 2 }}>
                        <Box className='p-3 bg-grey border-10'>
                            <Box className='d-flex align-items-center gap-2'>
                                <Box className='bg-light-purple p-2 border-50'>
                                    <Foundation className='text-main' />
                                </Box>
                                <Box>
                                    <Typography variant='subtitle2' className='text-grey'>Global <br /> Unviversities</Typography>
                                </Box>
                            </Box>
                            <hr />
                            <Box className='d-flex align-items-center gap-2'>
                                <Box className='bg-light-purple p-2 border-50'>
                                    <PeopleAltOutlined className='text-main' />
                                </Box>
                                <Box>
                                    <Typography variant='subtitle2' className='text-grey'>Corporate <br /> Sectors</Typography>
                                </Box>
                            </Box>
                            <hr />
                            <Box className='d-flex align-items-center gap-2'>
                                <Box className='bg-light-purple p-2 border-50'>
                                    <TrendingUpOutlined className='text-main' />
                                </Box>
                                <Box>
                                    <Typography variant='subtitle2' className='text-grey'>Practical <br /> Learning</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

                <Grid container spacing={2} className='p-4 mt-md-5 py-5 bg-grey'>
                    <Grid size={{ xs: 12, md: 4 }} className='d-flex gap-3 align-items-start'>
                        <Box className='bg-light-purple p-3 border-50'>
                            <SignalCellularAltOutlined className='text-main' sx={{ fontSize: '48px' }} />
                        </Box>
                        <Box>
                            <Box>
                                <Typography className="fs-16  text-main fw-bold" data-aos="fade-up" gutterBottom>BUSINESS CONSULTING</Typography>
                                <Typography variant='h4' className="fw-bold my-3 mt-1 c-f" data-aos="fade-up">Stretegic Guidance<br />for Sustainable Growth</Typography>
                                <Typography className="fs-16 text-grey" data-aos="fade-up">We help business navigate challenges and unlock new opportunities through experts consulting and tailored strategies.</Typography>
                            </Box>
                            <Box>
                                {/* <a href="#" className="text-main">Explore  <ArrowRightAlt /></a> */}
                            </Box>
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, md: 'grow' }}>
                        <Grid container spacing={2}>
                            {services.map((service) => (
                                <Grid
                                    data-aos="fade-up"
                                    key={service.id}
                                    size={{ xs: 12, sm: 6, md: 4 }}
                                >
                                    <Box
                                        className="p-3 bg-white border-10 h-100"
                                        sx={{
                                            border: "1px solid #F1F1F1",
                                            transition: "all .3s ease",
                                            "&:hover": {
                                                transform: "translateY(-6px)",
                                                boxShadow: "0 10px 30px var(--primary-light-color)",
                                            },
                                        }}
                                    >
                                        <Box className="p-2 border-50 bg-light-purple d-inline-flex">
                                            {service.icon}
                                        </Box>

                                        <Typography
                                            variant="h5"
                                            className="fw-bold my-3 mb-2 c-f"
                                            sx={{ lineHeight: 1.2 }}
                                        >
                                            {service.title}
                                        </Typography>

                                        <Typography
                                            variant="body2"
                                            // color="text.secondary"
                                            className='text-grey'
                                        // sx={{ lineHeight: 1.8 }}
                                        >
                                            {service.description}
                                        </Typography>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container spacing={1.5} className='mx-2 mx-md-4 my-4'>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Box className='d-flex align-items-start gap-4'>
                            <Box className='bg-light-purple p-3 border-50'>
                                <School className='text-main' sx={{ fontSize: '48px' }} />
                            </Box>
                            <Box>
                                <Box className='mb-2'>
                                    <Typography variant='body2' className='text-main fw-bold mb-1'>VISAS</Typography>
                                    <Typography variant='h4' className='fw-medium c-f'>Your Global Education Partner</Typography>
                                </Box>
                                <Typography variant='body1' className='text-grey'>We support students in finding colleges/universities world wide as per their education qulaifications for further education.</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid className='bg-grey d-flex flex-md-row flex-column align-items-center gap-2' size={{ xs: 12, md: 8 }}>
                        <Box className='border border-primary border-10 h-100 w-50'></Box>
                        <Box className='p-2'>
                            <Typography variant='h5' className='text-main mb-1 fw-medium'>Our Visa Services are Available For</Typography>
                            <Grid container spacing={2} className='mt-3 align-items-stretch'>
                                <Grid size={{xs:'grow'}} >
                                    <Box className='w-100 border border-50' sx={{height:'80px'}}></Box>
                                </Grid>
                                <Grid  size={'auto'}>
                                    <hr className='h-100 border m-0' />
                                </Grid>
                                <Grid size={{xs:'grow'}} >
                                    <Box className='w-100 border border-50' sx={{height:'80px'}}></Box>
                                </Grid>
                                <Grid  size={'auto'}>
                                    <hr className='h-100 border m-0' />
                                </Grid>
                                <Grid size={{xs:'grow'}} >
                                    <Box className='w-100 border border-50' sx={{height:'80px'}}></Box>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2} className='mt-3 align-items-stretch'>
                                <Grid size={{xs:'grow'}} >
                                    <Box className='w-100 border border-50' sx={{height:'80px'}}></Box>
                                </Grid>
                                <Grid  size={'auto'}>
                                    <hr className='h-100 border m-0' />
                                </Grid>
                                <Grid size={{xs:'grow'}} >
                                    <Box className='w-100 border border-50' sx={{height:'80px'}}></Box>
                                </Grid>
                                <Grid  size={'auto'}>
                                    <hr className='h-100 border m-0' />
                                </Grid>
                                <Grid size={{xs:'grow'}} >
                                    <Box className='w-100 border border-50' sx={{height:'80px'}}></Box>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2} className='mt-3 align-items-stretch'>
                                <Grid size={{xs:'grow'}} >
                                    <Box className='w-100 border border-50' sx={{height:'80px'}}></Box>
                                </Grid>
                                <Grid  size={'auto'}>
                                    <hr className='h-100 border m-0' />
                                </Grid>
                                <Grid size={{xs:'grow'}} >
                                    <Box className='w-100 border border-50' sx={{height:'80px'}}></Box>
                                </Grid>
                                <Grid  size={'auto'}>
                                    <hr className='h-100 border m-0' />
                                </Grid>
                                <Grid size={{xs:'grow'}} >
                                    <Box className='w-100 border border-50' sx={{height:'80px'}}></Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default Services
