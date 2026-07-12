import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import about1 from '../Assets/Images/About/about1.png'
import { Award, BadgeCheck, Brain, BriefcaseBusiness, ChartColumnIncreasing, ChartPie, ChessKnight, Cog, Cpu, EyeDashed, Globe, ShieldCheck, Target, Users } from "lucide-react";
import { ArrowForward } from '@mui/icons-material';
import eart from '../Assets/Images/earth2.png'


function AboutUs() {
    const journeyTimeline = [
        {
            year: "2010",
            title: "The Beginning",
            description:
                "Our journey started with a simple mission – to help businesses grow beyond boundaries.",
        },
        {
            year: "2015",
            title: "Expanding Horizons",
            description:
                "Expanded our services and reached clients across multiple countries.",
        },
        {
            year: "2020",
            title: "Global Impact",
            description:
                "Strengthened our global presence and empowered 500+ businesses worldwide.",
        },
        {
            year: "Today",
            title: "Building the Future",
            description:
                "Continuing to innovate, collaborate and create long-term value for our clients.",
        },
    ];

    const services = [
        {
            title: "Business Strategy",
            description:
                "Crafting strategies that drive growth, efficiency and long-term success.",
            icon: ChessKnight,
        },
        {
            title: "Market Expansion",
            description:
                "Helping businesses enter new markets and scale globally with confidence.",
            icon: Globe,
        },
        {
            title: "Operational Excellence",
            description:
                "Optimizing processes to improve productivity and maximize performance.",
            icon: Cog,
        },
        {
            title: "Financial Advisory",
            description:
                "Providing financial insights and solutions for sustainable business growth.",
            icon: ChartColumnIncreasing,
        },
        {
            title: "Compliance & Legal",
            description:
                "Ensuring regulatory compliance and sound legal practices.",
            icon: ShieldCheck,
        },
        {
            title: "Technology Enablement",
            description:
                "Leveraging technology and innovation to accelerate business transformation.",
            icon: Cpu,
        },
    ];

    const leadershipData = [
        {
            name: "Arjun Mehta",
            designation: "CEO & Co-Founder",
            description:
                "20+ years in strategic consulting and global business development.",
            image: "/images/team/team-1.jpg",
        },
        {
            name: "Priya Sharma",
            designation: "Managing Partner",
            description:
                "Expert in market expansion and operational transformation.",
            image: "/images/team/team-2.jpg",
        },
        {
            name: "Rahul Verma",
            designation: "Director – Strategy",
            description:
                "Specializes in business strategy, analytics and performance improvement.",
            image: "/images/team/team-3.jpg",
        },
    ];
    return (
        <Box sx={{ mt: 5 }}>
            <Grid container>
                <Grid size={{ xs: 12, md: 6 }} sx={{ pb: { xs: 0, md: 10 }, pt: 5 }}>
                    <Typography className='text-main fw-medium fs-20' data-aos="fade-up" gutterBottom sx={{ letterSpacing: "2px" }}>ABOUT US</Typography>
                    <Typography className='fw-medium fs-52' sx={{ whiteSpace: { xs: "normal", md: "nowrap" } }} data-aos="fade-up">Commited to Your Growth</Typography>
                    <Typography className='fw-medium text-main mb-3 fs-52' data-aos="fade-up">Driven by Purpose.</Typography>
                    <Typography className='fs-16' data-aos="fade-up">NYMPTH International LLP is a global consulting firm <br /> dedicated to helping businesses evolve, expand <br /> and enhance in ever changing world.</Typography>
                </Grid>
                <Grid className='d-none d-md-inline-block' data-aos="zoom-in" size={{ xs: 0, md: 6 }}
                    // sx={{background:`url(${eart2})`, backgroundSize:'100%', backgroundPosition:'top center'}}
                    sx={{
                        position: "relative",
                        background: `url(${about1})`,
                        backgroundSize: "100%",
                        backgroundPosition: "center left",
                        backgroundRepeat: "no-repeat",
                        overflow: "hidden",
                        "&::before": {
                            content: '""',
                            position: "absolute",
                            inset: 0,
                            background: `
        linear-gradient(
          to right,
          var(--secondary-dark-color) 0%,
          rgba(4, 4, 20, 0.35) 15%,
          rgba(4, 4, 20, 0.25) 30%,
          rgba(4, 4, 20, 0.15) 45%,
          transparent 65%
        )
      `,
                            pointerEvents: "none",
                        },
                    }}
                >
                </Grid>
                <Grid size={12} data-aos="fade-up" className='d-inline-block d-md-none'>
                    <Box component={'img'} width={'100%'} height={'auto'} src={about1} />
                </Grid>
            </Grid>
            <Grid container spacing={2} className='mt-3'>
                <Grid className='border-blue border-10 glow-card p-4 px-5' data-aos="fade-up" size={{ xs: 12, md: 6, lg: 3 }}>
                    <Box className='d-flex justify-cotent-center'>
                        <Target style={{ height: '70px', width: "70px", borderRadius: '50%' }} className='text-main border-main p-2 mb-3 mx-auto' />
                    </Box>
                    <Typography className='fw-medium text-center fs-20' gutterBottom>Our Mission</Typography>
                    <Typography className='fs-16 text-center'>Empowering business with supportive stretegies and global opportunities.</Typography>
                </Grid>

                <Grid className='border-blue border-10 glow-card p-4 px-5' data-aos="fade-up" size={{ xs: 12, md: 6, lg: 3 }}>
                    <Box className='d-flex justify-cotent-center'>
                        <EyeDashed style={{ height: '70px', width: "70px", borderRadius: '50%' }} className='text-main border-main p-2 mb-3 mx-auto' />
                    </Box>
                    <Typography className='fw-medium text-center fs-20' gutterBottom>Our Vision</Typography>
                    <Typography className='fs-16 text-center'>To be a global invest in consulting  and business expansion services.</Typography>
                </Grid>

                <Grid className='border-blue border-10 glow-card p-4 px-5' data-aos="fade-up" size={{ xs: 12, md: 6, lg: 3 }}>
                    <Box className='d-flex justify-cotent-center'>
                        <BadgeCheck style={{ height: '70px', width: "70px", borderRadius: '50%' }} className='text-main border-main p-2 mb-3 mx-auto' />
                    </Box>
                    <Typography className='fw-medium text-center fs-20' gutterBottom>Our Values</Typography>
                    <Typography className='fs-16 text-center'>In depth Business proposal overlution and actionable strategy planing for sustainable growth</Typography>
                </Grid>

                <Grid className='border-blue border-10 glow-card p-4 px-5' data-aos="fade-up" size={{ xs: 12, md: 6, lg: 3 }}>
                    <Box className='d-flex justify-cotent-center'>
                        <Brain style={{ height: '70px', width: "70px", borderRadius: '50%' }} className='text-main border-main p-2 mb-3 mx-auto' />
                    </Box>
                    <Typography className='fw-medium text-center fs-20' gutterBottom>Our Approch</Typography>
                    <Typography className='fs-16 text-center'>Seamless Incorportion  & Setup of business, branches & subboundries across the globe</Typography>
                </Grid>
            </Grid>
            <Grid container sx={{ gap: { xs: 5, md: 0 } }} className='mt-5 justify-content-between'>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Typography className='fw-medium fs-24 mb-3' data-aos="fade-up">Our Journey</Typography>
                    <Typography className='fs-16' data-aos="fade-up">Founded with a vision to bridge business with global opportunities. NYMPTH Intenational LLP has grown into a trusted partner for startups, SMEs and Corporate clients worldwide.</Typography>
                    <Grid container className='mt-4'>
                        <Grid data-aos="zoom-in" size={{ xs: 12, sm: 6, md: 4 }}>
                            <Box className='d-flex h-100 align-items-center gap-3 border-blue justify-content-center p-3'>
                                <BriefcaseBusiness style={{ height: '50px', width: 'auto' }} className='text-main' />
                                <Box>
                                    <Typography className='fw-medium fs-28'>15+</Typography>
                                    <Typography className='fs-14'>Years of Experience</Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid data-aos="zoom-in" size={{ xs: 12, sm: 6, md: 4 }}>
                            <Box className='d-flex h-100 align-items-center gap-3 border-blue justify-content-center p-3'>
                                <Users style={{ height: '50px', width: 'auto' }} className='text-main' />
                                <Box>
                                    <Typography className='fw-medium fs-28'>500+</Typography>
                                    <Typography className='fs-14'>Business Empowered</Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid data-aos="zoom-in" size={{ xs: 12, sm: 6, md: 4 }}>
                            <Box className='d-flex h-100 align-items-center gap-3 border-blue justify-content-center p-3'>
                                <Globe style={{ height: '50px', width: 'auto' }} className='text-main' />
                                <Box>
                                    <Typography className='fw-medium fs-28'>25+</Typography>
                                    <Typography className='fs-14'>Countries Served</Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid data-aos="zoom-in" size={{ xs: 12, sm: 6, md: 4 }}>
                            <Box className='d-flex h-100 align-items-center gap-3 border-blue justify-content-center p-3'>
                                <ChartPie style={{ height: '50px', width: 'auto' }} className='text-main' />
                                <Box>
                                    <Typography className='fw-medium fs-28'>98%</Typography>
                                    <Typography className='fs-14'>Client Retentions</Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid data-aos="zoom-in" size={{ xs: 12, sm: 6, md: 4 }}>
                            <Box className='d-flex align-items-center gap-3 border-blue justify-content-center p-3'>
                                <Users style={{ height: '50px', width: 'auto' }} className='text-main' />
                                <Box>
                                    <Typography className='fw-medium fs-28'>300+</Typography>
                                    <Typography className='fs-14'>Experts and professionals</Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid data-aos="zoom-in" size={{ xs: 12, sm: 6, md: 4 }}>
                            <Box className='d-flex h-100 align-items-center gap-3 border-blue justify-content-center p-3'>
                                <Award style={{ height: '50px', width: 'auto' }} className='text-main' />
                                <Box>
                                    <Typography className='fw-medium fs-28'>20+</Typography>
                                    <Typography className='fs-14'>Industries Covered</Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid size={{ xs: 12, md: 5 }}>
                    <Box className='position-relative' data-aos="fade-down">
                        {/* Vertical Line */}
                        <Box
                            className='position-absolute bg-main'
                            sx={{
                                position: "absolute",
                                left: 3,
                                top: 12,
                                bottom: 20,
                                width: "2px",
                                background: "var(--primary-color)",
                            }}
                        />

                        {journeyTimeline.map((item, index) => (
                            <Box
                                className='d-flex gap-4 mb-5 align-items-start'
                                data-aos="fade-down"
                                sx={{ position: 'relative' }}
                                key={index}>
                                <Box
                                    sx={{
                                        position: "absolute",
                                        left: -5,
                                        top: 12,
                                        width: 18,
                                        height: 18,
                                        borderRadius: "50%",
                                        bgcolor: "var(--primary-color)",
                                        border: "3px solid var(--secondary-dark-color)",
                                        zIndex: 2,
                                    }}
                                />

                                <Box
                                    className="border-blue"
                                    sx={{
                                        // minWidth: 90,
                                        textAlign: "center",
                                        py: 1,
                                        px: 2,
                                        borderRadius: "12px",
                                        ml: 5,
                                    }}
                                >
                                    <Typography
                                        className="fw-medium text-main fs-24 text-center">
                                        {item.year}
                                    </Typography>
                                </Box>

                                {/* Content */}
                                <Box>
                                    <Typography className="fw-medium fs-24 mb-1">
                                        {item.title}
                                    </Typography>

                                    <Typography className="fs-16" >
                                        {item.description}
                                    </Typography>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Grid>
            </Grid>
            <Grid container className='mt-5'>
                <Box className='p-4 border-10 border-blue card'>
                    <Grid container spacing={5}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Typography className='fw-medium fs-20 text-main' data-aos="fade-up" gutterBottom>WHY CHOOSE NYMPH INTERNATIONAL LLP?</Typography>
                            <Typography className='fw-medium fs-24' data-aos="fade-up" gutterBottom>Your Trusted Partner in Global Business Success</Typography>
                            <Typography className='fs-16' data-aos="fade-up">We Combine global expertise with local insights to deliver practical solutions that drive real results. </Typography>
                        </Grid>
                        <Grid size={{ xs: 12, md: 'grow' }}>
                            <Grid container spacing={3}>
                                <Grid size={{ xs: 12, md: 4 }} data-aos="fade-up">
                                    <Box className='d-flex align-items-center gap-3'>
                                        <Box className='border-main border-10' sx={{ height: '50px', width: '50px' }}></Box>
                                        <Typography sx={{ flex: 1 }} className='fs-14'>Global Expertise Local Understanding</Typography>
                                    </Box>
                                </Grid>
                                <Grid size={{ xs: 12, md: 4 }} data-aos="fade-up">
                                    <Box className='d-flex align-items-center gap-3'>
                                        <Box className='border-main border-10' sx={{ height: '50px', width: '50px' }}></Box>
                                        <Typography sx={{ flex: 1 }} className='fs-14'>Tailored Strategies for Every Business</Typography>
                                    </Box>
                                </Grid>
                                <Grid size={{ xs: 12, md: 4 }} data-aos="fade-up">
                                    <Box className='d-flex align-items-center gap-3'>
                                        <Box className='border-main border-10' sx={{ height: '50px', width: '50px' }}></Box>
                                        <Typography sx={{ flex: 1 }} className='fs-14'>End to End Support</Typography>
                                    </Box>
                                </Grid>
                                <Grid size={{ xs: 12, md: 4 }} data-aos="fade-up">
                                    <Box className='d-flex align-items-center gap-3'>
                                        <Box className='border-main border-10' sx={{ height: '50px', width: '50px' }}></Box>
                                        <Typography sx={{ flex: 1 }} className='fs-14'>Opportunies for every business</Typography>
                                    </Box>
                                </Grid>
                                <Grid size={{ xs: 12, md: 4 }} data-aos="fade-up">
                                    <Box className='d-flex align-items-center gap-3'>
                                        <Box className='border-main border-10' sx={{ height: '50px', width: '50px' }}></Box>
                                        <Typography sx={{ flex: 1 }} className='fs-14'>Result Oriented Approch</Typography>
                                    </Box>
                                </Grid>
                                <Grid size={{ xs: 12, md: 4 }} data-aos="fade-up">
                                    <Box className='d-flex align-items-center gap-3'>
                                        <Box className='border-main border-10' sx={{ height: '50px', width: '50px' }}></Box>
                                        <Typography sx={{ flex: 1 }} className='fs-14'>Confidientilaity & Integrity</Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
            <Box className='mt-5'>
                <Typography className='fs-24 mb-3' data-aos="fade-up">Our Experties</Typography>
                <Grid container spacing={2}>
                    {services.map((service, index) => {
                        const Icon = service.icon;

                        return (
                            <Grid data-aos="fade-up" key={index} size={{ xs: 12, sm: 6, lg: 3, xl: 2 }}>
                                <Box
                                    className="border-blue h-100 text-center border-10 glow-card p-4"
                                >
                                    <Icon
                                        size={56}
                                        strokeWidth={1}
                                        className="text-main mb-2"
                                    />

                                    <Typography className="fw-medium fs-20" gutterBottom>
                                        {service.title}
                                    </Typography>

                                    <Typography className="fs-16">
                                        {service.description}
                                    </Typography>
                                </Box>
                            </Grid>
                        );
                    })}
                </Grid>
            </Box>
            <Grid container spacing={3} className="mt-5" sx={{ alignItems: 'start' }}>
                <Grid size={{ xs: 12, lg: 3 }}>
                    <Box className='h-100 d-flex flex-column justify-content-center'>
                        <Typography data-aos="fade-up" className="fw-medium fs-24">
                            Our Leadership
                        </Typography>

                        <Typography data-aos="fade-up" className="fs-16 mt-3">
                            A team of experienced professionals passionate about empowering
                            businesses and creating impact.
                        </Typography>
                    </Box>
                </Grid>

                <Grid size={{ xs: 12, lg: 9 }}>
                    <Grid container spacing={3}>
                        {leadershipData.map((member, index) => (
                            <Grid
                            data-aos="fade-up"
                                key={index}
                                size={{ xs: 12, sm: 6, md: 4, xl: 3 }}
                            >
                                <Box className="border-blue overflow-hidden glow-card h-100">
                                    <Box className='w-100 border' sx={{ height: "270px" }}>
                                        <Box
                                            component="img"
                                            className='w-100'
                                            src={member.image}
                                            alt={member.name}
                                            sx={{
                                                // width: "100%",
                                                height: 210,
                                                // border:'1px solid red',
                                                objectFit: "cover",
                                            }}
                                        />
                                    </Box>

                                    <Box className='p-3'>
                                        <Typography className="fw-medium fs-20">
                                            {member.name}
                                        </Typography>

                                        <Typography className='text-main fs-16'>
                                            {member.designation}
                                        </Typography>

                                        <Typography
                                            className="mt-3"
                                            sx={{
                                                color: "#B7B7B7",
                                                fontSize: "16px",
                                                lineHeight: 1.7,
                                            }}
                                        >
                                            {member.description}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>

            <Grid size={12} data-aos="zoom-in" className='mt-5 p-3 px-md-5 border-blue  border-10'
                sx={{
                    position: "relative",
                    background: `url(${eart})`,
                    backgroundSize: "700px 500px",
                    backgroundPosition: "top right",
                    backgroundPositionY: '-100px',
                    backgroundRepeat: "no-repeat",
                    overflow: "hidden",
                    "&::before": {
                        content: '""',
                        position: "absolute",
                        inset: 0,
                        background: `
        linear-gradient(
          to left,
          var(--secondary-dark-color) 0%,
          rgba(4, 4, 20, 0.35) 15%,
          rgba(4, 4, 20, 0.25) 30%,
          rgba(4, 4, 20, 0.15) 45%,
          transparent 65%
        )
      `,
                        pointerEvents: "none",
                    },

                }}
            >
                <Grid container data-aos="fade-up" sx={{
                    gap: 2,
                    justifyContent: 'space-between', alignItems: 'center'
                }}
                >
                    <Grid size={{xs:12,md:'auto'}}>
                        <Typography className='fs-20 fw-medium'>Ready to Take Your Business Global?</Typography>
                        <Typography className='fs-14'>Let's uild your success story together.</Typography>
                    </Grid>
                    <Grid size={"auto"}>
                        <Button className='btn-main px-3 text-white py-2'>Book a free Cosultation <ArrowForward /></Button>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default AboutUs
