"use client";

import { useStateContext } from "@/context/ContextProvider";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import axiosClient from "@/lib/axios";
import CardWrapper from "./card-wrapper";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ActivationSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useFormStatus } from "react-dom";
import { useState, useEffect } from "react";

type ActivationResponse = {
  success: string;
  message: string;
  payload?: {
    token?: string;
    user?: any;
  };
};

export default function ActivationForm() {
  const router = useRouter();
  const { setUserToken } = useStateContext();

  const form = useForm({
    resolver: zodResolver(ActivationSchema),
    defaultValues: {
      email: "",
      otp: "",
    },
  });

  const onSubmit = (data: z.infer<typeof ActivationSchema>) => {
    console.log("Form submitted with data:", data);
    activate(data);
  };

  const { mutate: activate, isPending } = useMutation({
    mutationFn: async (data: z.infer<typeof ActivationSchema>) => {
      console.log("Mutation starting...");
      const email = localStorage.getItem("Email");
      const response = await axiosClient.post<ActivationResponse>("/sendotp", {
        ...data,
        email: email,
      });
      console.log("API Response:", response);
      return response;
    },
    onSuccess: (response) => {
      console.log("Mutation succeeded:", response);
      toast.success("Account activated successfully!");
      setTimeout(() => {
        router.push("/sign-in");
      }, 2000);
    },
    onError: (error: any) => {
      console.error("Mutation failed:", error);
      toast.error(
        error.response?.data?.message ||
          "Activation failed. Please check your OTP."
      );
      form.reset();
    },
  });


  return (
    <CardWrapper
      title="Activate your account"
      label="An OTP have been sent to your email"
      backButtonHref="/sign-up"
      backButtonLabel="">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col justify-center items-center space-y-6">
          <div className="w-1/2 space-y-2 text-center">
            <FormField
              control={form.control}
              name="otp"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>OTP</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="text"
                        placeholder="******"
                        className="text-center"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
          </div>
          <Button
            type="submit"
            className="w-full"
            disabled={isPending || form.formState.isSubmitting}>
            {isPending ? "Loading..." : "Submit"}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
}
