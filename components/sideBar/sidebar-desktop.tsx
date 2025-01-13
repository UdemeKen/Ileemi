import Image from 'next/image'
import React from 'react'
import SideBarButton from './sidebar-button'
import { SidebarItems } from '@/types';
import Link from 'next/link';
import { Separator } from '../ui/separator';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Button } from '../ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { LogOut, MoreHorizontal, Settings, User2Icon } from 'lucide-react';
import { usePathname } from 'next/navigation';

interface SidebarDesktopProps {
  sidebarItems: SidebarItems;
}

export default function SidebarDesktop(props: SidebarDesktopProps) {

  const pathname = usePathname();

  return (
    <aside className="w-[220px] max-w-sm h-screen fixed left-0 top-0 z-40">
      <div className="h-full px-3 py-4">
        <h3 className="mx-3 text-lg font-semibold text-foreground">
          <div className="flex justify-center items-center w-full">
            <Image src={"/Logo_03.png"} alt="Logo" width={70} height={70} />
          </div>
          <hr className="border-0 h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent my-5" />
          <div className="mt-10">
            <div className="flex flex-col gap-4 w-full">
              {props.sidebarItems.links.map((link, index) => (
                <Link key={index} href={link.href}>
                  <SideBarButton
                    variant={pathname === link.href ? "secondary" : "ghost"}
                    icon={link.icon}
                    className={`w-full text-[#A0AEC0] ${
                      pathname === link.href ? "text-green-500" : ""
                    }`}>
                    {link.label}
                  </SideBarButton>
                </Link>
              ))}
              {props.sidebarItems.extras}
            </div>
            <div className="absolute left-0 bottom-3 w-full px-3">
              <Separator className="absolute -top-3 left-0 w-full" />
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="ghost" className="w-full justify-start">
                    <div className="flex justify-between items-center w-full">
                      <div className="flex space-x-2">
                        <Avatar className="h-5 w-5">
                          <User2Icon size={20} />
                          {/* <AvatarImage src='https://media.licdn.com/dms/image/D4D03AQFfym_3l24Fqg/profile-displayphoto-shrink_800_800/0/1678470463947?e=1729123200&v=beta&t=HF8DMVoxmFoEEo8rGN32u0NjQaJFuJKIxGnRHMe_dhA'/> */}
                          {/* <AvatarFallback>k</AvatarFallback> */}
                        </Avatar>
                        <span>Udeme Kendrick</span>
                      </div>
                      <MoreHorizontal size={20} />
                    </div>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="mb-2 w-56 p-3 rounded-[1rem]">
                  <div className="space-y-1">
                    <Link href={"/"}>
                      <SideBarButton
                        size={"sm"}
                        icon={Settings}
                        className="w-full">
                        Account Settings
                      </SideBarButton>
                    </Link>
                    {/* <Link href={"/sign-in"}> */}
                      <SideBarButton
                        size={"sm"}
                        icon={LogOut}
                        className="w-full"
                        onClick={() => {
                          localStorage.clear();
                          window.location.href = "/sign-in"
                        }}>
                        Log Out
                      </SideBarButton>
                    {/* </Link> */}
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </h3>
      </div>
    </aside>
  );
}
