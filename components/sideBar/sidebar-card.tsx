import React from 'react'
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card'
import { LucideIcon } from 'lucide-react'

interface SidebarCardProps {
    children: React.ReactNode;
}

export default function SidebarCard({children}: SidebarCardProps) {
  return (
    <Card>
        <CardHeader>
            
        </CardHeader>
        <CardContent>
            {children}
        </CardContent>
        <CardFooter>

        </CardFooter>
    </Card>
  )
}
