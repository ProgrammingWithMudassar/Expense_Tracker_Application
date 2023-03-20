import React from 'react'
import { Typography, Box, Stack } from '@mui/material'

const Labels = () => {

    const object = [
        {
            type: "Saving",
            color: "#f9c74f",
            percent: 45
        },
        {
            type: "Saving",
            color: "#36A2EB",
            percent: 45
        },
        {
            type: "Saving",
            color: "#FFCD56",
            percent: 45
        }
    ]

    return (
        <Box mt={4}>
            {
                object.map((value, item) => <LabelComponent key={item} data={value}></LabelComponent>)
            }
        </Box>
    )
}



const LabelComponent = ({ data }) => {
    if (!data) return <></>;
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between',my:2 }}>
            <Stack direction='row'>
                <Box sx={{ width: '0.5rem', background: data.color ?? "#000000", mr: 1, borderRadius: "10px" }}></Box>
                <Typography variant="h5" color="initial" >{data.type}</Typography>
            </Stack>
            <Typography variant="h6" color="initial">{data.percent}%</Typography>
        </Box>
    )
}


export default Labels