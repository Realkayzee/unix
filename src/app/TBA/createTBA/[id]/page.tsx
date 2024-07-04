import Button1 from '@/app/helpers/Button1'
import Button2 from '@/app/helpers/Button2'
import React from 'react'

const TBA = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center p-24 gap-16'>
      <div className='text-4xl text-center'>
        <p>Create Token Bound Account for</p>
        <p>"the NFT name selected"</p>
      </div>

      <div className='flex gap-20'>
        <Button2>Create</Button2>
        <Button2>Instantiate to base</Button2>
      </div>
    </div>
  )
} 

export default TBA