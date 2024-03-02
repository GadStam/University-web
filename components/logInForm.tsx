import React from 'react'
import { TextField, Button, Stack } from '@mui/material'
import {useForm} from 'react-hook-form';
import { DevTool } from "@hookform/devtools";

type FormValues ={
    email:string;
    password: string;
}

export const LogInForm = () => {

    const form = useForm<FormValues>({
        defaultValues:{
            email:'', 
            password:''
        }

    });
    const {register, handleSubmit, formState, control} = form;
    const {errors} = formState

    const onSubmit = (data:FormValues)=>{
        console.log(data);
    };

  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Stack spacing={2} width={400}>
            <TextField label = 'Email' type='email' {...register('email', {required: "Email is Required"})}
                error={!!errors.email}
                helperText={errors.email?.message}
            />  
            <TextField label = 'Password' type='password' {...register('password',{required: "Password is Required"})}
                error={!!errors.password}
                helperText={errors.password?.message}
            />
            <Button type='submit' variant="contained" color ='primary'>
                Log In
            </Button>
        </Stack>
        </form>
        <DevTool control={control}/>
    </div>
  )
}
