import { Box } from '@mui/material'
import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Layout({children}:{ children: React.ReactNode }) {
    return (
        <Box sx={{minHeight:'100vh'}} className='w-100 gap-3 d-flex flex-column bg-main m-0 p-0 p-md-0'>
            <Box sx={{height:'60px'}}>
            <Header />
            </Box>
            <Box sx={{ flex:1}} className='w-100 m-0' >
                <Box className='h-100'>
                {children}
                </Box>
            </Box>
            <Footer/>
        </Box>
    )
}

export default Layout
