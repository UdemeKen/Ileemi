import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React from 'react'

export default function Dashboard({params}: { params: { page: string }}) {
  return (
    <section className='flex justify-between'>
      <div className='flex flex-col justify-start gap-2 ml-4'>
        <h2 className='text-[#A0AEC0]'>Page/ <span className='capitalize text-black'>{params.page}</span></h2>
        <h1 className='capitalize font-bold'>{params.page}</h1>
      </div>
      <div className='flex items-center relative w-full max-w-xs space-x-2'>
        <Search className="absolute left-3 top-8 pl-2 transform -translate-y-2/3 text-gray-400"/>
        <Input
          type="text"
          placeholder="Type here..."
          className="w-full py-1 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
    </section>
  )
}
