import React from 'react'
import { Box, Typography, Stack, Button } from '@mui/material'
import './Style.css'
import { useForm } from 'react-hook-form'



const Form = () => {

    const { register, handleSubmit, resetField } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
            <Typography variant="h5" color="myColor.dark" sx={{m:'auto',my:'20px'}}>Transaction</Typography>
            <form id='form' onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={2}>
                    <input type="text" placeholder='Sallary, House Rent, SIP' className='input' {...register('sallary', { required: true })} />
                    <select name="" id="" className='input' {...register('type', { required: true })}>
                        <option value="Investment" defaultValue>Investment</option>
                        <option value="Expense" >Expense</option>
                        <option value="Saving" >Saving</option>
                    </select>
                    <input type="number" placeholder='Amount' className='input no-arrows' {...register('Amount', { required: true })} />
                    <Button variant='contained' color='myColor' type="submit" sx={{ height: '40px' }}>Calcolate</Button>
                </Stack>
            </form>
        </Box>
    )
}

export default Form