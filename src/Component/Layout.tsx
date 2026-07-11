import { Box } from '@mui/material'
import React from 'react'
import Header from './Header'

function Layout({children}:{ children: React.ReactNode }) {
    return (
        <Box className='w-100 d-flex flex-column bg-main m-0 p-0 p-3 p-md-0'>
            <Header />
            <Box sx={{ flex:1, py:{ xs: 1, md: "50px", lg: '70px' }, px:{ xs: 1, lg: 4 }}} className='w-100 m-0' >
                {children}
            </Box>
        </Box>
    )
}

export default Layout
