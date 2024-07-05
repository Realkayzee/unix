import Button1 from '@/app/helpers/Button1'
import Button2 from '@/app/helpers/Button2'
import Link from 'next/link'
import React from 'react'

const TBA = () => {
  return (
    <div className='flex flex-col items-center min-h-[calc(100vh-7rem)] justify-center p-5 gap-8'>
      <div className='text-3xl text-center'>
        <p>Create Token Bound Account for</p>
        <p>"the NFT name selected"</p>
      </div>

      <div className='flex gap-5'>
        <Button2>Create</Button2>
        <Link
        href={"#"}
        >
          <button className="bg-button px-8 py-2 rounded-xl font-semibold">
            Instantiate to base
          </button>
        </Link>
      </div>
      <div className="h-40 invisible"></div>
    </div>
  )
} 

export default TBA