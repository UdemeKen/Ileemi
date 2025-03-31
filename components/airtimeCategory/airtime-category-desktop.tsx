import React from 'react'
import { SecondDashboardCardItems } from '@/types'
import DashboardCard from '../dashboard/dashboard-card';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeftIcon } from 'lucide-react';


interface AirtimeCategoryDesktopProps {
    CardCategory: SecondDashboardCardItems;
}

export default function AirtimeCategoryDesktop(props: AirtimeCategoryDesktopProps) {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 right-0 w-full h-[800px] bg-gradient-to-bl from-green-500 via-green-300 to-transparent">
            <div className="absolute top-0 right-0 w-full h-full bg-white rounded-tr-[900px]" />
          </div>
        </div>
      </div>
    <div className="relative z-10"></div>
    <section className='flex flex-col gap-8 mt-10'>
            <Link href={"/page/dashboard/"} className='flex justify-center items-center w-[30px] h-[30px]'>
                <ArrowLeftIcon />
            </Link>
        <div className="grid grid-cols-4 gap-4 h-full w-full">
          {props.CardCategory.links.map((link, index) => (
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
    </section>
    </div>
  )
}
