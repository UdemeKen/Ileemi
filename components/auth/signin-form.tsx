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
import { SigninSchema } from "@/schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod";
import { useForm } from "react-hook-form"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { useFormStatus } from "react-dom"
import { useState } from "react"


export default function SigninForm() {
    const [ loading, setLoading ] = useState(false);

  const form = useForm({
    resolver: zodResolver(SigninSchema),
    defaultValues: {
      email: "",
      password: "",
    }
  })

  const onSubmit = (data: z.infer<typeof SigninSchema>) => {
    setLoading(true);
    console.log(data);
  }

  const { pending } = useFormStatus();

  return (
    <CardWrapper
      label="Sign in to your account"
      title="Signin"
      backButtonHref="/sign-up"
      backButtonLabel="Don't have an account? Register here."
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
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
          </div>
          <Button type="submit" className="w-full" disabled={pending}>
            {loading ? "Loading..." : "Sign in"}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  )
}
