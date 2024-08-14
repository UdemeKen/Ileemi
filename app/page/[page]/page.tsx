import React from 'react'

export default function Dashboard({params}: { params: { page: string }}) {
  return (
    <h1 className='text-[#A0AEC0]'>Page/ <span className='capitalize text-black'>{params.page}</span></h1>
  )
}
