'use client'

import { useStateContext } from "@/context/ContextProvider"
import { useMutation } from "@tanstack/react-query"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import axiosClient1 from "@/lib/axios copy"
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


type LoginResponse = {
  success: string;
  message: string;
  token?: string;
};

export default function SigninForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { setUserToken } = useStateContext();
  
  const form = useForm({
    resolver: zodResolver(SigninSchema),
    defaultValues: {
      username: "",
      password: "",
    }
  })

  const { mutate: login, isPending } = useMutation({
    mutationFn: (data: z.infer<typeof SigninSchema>) => axiosClient1.post<LoginResponse>('/login/', data),
    onSuccess: (response) => {
      console.log(response);
      if (response?.statusText === "OK") {
        const token = response?.data?.token;
        if (token) {
          setUserToken(token);
        }
        toast.success(response?.data?.message || 'Login successful!');
        setTimeout(() => {
          router.push('/page/dashboard');
        }, 2000);
      } else {
        toast.error('Login failed. Please check your credentials.');
        form.reset();
      }
    },
    onError: (error: any) => {
      console.log(error);
      toast.error(error?.response?.data?.non_field_errors[0] || 'Login failed. Please check your credentials.');
      form.reset();
    }
  })


  const onSubmit = (data: z.infer<typeof SigninSchema>) => {
    setLoading(true);
    login(data);
  }

  return (
    <CardWrapper
      label="Sign in to your account"
      title="Sign in"
      backButtonHref="/sign-up"
      backButtonLabel="Don't have an account? Register here."
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <FormField 
              control={form.control}
              name="username"
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
          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? "Loading..." : "Sign in"}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  )
}
