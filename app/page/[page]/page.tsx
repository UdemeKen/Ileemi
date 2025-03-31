"use client";
import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import axiosClient from "@/lib/axios";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface UserProfile {
    first_name: string;
    last_name: string;
    country: string;
    country_code: string;
    currency_symbol: string;
    wallet?: {
        amount: string;
    };
    // Add any other properties you expect from the API response
}

export default function Dashboard({ params }: { params: { page: string } }) {
  const [userData, setUserData] = useState({
    username: "",
    flagUrl: "",
    countryName: "",
    currencySymbol: "",
    countryCode: "",
  });

  const [countries, setCountries] = useState<any[]>([]);

  const { data, error, isLoading } = useQuery<UserProfile, Error>({
    queryKey: ["userProfile"],
    queryFn: async () => {
      if (!localStorage.getItem("username")) {
        const response = await axiosClient.get("/getprofile/");
        return response.data;
      }
      return null;
    },
    enabled: !localStorage.getItem("username")
  });

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://customerlookup.ibedc.com:7443/api/countries/");
        const data = await response.json();
        setCountries(data.data);
      } catch (error) {
        console.log("Error fetching countries:", error);
      }
    };
    fetchCountries();
  }, []);

  useEffect(() => {
    // Access localStorage only after component mounts (client-side)
    setUserData({
      username: localStorage.getItem("username") || "",
      flagUrl: localStorage.getItem("flagUrl") || "",
      countryName: localStorage.getItem("countryName") || "",
      currencySymbol: localStorage.getItem("currency_symbol") || "",
      countryCode: localStorage.getItem("country_code") || "",
    });
  }, []);

  useEffect(() => {
    if (data && countries && countries.length > 0) {
      const countryData = countries.find(c => c.country || c.currencies[0].code === data.country);
      const username = `${data?.first_name} ${data?.last_name}`;
      const flagUrl = countryData?.flag || "";
      const countryName = data?.country || "";
      const wallet = data?.wallet?.amount || "";
      const currency_symbol = data?.currency_symbol || "";
      console.log(data.country);
      
      
      // Store in localStorage
      localStorage.setItem("username", username);
      localStorage.setItem("flagUrl", flagUrl);
      localStorage.setItem("countryName", countryName);
      localStorage.setItem("wallet", wallet);
      localStorage.setItem("currency_symbol", currency_symbol);
      
      setUserData({
        username,
        flagUrl,
        countryName,
        currencySymbol: data?.currency_symbol,
        countryCode: data?.country_code,
      });
    }
  }, [data, countries]);

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }
  if (error) {
    return <div className="text-center">Error fetching user profile: {error?.message}</div>;
  }

  return (
    <section className="flex justify-between items-center">
      <div className="flex flex-col justify-start gap-2 ml-4">
        <h2 className="text-[#A0AEC0]">
          Page/ <span className="capitalize text-black">{params.page}</span>
        </h2>
        <h1 className="capitalize font-bold">{params.page}</h1>
      </div>
      <div className="overflow-hidden whitespace-nowrap w-[400px]">
        <p className="animate-marquee inline-block whitespace-nowrap font-semibold text-lg">
          Welcome! {userData.username} - We&apos;re delighted to have you on our
          platform. Explore our features and let us help you achieve your goals.
          Have a great experience!
        </p>
      </div>
      <div className="flex flex-col justify-center items-center rounded-full w-[35px] h-[40px] mr-3 cursor-pointer">
        <Image
          src={userData.flagUrl}
          alt={`${userData.countryName} flag`}
          width={50}
          height={50}
          className="h-[40px] w-[35px] rounded-full object-cover"
        />
        <p className="text-sm">{userData?.countryName}</p>
      </div>
    </section>
  );
}
