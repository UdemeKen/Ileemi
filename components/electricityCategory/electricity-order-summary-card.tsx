import React from 'react'
import { Card, CardContent } from '../ui/card'

interface ElectricityOrderSummaryCardProps {
    children: React.ReactNode;
    className?: string;
}

export default function ElectricityOrderSummaryCard({
    children,
    className= "",
}:ElectricityOrderSummaryCardProps) {
  return (
    <Card className={`rounded-[15px] border-none shadow-sm shadow-slate-500 ${className}`}>
        <CardContent className='p-0'>
           {children}
        </CardContent>
    </Card>
  )
}
