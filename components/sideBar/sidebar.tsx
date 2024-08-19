'use client'

import { Contact, CreditCard, LayoutDashboard, MoreHorizontal, Settings, User } from 'lucide-react'
import SidebarDesktop from './sidebar-desktop'
import { SidebarItems } from '@/types'
import SideBarButton from './sidebar-button'
import { useMediaQuery } from 'usehooks-ts';
import SidebarMobile from './sidebar-mobile'

const sidebarItems: SidebarItems = {
    links: [
        { label: 'Dashboard', href: '/page/dashboard', icon: LayoutDashboard},
        { label: 'Billing', href: '/page/billing', icon: CreditCard},
        { label: 'Profile', href: '/page/profile', icon: User},
        { label: 'Help', href: '/page/help', icon: Contact},
    ], 
    extras: (
        <div className='flex flex-col space-y-4'>
            <h1 className='my-5'>Account Pages</h1>
            <SideBarButton icon={MoreHorizontal} className='w-full text-[#A0AEC0]'>
                More
            </SideBarButton>
            <SideBarButton className='w-full h-[150px] justify-center' variant='default'>
                Help
            </SideBarButton>
        </div>
    )
}

export default function Sidebar() {

    const isDesktop = useMediaQuery('(min-width: 640px)', {
        initializeWithValue: false,
    });

    if(isDesktop) return <SidebarDesktop sidebarItems={sidebarItems}/>;

    return <SidebarMobile sidebarItems={sidebarItems}/>
}
