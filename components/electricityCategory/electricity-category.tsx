import React from 'react'
import { usePathname } from 'next/navigation'
import ElectricityCategoryDesktop from './electricity-category-desktop'
import { SecondDashboardCardItems } from '@/types'
import ElectricityOrderSummaryDesktop from './electricity-order-summary-desktop'

const electricityCardItems: SecondDashboardCardItems= {
    links: [
        {
            image: "/ikejaElectricity.png",
            name: "Ikeja Electricity",
            href: "/page/electricity-order-summary",
        },
        {
            image: "/abujaElectricity.png",
            name: "Abuja Electricity",
            href: "/page/electricity-order-summary",
        },
        {
            image: "/EKEDC.png",
            name: "Eko Electricity",
            href: "/page/electricity-order-summary",
        },
        {
            image: "/IBEDC.png",
            name: "Ibadan Electricity",
            href: "/page/electricity-order-summary",
        },
    ]
}

export default function ElectricityCategory() {
  const pathname = usePathname();

  return (
    <div>
      {pathname === "/page/electricity" &&
        <ElectricityCategoryDesktop 
          ElectirictyCardItem={electricityCardItems}
        />}
      {pathname === "/page/electricity-order-summary" ? (
        <ElectricityOrderSummaryDesktop />
      ) : ""}
    </div>
  )
}
