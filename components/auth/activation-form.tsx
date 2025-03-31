"use client";

import { useStateContext } from "@/context/ContextProvider";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
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
import axiosClient1 from "@/lib/axios copy";

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

  const [loading, setLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(ActivationSchema),
    defaultValues: {
      email: localStorage.getItem("Email") || "",
      pin: "",
    },
  });

  const { formState: { errors } } = form;

  // Log errors to see if there are any validation issues
  console.log(errors);

  const { mutate: activate, isPending } = useMutation({
    mutationFn: async (data: z.infer<typeof ActivationSchema>) => {
      console.log("Mutation starting...");
      const email = localStorage.getItem("Email");
      const response = await axiosClient1.post<ActivationResponse>("/activate/", {
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
        error.response?.data?.error ||
        "Activation failed. Please check your OTP."
      );
      // form.reset();
    },
  });
  
  const onSubmit = (data: z.infer<typeof ActivationSchema>) => {
    console.log("Form submitted:", data);
    setLoading(true);
    activate(data);
    console.log(data);
  };

  // Add new mutation for regenerate pin
  const { mutate: regeneratePin, isPending: isRegenerating } = useMutation({
    mutationFn: async () => {
      // const email = localStorage.getItem("Email");
      const email = "udemekendrice@gmail.com";
      const response = await axiosClient1.post("/retry_activate/", { email });
      console.log(response);
      return response;
    },
    onSuccess: (response) => {
      toast.success("New OTP has been sent to your email!");
    },
    onError: (error: any) => {
      toast.error(
        error.response?.data?.error ||
        "Failed to regenerate OTP. Please try again."
      );
    },
  });

  // Handle regenerate pin click
  const handleRegeneratePin = (e: React.MouseEvent) => {
    e.preventDefault();
    regeneratePin();
  };

  return (
    <CardWrapper
      title="Activate your account"
      label="An OTP have been sent to your email"
      >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col justify-center items-center space-y-6">
          <div className="w-1/2 space-y-2 text-center">
            <FormField
              control={form.control}
              name="pin"
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
          <div className="flex gap-4 w-2/3">
            <Button
              type="button"
              className="w-1/2 bg-transparent text-green-500 hover:text-white ease-out duration-300"
              disabled={isRegenerating}
              onClick={handleRegeneratePin}>
              {isRegenerating ? "Sending..." : "Regenerate pin"}
            </Button>
            <Button
              type="submit"
              className="w-1/2"
              disabled={isPending}>
              {isPending ? "Loading..." : "Submit"}
            </Button>
          </div>
        </form>
      </Form>
    </CardWrapper>
  );
}
