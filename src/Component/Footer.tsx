import { Call, Email, Facebook, Instagram, LinkedIn, LocationCityOutlined, LocationPin, Twitter, X } from '@mui/icons-material'
import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import fulllogo from '../Assets/Images/full-logo2.png'

function Footer() {
    const menuItems = [
        "About Us",
        "Services",
        "Global Expansion",
        "Training & Workshop",
        "Contact Us",
    ];

    const services = [
        "Global Training",
        "360 Consulting",
        "Stretegic Growth",
        "International Expansion",
        "Business Setup",
        "Market Entry Stretegy",
    ];
    return (
        <Box>
            <Box className='border-10 bg-purple p-2 px-3 mb-3 mx-3 d-block d-md-none'>
                <Box>
                    <Typography variant='h6' className='text-white c-f'>Ready to Take Your Business Beyond Borders ?</Typography>
                    <Typography variant='body2' className='text-white mt-1'>Let's build your success story together.</Typography>
                </Box>
                <Box className='mt-4'>
                    <Button className='bg-white border-10 text-main px-3 py-2 mb-1' sx={{ textTransform: "none" }}>Book a Free Consultation</Button>
                </Box>
            </Box>
            <Box className='border-main-top position-relative mt-md-5 mt-0' sx={{ px: { xs: 1, lg: 4 }, py: { xs: 1, md: 3 }, bgcolor: 'rgb(20,22,27)' }}>
                <Box className='border-10 bg-purple p-3 px-4 align-items-center gap-5 justify-content-between' sx={{
                    position: 'absolute',
                    display: { xs: 'none', md: 'flex' },
                    top: "-50px",
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: "90%"

                }}>
                    <Box>
                        <Typography variant='h4' className='text-white c-f mb-1'>Ready to Take Your Business Beyond Borders ?</Typography>
                        <Typography variant='body2' className='text-white'>Let's build your success story together.</Typography>
                    </Box>
                    <Box>
                        <Button className='bg-white border-10 text-main px-3 py-2' sx={{ textTransform: "none" }}>Book a Free Consultation</Button>
                    </Box>
                </Box>
                <Grid container spacing={{xs:2,md:3}} sx={{alignItems: 'stretch', marginTop: '50px' }}>
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <Box sx={{ height: '60px' }} component={'img'} src={fulllogo} className='mb-3'></Box>
                        <Typography className='fs-14 mb-3 text-white'>NYMPH International LLP is a global consulting <br /> firm specializing in business managemnet,  <br /> stretegoc growth and international expansion.</Typography>
                        <Box className='d-flex align-items-center gap-3'>
                            <Box className='p-2 border-50 border' sx={{ borderRadius: '50%' }}>
                                <LinkedIn className='text-white' />
                            </Box>
                            <Box className='p-2 border-50 border' sx={{ borderRadius: '50%' }}>
                                <Instagram className='text-white' />
                            </Box>
                            <Box className='p-2 border-50 border' sx={{ borderRadius: '50%' }}>
                                <Facebook className='text-white' />
                            </Box>
                            <Box className='p-2 border-50 border' sx={{ borderRadius: '50%' }}>
                                <X className='text-white' />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 6, sm: 6, md: 'grow' }}>
                        <Typography className='fs-18 fw-medium mb-3 text-white'>Quick Links</Typography>
                        {
                            menuItems?.map((item) => (
                                <Typography key={item} className='fs-14 mb-2 text-white'>{item}</Typography>
                            ))
                        }
                    </Grid>
                    <Grid size={{ xs: 6, sm: 6, md: 'grow' }}>
                        <Typography className='fs-18 fw-medium mb-3 text-white'>Our Services</Typography>
                        {
                            services?.map((item) => (
                                <Typography key={item} className='fs-14 mb-2 text-white'>{item}</Typography>
                            ))
                        }
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 'grow' }}>
                        <Typography className='fs-18 fw-medium mb-3 text-white'>Contact Us</Typography>
                        <Box className='d-flex align-items-start gap-2 mb-3'>
                            <LocationPin className='text-white' />
                            <Typography className='fs-14 text-white'>AF-6, Takshashila Orient, Nikol-Naroda Road, Ahmedabad, Gujarat, India - 382350.</Typography>
                        </Box>
                        <Box className='d-flex align-items-start gap-2 mb-3'>
                            <Call className='text-white' />
                            <Typography className='fs-14 text-white'> <a href="tel:+919023623761" className='text-white' style={{ textDecoration: 'none !important', color: "white" }}>+91 9023623761</a></Typography>
                        </Box>
                        <Box className='d-flex align-items-start gap-2'>
                            <Email className='text-white' />
                            <Typography className='fs-14 text-white'><a href="mailto:nymph.iinternational@gmail.com" className='text-white'>nymph.iinternational@gmail.com</a></Typography>
                        </Box>
                    </Grid>
                    <Grid size={12} sx={{ border: "1px solid #FFFFFF1A" }}></Grid>
                    <Grid size={12}>
                        <Box className='d-flex align-items-center justify-content-center'>
                            <Typography className='fs-14 mx-auto text-center text-white'> <span className='fs-16' style={{ verticalAlign: "middle" }}>&copy;</span> {new Date().getFullYear()} NYMPH International LLP. All Rights Reserved.</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default Footer
