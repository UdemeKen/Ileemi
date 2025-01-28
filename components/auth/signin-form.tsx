'use client'

import { useStateContext } from "@/context/ContextProvider"
import { useMutation } from "@tanstack/react-query"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import axiosClient from "@/lib/axios"
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
  payload?: {
    token?: string;
    user?: any;
  };
};

export default function SigninForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { setUserToken } = useStateContext();
  
  const form = useForm({
    resolver: zodResolver(SigninSchema),
    defaultValues: {
      email: "",
      password: "",
    }
  })

  const { mutate: login, isPending } = useMutation({
    mutationFn: (data: z.infer<typeof SigninSchema>) => axiosClient.post<LoginResponse>('/login', data),
    onSuccess: (response) => {
      if (response?.data?.success) {
        const token = response?.data?.payload?.token;
        if (token) {
          setUserToken(token);
        }
        toast.success(response?.data?.message || 'Login successful!');
        localStorage.setItem("Username", response?.data?.payload?.user?.name);
        setTimeout(() => {
            router.push('/page/dashboard');
        }, 2000);
      } else {
        toast.error(response?.response?.data?.payload || 'Login failed. Please check your credentials.');
        form.reset();
      }
    },
    onError: (error: any) => {
      toast.error(error?.data?.message || 'Login failed. Please check your credentials.');
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
          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? "Loading..." : "Sign in"}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  )
}
