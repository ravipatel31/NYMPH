import { Call, Email, Facebook, Instagram, LinkedIn, LocationCityOutlined, LocationPin, Twitter, X } from '@mui/icons-material'
import { Box, Grid, Typography } from '@mui/material'
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
        <Box className='border-main-top' sx={{px:{ xs: 1, lg: 4 },py:{ xs: 1, md: 3}, }}>
            <Grid container sx={{ gap:3, alignItems: 'stretch' }}>
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <Box sx={{ height: '60px'}} component={'img'} src={fulllogo} className='mb-3'></Box>
                    <Typography className='fs-14 mb-3'>NYMPH International LLP is a global consulting <br /> firm specializing in business managemnet,  <br /> stretegoc growth and international expansion.</Typography>
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
                <Grid size={{ xs: 12, sm: 6, md: 'grow' }}>
                    <Typography className='fs-18 fw-medium mb-3'>Quick Links</Typography>
                    {
                        menuItems?.map((item) => (
                            <Typography key={item} className='fs-14 mb-2'>{item}</Typography>
                        ))
                    }
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 'grow' }}>
                    <Typography className='fs-18 fw-medium mb-3'>Our Services</Typography>
                    {
                        services?.map((item) => (
                            <Typography key={item} className='fs-14 mb-2'>{item}</Typography>
                        ))
                    }
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 'grow' }}>
                    <Typography className='fs-18 fw-medium mb-3'>Contact Us</Typography>
                    <Box className='d-flex align-items-start gap-2 mb-3'>
                        <LocationPin className='text-white' />
                        <Typography className='fs-14'>AF-6, Takshashila Orient, Nikol-Naroda Road, Ahmedabad, Gujarat, India - 382350.</Typography>
                    </Box>
                    <Box className='d-flex align-items-start gap-2 mb-3'>
                        <Call className='text-white' />
                        <Typography className='fs-14'> <a href="tel:+919023623761" className='text-white' style={{textDecoration:'none !important', color:"white"}}>+91 9023623761</a></Typography>
                    </Box>
                    <Box className='d-flex align-items-start gap-2'>
                        <Email className='text-white' />
                        <Typography className='fs-14'><a href="mailto:nymph.iinternational@gmail.com" className='text-white'>nymph.iinternational@gmail.com</a></Typography>
                    </Box>
                </Grid>
                <Grid size={12} sx={{ border: "1px solid #FFFFFF1A" }}></Grid>
                <Grid size={12}>
                    <Box className='d-flex align-items-center justify-content-center'>
                        <Typography className='fs-14 mx-auto text-center'> <span className='fs-16' style={{ verticalAlign:"middle"}}>&copy;</span> {new Date().getFullYear()} NYMPH International LLP. All Rights Reserved.</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Footer
