"use client";
import React, { useState, useEffect } from "react";
import DashboardCard from "./dashboard-card";
import { FirstDashboardCardItems, SecondDashboardCardItems } from "@/types";
import DashboardButton from "./dashboard-button";
import Image from "next/image";
import Link from "next/link";

interface DasboardDesktopProps {
  FirstDashboardCardItem: FirstDashboardCardItems;
  SecondDashBoardCardItem: SecondDashboardCardItems;
}

const slides = [
  { image: "/bike.jpg", alt: "Slide 1" },
  { image: "/sales.png", alt: "Slide 2" },
  { image: "/next.jpg", alt: "Slide 3" },
];

export default function DashboardDesktop(props: DasboardDesktopProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Increased to 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="mt-10">
      <div className="grid grid-cols-4 gap-4">
        {props.FirstDashboardCardItem.links.map((link, index) => (
          <DashboardCard key={index}>
            <div className="flex justify-between items-center ">
              <div className="flex flex-col">
                <p className="text-[#3a3c3f]">{link.title}</p>
                <h2 className="font-bold text-lg">{link.amount}</h2>
              </div>
              <DashboardButton
                className="rounded-[10px] p-2"
                icon={link.icon}
              />
            </div>
          </DashboardCard>
        ))}
      </div>
      <div className="flex flex-row gap-4 justify-center mb-[50px]">
        <div className="grid grid-cols-3 gap-4 h-full w-full">
          {props.SecondDashBoardCardItem.links.map((link, index) => (
            <Link href={link.href}>
            <DashboardCard
              key={index}
              className="h-[12rem] flex flex-col justify-center items-center hover:scale-105 hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col justify-center items-center gap-4">
                <Image src={link.image} alt={""} width={70} height={70} />
                <p className="text-[17px] font-medium">{link.name}</p>
              </div>
            </DashboardCard>
            </Link>
          ))}
        </div>
        <div className="w-2/4 h-[31.5rem]">
          <div className="relative rounded-md overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {slides.map((slide, index) => (
                <div key={index} className="min-w-full">
                  <Image
                    src={slide.image}
                    alt={slide.alt}
                    width={500}
                    height={500}
                    className="h-[400px] rounded-md w-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full ${
                    currentSlide === index ? "bg-black" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
