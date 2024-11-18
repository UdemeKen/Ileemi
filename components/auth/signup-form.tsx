'use client'

import { useMutation } from "@tanstack/react-query"
import axiosClient from "@/lib/axios"
import { toast } from 'sonner'
import { useRouter } from "next/navigation"
import CardWrapper from "./card-wrapper"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { SignupSchema } from "@/schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod";
import { useForm } from "react-hook-form"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { useFormStatus } from "react-dom"
import { useState } from "react"


const countries = [
  { label: "United States", value: "United States" },
  { label: "Canada", value: "Canada" },
  { label: "United Kingdom", value: "United Kingdom" },
  { label: "Nigeria", value: "Nigeria" },
  { label: "Australia", value: "Australia" },
];

type RegisterResponse = {
  message: string;
  user?: any;
}


export default function SignupForm() {
  const router = useRouter();
  const [ loading, setLoading ] = useState(false);

  const form = useForm({
    resolver: zodResolver(SignupSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      country: "",
      password: "",
      confirmPassword: ""
    }
  })

  const { mutate: register, isPending } = useMutation({
    mutationFn: (data: z.infer<typeof SignupSchema>) => axiosClient.post<RegisterResponse>('/register', data),
    onSuccess: (response) => {
      console.log(response);
      toast.success(response?.data?.message);
      router.push('/sign-in');
    },
    onError: (error: any) => {
      console.log(error);
      toast.error(error?.response?.data?.payload?.email);
      toast.error(error?.response?.data?.payload?.phone);
    },
    onSettled: () => {
      if (isPending) {
        form.reset();
      }
    }
  });

  const onSubmit = (data: z.infer<typeof SignupSchema>) => {
    setLoading(true)
    register(data)
    console.log(data);
  }

  return (
    <CardWrapper
      label="Create an account"
      title="Signup"
      backButtonHref="/sign-in"
      backButtonLabel="Already have an account? Sign-in here."
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-2 gap-2">
            <FormField 
              control={form.control}
              name="name"
              render={({ field }) => {
                return <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Udeme Kendrick" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              }}
            />
            <FormField 
              control={form.control}
              name="email"
              render={({ field }) => {
                return <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} type="email" placeholder="ileemi@gmail.com" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              }}
            />
            <FormField 
              control={form.control}
              name="phone"
              render={({ field }) => {
                return <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="+234 000 000" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              }}
            />
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country</FormLabel>
                  <FormControl>
                    <select {...field} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                      <option value="" disabled>Select your country</option>
                      {countries.map((country) => (
                        <option key={country.value} value={country.value}>
                          {country.label}
                        </option>
                      ))}
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField 
              control={form.control}
              name="password"
              render={({ field }) => {
                return <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...field} type="password" placeholder="******" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              }}
            />
            <FormField 
              control={form.control}
              name="confirmPassword"
              render={({ field }) => {
                return <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input {...field} type="password" placeholder="******" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              }}
            />
          </div>
          <Button
            type="submit"
            className="w-full"
            disabled={isPending}
          >
            {isPending ? "Loading..." : "Sign up"}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  )
}
