import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <section className='relative w-full h-screen overflow-hidden'>
      <div className='absolute inset-0'>
        <div className='absolute inset-0 bg-gradient-to-tr from-slate-50 from-0%'></div>
        <div className='absolute inset-0 bg-gradient-to-br from-slate-50 from-0%'></div>
        <Image src={"/auth_background_image.jpg"} alt='auth_background_image' width={1300} height={1045} className=''/>
      </div>
      <div className='absolute inset-0 w-full h-full flex flex-col justify-center items-center'>
        <div className='border-2 border-black'>forgot-password</div>
      </div>
    </section>
  )
}
