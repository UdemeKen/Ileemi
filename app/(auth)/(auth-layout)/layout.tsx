"use client"
import Image from "next/image";
import React, { useEffect, useState } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const messages = [
    "Welcome to IleemiPay!",
    "Simplified payment for homes.",
    "Your trusted payment partner.",
    "Experience seamless transactions."
];

const descriptions = [
    "Experience seamless transactions with IleemiPay. Our platform is designed to make your payment processes smooth and efficient, ensuring that you can focus on what truly matters.",
    "With IleemiPay, managing your payments has never been easier. Our user-friendly interface allows you to handle transactions effortlessly, making your home payment experience simple and straightforward.",
    "Trust us for secure and reliable transactions. At IleemiPay, we prioritize your security, providing you with peace of mind as you navigate your financial commitments.",
    "Join us for a better payment experience. Our innovative solutions are tailored to meet your needs, ensuring that every transaction is quick, easy, and hassle-free."
];

export default function AuthLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {

    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
        }, 8000);
    
        return () => clearInterval(interval);
    }, []);
    
    const handleClick = (index: number) => {
        setCurrentMessageIndex(index);
    };

    return (
        // <html lang="en">
        //   <body className={inter.className}>
                <section className='relative w-full h-screen overflow-hidden'>
                    <div className='absolute inset-0'>
                        <div className='absolute inset-0 bg-gradient-to-tr from-slate-50 from-0%'></div>
                        <div className='absolute inset-0 bg-gradient-to-br from-slate-50 from-0%'></div>
                        <Image src={'/auth_background_image.jpg'} alt="Logo" width={1920} height={1080} />
                        <h1>ZIKY</h1>
                    </div>
                    <div className="absolute inset-0 w-full h-full flex items-center justify-center space-x-4 px-32">
                        <div className='w-full flex flex-col justify-center items-center'>
                        <Image src={'/Logo_03.png'} alt="Logo" width={200} height={200} className="my-20"/>
                            <TransitionGroup className={'text-center'}>
                                <CSSTransition
                                    key={currentMessageIndex}
                                    timeout={1000}
                                    classNames="slide"
                                >
                                <div className="text-green-800 flex flex-col justify-normal">
                                    <h1 className="text-2xl font-bold font-sans z-10">{messages[currentMessageIndex]}</h1>
                                    <p className=''>{descriptions[currentMessageIndex]}</p>
                                </div>
                                </CSSTransition>
                            </TransitionGroup>
                            <div className="flex space-x-2 mt-4">
                                {messages.map((_, index) => (
                                    <button
                                    key={index}
                                    onClick={() => handleClick(index)}
                                    className={`w-10 h-2 rounded-md ${currentMessageIndex === index ? 'bg-green-800' : 'bg-slate-300'}`}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className='w-full flex flex-col justify-center items-center'>
                            {children}
                        </div>
                    </div>
                </section>
        //   </body>
        // </html>
    );
  }