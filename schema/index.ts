import * as z from 'zod';

export const SignupSchema = z.object({
    first_name: z.string().min(1, "First name is required"),
    last_name: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email address"),
    phone_number: z.string().min(1, "Phone number is required"),
    country: z.string().min(1, "Country is required"),
    phone_code: z.string().optional(),
    country_code: z.string().optional(),
    currency_symbol: z.string().optional(),
    password: z.string().min(6, "Password must be at least 6 characters"),
    password2: z.string().min(6, "Password must be at least 6 characters")
}).refine((data) => data.password === data.password2, {
    message: "Passwords don't match",
    path: ["password2"]
});

export const SigninSchema = z.object({
    username: z.string().email({
        message: "Please enter a valid email address"
    }),
    password: z.string().min(6, {
        message: "Password must be atleast 6 characters long"
    })
})

export const ActivationSchema = z.object({
    email: z.string().email({
        message: "Please enter a valid email address"
    }),
    pin: z.string().min(5, {
        message: "OTP must be atleast 5 characters long"
    })
})
