import React from 'react'
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card'

interface ElectricityCardWrapperProps {
    title: string;
    className: string;
    children: React.ReactNode;
}



export default function ElectricityCardWrapper({
    title,
    className,
    children
}: ElectricityCardWrapperProps) {
  return (
    <Card className={`w-5/6 z-10 rounded-md ${className}`}>
        <CardHeader>
            <h3 className="text-2xl font-semibold text-center text-gray-800">{title}</h3>
        </CardHeader>
        <CardContent>{children}</CardContent>
        <CardFooter></CardFooter>
    </Card>
  )
}
