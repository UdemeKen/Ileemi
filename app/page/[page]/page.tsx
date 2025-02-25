"use client";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Dashboard({ params }: { params: { page: string } }) {
  const [userData, setUserData] = useState({
    username: "",
    flagUrl: "",
    countryName: "",
    currencySymbol: "",
    currencyCode: "",
  });

  useEffect(() => {
    setUserData({
      username: localStorage.getItem("Username") || "",
      flagUrl: localStorage.getItem("FlagUrl") || "",
      countryName: localStorage.getItem("CountryName") || "",
      currencySymbol: localStorage.getItem("CurrencySymbol") || "",
      currencyCode: localStorage.getItem("CurrencyCode") || "",
    });
  }, []);

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
        <p className="text-sm">Nigeria</p>
      </div>
    </section>
  );
}
