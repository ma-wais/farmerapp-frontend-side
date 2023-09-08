import { Box } from '@mui/material'
import React from 'react'

export const ProgressBar:React.FC<{width:number | string, bgColor?:string}> = ({ width = 0, bgColor="rgb(250, 250, 250)" }) => {
    return (
        <Box className="progressBar mxAuto" sx={{
            position: "relative",
            width: "80%",
            height: "6px",
            borderRadius: "6px",
            overflow: "hidden",
            backgroundColor: `${bgColor}`,
        }}>
            <span style={{
                display: "block",
                width: `${width}%`,
                height: "100%",
                backgroundColor: "#966122",
                borderRadius: "inherit"
            }}></span>
        </Box>
    )
}
