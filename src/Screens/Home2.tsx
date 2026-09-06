import {
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Divider,
    Grid,
    IconButton,
    List,
    ListItem,
    Typography,
} from "@mui/material";
import { ArrowForward, ArrowRightAlt, BorderBottom, CalendarMonthOutlined, CampaignOutlined, CheckCircleOutlined, DescriptionOutlined, FactCheckOutlined, GroupOutlined, KeyboardArrowLeft, KeyboardArrowRight, PeopleOutlineOutlined, PublicOutlined, RocketLaunchOutlined, SettingsOutlined, TokenOutlined, TrackChangesOutlined, TrendingUpOutlined } from "@mui/icons-material";
import map from '../Assets/Images/map.png'
import Counter from "../Component/Counter";
import { Link } from "react-router-dom";
import blog1 from '../Assets/Images/earth.png'
import blog2 from '../Assets/Images/earth2.png'
import blog3 from '../Assets/Images/home1.png'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function Home2() {


    const companies = [
        {
            id: 1,
            name: "Tech Nova",
            type: "SOLUTIONS",
        },
        {
            id: 2,
            name: "Future Edge",
            type: "TECHNOLOGIES",
        },
        {
            id: 3,
            name: "Digital Sphere",
            type: "CONSULTING",
        },
        {
            id: 4,
            name: "Innovix Labs",
            type: "INNOVATIONS",
        },
        {
            id: 5,
            name: "NextGen Systems",
            type: "SERVICES",
        },
    ];

    const services = [
        {
            id: 1,
            title: "Business Consulting",
            description:
                "Strategic solutions to improve performance and drive long-term growth.",
            icon: <GroupOutlined className="text-white fs-32" />,
        },
        {
            id: 2,
            title: "Finance Consulting",
            description:
                "Optimize financial strategy, manage risks and improve profitability.",
            icon: <DescriptionOutlined className="text-white fs-32" />,
        },
        {
            id: 3,
            title: "Marketing Strategy",
            description:
                "Build powerful brands and reach the right markets effectively.",
            icon: <CampaignOutlined className="text-white fs-32" />,
        },
        {
            id: 4,
            title: "Human Resources",
            description:
                "Empower your people and build a high-performance culture.",
            icon: <PeopleOutlineOutlined className="text-white fs-32" />,
        },
        {
            id: 5,
            title: "Operations & Production",
            description:
                "Streamline operations and enhance efficiency across your value chain.",
            icon: <SettingsOutlined className="text-white fs-32" />,
        },
        {
            id: 6,
            title: "International Expansion",
            description:
                "Expand globally with our expert support in market entry and compliance.",
            icon: <PublicOutlined className="text-white fs-32" />,
        },
    ];


    const processSteps = [
        {
            no: "01",
            icon: <CalendarMonthOutlined className="fs-36 text-main" />,
            title: "Discover",
            description:
                "We understand your business, goals and challenges.",
        },
        {
            no: "02",
            icon: <FactCheckOutlined className="fs-36 text-main" />,
            title: "Analyze",
            description:
                "We research, evaluate and identify the right opportunities.",
        },
        {
            no: "03",
            icon: <TrackChangesOutlined className="fs-36 text-main" />,
            title: "Strategize",
            description:
                "We create a customised strategy tailored to your business needs.",
        },
        {
            no: "04",
            icon: <RocketLaunchOutlined className="fs-36 text-main" />,
            title: "Execute",
            description:
                "We implement the plan with precision and expert guidance.",
        },
        {
            no: "05",
            icon: <TrendingUpOutlined className="fs-36 text-main" />,
            title: "Grow",
            description:
                "We measure results and support sustainable long-term growth.",
        },
    ];

    const blogs = [
        {
            image: blog1,
            date: "May 30, 2024",
            category: "Global Expansion",
            title: "Top Strategies for Successful Entry",
        },
        {
            image: blog2,
            date: "Apr 28, 2024",
            category: "Business Strategy",
            title: "Building Resilient Businesses in Times",
        },
        {
            image: blog3,
            date: "Apr 15, 2024",
            category: "Finance",
            title: "Financial Planning for Sustainable Growth",
        },
        {
            image: blog1,
            date: "Mar 12, 2024",
            category: "Consulting",
            title: "How Business Consulting Improves Company Performance",
        },
    ];
    return (
        <Box>
            <Grid container sx={{height: {xs:"fit-content",md:'calc(100vh - 80px)'}}} className='position-relative g-bg'>
                <Grid size={{ xs: 12, md: 5.5 }} className='my-0 my-md-auto' sx={{ px: {xs:2,md:3}, pt: 5, zIndex: 2 }}>
                    <Typography className='text-second fw-medium fs-20' data-aos="fade-up" gutterBottom sx={{ letterSpacing: "2px" }}>GLOBAL THINKING LOCAL EXPERTISE</Typography>
                    <Typography className='fw-medium fs-58 c-f mt-2' sx={{ whiteSpace: { xs: "normal", md: "nowrap" } }} data-aos="fade-up">We Build Businesses</Typography>
                    <Typography className='fw-medium mb-3 fs-58 c-f' data-aos="fade-up" sx={{whiteSpace:{xs:"auto",md:'nowrap'}}}><span className='text-main' style={{fontStyle:'italic'}}>That Build</span> the world</Typography>
                    <Typography data-aos="fade-up">Global Cosulting, Stretegic Solutions & International <br /> Expansion For Sustainable Growth.</Typography>
                    <List className='d-flex flex-column flex-md-row gap-3 gap-md-0  p-0 m-0 mt-3' data-aos="fade-up">
                        <ListItem className='gap-2 m-0 p-0'><CheckCircleOutlined className='text-main' /> Stretegy</ListItem>
                        <ListItem className='gap-2 p-0'><CheckCircleOutlined className='text-main' /> Execusion</ListItem>
                        <ListItem className='gap-2 p-0'><CheckCircleOutlined className='text-main' /> Growth</ListItem>
                        <ListItem className='gap-2 p-0'><CheckCircleOutlined className='text-main' /> Global Presence</ListItem>
                    </List>
                    <Box className='d-flex flex-column flex-md-row gap-1 gap-md-3'>
                        <Button className='btn-main text-white px-4 py-2 mt-4' data-aos="fade-up">
                            Book Free Consultation
                        </Button>
                        <Button variant='outlined' className='btn-outlined-main text-main px-4 py-2 mt-4' data-aos="fade-up">
                            Explore Videos
                        </Button>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 6.5 }} className='d-none d-md-inline-block right-side' data-aos="zoom-in">
                    <Box className='hero-section h-100 w-100'></Box>
                </Grid>
            </Grid>
            <Box className='m-2 m-lg-5'>
                <Typography className="text-main fw-medium fs-20 text-center mb-2" data-aos="fade-up" gutterBottom>TRUSTED BY VISIONARY BUSINESS</Typography>
                <Grid container spacing={2} className='justify-content-center'>
                    {companies.map((company) => (
                        <Grid key={company.id} data-aos="fade-up" size={{ xs: 12, sm: 6, md: 4, lg: "auto" }}>
                            <Box className="d-flex align-items-center gap-2 bg-grey p-3 border-10">
                                <TokenOutlined className="fs-42" />

                                <Box>
                                    <Typography
                                        variant="h6"
                                        className="fw-bold m-0 p-0"
                                        sx={{ lineHeight: "normal" }}
                                    >
                                        {company.name}
                                    </Typography>

                                    <Typography
                                        variant="body2"
                                        className="m-0 p-0"
                                        sx={{ lineHeight: "normal" }}
                                    >
                                        {company.type}
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            <Grid container spacing={2} className='p-4 bg'>
                <Grid size={{ xs: 12, md: 5 }} className='d-flex flex-column justify-content-center align-items-start' sx={{ gap: '100px' }}>
                    <Box>
                        <Typography className="fs-20 fw-medium text-second" data-aos="fade-up" gutterBottom>WHAT WE DO</Typography>
                        <Typography  className="fw-bold my-3 c-f fs-42" data-aos="fade-up">End-to-End Solutions <br /> for <span className="text-main"> Sustainable Growth</span></Typography>
                        <Typography className="fs-16" data-aos="fade-up">From Stretegy to execution, we provide comprehensive consulting services tailored to your business goals.</Typography>
                    </Box>
                    <Box>
                        <a href="#" className="text-main">View All <ArrowRightAlt /></a>
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
                                    <Box className="p-2 border-50 bg-purple d-inline-flex">
                                        {service.icon}
                                    </Box>

                                    <Typography
                                        variant="h5"
                                        className="fw-bold my-3 c-f"
                                        sx={{ lineHeight: 1.2 }}
                                    >
                                        {service.title}
                                    </Typography>

                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{ lineHeight: 1.8 }}
                                    >
                                        {service.description}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>

            <Grid container className='p-2 p-md-4 my-3 bg-dark-purple'>
                <Grid size={{ xs: 12, md: 5 }} className='p-3 p-md-4'>
                    <Typography className="text-white fs-20 fw-medium" data-aos="fade-up">OUR IMPACT</Typography>
                    <Typography variant="h3" className="text-white my-3 c-f" data-aos="fade-up">Creating Impact <br /> Across the Globe</Typography>
                    <hr className="border" data-aos="zoom-in" style={{ width: '70px' }} />
                    <Grid container spacing={3} className='align-items-center'>
                        <Grid size={'auto'}>
                            {/* <Typography variant="h4" className="text-white fw-medium text-center" data-aos="fade-up">500+</Typography> */}
                            <Counter
                                end={500}
                                suffix="+"
                                className="text-white fw-medium text-center"
                            />
                            <Typography className="text-white" variant="body2" data-aos="fade-up">Business <br /> Empowered</Typography>
                        </Grid>
                        <Grid>
                            <hr className="border" data-aos="zoom-in" style={{ height: '70px' }} />
                        </Grid>
                        <Grid size='auto'>
                            {/* <Typography variant="h4" className="text-white fw-medium text-center" data-aos="fade-up">25+</Typography> */}
                            <Counter
                                end={25}
                                suffix="+"
                                className="text-white fw-medium text-center"
                            />
                            <Typography className="text-white" variant="body2" data-aos="fade-up">Countries <br /> Served</Typography>
                        </Grid>
                        <Grid >
                            <hr className="border" data-aos="zoom-in" style={{ height: '70px' }} />
                        </Grid>
                        <Grid size='auto'>
                            {/* <Typography variant="h4" className="text-white fw-medium text-center" data-aos="fade-up">15+</Typography> */}
                            <Counter
                                end={15}
                                suffix="+"
                                className="text-white fw-medium text-center"
                            />
                            <Typography className="text-white" variant="body2" data-aos="fade-up">Years of<br /> Experience</Typography>
                        </Grid>
                        <Grid>
                            <hr className="border" data-aos="zoom-in" style={{ height: '70px' }} />
                        </Grid>
                        <Grid size='auto'>
                            {/* <Typography variant="h4" className="text-white fw-medium text-center" data-aos="fade-up">98%</Typography> */}
                            <Counter
                                end={98}
                                suffix="%"
                                className="text-white fw-medium text-center"
                            />
                            <Typography className="text-white" variant="body2" data-aos="fade-up">Client<br /> Satisfaction</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid size={{ xs: 12, md: 7 }} className='justify-contnet-end overflow-hidden align-items-center'>
                    <Box component={'img'} src={map} data-aos="zoom-in" sx={{height:{xs:"250px",md:'350px'}}} width={'100%'}></Box>
                </Grid>
            </Grid>

            <Grid container className="py-5 px-3 justify-content-center">
                <Grid size={12}>
                    <Typography
                        className="fs-20 text-main fw-medium text-center"
                        data-aos="fade-up"
                    >
                        OUR PROCESS
                    </Typography>

                    <Typography
                        variant="h3"
                        className="fw-medium text-center mb-5 c-f"
                        data-aos="fade-up"
                    >
                        A Proven Process to Achieve Global Success
                    </Typography>
                </Grid>

                <Grid
                    container
                    className='w-100 position-relative justify-content-between'
                >
                    <Box
                        sx={{
                            position: "absolute",
                            display:{xs:"none", md:'inline-block'},
                            top: 30,
                            left: "8%",
                            right: "8%",
                            height: "2px",
                            bgcolor: "var(--primary-light-color)",
                            zIndex: 0,
                        }}
                    />

                    {processSteps.map((step, index) => (
                        <Grid
                            key={index}
                            size={{ xs: 6, sm: 6, md: 2.2 }}
                            className='text-center psoition-relative mb-5 mb-md-0'
                            sx={{
                                zIndex: 1,
                            }}
                        >
                            <Box
                                className='p-2 border-light-purple bg-white border-50 d-inline-block'
                                sx={{ zIndex: 2 }}
                                data-aos="zoom-in"
                            >
                                {step.icon}
                            </Box>

                            <Typography
                                className="text-main fw-bold"
                                sx={{ my: 0.5 }}
                                data-aos="fade-up"
                            >
                                {step.no}
                            </Typography>

                            <Typography
                                variant="h6"
                                className="fw-semibold mb-2"
                                data-aos="fade-up"
                            >
                                {step.title}
                            </Typography>

                            <Typography
                                variant="body2"
                                color="text.secondary"
                                data-aos="fade-up"
                                sx={{
                                    maxWidth: 180,
                                    mx: "auto",
                                    lineHeight: 1.7,
                                }}
                            >
                                {step.description}
                            </Typography>
                        </Grid>
                    ))}
                </Grid>
            </Grid>

            <Grid
                container
                spacing={5}
                className="p-4 w-100 align-items-center"
            >
                {/* Left Content */}
                <Grid size={{ xs: 12, md: 4 }}>
                    <Typography
                        className="text-main fw-medium mb-2 fs-20"
                        data-aos="fade-up"
                    >
                        INSIGHTS THAT DRIVE GROWTH
                    </Typography>

                    <Typography
                        variant="h3"
                        className="fw-medium c-f"
                        data-aos="fade-up"
                    >
                        Latest Insights & <br />
                        Business Trends
                    </Typography>
                </Grid>

                <Grid size={{ xs: 12, md: 8 }} className='position-relative'>
                    <Swiper
                        modules={[Navigation]}
                        navigation={{
                            nextEl: ".blog-next",
                            prevEl: ".blog-prev",
                        }}
                        spaceBetween={20}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1200: {
                                slidesPerView: 3,
                            },
                        }}
                    >
                        {blogs.map((blog, index) => (
                            <SwiperSlide  key={index} className="h-100">
                                <Card
                                    data-aos="fade-up"
                                    elevation={0}
                                    className="border-light-purple h-100"
                                    sx={{
                                        borderRadius: '10px',
                                        transition: ".35s",

                                        "&:hover": {
                                            transform: "translateY(-5px)",
                                            boxShadow: "0 15px 35px var(--primary-light-color)",
                                        },
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={blog.image}
                                    />

                                    <CardContent>
                                        <Typography
                                            variant="body2"
                                        >
                                            {blog.date} &nbsp; • &nbsp; {blog.category}
                                        </Typography>

                                        <Typography
                                            variant="h6"
                                            className="my-1 fw-bold c-f"
                                        >
                                            {blog.title}
                                        </Typography>

                                        <Button
                                            endIcon={<ArrowForward />}
                                            className="p-0 text-main fw-bold"
                                            sx={{
                                                textTransform: 'none',
                                                "&:hover": {
                                                    bgcolor: "transparent",
                                                },
                                            }}
                                        >
                                            Read More
                                        </Button>
                                    </CardContent>
                                </Card>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Navigation Buttons */}
                    <Box
                        sx={{
                            position: "absolute",
                            right: -20,
                            top: "50%",
                            transform: "translateY(-50%)",
                            display: "flex",
                            flexDirection: "column",
                            gap: 2,
                            zIndex: 10,
                        }}
                    >
                        <IconButton
                            className="blog-prev"
                            sx={{
                                bgcolor: "#fff",
                                border: "1px solid #eee",
                                width: 52,
                                height: 52,
                                boxShadow: 2,

                                "&:hover": {
                                    bgcolor: "var(--primary-color)",
                                    color: "#fff",
                                    border: 'none'
                                },
                            }}
                        >
                            <KeyboardArrowLeft />
                        </IconButton>

                        <IconButton
                            className="blog-next"
                            sx={{
                                bgcolor: "#fff",
                                border: "1px solid #eee",
                                width: 52,
                                height: 52,
                                boxShadow: 2,

                                "&:hover": {
                                    bgcolor: "var(--primary-color)",
                                    color: "#fff",
                                    border: 'none'
                                },
                            }}
                        >
                            <KeyboardArrowRight />
                        </IconButton>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}