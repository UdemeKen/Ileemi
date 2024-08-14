'use client'

import { SidebarItems } from '@/types'
import React from 'react'
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTrigger } from '../ui/sheet';
import { Button } from '../ui/button';
import { LogOut, Menu, MoreHorizontal, Settings, X } from 'lucide-react';
import { link } from 'fs';
import Link from 'next/link';
import { SidebarButtonSheet as SideBarButton } from './sidebar-button';
import { usePathname } from 'next/navigation';
import { Separator } from '@radix-ui/react-separator';
import { PopoverContent, } from '@radix-ui/react-popover';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { Drawer, DrawerContent, DrawerTrigger } from '../ui/drawer';

interface SidebarMobileProps {
    sidebarItems: SidebarItems;
}

export default function SidebarMobile(props: SidebarMobileProps) {

    const pathname = usePathname();

  return (
    <Sheet>
        <SheetTrigger asChild>
            <Button size='icon' variant='ghost' className='fixed top-3 left-3'>
                <Menu size={20}/>
            </Button>
        </SheetTrigger>
        <SheetContent className='px-3 py-4' side='left' hideClose>
            <SheetHeader className='flex flex-row justify-between items-center space-y-0'>
                <span className='text-lg font-semibold text-green-500 font-serif mx-3'>
                    Ileemi
                </span>
                <SheetClose asChild>
                    <Button className='w-7 h-7 p-0' variant='ghost'>
                        <X size={15}/>
                    </Button>
                </SheetClose>
            </SheetHeader>
            <div className='h-full'>
                <div className='flex flex-col w-full gap-1 mt-5'>
                    {props.sidebarItems.links.map((link, idx) => (
                        <Link key={idx} href={link.href}>
                            <SideBarButton variant={pathname === link.href ? 'secondary' : 'ghost'}  icon={link.icon} className={`w-full text-[#A0AEC0] ${pathname === link.href ? 'text-green-500' : ""}`}>
                                {link.label}
                            </SideBarButton>
                        </Link>
                    ))}
                    {props.sidebarItems.extras}
                </div>
                <div className='absolute w-full bottom-2 px-1 left-0'>
                    <Separator className='absolute -top-3 left-0 w-full'/>
                    <Drawer>
                        <DrawerTrigger asChild>
                        <Button variant='ghost' className='w-full justify-start'>
                            <div className='flex justify-between items-center w-full'>
                            <div className='flex space-x-2'>
                                <Avatar className='h-5 w-5'>
                                <AvatarImage src='https://media.licdn.com/dms/image/D4D03AQFfym_3l24Fqg/profile-displayphoto-shrink_800_800/0/1678470463947?e=1729123200&v=beta&t=HF8DMVoxmFoEEo8rGN32u0NjQaJFuJKIxGnRHMe_dhA'/>
                                <AvatarFallback>Udeme kendrick</AvatarFallback>
                                </Avatar>
                                <span>Udeme Kendrick</span>
                            </div>
                            <MoreHorizontal size={20}/>
                            </div>
                        </Button>
                        </DrawerTrigger>
                        <DrawerContent className='mb-2 p-2'>
                        <div className='flex flex-col space-y-2 mt-2'>
                            <Link href={'/'}>
                            <SideBarButton size={'sm'} icon={Settings} className='w-full'>
                                Account Settings
                            </SideBarButton>
                            </Link>
                            <SideBarButton size={'sm'} icon={LogOut} className='w-full'>
                                Log Out
                            </SideBarButton>
                        </div>
                        </DrawerContent>
                    </Drawer>
                </div>
            </div>
        </SheetContent>
    </Sheet>
  )
}
