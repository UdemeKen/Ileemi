'use client'

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
  { label: 'United States', value: 'US' },
  { label: 'Canada', value: 'CA' },
  { label: 'United Kingdom', value: 'UK' },
  { label: 'Nigeria', value: 'NG' },
  { label: 'Australia', value: 'AU' },
];


export default function SignupForm() {
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

  const onSubmit = (data: z.infer<typeof SignupSchema>) => {
    setLoading(true)
    console.log(data);
  }

  const { pending } = useFormStatus()

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
                    <Input {...field} placeholder="bug hunter" />
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
          <Button type="submit" className="w-full" disabled={pending}>
            {loading ? "Loading..." : "Sign up"}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  )
}
