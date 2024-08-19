import React from 'react'
import { Card, CardContent } from '../ui/card'

interface DashboardCardProps {
    children: React.ReactNode;
}

export default function DashboardCard({children}: DashboardCardProps) {
  return (
    <Card className='rounded-[15px] border-none shadow-sm shadow-slate-500 py-4 h-[80%]'>
        <CardContent>
            {children}
        </CardContent>
    </Card>
  )
}
