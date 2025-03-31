import React from 'react'
import AirtimeCategoryDesktop from './airtime-category-desktop'
import { SecondDashboardCardItems } from '@/types'

const cardCategory: SecondDashboardCardItems = {
    links: [
        {
            image: "/mtn.png",
            name: "",
            href: "",
        },
        {
            image: "/airtel.png",
            name: "",
            href: "",
        },
        {
            image: "/glo.png",
            name: "",
            href: "",
        },
        {
            image: "/9mobile.png",
            name: "",
            href: "",
        },
    ]
}

export default function AirtimeCategoryy() {
  return (
    <AirtimeCategoryDesktop 
        CardCategory={cardCategory}
    />
  )
}
