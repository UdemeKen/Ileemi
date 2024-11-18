import React from 'react'
import { Card, CardContent } from '../ui/card'

interface DashboardCardProps {
    children: React.ReactNode;
    className?: string;
    padding?: string;
    height?: string;
}

export default function DashboardCard({
    children, 
    className = '',
    padding = 'py-4',
    height = 'h-[80%]'
}: DashboardCardProps) {
  return (
    <Card className={`rounded-[15px] border-none shadow-sm shadow-slate-500 ${padding} ${height} ${className}`}>
        <CardContent>
           {children}
        </CardContent>
    </Card>
  )
}
