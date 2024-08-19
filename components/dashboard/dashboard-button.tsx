import React from 'react'
import { Button, ButtonProps } from '../ui/button'
import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils';

interface DashboardButtonProps extends ButtonProps {
    icon: LucideIcon;
}

export default function DashboardButton({
    icon: Icon,
    className,
    children,
    ...props
}: DashboardButtonProps) {
  return (
    <Button variant='default' className={cn('gap-2 justify-start', className)} {...props}>
        {Icon && <Icon size={20}/>}
    </Button>
  )
}
