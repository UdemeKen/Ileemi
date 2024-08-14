import React from 'react'
import { Button, ButtonProps } from '../ui/button'
import { LucideIcon, Sheet } from 'lucide-react'
import { cn } from '@/lib/utils';
import { SheetClose } from '../ui/sheet';

interface SideBarButtonProps extends ButtonProps {
    icon?: LucideIcon;
}

export default function SideBarButton({ 
    icon: Icon, 
    className, 
    children,
    ...props
 }: SideBarButtonProps) {
  return (
    <Button variant='ghost' className={cn('gap-2 justify-start', className)} {...props}>
        {Icon && <Icon size={20}/>}
        <span>{children}</span>
    </Button>
  )
}

export function SidebarButtonSheet(props: SideBarButtonProps) {
  return (
    <SheetClose asChild>
      <SideBarButton {...props} />
    </SheetClose>
  )
}
