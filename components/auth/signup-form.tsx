"use client";

import { useState, useEffect } from "react";
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
import { SignupSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useFormStatus } from "react-dom";
import Image from "next/image";
import { FiEye, FiEyeOff } from 'react-icons/fi';
import axiosClient1 from "@/lib/axios copy";

interface Country {
  country: string;
  country_code: string;
  flag: string;
  currencies: {
    code: string;
    name: string;
    symbol: string;
  }[];
}

type RegisterResponse = {
  message: string;
  user?: any;
  email?: string;
  response?: string;
  pin?: string;
};

export default function SignupForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://customerlookup.ibedc.com:7443/api/countries/");
        console.log(response);
        const data = await response.json();
        setCountries(data.data);
      } catch (error) {
        console.log("Error fetching countries:", error);
      }
    };
    fetchCountries();
  }, []);

  const form = useForm({
    resolver: zodResolver(SignupSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      phone_code: "",
      country: "",
      country_code: "",
      currency_symbol: "",
      password: "",
      password2: "",
      flag: "",
    },
  });

  useEffect(() => {
    const selectedCountry = form.getValues("country");
    const countryData = countries.find(c => c.country === selectedCountry);
    
    if (countryData) {
      form.setValue("country_code", countryData.country_code);
      form.setValue("phone_code", countryData.country_code);
      form.setValue("flag", countryData.flag);
      form.setValue("currency_symbol", countryData.currencies[0]?.symbol || "");
    }
  }, [form.watch("country")]);

  const { mutate: register, isPending } = useMutation({
    mutationFn: async (data: z.infer<typeof SignupSchema>) =>
      await axiosClient1.post<RegisterResponse>("/register/", data),
    onSuccess: (response) => {
      console.log(response);
      localStorage.setItem(
        "Email",
        response?.data?.email || form.getValues("email")
      );
      toast.success(response?.data?.response);
      toast.success(response?.data?.pin);
      router.push("/activation");
    },
    onError: (error: any) => {
      console.log(error);
      
      const emailError = error?.response?.data?.email;
      const phoneError = error?.response?.data?.phone_number;

      if (emailError && phoneError) {
          // Display both error messages
          toast.error(emailError);
          toast.error(phoneError);
      } else if (emailError) {
          // Display only email error message
          toast.error(emailError);
      } else if (phoneError) {
          // Display only phone number error message
          toast.error(phoneError);
      }
    },
    onSettled: () => {
      if (isPending) {
        form.reset();
      }
    },
  });

  const onSubmit = (data: z.infer<typeof SignupSchema>) => {
    setLoading(true);
    register(data);
    console.log(data);
  };

  const sortedCountries = countries?.sort((a, b) => 
    a.country.localeCompare(b.country)
  ) || [];

  return (
    <CardWrapper
      label="Create an account"
      title="Signup"
      backButtonHref="/sign-in"
      backButtonLabel="Already have an account? Sign-in here.">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-2 gap-2">
            <FormField
              control={form.control}
              name="first_name"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Osita" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              control={form.control}
              name="last_name"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Azike" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        placeholder="ileemi@gmail.com"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              control={form.control}
              name="phone_number"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="+234 000 000" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <button
                        type="button"
                        className="mt-2 block w-full rounded-md border-0 py-2.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-green-600 sm:text-sm sm:leading-6"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                      >
                        {selectedCountry || "Select your country"}
                      </button>
                      {dropdownOpen && (
                        <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
                          {sortedCountries.map((country) => (
                            <li
                              key={country.country}
                              onClick={() => {
                                setSelectedCountry(country.country);
                                field.onChange(country.country);
                                setDropdownOpen(false);
                              }}
                              className="flex items-center gap-2 p-2 hover:bg-gray-200 cursor-pointer"
                            >
                              <Image 
                                src={country.flag}
                                alt={country.country} 
                                width={20} 
                                height={15} 
                              />
                              {country.country}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input 
                        {...field} 
                        type={showPassword ? "text" : "password"} 
                        placeholder="******" 
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 flex items-center pr-3"
                      >
                        {showPassword ? <FiEyeOff /> : <FiEye />}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password2"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input 
                        {...field} 
                        type={showConfirmPassword ? "text" : "password"} 
                        placeholder="******" 
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute inset-y-0 right-0 flex items-center pr-3"
                      >
                        {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? "Loading..." : "Sign up"}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
}

