import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart, ArcElement } from 'chart.js'
import{ Typography, Stack,Box}from '@mui/material'
import "./Style.css"


Chart.register(ArcElement);


const config = {
  data: {
    datasets: [{
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4,
      borderRadius: 30,
      spacing: 10
    }]
  },
  options: {
    cutout: 115
  }
}

const ChartComponent = () => {
  return (
    <Box className='chart'>
      <Doughnut {...config}></Doughnut>
      <Box className='text'>
        <Typography variant="body1" color="myColor.dark" fontWeight={600}>Total</Typography>
        <Typography variant="body1" color="myColor.green" fontWeight={600}>$0</Typography>
      </Box>
    </Box>
  )
}

export default ChartComponent