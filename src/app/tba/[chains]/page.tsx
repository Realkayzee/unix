"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const TBA = () => {
  const router = useRouter();
  return (
      <div className='flex flex-wrap gap-8'>
        {Array.from({ length: 6 }).map((_, index) => (
        <div onClick={() => router.push(`/tba/create/${index}`)} key={index} className='cursor-pointer border-button-1 rounded-lg border-2 p-4 w-[calc(33%-2rem)] 2xl:w-[calc(25%-2rem)] h-[300px]'>
        </div>
        ))}
      </div>
  )
}

export default TBA