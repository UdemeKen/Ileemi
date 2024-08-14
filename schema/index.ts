import * as z from 'zod';

export const SignupSchema = z.object({
    name: z.string().min(1, {
        message: "Please enter your name"
    }), 
    email: z.string().email({
        message: "Please enter a valid email address"
    }),
    phone: z.string().min(6, {
        message: "Please enter your phone number"
    }),
    country: z.string().min(1, {
        message: "Please select your country"
    }),
    password: z.string().min(6, {
        message: "Password must be atleast 6 characters long"
    }), 
    confirmPassword: z.string().min(6, {
        message: "Password must be atleast 6 characters long"
    })
})

export const SigninSchema = z.object({
    email: z.string().email({
        message: "Please enter a valid email address"
    }),
    password: z.string().min(6, {
        message: "Password must be atleast 6 characters long"
    })
})
