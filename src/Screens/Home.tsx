import { Box, Button, Container, Divider, Grid, List, ListItem, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import eart from '../Assets/Images/earth2.png'
import home1 from '../Assets/Images/home1.png'
import home2 from '../Assets/Images/home2.png'
import { AccountTreeOutlined, AnalyticsOutlined, ArrowForward, ArrowLeft, ArrowLeftOutlined, ArrowOutward, CheckCircleOutlined, DesignServicesOutlined, EastOutlined, HandshakeOutlined, PublicOutlined, SouthOutlined } from '@mui/icons-material'
import RandomDots from '../Component/RandomDots'

function Home() {
  const stats = [
    { value: "500+", label: "Business Empowered" },
    { value: "50+", label: "Countries Reached" },
    { value: "100+", label: "Training Programs" },
    { value: "15+", label: "Years of Experience" },
  ];

  const workSteps = [
    {
      no: "01",
      title: "Consultation",
      desc: "We understand your business, goals & challenges.",
      icon: <HandshakeOutlined className='text-white fs-48' />,
    },
    {
      no: "02",
      title: "Business Analysis",
      desc: "Our experts analyze your business & market opportunities.",
      icon: <AnalyticsOutlined className='text-white fs-52' />,
    },
    {
      no: "03",
      title: "Strategy Design",
      desc: "We create a customized strategy tailored to your business needs.",
      icon: <AccountTreeOutlined className='text-white fs-48' />,
    },
    {
      no: "04",
      title: "Execution Support",
      desc: "We help you implement strategies with precision & efficiency.",
      icon: <DesignServicesOutlined className='text-white fs-48' />,
    },
    {
      no: "05",
      title: "Global Expansion",
      desc: "We support your growth journey across global markets.",
      icon: <PublicOutlined className='text-white fs-48' />,
    },
  ];


  return (
    <Box sx={{ mt: 5 }}>
      <Grid container>
        <Grid size={{ xs: 12, md: 5.5 }} sx={{ pb: { xs: 0, md: 10 }, pt: 5 }}>
          <Typography className='text-main fw-medium fs-20' data-aos="fade-up" gutterBottom sx={{ letterSpacing: "2px" }}>WELCOME TO NYMPTH INTERNATIONAL LLP</Typography>
          <Typography  className='fw-medium fs-64' sx={{whiteSpace:{xs:"normal",md:"nowrap"}}} data-aos="fade-up">Empowering Business</Typography>
          <Typography  className='fw-medium mb-2 fs-64' data-aos="fade-up"><span className='text-main'>Beyond</span> Borders</Typography>
          <Typography data-aos="fade-up">Global Cosulting, Stretegic Solutions & International <br /> Expansion For Sustainable Growth.</Typography>
          <List className='d-flex flex-column flex-md-row gap-3 gap-md-0 text-white p-0 m-0 mt-3' data-aos="fade-up">
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
        <Grid className='d-none d-md-inline-block' data-aos="zoom-in" size={{ xs: 0, md: 6.5 }}
          // sx={{background:`url(${eart2})`, backgroundSize:'100%', backgroundPosition:'top center'}}
          sx={{
            position: "relative",
            background: `url(${eart})`,
            backgroundSize: "100%",
            backgroundPosition: "top left",
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
          <Box component={'img'} width={'100%'} height={'auto'} src={eart} />
        </Grid>
      </Grid>
      <Grid container sx={{ position: 'relative', zIndex: 2 }}>
        <RandomDots />
        <Grid size={12} className="border-blue bg-graidient border-10 p-3 p-md-4 ps-md-5">
          <Grid
            container
            sx={{ alignItems: 'center', gap:{xs:3,md:0}, justifyContent: {xs:"space-between", md:'end'} }}
            // wrap="nowrap"
          >
            {stats.map((item, index) => (
              <React.Fragment key={index}>
                <Grid size={{xs:12, md:"grow"}}>
                  <Box className="d-flex align-items-center gap-3">
                    <Box
                      sx={{ height: 50, width: 50 }}
                      className="border-main border-10"
                    />
                    <Box data-aos="fade-up">
                      <Typography variant="h5">{item.value}</Typography>
                      <Typography variant="body2">{item.label}</Typography>
                    </Box>
                  </Box>
                </Grid>

                {index !== stats.length - 1 && (
                  <Grid size="auto" className='d-none d-md-inline-block'>
                    <Box
                      sx={{
                        width: "1px",
                        bgcolor: "rgba(255,255,255,0.2)",
                        minHeight: 70,
                        mx: 2,
                      }}
                    />

                  </Grid>
                )}
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
        <Grid size={12}>
          <Grid container>
            <Grid size={{ xs: 12 }} className='mt-5'>
              <Typography className='text-main fw-medium fs-20' data-aos="fade-up" gutterBottom>WHAT WE DELIVER</Typography>
              <Typography className='fw-bold fs-32' data-aos="fade-up" gutterBottom>End-to-End Solutions for Every Stage <br /> of Your Busisness Journey</Typography>
              <Typography className='fs-16' data-aos="fade-up" gutterBottom>From Business management to global expansion, <br /> we provide the expertise and support you need to grow, scale and succeed</Typography>
            </Grid>
            <Grid size={{ xs: 12 }} className='mt-3'>
              <Grid container spacing={2}>
                <Grid className='border-blue border-10 glow-card p-4 px-5' data-aos="fade-up" size={{ xs: 12, md: 6, lg: 3 }}>
                  <Typography className='fw-medium text-center fs-20' gutterBottom>GLOBAL TRAINING</Typography>
                  <Typography className='fs-16 text-center'>Impectful national & international training and workshops converting modern business management practies</Typography>
                </Grid>

                <Grid className='border-blue border-10 glow-card p-4 px-5' data-aos="fade-up" size={{ xs: 12, md: 6, lg: 3 }}>
                  <Typography className='fw-medium text-center fs-20' gutterBottom>360 consulting</Typography>
                  <Typography className='fs-16 text-center'>Expert interventions in finance marketing, HR Operations and Quality. Crafted top optimise performance.</Typography>
                </Grid>

                <Grid className='border-blue border-10 glow-card p-4 px-5' data-aos="fade-up" size={{ xs: 12, md: 6, lg: 3 }}>
                  <Typography className='fw-medium text-center fs-20' gutterBottom>Strategic Growth</Typography>
                  <Typography className='fs-16 text-center'>In depth Business proposal overlution and actionable strategy planing for sustainable growth</Typography>
                </Grid>

                <Grid className='border-blue border-10 glow-card p-4 px-5' data-aos="fade-up" size={{ xs: 12, md: 6, lg: 3 }}>
                  <Typography className='fw-medium text-center fs-20' gutterBottom>International Expansion</Typography>
                  <Typography className='fs-16 text-center'>Seamless Incorportion  & Setup of business, branches & subboundries across the globe</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid size={12} className='mt-5 border-main-top border-main-bottom'>
          <Grid container>
            <Grid size={{ xs: 12, md: 5.5 }} sx={{ py: { xs: 0, md: 5 } }}>
              <Typography className='text-main fw-medium fs-18' gutterBottom data-aos="fade-up" sx={{ letterSpacing: "2px" }}>WHY CHOOSE NYMPH INTERNATIONAL LLP?</Typography>
              <Typography variant='h4' className='fw-medium' data-aos="fade-up">Your Trusted Partner in</Typography>
              <Typography variant='h4' className='fw-medium mb-2' data-aos="fade-up">Global Business Success</Typography>
              <Typography data-aos="fade-up">We combine global expertise with bond insights to <br /> deliver practical solutions that drive real results.</Typography>
              <List className='d-flex flex-column gap-3 text-white p-0 m-0 mt-3' data-aos="fade-up">
                <ListItem className='gap-2 m-0 p-0'><CheckCircleOutlined className='text-main' /> Global Expertise. Local UbderStanding</ListItem>
                <ListItem className='gap-2 p-0'><CheckCircleOutlined className='text-main' /> Thousand Stretegies for Every Business</ListItem>
                <ListItem className='gap-2 p-0'><CheckCircleOutlined className='text-main' /> Result Oriented Approch</ListItem>
                <ListItem className='gap-2 p-0'><CheckCircleOutlined className='text-main' /> End to End Support</ListItem>
                <ListItem className='gap-2 p-0'><CheckCircleOutlined className='text-main' /> Confidentiality and integrity</ListItem>
              </List>
            </Grid>
            <Grid className='d-none d-md-inline-block' data-aos="zoom-in" size={{ xs: 0, md: 6.5 }}
              sx={{
                position: "relative",
                background: `url(${home1})`,
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
            <Grid data-aos="fade-up" size={12} className='d-inline-block d-md-none'>
              <Box component={'img'} width={'100%'} height={'auto'} src={home1} />
            </Grid>
          </Grid>
        </Grid>

        <Grid size={12} className='mt-5'>
          <Grid container>
            <Grid size={12}>
              <Typography className='text-main fw-medium fs-20' data-aos="fade-up" gutterBottom>WHY GLOBAL PRESENCE</Typography>
              <Typography className='fw-bold fs-32' data-aos="fade-up" gutterBottom>Expanding Business Across the world</Typography>
            </Grid>
            <Grid className='d-none d-md-inline-block' data-aos="zoom-in" size={{ xs: 0, md: 8 }}
              sx={{
                position: "relative",
                background: `url(${home2})`,
                backgroundSize: "100%",
                backgroundPosition: "center center",
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
            </Grid>
            <Grid size={12} className='d-inline-block d-md-none' data-aos="fade-up">
              <Box component={'img'} width={'100%'} height={'auto'} src={home2} />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }} sx={{ py: { xs: 0, md: 5 } }}>
              <Box className='p-3 border-10 border-blue card'>
                <Box className='mb-2 d-flex align-items-center gap-3' data-aos="fade-up">
                  <Box sx={{ height: "60px", width: '60px' }} className='border-main border-10'></Box>
                  <Box >
                    <Typography className='fs-20'>United States</Typography>
                    <Typography className='fs-14'>Company Expansion, LLC, branch <br /> setup & master Entity Support</Typography>
                  </Box>
                </Box>
                <Box className='mb-2 d-flex align-items-center gap-3' data-aos="fade-up">
                  <Box sx={{ height: "60px", width: '60px' }} className='border-main border-10'></Box>
                  <Box>
                    <Typography className='fs-20'>Canada</Typography>
                    <Typography className='fs-14'>Company Expansion, LLC, branch <br /> setup & master Entity Support</Typography>
                  </Box>
                </Box>
                <Box className='mb-2 d-flex align-items-center gap-3' data-aos="fade-up">
                  <Box sx={{ height: "60px", width: '60px' }} className='border-main border-10'></Box>
                  <Box>
                    <Typography className='fs-20'>Australia</Typography>
                    <Typography className='fs-14'>Company Expansion, LLC, branch <br /> setup & master Entity Support</Typography>
                  </Box>
                </Box>
                <Box className='mb-2 d-flex align-items-center gap-3' data-aos="fade-up">
                  <Box sx={{ height: "60px", width: '60px' }} className='border-main border-10'></Box>
                  <Box>
                    <Typography className='fs-20'>United Kingdom</Typography>
                    <Typography className='fs-14'>Company Expansion, LLC, branch <br /> setup & master Entity Support</Typography>
                  </Box>
                </Box>
                <Box className='mb-2 d-flex align-items-center gap-3' data-aos="fade-up">
                  <Box sx={{ height: "60px", width: '60px' }} className='border-main border-10'></Box>
                  <Box>
                    <Typography className='fs-20'>New Zealand</Typography>
                    <Typography className='fs-14'>Company Expansion, LLC, branch <br /> setup & master Entity Support</Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <Grid size={12} className='mt-5 p-3 border-blue bg-graidient border-10'>
          <Typography className='text-main fw-medium fs-20 text-center' data-aos="fade-up">HOW WE WORK</Typography>
          <Typography className='fw-medium fs-28 text-center' data-aos="fade-up">A Simple Processes. Powerful Results.</Typography>
          <Grid container className='mt-4'>
            {workSteps.map((step, index) => (
              <>
                <Grid
                  key={step.no}
                  size={{
                    xs: 12,
                    sm: 6,
                    md: "grow"
                  }}
                >
                  <Box className='text-center'>
                    <Box
                      data-aos="zoom-in"
                      className='border-blue d-flex align-items-center justify-content-center mx-auto position-relative'
                      sx={{
                        width: 100,
                        height: 100,
                        borderRadius: "50%",
                      }}
                    >
                      <Typography
                        className='fs-20 text-main position-absolute fw-bold'
                        sx={{
                          position: "absolute",
                          top: -15,
                        }}
                      >
                        {step.no}
                      </Typography>
                      {step.icon}
                    </Box>
                    <Typography data-aos="fade-up" className='mt-1 fs-20 fw-medium' gutterBottom>
                      {step.title}
                    </Typography>

                    <Typography data-aos="fade-up" className='fs-14'>
                      {step.desc}
                    </Typography>
                  </Box>
                </Grid>
                {index < (workSteps.length - 1) && (
                  <Grid size='auto' data-aos="fade-right" className='mt-3 mb-4 mb-md-0 mx-auto'>
                    <Typography className='text-white my-2 my-md-0'>   <SouthOutlined
                      className="fs-64 text-main"
                      sx={{ display: { xs: "block", md: "none" } }}
                    />

                      {/* Tablet/Desktop */}
                      <EastOutlined
                        className="fs-64 text-main"
                        sx={{ display: { xs: "none", md: "block" } }}
                      />
                    </Typography>

                  </Grid>
                )}
              </>
            ))}
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
      </Grid>
    </Box>
  )
}

export default Home
