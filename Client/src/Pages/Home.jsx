import React from 'react'
import { Box, Typography, Container, Grid, } from '@mui/material'
import './Style.css'
import {
  ChartComponent, Form, List
} from '../Components/index.js'


const Home = () => {
  return (
    <Box>
      <Container maxWidth="lg">
        <Box className="header" mt={{ xs: 1, md: 4 }}>
          <Typography variant="h3" color="myColor.main">Expense Tracker App</Typography>
        </Box>
        <Grid container spacing={4} mt={{ xs: 0, md: 4 }} height='80vh'>
          <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <ChartComponent />
          </Grid>
          <Grid item xs={12} md={6}>
            <Form />
            <List />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Home