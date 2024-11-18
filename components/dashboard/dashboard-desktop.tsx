import React from 'react'
import DashboardCard from './dashboard-card'
import { DashboardCardItems as DashboardCardItems } from '@/types'
import DashboardButton from './dashboard-button';

interface DasboardDesktopProps {
    DashboardCardItem: DashboardCardItems;
}

export default function DashboardDesktop(props: DasboardDesktopProps) {
  return (
    <section className="mt-10">
      <div className="grid grid-cols-4 gap-4">
        {props.DashboardCardItem.links.map((link, index) => (
          <DashboardCard key={index}>
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <p className="text-slate-400">{link.title}</p>
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
      <div className="flex flex-row gap-4 justify-center">
        <div className="grid grid-cols-3 gap-4 h-full w-full">
          <DashboardCard className="h-[12rem]">
            <div></div>
          </DashboardCard>
          <DashboardCard className="h-[12rem]">
            <div></div>
          </DashboardCard>
          <DashboardCard className="h-[12rem]">
            <div></div>
          </DashboardCard>
          <DashboardCard className="h-[12rem]">
            <div></div>
          </DashboardCard>
          <DashboardCard className="h-[12rem]">
            <div></div>
          </DashboardCard>
          <DashboardCard className="h-[12rem]">
            <div></div>
          </DashboardCard>
          <DashboardCard className="h-[12rem]">
            <div></div>
          </DashboardCard>
          <DashboardCard className="h-[12rem]">
            <div></div>
          </DashboardCard>
          <DashboardCard className="h-[12rem]">
            <div></div>
          </DashboardCard>
        </div>
        <div className="w-2/4 h-[31.5rem]">
          <DashboardCard>
            <div></div>
          </DashboardCard>
        </div>
      </div>
    </section>
  );
}
