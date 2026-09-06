import { CheckCircleOutlined, CorporateFareOutlined, EmailOutlined, PersonOutlined } from '@mui/icons-material'
import { Box, Button, Grid, InputAdornment, ListItem, TextField, Typography } from '@mui/material'
import { Goal, List, MessageCircleMore, ShieldCheck, Users } from 'lucide-react'
import React from 'react'
import about1 from '../Assets/Images/Contact/contact1.png'
import contact from '../Assets/Images/Contact/contact2.png'


function ContactUs2() {
    // contact us Page
    return (
        <Box>
            <Grid container sx={{ height: {xs:"fit-content", md:'calc(100vh - 80px)'} }} className='position-relative g-bg' >
                <Grid size={{ xs: 12, md: 6 }} className='my-auto' sx={{ px: { xs: 2, md: 3 }, pt: 5, zIndex: 2 }}>
                    <Typography className='text-second fw-medium fs-20' data-aos="fade-up" gutterBottom sx={{ letterSpacing: "2px" }}>CONTACT US</Typography>
                    <Typography className='fw-medium fs-58 c-f mt-2' sx={{ whiteSpace: { xs: "normal", md: "nowrap" } }} data-aos="fade-up">Let's Build Something</Typography>
                    <Typography className='fw-medium mb-3 fs-58 c-f' data-aos="fade-up" sx={{whiteSpace:{xs:"auto",md:'nowrap'}}}><i className='text-main'>Extraordinary</i> Together</Typography>
                    <Typography className='fs-16' data-aos="fade-up">We're here to answer your questions, understand your golas, <br /> and help your business reach new heights</Typography>
                    <Grid container spacing={2} className='mt-3 mb-3 mb-md-0'>
                        <Grid size={{ xs: 12, md: 'grow' }} data-aos="fade-up" className='d-flex flex-column justify-contnet-center align-items-center border border-10 p-2'>
                            <Box className='border-50 mb-2' sx={{ display: 'inline-block', p: 1.5, border: '1px solid #FFFFFF4A' }}>
                                <MessageCircleMore className='text-main' style={{ height: '36px', width: '36px' }} />
                            </Box>
                            <Typography variant='body1' className='fw-bold text-center' gutterBottom>Quick Response</Typography>
                            <Typography variant='body2' className='text-center'>We'll get back to you promplty.</Typography>
                        </Grid>
                        <Grid size={{ xs: 12, md: 'grow' }} data-aos="fade-up" className='d-flex flex-column justify-contnet-center align-items-center border border-10 p-2'>
                            <Box className='border-50 mb-2' sx={{ display: 'inline-block', p: 1.5, border: '1px solid #FFFFFF4A' }}>
                                <Users className='text-main' style={{ height: '36px', width: '36px' }} />
                            </Box>
                            <Typography variant='body1' className='fw-bold text-center'>Expert Consultation</Typography>
                            <Typography variant='body2' className='text-center'>Speak With our industry experts</Typography>
                        </Grid>
                        <Grid size={{ xs: 12, md: 'grow' }} data-aos="fade-up" className='d-flex flex-column justify-contnet-center align-items-center border border-10 p-2'>
                            <Box className='border-50 mb-2' sx={{ display: 'inline-block', p: 1.5, border: '1px solid #FFFFFF4A' }}>
                                <Goal className='text-main' style={{ height: '36px', width: '36px' }} />
                            </Box>
                            <Typography variant='body1' className='fw-bold text-center'>Tailored Solutions</Typography>
                            <Typography variant='body2' className='text-center'>Customized strategies for your success.</Typography>
                        </Grid>
                        <Grid size={{ xs: 12, md: 'grow' }} data-aos="fade-up" className='d-flex flex-column justify-contnet-center align-items-center border border-10 p-2'>
                            <Box className='border-50 mb-2' sx={{ display: 'inline-block', p: 1.5, border: '1px solid #FFFFFF4A' }}>
                                <ShieldCheck className='text-main' style={{ height: '36px', width: '36px' }} />
                            </Box>
                            <Typography variant='body1' className='fw-bold text-center'>Confidentiality</Typography>
                            <Typography variant='body2' className='text-center'>your information is safe iwth us.</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid size={{ xs: 12, md: 6.5 }} className='d-none d-md-inline-block right-side' data-aos="zoom-in">
                    <Box className='hero-section h-100 w-100'></Box>
                </Grid>
            </Grid>
            <Grid container className='mt-5' spacing={2}>
                <Grid className='d-none d-md-inline-block' data-aos="zoom-in"  size={{ xs: 12, md: 6 }}
                    // sx={{background:`url(${eart2})`, backgroundSize:'100%', backgroundPosition:'top center'}}
                    sx={{
                        position: "relative",
                        maxHeight: '500px',
                        background: `url(${contact})`,
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
                <Grid size={12} data-aos="fade-up" className='d-inline-block d-md-none' sx={{ maxHeight: '500px' }}>
                    <Box component={'img'} width={'100%'} height={'auto'} src={contact} />
                </Grid>
                <Grid size={{ xs: 12, md: 'grow' }} className='mx-3 mx-md-0 me-md-4'>
                    <Typography variant='h4' className='text-main' gutterBottom>Send Us a Message</Typography>
                    <Typography variant='body2'>Fill out the form and our team will get in touch with you shortly.</Typography>
                    <Grid className='form w-100 mt-3' container spacing={1.5}>
                        <Grid data-aos="fade-up"  size={{ xs: 12, md: 6 }}>
                            <TextField
                                fullWidth
                                placeholder='Your Name'
                                slotProps={{
                                    input: {
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <PersonOutlined />
                                            </InputAdornment>
                                        ),
                                    },
                                }}
                            />
                        </Grid>
                        <Grid data-aos="fade-up" size={{ xs: 12, md: 6 }}>
                            <TextField
                                fullWidth
                                placeholder='Your Email'
                                type='email'
                                slotProps={{
                                    input: {
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <EmailOutlined />
                                            </InputAdornment>
                                        ),
                                    },
                                }}
                            />
                        </Grid>
                        <Grid data-aos="fade-up" size={12}>
                            <TextField
                                fullWidth
                                placeholder='Your Company Name'
                                slotProps={{
                                    input: {
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <CorporateFareOutlined />
                                            </InputAdornment>
                                        ),
                                    },
                                }}
                            />
                        </Grid>
                        <Grid data-aos="fade-up" size={12}>
                            <TextField
                                fullWidth
                                multiline
                                minRows={2}
                                placeholder='Subject'
                            />
                        </Grid>
                        <Grid data-aos="fade-up" size={12}>
                            <TextField
                                fullWidth
                                multiline
                                minRows={4}
                                placeholder='Message'
                            />
                        </Grid>
                        <Grid data-aos="fade-up" size={12}>
                            <Box className='d-flex justify-content-end'>
                                <Button className='btn-main text-white px-3 py-2'>Send Message</Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </Box>
    )
}

export default ContactUs2
