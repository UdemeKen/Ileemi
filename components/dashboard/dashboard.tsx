import React from 'react'
import DashboardDesktop from './dashboard-desktop'
import { DashboardCardItems } from '@/types'
import { FileInput, Globe, ShoppingCart, Wallet } from 'lucide-react'

const dashboardCardItems: DashboardCardItems = {
    links: [
        {title: "Today's Money", amount: '$53,000.00', icon: Wallet},
        {title: "Today's Users", amount: '2,300.00', icon: Globe},
        {title: "New Clients", amount: '+3,052.00', icon: FileInput},
        {title: "Total Sales", amount: '$173,000.00', icon: ShoppingCart},
    ]
}

export default function Dasboard() {
  return <DashboardDesktop DashboardCardItem={dashboardCardItems}/>
}
