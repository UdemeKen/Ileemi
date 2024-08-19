"use client"

import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Facebook, Instagram, Linkedin, MoveLeft, MoveRight, ShoppingCart, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {

  return (
   <main id="home" className="flex flex-col items-center w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-50 to-white">

    {/* Navigation Bar Section */}
    <section className="flex justify-between items-center w-full py-4 px-[105px] shadow-md shadow-green-100 sticky bg-green-50 top-0 z-30">
      <div className="w-full">
        <Image src={"/Logo_03.png"} alt="logo" width={80} height={80} />
      </div>
      <div className="w-full">
        <ul className="flex flex-row justify-center items-center space-x-14 capitalize font-medium text-sm w-full">
          <Link href={'#home'} className="hover:text-white hover:bg-green-500 px-4 py-1 rounded-[10px] duration-300 transform ease-in-out"><li>home</li></Link>
          <Link href={'#about'} className="hover:text-white hover:bg-green-500 px-4 py-1 rounded-[10px] duration-300 transform ease-in-out"><li>about</li></Link>
          <Link href={'#services'} className="hover:text-white hover:bg-green-500 px-4 py-1 rounded-[10px] duration-300 transform ease-in-out"><li>services</li></Link>
          <Link href={'#contact'} className="hover:text-white hover:bg-green-500 px-4 py-1 rounded-[10px] duration-300 transform ease-in-out"><li>contact</li></Link>
        </ul>
      </div>
      <div className="flex justify-end w-full">
        <Link href={'/sign-in'} className="hover:text-white hover:bg-green-500 px-4 py-1 rounded-[10px] duration-300 transform ease-in-out">Sign in!</Link>
      </div>
    </section>

    {/* Hero Section */}
    <section className="grid grid-cols-12 w-full h-5/6">
      <div className=""></div>
      <div className="grid grid-cols-6 col-span-10">
        <div>
          <div className="flex flex-col h-custom w-custom mt-28">
            <Image src={"/dots.png"} alt="dots" width={80} height={80} className="mx-12 -mt-16 absolute z-20"/>
            <div className="flex flex-col justify-center items-center h-full w-full relative">
              <Image src={"/content.png"} alt="content" width={200} height={200} className="h-full w-full  z-10"/>
              <div className="flex flex-col space-y-2 w-full px-4 absolute z-20 ">
                <h2 className="font-bold text-4xl font-serif">Welcome to Illeemi, your one stop shop for simplifying home life.</h2>
                <p className="w-3/4">Manage your bills, rent, maintenance, shopping, insurance, healthcare, and finances all in one place.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-5 relative">
          <div className="relative">
            <Image src={"/hero_image.png"} alt="hero_image" width={700} height={700} className="w-full h-hero " />
          <div className="flex justify-center items-center h-24 w-24 absolute -right-4 -bottom-4 bg-[#F4F6F6]">
            <Image src={"/down_icon.png"} alt="down_icon" width={20} height={20}/>
          </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center space-y-20">
        <div className="flex flex-col justify-center items-center space-y-6">
          <ChevronUp width={20} height={20}/>
          <ChevronDown width={20} height={20}/>
        </div>
        <div className="flex flex-col justify-center items-center space-y-2">
          <p>01</p>
            <div className="border-2 border-black h-14"></div>
          <p>06</p>
        </div>
      </div>
    </section>

    {/* Partners Section */}
    <section className="flex flex-col justify-center items-center bg-[#F4F6F6] space-y-6 w-full mt-20 py-8">
      <h1 className="text-center text-xs font-semibold">TRUSTED BY OVER 1K+ COMPANIES</h1>
        <ul className="flex flex-row justify-center items-center space-x-20">
          <li>microsoft</li>
          <li>entrepreneuer</li>
          <li>fortune</li>
          <li>business web</li>
          <li>mashable</li>
        </ul>
    </section>

    {/* Bonus Section */}
    <section className="w-full px-20 py-20">
        <ul className="grid grid-cols-4">
          <li className="flex flex-col space-y-5 px-2">
            <h1 className="flex flex-col font-bold text-3xl font-serif">
            <span className="flex">Hot<Image src={"/fire_icon.png"} alt="fire_icon" width={45} height={45} className="-mt-2"/></span>
            <span className="-mt-4">deals for you</span></h1>
            <p>Online shopping for retail sales direct to consumers</p>
          </li>
          <li className="flex flex-col space-y-5 px-2">
            <Image src={"/bonus_icon.png"} alt="bonus_icon" width={25} height={25} />
            <h2 className="font-bold">1.5% cashback</h2>
            <p>Online shopping for retail sales direct to consumers</p>
          </li>
          <li className="flex flex-col space-y-5 px-2">
            <Image src={"/bonus_icon.png"} alt="bonus_icon" width={25} height={25} />
            <h2 className="font-bold">30-day terms</h2>
            <p>Online shopping for retail sales direct to consumers</p>
          </li>
          <li className="flex flex-col space-y-5 px-2">
            <Image src={"/bonus_icon.png"} alt="bonus_icon" width={25} height={25} />
            <h2 className="font-bold">Save Money</h2>
            <p>Online shopping for retail sales direct to consumers</p>
          </li>
        </ul>
    </section>

    {/* About Us Section */}
    <section id="about" className="w-full p-20">
      <div className="flex justify-between">
        <div className="flex flex-col space-y-4 w-1/2">
          <h1 className="font-bold text-3xl font-serif">About Us</h1>
          <p>At Illeemi, we believe that home life should be easy and stress-free. That's why we've created a platform that streamlines all aspects of home management. 
            Our team is dedicated to providing innovative solutions to make your easier.</p>
        </div>
        <div className="flex justify-center items-center">
          <Button className="shadow-xl shadow-slate-500">Learn More</Button>
        </div>
      </div>
      <div className="flex flex-row space-x-10 justify-between mt-16">
        <div className="grid grid-cols-2 gap-x-10">
          <div className="flex flex-col space-y-4">
            <h1 className="font-bold text-4xl">1.</h1>
            <h2 className="font-bold text-lg">Who We Are</h2>
            <p className="text-sm">Ileemi is an innovative technology company founded by a team of passionate individuals dedicated to simplifying home life via an easy-to-use simplified payment system. 
              Our team comprises experts in Technology, Finance, Business Development and Customer service, all working together to provide a seamless experience for our users.</p>
          </div>
          <div className="flex flex-col space-y-4">
            <h1 className="font-bold text-4xl">2.</h1>
            <h2 className="font-bold text-lg">What Do We Do</h2>
            <p className="text-sm">We provide a comprehensive platform that streamlines various aspects of home management, including bill payments, rent payments, home maintenance, shopping, insurance premiums, healthcare services, and financial planning. 
              Our platform is designed to make life easier for families, giving them more time to focus on what matters most.</p>
          </div>
          <div className="flex flex-col space-y-4">
            <h1 className="font-bold text-4xl">3.</h1>
            <h2 className="font-bold text-lg">How Do We Help</h2>
            <ul className="text-sm list-disc">
              <p>We help our users by:</p>
              <li>Saving them time and effort through automated payments and streamlined services</li>
              <li>Reducing stress and late fees through timely reminders and notifications</li>
              <li>Providing access to trusted service providers for home maintenance and repairs</li>
              <li>Offering convenient online shopping and digital vouchers for everyday essentials</li>
              <li>Ensuring continuous insurance coverage and access to healthcare services</li>
              <li>Empowering users to take control of their finances through digital savings and investment plans</li>
            </ul>	
          </div>
          <div className="flex flex-col space-y-4">
            <h1 className="font-bold text-4xl">4.</h1>
            <h2 className="font-bold text-lg">Create success story</h2>
            <p className="text-sm">With access to online learning resources anyone can transform.</p>
          </div>
        </div>
        <div className="w-full">
          <Image src={"/about_us_images.png"} alt="about_us_images" width={800} height={800} className="w-full"/>
        </div>
      </div>
    </section>

    {/* Services section */}
    <section id="services" className="w-full px-20 py-10">
      <div className="flex justify-between">
        <h1 className="font-bold text-4xl font-serif">Services</h1>
        <Link href='#services' className="flex space-x-2 hover:text-white hover:bg-green-500 px-4 pt-2 rounded-[10px] duration-300 transform ease-in-out">
          <p>See All</p>
          <MoveRight />
        </Link>
      </div>
      <ul className="flex flex-row justify-center items-center space-x-10 font-bold text-sm capitalize w-full my-10">
        <li>all</li>
        <li>bed</li>
        <li>sofa</li>
        <li>chair</li>
        <li>light</li>
      </ul>
      <div className="grid grid-cols-3 gap-20 w-full my-10">
        <div className="flex flex-col space-y-6 bg-[#F4F6F6] px-6 h-72 rounded-sm relative">
            <ShoppingCart className="rounded-full w-8 h-8 p-1 bg-yellow-700 opacity-80 absolute -top-4 right-10"/>
            <h1 className="font-semibold text-xl">Vintage Chair</h1>
            <div className="flex flex-row justify-normal space-x-8">
              <p>$35.00</p>
              <p className="line-through">$55.00</p>
            </div>
            <div className="flex justify-center items-center ">
              <Image src={"/product_01.png"} alt="product_image" width={100} height={100} className="absolute -bottom-16"/>
            </div>
        </div>
        <div className="flex flex-col space-y-6 bg-[#F4F6F6] px-6 h-72 rounded-sm relative">
            <ShoppingCart className="rounded-full w-8 h-8 p-1 bg-yellow-700 opacity-80 absolute -top-4 right-10"/>
            <h1 className="font-semibold text-xl">Vintage Chair</h1>
            <div className="flex flex-row justify-normal space-x-8">
              <p>$35.00</p>
              <p className="line-through">$55.00</p>
            </div>
            <div className="flex justify-center items-center ">
              <Image src={"/product_01.png"} alt="product_image" width={100} height={100} className="absolute -bottom-16"/>
            </div>
        </div>
        <div className="flex flex-col space-y-6 bg-[#F4F6F6] px-6 h-72 rounded-sm relative">
            <ShoppingCart className="rounded-full w-8 h-8 p-1 bg-yellow-700 opacity-80 absolute -top-4 right-10"/>
            <h1 className="font-semibold text-xl">Vintage Chair</h1>
            <div className="flex flex-row justify-normal space-x-8">
              <p>$35.00</p>
              <p className="line-through">$55.00</p>
            </div>
            <div className="flex justify-center items-center ">
              <Image src={"/product_01.png"} alt="product_image" width={100} height={100} className="absolute -bottom-16"/>
            </div>
        </div>
        <div className="flex flex-col space-y-6 bg-[#F4F6F6] px-6 h-72 rounded-sm relative">
            <ShoppingCart className="rounded-full w-8 h-8 p-1 bg-yellow-700 opacity-80 absolute -top-4 right-10"/>
            <h1 className="font-semibold text-xl">Vintage Chair</h1>
            <div className="flex flex-row justify-normal space-x-8">
              <p>$35.00</p>
              <p className="line-through">$55.00</p>
            </div>
            <div className="flex justify-center items-center ">
              <Image src={"/product_01.png"} alt="product_image" width={100} height={100} className="absolute -bottom-16"/>
            </div>
        </div>
        <div className="flex flex-col space-y-6 bg-[#F4F6F6] px-6 h-72 rounded-sm relative">
            <ShoppingCart className="rounded-full w-8 h-8 p-1 bg-yellow-700 opacity-80 absolute -top-4 right-10"/>
            <h1 className="font-semibold text-xl">Vintage Chair</h1>
            <div className="flex flex-row justify-normal space-x-8">
              <p>$35.00</p>
              <p className="line-through">$55.00</p>
            </div>
            <div className="flex justify-center items-center ">
              <Image src={"/product_01.png"} alt="product_image" width={100} height={100} className="absolute -bottom-16"/>
            </div>
        </div>
        <div className="flex flex-col space-y-6 bg-[#F4F6F6] px-6 h-72 rounded-sm relative">
            <ShoppingCart className="rounded-full w-8 h-8 p-1 bg-yellow-700 opacity-80 absolute -top-4 right-10"/>
            <h1 className="font-semibold text-xl">Vintage Chair</h1>
            <div className="flex flex-row justify-normal space-x-8">
              <p>$35.00</p>
              <p className="line-through">$55.00</p>
            </div>
            <div className="flex justify-center items-center ">
              <Image src={"/product_01.png"} alt="product_image" width={100} height={100} className="absolute -bottom-16"/>
            </div>
        </div>
      </div>
    </section>

    {/* Client's Feedback */}
    <section className="w-full p-20">
      <div className="bg-[#F4F6F6] rounded-md pb-5">
        <div className="grid grid-cols-3">
          <div className="">
            <Image src={"/ellipse_01.png"} alt="ellipse_01" width={100} height={100} className="absolute"/>
            <Image src={"/ellipse_02.png"} alt="ellipse_01" width={150} height={150} className=""/>
          </div>
          <div className="flex flex-col justify-normal space-y-4 text-center">
            <h1 className="font-bold font-serif text-4xl mt-16">What our happy client say</h1>
            <p className="text-sm">File storage made easy – including powerful features you won’t find anywhere else. Whether you’re.</p>
          </div>
          <div className="flex justify-center items-center pt-24 w-1/2">
            <Image src={"/file_Icon.png"} alt="file_Icon" width={100} height={100} />
          </div>
        </div>
        <div className="flex flex-row my-20">
          <div className="w-1/4 relative">
            <Image src={"/ellipse_03.png"} alt="ellipse_03" width={30} height={30} className="absolute bottom-10 right-10"/>
          </div>
          <div className="relative w-2/5">
            <Image src={"/client_01.png"} alt="client_01" width={200} height={200} className="w-full"/>
            <Image src={"/client_Icon.png"} alt="client_Icon" width={100} height={100} className="absolute top-20 -left-10 z-10 w-20"/>
          </div>
          <div className="flex flex-col justify-center space-y-12 px-20 w-full">
            <h1 className="font-bold text-lg font-serif">furni.shop</h1>
            <p className="w-1/2">File storage made easy – including powerful features you won’t find anywhere else. Whether you’re.</p>
            <div>
              <h2 className="font-semibold">Larry Diamond</h2>
              <p className="text-xs">Chief Executive Officer</p>
            </div>
            <div className="flex space-x-5">
              <div className="bg-white p-2 rounded-full"><MoveLeft /></div>
              <div className="bg-white p-2 rounded-full"><MoveRight /></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Footer Section */}
    <section id="contact" className="bg-[#244D4D] w-full p-20">
      <div className="">
        <div className="flex flex-row justify-center items-center">
          <div className="w-full text-white text-3xl">
            <p>Start your business today for $0+ state fees.</p>
          </div>
          <div className="flex justify-center items-center space-x-5 w-full">
            <Link href={'/sign-in'} className="text-[#244D4D] bg-white hover:text-white hover:bg-[#3A5F5F] rounded-2xl px-4 py-2 duration-300 transform ease-in-out">Get Started</Link>
            <Link href={'/#contact'} className="text-[#244D4D] bg-white hover:text-white hover:bg-[#3A5F5F] rounded-2xl px-4 py-2 duration-300 transform ease-in-out">Contact Sales</Link>
          </div>
        </div>
        <hr className="my-10"/>
        <div className="grid grid-cols-5 gap-4">
          <div className="flex flex-col space-y-6 text-white">
            <h1 className="font-semibold font-serif text-lg tracking-tighter">furni.shop</h1>
            <p className="text-xs">Optix seamlessly connects your members with the community, resources.</p>
            <div className="flex items-center space-x-5">
              <Facebook className="text-white w-5 h-5" />
              <Twitter className="text-white w-5 h-5" />
              <Linkedin className="text-white w-5 h-5" />
              <Instagram className="text-white w-5 h-5" />
            </div>
          </div>
          <div className="flex flex-col space-y-6 text-white">
            <h1 className="font-semibold">Entity types</h1>
            <ul className="flex flex-col space-y-4 text-xs">
              <li>Knowledge base</li>
              <li>Security</li>
              <li>Privacy Policy</li>
              <li>Partners</li>
              <li>About us</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div className="flex flex-col space-y-6 text-white">
            <h1 className="font-semibold">Services</h1>
            <ul className="flex flex-col space-y-4 text-xs">
              <li>Contact Us</li>
              <li>Press</li>
              <li>Payrool</li>
              <li>Library</li>
              <li>Blog</li>
              <li>Help Center</li>
            </ul>
          </div>
          <div className="flex flex-col space-y-6 text-white">
            <h1 className="font-semibold">Resources</h1>
            <ul className="flex flex-col space-y-4 text-xs">
              <li>Pricing</li>
              <li>FAQs</li>
              <li>Contact Support</li>
              <li>Privacy Policy</li>
              <li>Terms</li>
            </ul>
          </div>
          <div className="flex flex-col space-y-6 text-white">
            <h1 className="font-semibold">Support</h1>
            <ul className="flex flex-col space-y-4 text-xs">
              <li>Contact</li>
              <li>Affiliates</li>
              <li>Sitemap</li>
              <li>Cancelation Policy</li>
              <li>Pricing</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

   </main>
  );
}
