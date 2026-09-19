// import { Box, Button, Divider, Grid, List, ListItem, Typography } from '@mui/material'
// import React from 'react'
// import about1 from '../Assets/Images/About/about1.png'
// import { Award, BadgeCheck, Brain, BriefcaseBusiness, ChartColumnIncreasing, ChartPie, ChessKnight, Cog, Cpu, EyeDashed, Globe,  ShieldCheck, Target, Users } from "lucide-react";
// import { ArrowForward, CheckCircleOutlined } from '@mui/icons-material';
// import eart from '../Assets/Images/earth2.png'
// import whoweare from '../Assets/Images/WhoWeAre.png'



// function AboutUs2() {
//     const journeyTimeline = [
//         {
//             year: "2010",
//             title: "The Beginning",
//             description:
//                 "Our journey started with a simple mission – to help businesses grow beyond boundaries.",
//         },
//         {
//             year: "2015",
//             title: "Expanding Horizons",
//             description:
//                 "Expanded our services and reached clients across multiple countries.",
//         },
//         {
//             year: "2020",
//             title: "Global Impact",
//             description:
//                 "Strengthened our global presence and empowered 500+ businesses worldwide.",
//         },
//         {
//             year: "Today",
//             title: "Building the Future",
//             description:
//                 "Continuing to innovate, collaborate and create long-term value for our clients.",
//         },
//     ];

//     const services = [
//         {
//             title: "Business Strategy",
//             description:
//                 "Crafting strategies that drive growth, efficiency and long-term success.",
//             icon: ChessKnight,
//         },
//         {
//             title: "Market Expansion",
//             description:
//                 "Helping businesses enter new markets and scale globally with confidence.",
//             icon: Globe,
//         },
//         {
//             title: "Operational Excellence",
//             description:
//                 "Optimizing processes to improve productivity and maximize performance.",
//             icon: Cog,
//         },
//         {
//             title: "Financial Advisory",
//             description:
//                 "Providing financial insights and solutions for sustainable business growth.",
//             icon: ChartColumnIncreasing,
//         },
//         {
//             title: "Compliance & Legal",
//             description:
//                 "Ensuring regulatory compliance and sound legal practices.",
//             icon: ShieldCheck,
//         },
//         {
//             title: "Technology Enablement",
//             description:
//                 "Leveraging technology and innovation to accelerate business transformation.",
//             icon: Cpu,
//         },
//     ];

//     const leadershipData = [
//         {
//             name: "Arjun Mehta",
//             designation: "CEO & Co-Founder",
//             description:
//                 "20+ years in strategic consulting and global business development.",
//             image: "/images/team/team-1.jpg",
//         },
//         {
//             name: "Priya Sharma",
//             designation: "Managing Partner",
//             description:
//                 "Expert in market expansion and operational transformation.",
//             image: "/images/team/team-2.jpg",
//         },
//         {
//             name: "Rahul Verma",
//             designation: "Director – Strategy",
//             description:
//                 "Specializes in business strategy, analytics and performance improvement.",
//             image: "/images/team/team-3.jpg",
//         },
//     ];
//     return (
//         <Box>
//             <Grid container sx={{height: {xs:"fit-content",md:'calc(100vh - 80px)'}}} className='position-relative g-bg pb-3 pb-md-0'>
//                 <Grid size={{ xs: 12, md: 5.5 }} className='my-0 my-md-auto' sx={{ px: { xs: 2, md: 3 }, pt: 5, zIndex: 2 }}>
//                     <Typography className='text-second fw-medium fs-20' data-aos="fade-up" gutterBottom sx={{ letterSpacing: "2px" }}>ABOUT NYMPH INTERNATIONAL</Typography>
//                     <Typography className='fw-medium fs-52 c-f mt-2' sx={{ whiteSpace: { xs: "normal", md: "nowrap" } }} data-aos="fade-up">Building Businesses</Typography>
//                     <Typography className='fw-medium mb-3 fs-52 c-f' data-aos="fade-up" sx={{ whiteSpace: { xs: "auto", md: 'nowrap' } }} > for a <i className='text-main'>Global Future</i></Typography>
//                     <Typography data-aos="fade-up">Nymph International LLP is a strategic advisory and business growth firm helping organizations strengthen their capabilities, improve performance, and explore opportunities beyond their local markets.</Typography>
//                     <Box className='mt-3' sx={{ border: '2px solid var(--primary-color)', width: '75px' }}></Box>
//                 </Grid>
//                 <Grid size={{ xs: 12, md: 6.5 }} className='d-none d-md-inline-block right-side' data-aos="zoom-in">
//                     <Box className='hero-section h-100 w-100'></Box>
//                 </Grid>
//             </Grid>

//             <Grid container className='p-2 p-lg-5' spacing={1.5}>
//                 <Grid size={{ xs: 12, md: 5 }}>
//                     <Typography className="text-main fw-medium fs-20 mb-2" data-aos="fade-up" gutterBottom>WHO WE ARE</Typography>
//                     <Typography className="fw-bold my-3 c-f fs-42" data-aos="fade-up">Empowering Businesses to<span className="text-main">Grow Globally</span></Typography>
//                     <Typography className="fs-16 mb-3" data-aos="fade-up">Nymph International LLP is a strategic advisory and business growth firm providing practical solutions for organizations seeking sustainable growth, operational improvement, professional development, and international expansion.</Typography>
//                     <Typography className="fs-16 mb-3" data-aos="fade-up">As the global expansion entity of Riddhi Management Consultancy, established in 2012 in Ahmedabad, Gujarat, India, Nymph International builds on more than a decade of business consulting experience to help organizations navigate growth opportunities across markets.</Typography>
//                     <Typography className="fs-16" data-aos="fade-up">Our approach combines business expertise, industry knowledge, and practical execution to help businesses move confidently from strategy to results.</Typography>
//                 </Grid>
//                 <Grid size={{ xs: 12, md: 7 }}>
//                     <Box component={'img'} src={whoweare} className="w-100 border-10" data-aos="zoom-in" />
//                 </Grid>
//             </Grid>
//             <Grid container spacing={2} className='mt-3 mx-2 mx-md-4 justify-content-between border-10 bg-white' sx={{ boxShadow: '0px 0px 3px #ccc' }} >
//                 <Grid className='border-10 p-4 px-5' data-aos="fade-up" size={{ xs: 12, md: 6, lg: 'grow' }}>
//                     <Box className='d-flex justify-cotent-center'>
//                         <Target style={{ height: '70px', width: "70px", borderRadius: '50%' }} className='text-main border-main p-2 mb-3 mx-auto' />
//                     </Box>
//                     <Typography className='fw-medium text-center fs-20 c-f' gutterBottom>Our Mission</Typography>
//                     <Typography className='fs-16 text-center'>Empowering business with supportive stretegies and global opportunities.</Typography>
//                 </Grid>
//                 <Grid size={{ xs: 'auto' }} className='d-none d-md-inline-block border my-5'>
//                 </Grid>
//                 <Grid className='border-10 p-4 px-5' data-aos="fade-up" size={{ xs: 12, md: 6, lg: 'grow' }}>
//                     <Box className='d-flex justify-cotent-center'>
//                         <EyeDashed style={{ height: '70px', width: "70px", borderRadius: '50%' }} className='text-main border-main p-2 mb-3 mx-auto' />
//                     </Box>
//                     <Typography className='fw-medium text-center fs-20 c-f' gutterBottom>Our Vision</Typography>
//                     <Typography className='fs-16 text-center'>To be a global invest in consulting  and business expansion services.</Typography>
//                 </Grid>
//                 <Grid size={{ xs: 'auto' }} className='d-none d-md-inline-block border my-5'>
//                 </Grid>
//                 <Grid className='border-10 p-4 px-5' data-aos="fade-up" size={{ xs: 12, md: 6, lg: 'grow' }}>
//                     <Box className='d-flex justify-cotent-center'>
//                         <BadgeCheck style={{ height: '70px', width: "70px", borderRadius: '50%' }} className='text-main border-main p-2 mb-3 mx-auto' />
//                     </Box>
//                     <Typography className='fw-medium text-center fs-20 c-f' gutterBottom>Our Values</Typography>
//                     <Typography className='fs-16 text-center'>In depth Business proposal overlution and actionable strategy planing for sustainable growth</Typography>
//                 </Grid>
//                 <Grid size={{ xs: 'auto' }} className='d-none d-md-inline-block border my-5'>
//                 </Grid>
//                 <Grid className='border-10 p-4 px-5' data-aos="fade-up" size={{ xs: 12, md: 6, lg: 'grow' }}>
//                     <Box className='d-flex justify-cotent-center'>
//                         <Brain style={{ height: '70px', width: "70px", borderRadius: '50%' }} className='text-main border-main p-2 mb-3 mx-auto' />
//                     </Box>
//                     <Typography className='fw-medium text-center fs-20 c-f' gutterBottom>Our Approch</Typography>
//                     <Typography className='fs-16 text-center'>Seamless Incorportion  & Setup of business, branches & subboundries across the globe</Typography>
//                 </Grid>
//             </Grid>
//             <Grid container sx={{ gap: { xs: 5, md: 0 } }} className='mt-5 justify-content-between mx-2 mx-md-4'>
//                 <Grid size={{ xs: 12, md: 6 }}>
//                     <Typography className='fw-medium text-main fs-24 mb-2' data-aos="fade-up">Our Journey</Typography>
//                     <Typography className='fs-16' data-aos="fade-up">Founded with a vision to bridge business with global opportunities. NYMPTH Intenational LLP has grown into a trusted partner for startups, SMEs and Corporate clients worldwide.</Typography>
//                     <Grid container className='mt-4'>
//                         <Grid data-aos="zoom-in" size={{ xs: 6, sm: 6, md: 4 }}>
//                             <Box className='d-flex h-100 align-items-center gap-3 border justify-content-center p-3'>
//                                 <BriefcaseBusiness style={{ height: '50px', width: 'auto' }} className='text-main' />
//                                 <Box>
//                                     <Typography className='fw-medium fs-28'>15+</Typography>
//                                     <Typography className='fs-14'>Years of Experience</Typography>
//                                 </Box>
//                             </Box>
//                         </Grid>
//                         <Grid data-aos="zoom-in" size={{ xs: 6, sm: 6, md: 4 }}>
//                             <Box className='d-flex h-100 align-items-center gap-3 border justify-content-center p-3'>
//                                 <Users style={{ height: '50px', width: 'auto' }} className='text-main' />
//                                 <Box>
//                                     <Typography className='fw-medium fs-28'>500+</Typography>
//                                     <Typography className='fs-14'>Business Empowered</Typography>
//                                 </Box>
//                             </Box>
//                         </Grid>
//                         <Grid data-aos="zoom-in" size={{ xs: 6, sm: 6, md: 4 }}>
//                             <Box className='d-flex h-100 align-items-center gap-3 border justify-content-center p-3'>
//                                 <Globe style={{ height: '50px', width: 'auto' }} className='text-main' />
//                                 <Box>
//                                     <Typography className='fw-medium fs-28'>25+</Typography>
//                                     <Typography className='fs-14'>Countries Served</Typography>
//                                 </Box>
//                             </Box>
//                         </Grid>
//                         <Grid data-aos="zoom-in" size={{ xs: 6, sm: 6, md: 4 }}>
//                             <Box className='d-flex h-100 align-items-center gap-3 border justify-content-center p-3'>
//                                 <ChartPie style={{ height: '50px', width: 'auto' }} className='text-main' />
//                                 <Box>
//                                     <Typography className='fw-medium fs-28'>98%</Typography>
//                                     <Typography className='fs-14'>Client Retentions</Typography>
//                                 </Box>
//                             </Box>
//                         </Grid>
//                         <Grid data-aos="zoom-in" size={{ xs: 6, sm: 6, md: 4 }}>
//                             <Box className='d-flex align-items-center gap-3 border justify-content-center p-3'>
//                                 <Users style={{ height: '50px', width: 'auto' }} className='text-main' />
//                                 <Box>
//                                     <Typography className='fw-medium fs-28'>300+</Typography>
//                                     <Typography className='fs-14'>Experts and professionals</Typography>
//                                 </Box>
//                             </Box>
//                         </Grid>
//                         <Grid data-aos="zoom-in" size={{ xs:6, sm: 6, md: 4 }}>
//                             <Box className='d-flex h-100 align-items-center gap-3 border justify-content-center p-3'>
//                                 <Award style={{ height: '50px', width: 'auto' }} className='text-main' />
//                                 <Box>
//                                     <Typography className='fw-medium fs-28'>20+</Typography>
//                                     <Typography className='fs-14'>Industries Covered</Typography>
//                                 </Box>
//                             </Box>
//                         </Grid>
//                     </Grid>
//                 </Grid>
//                 <Grid size={{ xs: 12, md: 5 }}>
//                     <Box className='position-relative' data-aos="fade-down">
//                         {/* Vertical Line */}
//                         <Box
//                             className='position-absolute bg-main'
//                             sx={{
//                                 position: "absolute",
//                                 left: 3,
//                                 top: 12,
//                                 bottom: 20,
//                                 width: "2px",
//                                 background: "var(--primary-color)",
//                             }}
//                         />

//                         {journeyTimeline.map((item, index) => (
//                             <Box
//                                 className='d-flex gap-4 mb-5 align-items-start'
//                                 data-aos="fade-down"
//                                 sx={{ position: 'relative' }}
//                                 key={index}>
//                                 <Box
//                                     sx={{
//                                         position: "absolute",
//                                         left: -5,
//                                         top: 12,
//                                         width: 18,
//                                         height: 18,
//                                         borderRadius: "50%",
//                                         bgcolor: "var(--primary-color)",
//                                         border: "3px solid var(--secondary-dark-color)",
//                                         zIndex: 2,
//                                     }}
//                                 />

//                                 <Box
//                                     className="bg-purple"
//                                     sx={{
//                                         // minWidth: 90,
//                                         textAlign: "center",
//                                         py: 1,
//                                         px: 2,
//                                         borderRadius: "12px",
//                                         ml: 3,
//                                     }}
//                                 >
//                                     <Typography
//                                         className="fw-medium text-white fs-16 text-center">
//                                         {item.year}
//                                     </Typography>
//                                 </Box>

//                                 {/* Content */}
//                                 <Box>
//                                     <Typography className="fw-medium fs-20 mb-1">
//                                         {item.title}
//                                     </Typography>

//                                     <Typography className="fs-14" >
//                                         {item.description}
//                                     </Typography>
//                                 </Box>
//                             </Box>
//                         ))}
//                     </Box>
//                 </Grid>
//             </Grid>
//             <Grid container className='mt-5 mx-2 mx-md-4'>
//                 <Box className='p-4 border-10 bg-dark-purple'>
//                     <Grid container spacing={2}>
//                         <Grid size={{ xs: 12, md: 6 }}>
//                             <Typography className='fw-medium fs-20 text-second ' data-aos="fade-up" gutterBottom>WHY CHOOSE NYMPH INTERNATIONAL LLP?</Typography>
//                             <Typography className='fw-medium fs-32 c-f text-white' data-aos="fade-up" gutterBottom>Your Trusted Partner in Global Business Success</Typography>
//                             <Typography className='fs-14 text-white' data-aos="fade-up">We Combine global expertise with local insights to deliver practical solutions that drive real results. </Typography>
//                         </Grid>
//                         <Grid size={{ xs: 'auto' }} className='d-none d-md-inline-block border border-light my-4'></Grid>
//                         <Grid size={{ xs: 12, md: 'grow' }}>
//                             <List className='gap-3 gap-md-0 text-white p-0 m-0' data-aos="fade-up">
//                                 <ListItem className='gap-2'><CheckCircleOutlined className='text-second' /> Global Expertise</ListItem>
//                                 <ListItem className='gap-2'><CheckCircleOutlined className='text-second' /> Local Understanding</ListItem>
//                                 <ListItem className='gap-2'><CheckCircleOutlined className='text-second' /> Tailored Strategies for Every Business</ListItem>
//                                 <ListItem className='gap-2'><CheckCircleOutlined className='text-second' /> End to End Support</ListItem>
//                             </List>
//                         </Grid>
//                         <Grid size={{ xs: 'auto' }} className='d-none d-md-inline-block border border-light my-4'></Grid>
//                         <Grid size={{ xs: 12, md: 'grow' }}>
//                             <List className='gap-3 gap-md-0 text-white p-0 m-0' data-aos="fade-up">
//                                 <ListItem className='gap-2'><CheckCircleOutlined className='text-second' /> Data Driven Decisions</ListItem>
//                                 <ListItem className='gap-2'><CheckCircleOutlined className='text-second' /> Result Oriented Approch</ListItem>
//                                 <ListItem className='gap-2'><CheckCircleOutlined className='text-second' /> Confidientilaity & Integrity</ListItem>
//                             </List>
//                         </Grid>
//                     </Grid>
//                 </Box>
//             </Grid>
//             <Box className='mt-5 mx-2 mx-md-4'>
//                 <Typography className='fs-24 mb-3 text-main fw-medium' data-aos="fade-up">Our Experties</Typography>
//                 <Grid container spacing={2}>
//                     {services.map((service, index) => {
//                         const Icon = service.icon;

//                         return (
//                             <Grid data-aos="fade-up" key={index} size={{ xs: 12, sm: 6, lg: 3, xl: 2 }}>
//                                 <Box
//                                     className="border h-100 text-center border-10 p-4"
//                                     sx={{
//                                         border: "1px solid #F1F1F1",
//                                         transition: "all .3s ease",
//                                         "&:hover": {
//                                             transform: "translateY(-6px)",
//                                             boxShadow: "0 0px 5px var(--primary-color)",
//                                         },
//                                     }}
//                                 >
//                                     <Icon
//                                         size={56}
//                                         strokeWidth={1}
//                                         className="text-main mb-2"
//                                     />

//                                     <Typography className="fw-medium fs-20 c-f" gutterBottom>
//                                         {service.title}
//                                     </Typography>

//                                     <Typography className="fs-16">
//                                         {service.description}
//                                     </Typography>
//                                 </Box>
//                             </Grid>
//                         );
//                     })}
//                 </Grid>
//             </Box>
//             <Grid container spacing={3} className="mt-5 mb-3 mx-2 mx-md-4" sx={{ alignItems: 'start' }}>
//                 <Grid size={12}>
//                     <Box className='h-100 d-flex flex-column justify-content-center'>
//                         <Typography data-aos="fade-up" className="fw-medium fs-24 text-main">Our Leadership</Typography>

//                         <Typography data-aos="fade-up" className="fs-16">
//                             A team of experienced professionals passionate about empowering
//                             businesses and creating impact.
//                         </Typography>
//                     </Box>
//                 </Grid>

//                 <Grid size={12}>
//                     <Grid container spacing={3}>
//                         {leadershipData.map((member, index) => (
//                             <Grid
//                                 data-aos="fade-up"
//                                 key={index}
//                                 spacing={2}
//                                 size={{ xs: 12, sm: 6, md: 4, xl: 'grow' }}
//                             >
//                                 <Box className="border d-flex gap-3 p-2 border-10 align-items-center">
//                                     <Box className='border' sx={{ height: "100px", width:'130px' }}>
//                                         <Box
//                                             component="img"
//                                             src={member.image}
//                                             alt={member.name}
//                                             sx={{
//                                                 width: "100%",
//                                                 height: "100%",
//                                                 // border:'1px solid red',
//                                                 objectFit: "cover",
//                                             }}
//                                         />
//                                     </Box>
//                                     <Box>
//                                         <Typography className="fw-medium fs-20">
//                                             {member.name}
//                                         </Typography>

//                                         <Typography className='text-main fs-16'>
//                                             {member.designation}
//                                         </Typography>

//                                         <Typography
//                                             className="mt-1"
//                                             sx={{
//                                                 fontSize: "14px",
//                                                 lineHeight: 1.7,
//                                             }}
//                                         >
//                                             {member.description}
//                                         </Typography>
//                                     </Box>
//                                 </Box>
//                             </Grid>
//                         ))}
//                     </Grid>
//                 </Grid>
//             </Grid>

//         </Box>
//     )
// }

// export default AboutUs2


// import { Box, Grid, List, ListItem, Typography } from "@mui/material";
// import { CheckCircleOutlined } from "@mui/icons-material";
// import {
//     Award,
//     Brain,
//     BriefcaseBusiness,
//     ChartColumnIncreasing,
//     Cog,
//     Eye,
//     ShieldCheck,
//     Target,
//     Users,
// } from "lucide-react";
// import { Fragment } from "react";
// import whoweare from "../Assets/Images/WhoWeAre.png";
// import CtaBanner from "../Component/CtaBanner";
// import { FOUNDED_YEAR } from "../Data/CompanyData";

// /* ------------------------------------------------------------------ */
// /* Content                                                             */
// /* ------------------------------------------------------------------ */

// const purpose = [
//     {
//         title: "Our Mission",
//         text: "To empower businesses with practical strategies and access to global opportunities.",
//         icon: Target,
//     },
//     {
//         title: "Our Vision",
//         text: "To be a globally trusted partner for consulting and business expansion.",
//         icon: Eye,
//     },
// ];

// // Draft wording built from claims already on the site. Edit freely.
// const values = [
//     {
//         title: "Integrity and confidentiality",
//         description:
//             "We handle your information and your decisions with honesty and discretion.",
//         icon: ShieldCheck,
//     },
//     {
//         title: "Practical execution",
//         description:
//             "Advice is only useful if it can be carried out, so we plan for delivery, not just strategy.",
//         icon: Cog,
//     },
//     {
//         title: "Tailored to your goals",
//         description:
//             "No templates. Every plan starts from your objectives, market and constraints.",
//         icon: Brain,
//     },
//     {
//         title: "Long-term growth",
//         description:
//             "We favour sustainable results over quick wins.",
//         icon: ChartColumnIncreasing,
//     },
// ];

// // About-only tiles (deliberately different from the Home stats).
// const journeyFacts = [
//     {
//         key: "founded",
//         value: String(FOUNDED_YEAR),
//         label: "Established in Ahmedabad",
//         icon: BriefcaseBusiness,
//     },
//     {
//         key: "experts",
//         value: "300+",
//         label: "Experts and professionals",
//         icon: Users,
//     },
//     {
//         key: "industries",
//         value: "20+",
//         label: "Industries covered",
//         icon: Award,
//     },
// ];

// // TODO: confirm 2015 and 2020 with the real company history, and add the year
// // NYMPH International LLP itself was formed.
// const journeyTimeline = [
//     {
//         year: String(FOUNDED_YEAR),
//         title: "The Beginning",
//         description:
//             "Riddhi Management Consultancy was established in Ahmedabad, India, with a simple mission: help businesses grow beyond boundaries.",
//     },
//     {
//         year: "2015",
//         title: "Expanding Horizons",
//         description:
//             "Expanded our services and began working with clients across multiple countries.",
//     },
//     {
//         year: "2020",
//         title: "Global Impact",
//         description:
//             "Strengthened our international presence and supported businesses across borders.",
//     },
//     {
//         year: "Today",
//         title: "Building the Future",
//         description:
//             "NYMPH International LLP carries the group's experience into global expansion, advisory and training.",
//     },
// ];

// const whyChoose = [
//     "Global expertise",
//     "Local understanding",
//     "Tailored strategies for every business",
//     "End-to-end support",
//     "Data-driven decisions",
//     "Results-oriented approach",
// ];

// // Add real team members here. The Leadership section stays hidden while this
// // list is empty, so placeholder people never appear on the live site.
// // For photos, import the image at the top of this file, e.g.
// //   import member1 from "../Assets/Images/Team/member1.jpg";
// // then:
// //   { name: "Full Name", designation: "Role", description: "One-line bio.", image: member1 },
// const leadershipData:any = [];

// const initials = (name:any) =>
//     name
//         .split(" ")
//         .map((part:any) => part[0])
//         .slice(0, 2)
//         .join("")
//         .toUpperCase();

// /* ------------------------------------------------------------------ */
// /* Small local helper so every section heading looks the same          */
// /* ------------------------------------------------------------------ */

// function SectionHeading({ eyebrow, children }:any) {
//     return (
//         <>
//             <Typography
//                 className="text-main fw-medium fs-20"
//                 data-aos="fade-up"
//                 gutterBottom
//             >
//                 {eyebrow}
//             </Typography>
//             <Typography
//                 component="h2"
//                 className="fw-bold c-f fs-32 mb-3"
//                 data-aos="fade-up"
//             >
//                 {children}
//             </Typography>
//         </>
//     );
// }

// /* ------------------------------------------------------------------ */
// /* Page                                                                */
// /* ------------------------------------------------------------------ */

// function AboutUs2() {
//     return (
//         <Box>
//             {/* 1. HERO ------------------------------------------------ */}
//             <Grid
//                 container
//                 sx={{ height: { xs: "fit-content", md: "calc(100vh - 80px)" } }}
//                 className="position-relative g-bg pb-3 pb-md-0"
//             >
//                 <Grid
//                     size={{ xs: 12, md: 5.5 }}
//                     className="my-0 my-md-auto"
//                     sx={{ px: { xs: 2, md: 3 }, pt: 5, zIndex: 2 }}
//                 >
//                     <Typography
//                         className="text-second fw-medium fs-20"
//                         data-aos="fade-up"
//                         gutterBottom
//                         sx={{ letterSpacing: "2px" }}
//                     >
//                         ABOUT NYMPH INTERNATIONAL
//                     </Typography>

//                     <Typography
//                         component="h1"
//                         className="fw-medium fs-52 c-f mt-2 mb-3"
//                         data-aos="fade-up"
//                         sx={{ whiteSpace: { xs: "normal", md: "nowrap" } }}
//                     >
//                         Building Businesses
//                         <br />
//                         for a <i className="text-main">Global Future</i>
//                     </Typography>

//                     <Typography data-aos="fade-up">
//                         Strategic advisory built on more than a decade of consulting
//                         experience, and focused on turning plans into measurable results.
//                     </Typography>

//                     <Box
//                         className="mt-3"
//                         sx={{ border: "2px solid var(--primary-color)", width: "75px" }}
//                     ></Box>
//                 </Grid>

//                 <Grid
//                     size={{ xs: 12, md: 6.5 }}
//                     className="d-none d-md-inline-block right-side"
//                     data-aos="zoom-in"
//                 >
//                     <Box className="hero-section h-100 w-100" aria-hidden="true"></Box>
//                 </Grid>
//             </Grid>

//             {/* 2. WHO WE ARE (full story) ----------------------------- */}
//             <Grid container className="p-2 p-lg-5" spacing={1.5}>
//                 <Grid size={{ xs: 12, md: 5 }}>
//                     <Typography
//                         className="text-main fw-medium fs-20 mb-2"
//                         data-aos="fade-up"
//                         gutterBottom
//                     >
//                         WHO WE ARE
//                     </Typography>
//                     <Typography
//                         component="h2"
//                         className="fw-bold my-3 c-f fs-42"
//                         data-aos="fade-up"
//                     >
//                         A Consulting Firm Built for{" "}
//                         <span className="text-main">Global Growth</span>
//                     </Typography>

//                     <Typography className="fs-16 mb-3" data-aos="fade-up">
//                         NYMPH International LLP is a strategic advisory and business growth
//                         firm providing practical solutions for organizations seeking
//                         sustainable growth, operational improvement, professional
//                         development, and international expansion.
//                     </Typography>

//                     <Box
//                         className="p-3 mb-3 border-10 bg-light-purple"
//                         data-aos="fade-up"
//                         sx={{ borderLeft: "4px solid var(--primary-color)" }}
//                     >
//                         <Typography className="fw-medium c-f fs-20" gutterBottom>
//                             Part of the Riddhi Management Consultancy group
//                         </Typography>
//                         <Typography className="fs-14">
//                             NYMPH International is the global expansion entity of Riddhi
//                             Management Consultancy, established in {FOUNDED_YEAR} in
//                             Ahmedabad, Gujarat, India. It builds on more than a decade of
//                             business consulting experience to help organizations navigate
//                             growth opportunities across markets.
//                         </Typography>
//                     </Box>

//                     <Typography className="fs-16" data-aos="fade-up">
//                         Our approach combines business expertise, industry knowledge, and
//                         practical execution to help businesses move confidently from
//                         strategy to results.
//                     </Typography>
//                 </Grid>

//                 <Grid size={{ xs: 12, md: 7 }}>
//                     <Box
//                         component="img"
//                         src={whoweare}
//                         alt="Who we are at NYMPH International"
//                         className="w-100 border-10"
//                         data-aos="zoom-in"
//                     />
//                 </Grid>
//             </Grid>

//             {/* 3. MISSION AND VISION ---------------------------------- */}
//             <Grid
//                 container
//                 spacing={2}
//                 className="mt-3 mx-2 mx-md-4 justify-content-between border-10 bg-white"
//                 sx={{ boxShadow: "0px 0px 3px #ccc" }}
//             >
//                 {purpose.map((item, index) => {
//                     const Icon = item.icon;
//                     return (
//                         <Fragment key={item.title}>
//                             {index > 0 && (
//                                 <Grid
//                                     size={{ xs: "auto" }}
//                                     className="d-none d-md-inline-block border my-5"
//                                 ></Grid>
//                             )}
//                             <Grid
//                                 className="p-4 px-5"
//                                 data-aos="fade-up"
//                                 size={{ xs: 12, md: "grow" }}
//                             >
//                                 <Box className="d-flex justify-content-center">
//                                     <Icon
//                                         style={{ height: "70px", width: "70px", borderRadius: "50%" }}
//                                         className="text-main border-main p-2 mb-3 mx-auto"
//                                     />
//                                 </Box>
//                                 <Typography
//                                     component="h2"
//                                     className="fw-medium text-center fs-20 c-f"
//                                     gutterBottom
//                                 >
//                                     {item.title}
//                                 </Typography>
//                                 <Typography className="fs-16 text-center">
//                                     {item.text}
//                                 </Typography>
//                             </Grid>
//                         </Fragment>
//                     );
//                 })}
//             </Grid>

//             {/* 4. VALUES ---------------------------------------------- */}
//             <Box className="mt-5 mx-2 mx-md-4">
//                 <SectionHeading eyebrow="OUR VALUES">What We Stand For</SectionHeading>

//                 <Grid container spacing={2}>
//                     {values.map((value) => {
//                         const Icon = value.icon;
//                         return (
//                             <Grid
//                                 data-aos="fade-up"
//                                 key={value.title}
//                                 size={{ xs: 12, sm: 6, lg: 3 }}
//                             >
//                                 <Box
//                                     className="border h-100 text-center border-10 p-4"
//                                     sx={{
//                                         border: "1px solid #F1F1F1",
//                                         transition: "all .3s ease",
//                                         "&:hover": {
//                                             transform: "translateY(-6px)",
//                                             boxShadow: "0 0px 5px var(--primary-color)",
//                                         },
//                                     }}
//                                 >
//                                     <Icon
//                                         size={56}
//                                         strokeWidth={1}
//                                         className="text-main mb-2"
//                                     />
//                                     <Typography
//                                         component="h3"
//                                         className="fw-medium fs-20 c-f"
//                                         gutterBottom
//                                     >
//                                         {value.title}
//                                     </Typography>
//                                     <Typography className="fs-16">
//                                         {value.description}
//                                     </Typography>
//                                 </Box>
//                             </Grid>
//                         );
//                     })}
//                 </Grid>
//             </Box>

//             {/* 5. OUR JOURNEY ----------------------------------------- */}
//             <Grid
//                 container
//                 sx={{ gap: { xs: 5, md: 0 } }}
//                 className="mt-5 justify-content-between mx-2 mx-md-4"
//             >
//                 <Grid size={{ xs: 12, md: 6 }}>
//                     <SectionHeading eyebrow="OUR JOURNEY">
//                         From Ahmedabad to Global Markets
//                     </SectionHeading>
//                     <Typography className="fs-16" data-aos="fade-up">
//                         Founded with a vision to bridge business with global opportunities,
//                         NYMPH International LLP has grown into a trusted partner for
//                         startups, SMEs and corporate clients worldwide.
//                     </Typography>

//                     <Grid container className="mt-4">
//                         {journeyFacts.map((fact) => {
//                             const Icon = fact.icon;
//                             return (
//                                 <Grid
//                                     data-aos="zoom-in"
//                                     key={fact.key}
//                                     size={{ xs: 12, sm: 4 }}
//                                 >
//                                     <Box className="d-flex h-100 align-items-center gap-3 border justify-content-center p-3">
//                                         <Icon
//                                             style={{ height: "40px", width: "auto" }}
//                                             className="text-main"
//                                         />
//                                         <Box>
//                                             <Typography className="fw-medium fs-28">
//                                                 {fact.value}
//                                             </Typography>
//                                             <Typography className="fs-14">
//                                                 {fact.label}
//                                             </Typography>
//                                         </Box>
//                                     </Box>
//                                 </Grid>
//                             );
//                         })}
//                     </Grid>
//                 </Grid>

//                 <Grid size={{ xs: 12, md: 5 }}>
//                     <Box className="position-relative" data-aos="fade-down">
//                         {/* vertical line */}
//                         <Box
//                             aria-hidden="true"
//                             sx={{
//                                 position: "absolute",
//                                 left: 3,
//                                 top: 12,
//                                 bottom: 20,
//                                 width: "2px",
//                                 background: "var(--primary-color)",
//                             }}
//                         />

//                         {journeyTimeline.map((item) => (
//                             <Box
//                                 className="d-flex gap-4 mb-5 align-items-start"
//                                 data-aos="fade-down"
//                                 sx={{ position: "relative" }}
//                                 key={item.year}
//                             >
//                                 <Box
//                                     aria-hidden="true"
//                                     sx={{
//                                         position: "absolute",
//                                         left: -5,
//                                         top: 12,
//                                         width: 18,
//                                         height: 18,
//                                         borderRadius: "50%",
//                                         bgcolor: "var(--primary-color)",
//                                         border: "3px solid var(--secondary-dark-color)",
//                                         zIndex: 2,
//                                     }}
//                                 />

//                                 <Box
//                                     className="bg-purple"
//                                     sx={{
//                                         textAlign: "center",
//                                         py: 1,
//                                         px: 2,
//                                         borderRadius: "12px",
//                                         ml: 3,
//                                     }}
//                                 >
//                                     <Typography className="fw-medium text-white fs-16 text-center">
//                                         {item.year}
//                                     </Typography>
//                                 </Box>

//                                 <Box>
//                                     <Typography
//                                         component="h3"
//                                         className="fw-medium fs-20 mb-1"
//                                     >
//                                         {item.title}
//                                     </Typography>
//                                     <Typography className="fs-14">
//                                         {item.description}
//                                     </Typography>
//                                 </Box>
//                             </Box>
//                         ))}
//                     </Box>
//                 </Grid>
//             </Grid>

//             {/* 6. WHY CHOOSE NYMPH ------------------------------------ */}
//             <Box className="mt-5 mx-2 mx-md-4 p-4 border-10 bg-dark-purple">
//                 <Grid container spacing={2}>
//                     <Grid size={{ xs: 12, md: 6 }}>
//                         <Typography
//                             className="fw-medium fs-20 text-second"
//                             data-aos="fade-up"
//                             gutterBottom
//                         >
//                             WHY CHOOSE NYMPH INTERNATIONAL LLP?
//                         </Typography>
//                         <Typography
//                             component="h2"
//                             className="fw-medium fs-32 c-f text-white"
//                             data-aos="fade-up"
//                             gutterBottom
//                         >
//                             Your Trusted Partner in Global Business Success
//                         </Typography>
//                         <Typography className="fs-14 text-white" data-aos="fade-up">
//                             We combine global expertise with local insight to deliver
//                             practical solutions that drive real results.
//                         </Typography>
//                     </Grid>

//                     <Grid
//                         size={{ xs: "auto" }}
//                         className="d-none d-md-inline-block border border-light my-4"
//                     ></Grid>

//                     <Grid size={{ xs: 12, md: "grow" }}>
//                         <List className="text-white p-0 m-0" data-aos="fade-up">
//                             {whyChoose.slice(0, 3).map((item) => (
//                                 <ListItem key={item} className="gap-2">
//                                     <CheckCircleOutlined className="text-second" /> {item}
//                                 </ListItem>
//                             ))}
//                         </List>
//                     </Grid>

//                     <Grid
//                         size={{ xs: "auto" }}
//                         className="d-none d-md-inline-block border border-light my-4"
//                     ></Grid>

//                     <Grid size={{ xs: 12, md: "grow" }}>
//                         <List className="text-white p-0 m-0" data-aos="fade-up">
//                             {whyChoose.slice(3).map((item) => (
//                                 <ListItem key={item} className="gap-2">
//                                     <CheckCircleOutlined className="text-second" /> {item}
//                                 </ListItem>
//                             ))}
//                         </List>
//                     </Grid>
//                 </Grid>
//             </Box>

//             {/* 7. LEADERSHIP (hidden until real people are added) ----- */}
//             {leadershipData.length > 0 && (
//                 <Grid
//                     container
//                     spacing={3}
//                     className="mt-5 mb-3 mx-2 mx-md-4"
//                     sx={{ alignItems: "start" }}
//                 >
//                     <Grid size={12}>
//                         <SectionHeading eyebrow="OUR LEADERSHIP">
//                             The People Behind NYMPH
//                         </SectionHeading>
//                         <Typography data-aos="fade-up" className="fs-16">
//                             A team of experienced professionals passionate about empowering
//                             businesses and creating impact.
//                         </Typography>
//                     </Grid>

//                     <Grid size={12}>
//                         <Grid container spacing={3}>
//                             {leadershipData.map((member:any) => (
//                                 <Grid
//                                     data-aos="fade-up"
//                                     key={member.name}
//                                     size={{ xs: 12, sm: 6, md: 4, xl: "grow" }}
//                                 >
//                                     <Box className="border d-flex gap-3 p-2 border-10 align-items-center">
//                                         <Box
//                                             className="border d-flex align-items-center justify-content-center bg-light-purple"
//                                             sx={{ height: "100px", width: "130px", flexShrink: 0 }}
//                                         >
//                                             {member.image ? (
//                                                 <Box
//                                                     component="img"
//                                                     src={member.image}
//                                                     alt={member.name}
//                                                     sx={{
//                                                         width: "100%",
//                                                         height: "100%",
//                                                         objectFit: "cover",
//                                                     }}
//                                                 />
//                                             ) : (
//                                                 <Typography className="fw-medium fs-28 text-main">
//                                                     {initials(member.name)}
//                                                 </Typography>
//                                             )}
//                                         </Box>
//                                         <Box>
//                                             <Typography
//                                                 component="h3"
//                                                 className="fw-medium fs-20"
//                                             >
//                                                 {member.name}
//                                             </Typography>
//                                             <Typography className="text-main fs-16">
//                                                 {member.designation}
//                                             </Typography>
//                                             <Typography
//                                                 className="mt-1"
//                                                 sx={{ fontSize: "14px", lineHeight: 1.7 }}
//                                             >
//                                                 {member.description}
//                                             </Typography>
//                                         </Box>
//                                     </Box>
//                                 </Grid>
//                             ))}
//                         </Grid>
//                     </Grid>
//                 </Grid>
//             )}

//             {/* 8. FINAL CTA ------------------------------------------- */}
//             <CtaBanner
//                 title="Work With NYMPH International"
//                 text="Whether you are planning expansion, transformation or team development, let's talk about what you need."
//             />
//         </Box>
//     );
// }

// export default AboutUs2;
 
import { Box, Grid, List, ListItem, Typography } from "@mui/material";
import { ArrowRightAlt, CheckCircleOutlined } from "@mui/icons-material";
import {
    BadgeCheck,
    Brain,
    BriefcaseBusiness,
    ChartColumnIncreasing,
    ChessKnight,
    Cog,
    Eye,
    GraduationCap,
    Globe,
    Landmark,
    Plane,
    ShieldCheck,
    Target,
    Users,
} from "lucide-react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import whoweare from "../Assets/Images/WhoWeAre.png";
import { FOUNDED_YEAR } from "../Data/CompanyData";

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */

// Founder details come from the client's content document.
// Photos: import the image at the top of this file, e.g.
//   import sureshPhoto from "../Assets/Images/Team/suresh-raval.jpg";
// then set  image: sureshPhoto  below. Without a photo, initials are shown.
const founders = [
    {
        name: "Suresh Raval",
        role: "CEO, NYMPH International LLP",
        secondaryRole: "Founder, Riddhi Management Consultancy",
        image: null,
        bio: [
            "International business consultant, entrepreneur, academician and researcher in business management, with more than two decades of experience across manufacturing, services, education, hospitality management and healthcare.",
            "A qualified auditor for ISO 9001:2015 (Quality Management Systems) and ISO 45001:2018 (Occupational Health and Safety Management Systems), he is also a visiting guest lecturer at colleges, universities, industry groups and MSME (Ministry of Micro, Small & Medium Enterprises, Government of India).",
        ],
        highlights: [
            "MBA (Finance)",
            "20+ years of experience",
            "ISO 9001:2015 qualified auditor",
            "ISO 45001:2018 qualified auditor",
        ],
    },
    {
        name: "Shrey Raval",
        role: "Founder and Managing Director, NYMPH International LLP",
        secondaryRole: "",
        image: null,
        bio: [
            "Entrepreneur and strategic researcher with over five years of cross-industry experience across manufacturing, services, education and hospitality management. He applies advanced management methodologies to drive organizational growth and operational performance.",
            "A top 1% academic scholar specializing in Management Accounting, his research has been recognized internationally, earning an Award for Outstanding Performance at a premier conference in the United States. He bridges theoretical management frameworks with practical execution to build scalable, resilient business models.",
        ],
        highlights: [
            "M.Com (Advanced Accounting & Auditing)",
            "5+ years of experience",
            "Top 1% academic scholar",
            "Outstanding Performance Award, US conference",
        ],
    },
];

// Mission and Vision were not in the client document. Draft wording, needs
// client approval.
const purpose = [
    {
        title: "Our Mission",
        text: "To empower businesses with practical strategies and access to global opportunities.",
        icon: Target,
    },
    {
        title: "Our Vision",
        text: "To be a globally trusted partner for consulting and business expansion.",
        icon: Eye,
    },
];

// Draft wording built from claims already on the site. Needs client approval.
const values = [
    {
        title: "Integrity and confidentiality",
        description:
            "We handle your information and your decisions with honesty and discretion.",
        icon: ShieldCheck,
    },
    {
        title: "Practical execution",
        description:
            "Advice is only useful if it can be carried out, so we plan for delivery, not just strategy.",
        icon: Cog,
    },
    {
        title: "Tailored to your goals",
        description:
            "No templates. Every plan starts from your objectives, market and constraints.",
        icon: Brain,
    },
    {
        title: "Long-term growth",
        description: "We favour sustainable results over quick wins.",
        icon: ChartColumnIncreasing,
    },
];

// The five core services, worded from the client document.
const coreServices = [
    {
        title: "Strategic Business Consulting",
        description:
            "End-to-end advisory focused on sustainable growth, operational and supply chain management solutions, and digital transformation tailored for today's market.",
        icon: ChessKnight,
    },
    {
        title: "Global Business Expansion",
        description:
            "Proven strategies to help businesses extend their footprint into key international markets, including the USA, Canada, the UK, Europe, Australia, New Zealand, and beyond.",
        icon: Globe,
    },
    {
        title: "Corporate Seminars & Workshops",
        description:
            "Immersive, case-study-driven programs for CEOs, corporate executives, business leaders, startup founders and university students seeking practical, real-world knowledge.",
        icon: Users,
    },
    {
        title: "Overseas Education Advisory",
        description:
            "Dedicated guidance helping ambitious students identify and secure admissions to leading global universities.",
        icon: GraduationCap,
    },
    {
        title: "Global Mobility Support",
        description:
            "End-to-end guidance through complex foreign entry and operational setups.",
        icon: Plane,
    },
];

const journeyFacts = [
    {
        key: "founded",
        value: String(FOUNDED_YEAR),
        label: "Established in Ahmedabad",
        icon: BriefcaseBusiness,
    },
    {
        key: "registered",
        value: "MCA",
        label: "Registered, Government of India",
        icon: BadgeCheck,
    },
];

// Only milestones the client document supports. TODO: ask the client for more
// (year NYMPH International LLP was incorporated, first international
// engagement, etc.) and add them here.
const journeyTimeline = [
    {
        year: String(FOUNDED_YEAR),
        title: "The Beginning",
        description:
            "Riddhi Management Consultancy was established in Ahmedabad, Gujarat, India, beginning more than a decade of hands-on consulting experience.",
    },
    {
        year: "Today",
        title: "Going Global",
        description:
            "NYMPH International LLP, registered with the Ministry of Corporate Affairs, extends that expertise to businesses, executives and students worldwide.",
    },
];

const whyChoose = [
    "Global expertise",
    "Local understanding",
    "Tailored strategies for every business",
    "End-to-end support",
    "Registered with the Government of India (MCA)",
    "Results-oriented approach",
];

// Audience cards: descriptions are from the client's "Who may participate" list.
const audiences = [
    {
        title: "Business leaders",
        description:
            "Entrepreneurs, executives, managers, organizational leaders and independent consultants looking to drive strategic growth.",
        icon: BriefcaseBusiness,
    },
    {
        title: "Universities and students",
        description:
            "University administrators, faculty members, researchers and students seeking advanced knowledge and collaborative opportunities.",
        icon: GraduationCap,
    },
    {
        title: "Government and policy",
        description:
            "Government officials and policy professionals aiming to implement impactful public initiatives.",
        icon: Landmark,
    },
    {
        title: "Professionals and changemakers",
        description:
            "Career-driven individuals, industry specialists and prospective changemakers ready to elevate their expertise.",
        icon: Users,
    },
];

/** @param {string} name */
const initials = (name:any) =>
    name
        .split(" ")
        .map((part:any) => part[0])
        .slice(0, 2)
        .join("")
        .toUpperCase();

/* ------------------------------------------------------------------ */
/* Small local helper so every section heading looks the same          */
/* ------------------------------------------------------------------ */

/** @param {{ eyebrow: string, children: import("react").ReactNode }} props */
function SectionHeading({ eyebrow, children }:any) {
    return (
        <>
            <Typography
                className="text-main fw-medium fs-20"
                data-aos="fade-up"
                gutterBottom
            >
                {eyebrow}
            </Typography>
            <Typography
                component="h2"
                className="fw-bold c-f fs-32 mb-3"
                data-aos="fade-up"
            >
                {children}
            </Typography>
        </>
    );
}

// Shared card style for icon cards
const iconCardSx = {
    border: "1px solid #F1F1F1",
    transition: "all .3s ease",
    "&:hover": {
        transform: "translateY(-6px)",
        boxShadow: "0 0px 5px var(--primary-color)",
    },
};

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

function AboutUs2() {
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
                        ABOUT NYMPH INTERNATIONAL
                    </Typography>

                    <Typography
                        component="h1"
                        className="fw-medium fs-52 c-f mt-2 mb-3"
                        data-aos="fade-up"
                        sx={{ whiteSpace: { xs: "normal", md: "nowrap" } }}
                    >
                        Building Businesses
                        <br />
                        for a <i className="text-main">Global Future</i>
                    </Typography>

                    <Typography data-aos="fade-up">
                        Strategic advisory built on more than a decade of consulting
                        experience, and focused on turning plans into measurable results.
                    </Typography>

                    <Box
                        className="mt-3"
                        sx={{ border: "2px solid var(--primary-color)", width: "75px" }}
                    ></Box>
                </Grid>

                <Grid
                    size={{ xs: 12, md: 6.5 }}
                    className="d-none d-md-inline-block right-side"
                    data-aos="zoom-in"
                >
                    <Box className="hero-section h-100 w-100" aria-hidden="true"></Box>
                </Grid>
            </Grid>

            {/* 2. WHO WE ARE ------------------------------------------ */}
            <Grid container className="p-2 p-lg-5" spacing={1.5}>
                <Grid size={{ xs: 12, md: 5 }}>
                    <Typography
                        className="text-main fw-medium fs-20 mb-2"
                        data-aos="fade-up"
                        gutterBottom
                    >
                        WHO WE ARE
                    </Typography>
                    <Typography
                        component="h2"
                        className="fw-bold my-3 c-f fs-42"
                        data-aos="fade-up"
                    >
                        Welcome to <span className="text-main">NYMPH International LLP</span>
                    </Typography>

                    <Typography className="fs-16 mb-3" data-aos="fade-up">
                        NYMPH International LLP provides high-impact strategic advisory and
                        business growth solutions to clients worldwide. We empower
                        organizations, executives and students to navigate complex market
                        dynamics, optimize operations and unlock international growth.
                    </Typography>

                    <Box
                        className="p-3 mb-3 border-10 bg-light-purple"
                        data-aos="fade-up"
                        sx={{ borderLeft: "4px solid var(--primary-color)" }}
                    >
                        <Typography className="fw-medium c-f fs-20" gutterBottom>
                            Part of the Riddhi Management Consultancy group
                        </Typography>
                        <Typography className="fs-14">
                            As the global expansion entity of Riddhi Management Consultancy,
                            established in {FOUNDED_YEAR} in Ahmedabad, Gujarat, India,
                            NYMPH International LLP is registered with the Ministry of
                            Corporate Affairs (MCA), Government of India.
                        </Typography>
                    </Box>

                    <Typography className="fs-16" data-aos="fade-up">
                        Building on over a decade of domain expertise, we bridge the gap
                        between high-level advisory and practical execution to help
                        businesses scale internationally.
                    </Typography>
                </Grid>

                <Grid size={{ xs: 12, md: 7 }}>
                    <Box
                        component="img"
                        src={whoweare}
                        alt="Who we are at NYMPH International"
                        className="w-100 border-10"
                        data-aos="zoom-in"
                    />
                </Grid>
            </Grid>

            {/* 3. FOUNDERS -------------------------------------------- */}
            <Box className="mt-4 mx-2 mx-md-4">
                <SectionHeading eyebrow="OUR FOUNDERS">
                    The People Behind NYMPH
                </SectionHeading>
                <Typography className="fs-16 mb-4" data-aos="fade-up">
                    NYMPH International LLP was founded by Suresh Raval (MBA, Finance) and
                    Shrey Raval (M.Com, Advanced Accounting & Auditing).
                </Typography>

                <Grid container spacing={3}>
                    {founders.map((founder) => (
                        <Grid
                            data-aos="fade-up"
                            key={founder.name}
                            size={{ xs: 12, md: 6 }}
                        >
                            <Box className="border border-10 p-3 p-md-4 h-100">
                                <Box className="d-flex gap-3 align-items-center mb-3">
                                    <Box
                                        className="d-flex align-items-center justify-content-center bg-light-purple"
                                        sx={{
                                            height: "110px",
                                            width: "110px",
                                            flexShrink: 0,
                                            borderRadius: "12px",
                                            overflow: "hidden",
                                        }}
                                    >
                                        {founder.image ? (
                                            <Box
                                                component="img"
                                                src={founder.image}
                                                alt={founder.name}
                                                sx={{
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: "cover",
                                                }}
                                            />
                                        ) : (
                                            <Typography className="fw-medium fs-32 text-main">
                                                {initials(founder.name)}
                                            </Typography>
                                        )}
                                    </Box>
                                    <Box>
                                        <Typography
                                            component="h3"
                                            className="fw-medium fs-24 c-f"
                                        >
                                            {founder.name}
                                        </Typography>
                                        <Typography className="text-main fs-16">
                                            {founder.role}
                                        </Typography>
                                        {founder.secondaryRole && (
                                            <Typography className="fs-14">
                                                {founder.secondaryRole}
                                            </Typography>
                                        )}
                                    </Box>
                                </Box>

                                {founder.bio.map((paragraph) => (
                                    <Typography
                                        key={paragraph}
                                        className="fs-16 mb-2"
                                        sx={{ lineHeight: 1.7 }}
                                    >
                                        {paragraph}
                                    </Typography>
                                ))}

                                <Box className="d-flex flex-wrap gap-2 mt-3">
                                    {founder.highlights.map((item) => (
                                        <Box
                                            key={item}
                                            className="border-light-purple px-3 py-1 fs-14"
                                            sx={{ borderRadius: "999px" }}
                                        >
                                            {item}
                                        </Box>
                                    ))}
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* 4. MISSION AND VISION ---------------------------------- */}
            <Grid
                container
                spacing={2}
                className="mt-5 mx-2 mx-md-4 justify-content-between border-10 bg-white"
                sx={{ boxShadow: "0px 0px 3px #ccc" }}
            >
                {purpose.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <Fragment key={item.title}>
                            {index > 0 && (
                                <Grid
                                    size={{ xs: "auto" }}
                                    className="d-none d-md-inline-block border my-5"
                                ></Grid>
                            )}
                            <Grid
                                className="p-4 px-5"
                                data-aos="fade-up"
                                size={{ xs: 12, md: "grow" }}
                            >
                                <Box className="d-flex justify-content-center">
                                    <Icon
                                        style={{ height: "70px", width: "70px", borderRadius: "50%" }}
                                        className="text-main border-main p-2 mb-3 mx-auto"
                                    />
                                </Box>
                                <Typography
                                    component="h2"
                                    className="fw-medium text-center fs-20 c-f"
                                    gutterBottom
                                >
                                    {item.title}
                                </Typography>
                                <Typography className="fs-16 text-center">
                                    {item.text}
                                </Typography>
                            </Grid>
                        </Fragment>
                    );
                })}
            </Grid>

            {/* 5. VALUES ---------------------------------------------- */}
            <Box className="mt-5 mx-2 mx-md-4">
                <SectionHeading eyebrow="OUR VALUES">What We Stand For</SectionHeading>

                <Grid container spacing={2}>
                    {values.map((value) => {
                        const Icon = value.icon;
                        return (
                            <Grid
                                data-aos="fade-up"
                                key={value.title}
                                size={{ xs: 12, sm: 6, lg: 3 }}
                            >
                                <Box
                                    className="border h-100 text-center border-10 p-4"
                                    sx={iconCardSx}
                                >
                                    <Icon
                                        size={56}
                                        strokeWidth={1}
                                        className="text-main mb-2"
                                    />
                                    <Typography
                                        component="h3"
                                        className="fw-medium fs-20 c-f"
                                        gutterBottom
                                    >
                                        {value.title}
                                    </Typography>
                                    <Typography className="fs-16">
                                        {value.description}
                                    </Typography>
                                </Box>
                            </Grid>
                        );
                    })}
                </Grid>
            </Box>

            {/* 6. CORE SERVICES + VISA DISCLAIMER --------------------- */}
            <Box className="mt-5 mx-2 mx-md-4">
                <SectionHeading eyebrow="OUR CORE SERVICES">
                    How We Help You Grow
                </SectionHeading>
                <Typography className="fs-16 mb-4" data-aos="fade-up">
                    We empower organizations, executives and students to navigate
                    complex market dynamics, optimize operations and unlock
                    international growth.
                </Typography>

                <Grid container spacing={2}>
                    {coreServices.map((service) => {
                        const Icon = service.icon;
                        return (
                            <Grid
                                data-aos="fade-up"
                                key={service.title}
                                size={{ xs: 12, sm: 6, md: 4, xl: "grow" }}
                            >
                                <Box
                                    className="border h-100 text-center border-10 p-4"
                                    sx={iconCardSx}
                                >
                                    <Icon
                                        size={56}
                                        strokeWidth={1}
                                        className="text-main mb-2"
                                    />
                                    <Typography
                                        component="h3"
                                        className="fw-medium fs-20 c-f"
                                        gutterBottom
                                    >
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

                <Box
                    className="p-3 mt-4 border-10 bg-light-purple"
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

                <Box className="mt-3">
                    <Link to="/services" className="text-main">
                        View all services <ArrowRightAlt />
                    </Link>
                </Box>
            </Box>

            {/* 7. OUR JOURNEY ----------------------------------------- */}
            <Grid
                container
                sx={{ gap: { xs: 5, md: 0 } }}
                className="mt-5 justify-content-between mx-2 mx-md-4"
            >
                <Grid size={{ xs: 12, md: 6 }}>
                    <SectionHeading eyebrow="OUR JOURNEY">
                        From Ahmedabad to Global Markets
                    </SectionHeading>
                    <Typography className="fs-16" data-aos="fade-up">
                        NYMPH International LLP is the global expansion entity of Riddhi
                        Management Consultancy, taking that consulting experience to
                        businesses, executives and students worldwide.
                    </Typography>

                    <Grid container className="mt-4">
                        {journeyFacts.map((fact) => {
                            const Icon = fact.icon;
                            return (
                                <Grid
                                    data-aos="zoom-in"
                                    key={fact.key}
                                    size={{ xs: 12, sm: 6 }}
                                >
                                    <Box className="d-flex h-100 align-items-center gap-3 border justify-content-center p-3">
                                        <Icon
                                            style={{ height: "40px", width: "auto" }}
                                            className="text-main"
                                        />
                                        <Box>
                                            <Typography className="fw-medium fs-28">
                                                {fact.value}
                                            </Typography>
                                            <Typography className="fs-14">
                                                {fact.label}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            );
                        })}
                    </Grid>
                </Grid>

                <Grid size={{ xs: 12, md: 5 }}>
                    <Box className="position-relative" data-aos="fade-down">
                        <Box
                            aria-hidden="true"
                            sx={{
                                position: "absolute",
                                left: 3,
                                top: 12,
                                bottom: 20,
                                width: "2px",
                                background: "var(--primary-color)",
                            }}
                        />

                        {journeyTimeline.map((item) => (
                            <Box
                                className="d-flex gap-4 mb-5 align-items-start"
                                data-aos="fade-down"
                                sx={{ position: "relative" }}
                                key={item.year}
                            >
                                <Box
                                    aria-hidden="true"
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
                                    className="bg-purple"
                                    sx={{
                                        textAlign: "center",
                                        py: 1,
                                        px: 2,
                                        borderRadius: "12px",
                                        ml: 3,
                                    }}
                                >
                                    <Typography className="fw-medium text-white fs-16 text-center">
                                        {item.year}
                                    </Typography>
                                </Box>

                                <Box>
                                    <Typography
                                        component="h3"
                                        className="fw-medium fs-20 mb-1"
                                    >
                                        {item.title}
                                    </Typography>
                                    <Typography className="fs-14">
                                        {item.description}
                                    </Typography>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Grid>
            </Grid>

            {/* 8. WHY GROW WITH US ------------------------------------ */}
            <Box className="mt-5 mx-2 mx-md-4 p-4 border-10 bg-dark-purple">
                <Grid container spacing={2} >
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography
                            className="fw-medium fs-20 text-second"
                            data-aos="fade-up"
                            gutterBottom
                        >
                            WHY GROW WITH US?
                        </Typography>
                        <Typography
                            component="h2"
                            className="fw-medium fs-32 c-f text-white"
                            data-aos="fade-up"
                            gutterBottom
                        >
                            Your Trusted Partner in Global Business Success
                        </Typography>
                        <Typography className="fs-14 text-white" data-aos="fade-up">
                            Backed by over a decade of hands-on expertise, our team bridges
                            the gap between high-level strategy and real-world execution.
                            Whether you are aiming to transform core business operations,
                            scale into foreign markets, or upskill your corporate
                            leadership, NYMPH International LLP provides the blueprint for
                            lasting success.
                        </Typography>
                    </Grid>

                    <Grid
                        size={{ xs: "auto" }}
                        className="d-none d-md-inline-block border border-light my-4"
                    ></Grid>

                    <Grid size={{ xs: 12, md: "grow" }} className='d-flex align-items-center'>
                        <List className="text-white p-0 m-0" data-aos="fade-up">
                            {whyChoose.slice(0, 3).map((item) => (
                                <ListItem key={item} className="gap-2">
                                    <CheckCircleOutlined className="text-second" /> {item}
                                </ListItem>
                            ))}
                        </List>
                    </Grid>

                    <Grid
                        size={{ xs: "auto" }}
                        className="d-none d-md-inline-block border border-light my-4"
                    ></Grid>

                    <Grid size={{ xs: 12, md: "grow" }} className='d-flex align-items-center'>
                        <List className="text-white p-0 m-0" data-aos="fade-up">
                            {whyChoose.slice(3).map((item) => (
                                <ListItem key={item} className="gap-2">
                                    <CheckCircleOutlined className="text-second" /> {item}
                                </ListItem>
                            ))}
                        </List>
                    </Grid>
                </Grid>
            </Box>

            {/* 9. WHO OUR PROGRAMS ARE FOR ---------------------------- */}
            <Box className="mt-5 mx-2 mx-md-4">
                <SectionHeading eyebrow="OUR PROGRAMS">
                    Who Can Join Our Programs
                </SectionHeading>

                <Grid container spacing={2}>
                    {audiences.map((audience) => {
                        const Icon = audience.icon;
                        return (
                            <Grid
                                data-aos="fade-up"
                                key={audience.title}
                                size={{ xs: 12, sm: 6, lg: 3 }}
                            >
                                <Box
                                    className="border h-100 border-10 p-4"
                                    sx={iconCardSx}
                                >
                                    <Icon
                                        size={48}
                                        strokeWidth={1}
                                        className="text-main mb-2"
                                    />
                                    <Typography
                                        component="h3"
                                        className="fw-medium fs-20 c-f"
                                        gutterBottom
                                    >
                                        {audience.title}
                                    </Typography>
                                    <Typography className="fs-16">
                                        {audience.description}
                                    </Typography>
                                </Box>
                            </Grid>
                        );
                    })}
                </Grid>

                <Typography className="fs-16 mt-3" data-aos="fade-up">
                    We also welcome anyone whose background, goals and drive align with the
                    vision of our programs.
                </Typography>
            </Box>
        </Box>
    );
}

export default AboutUs2;