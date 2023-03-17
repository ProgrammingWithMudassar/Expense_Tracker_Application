import React from 'react'
import { Box, Typography, Container, Grid, } from '@mui/material'
import './Style.css'
import {
  ChartComponent,Form
} from '../Components/index.js'


const Home = () => {
  return (
    <Box>
      <Container maxWidth="lg">
        <Box className="header">
          <Typography variant="h3" color="myColor.main">Expense Tracker App</Typography>
        </Box>
        <Grid container spacing={4} mt={4} height='50vh'>
          <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <ChartComponent />
          </Grid>
          <Grid item xs={12} md={6}>
            <Form />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Home