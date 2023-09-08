import { Box } from '@mui/material'
import React from 'react'

const SimpleInput = ({children, sx ={} }) => {
    return (<Box sx={{
        ...sx,
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'white',
        border: '1px solid #EAECF0',
        padding: '1em',
        borderRadius: '1em',
    }}>
        {children}
    </Box>
    )
}

export default SimpleInput