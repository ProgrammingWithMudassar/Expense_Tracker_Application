import React from 'react'
import { Box, Typography } from '@mui/material'

const List = () => {
    const object = [
        {
            type: "Saving",
            color: "#f9c74f",
        },
        {
            type: "Investment",
            color: "#36A2EB",
        },
        {
            type: "Expense",
            color: "#FFCD56",
        }
    ]

    return (
        <Box sx={{ mt: { sx: 2, md: 6 } }}>
            <Typography variant="h6" color="initial" fontWeight={600} textAlign="center">History</Typography>
            {
                object.map((v, i) => {
                    return (
                        <Transcation key={i} category={v} />
                    )
                })
            }
        </Box>
    )
}

const Transcation = ({ category }) => {
    if (!category) return null;
    return (
        <Box backgroundColor="background.list" sx={{ borderRight: "8px solid black", borderRadius: "6px", py: 0.5 }}>
            <span >saving</span>
        </Box>
    )
}

export default List