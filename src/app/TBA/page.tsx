"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const TBA = () => {
    const router = useRouter();
  return (
      <div>
          <div className='text-xl tracking-wide	mb-10 flex flex-col gap-3'>
              <p>Create TBA from your available NFTs</p>
              <p >NFT on Starknet | NFT on base</p>
          </div>

          <div className='bg-white-1 rounded-3xl w-[1100px] mx-auto'>         
              <div className='p-8 flex flex-wrap justify-between gap-4'>
                  {Array.from({ length: 6 }).map((_, index) => (
                  <div onClick={() => router.push(`/TBA/createTBA/${index}`)} key={index} className='cursor-pointer border-hero rounded-lg border-2 p-4 w-[300px] h-[250px]'>
                  </div>
                  ))}
                </div>
          </div>
    </div>
  )
}

export default TBA