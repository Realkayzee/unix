import React from 'react'
import Button2 from '../helpers/Button2'
import Button1 from '../helpers/Button1'

const swap = () => {
  return (
    <>
      <div className="flex flex-col justify-center min-h-[calc(100vh-7rem)]">
        <div className='bg-hero rounded-2xl w-1/2 mx-auto lg:px-5 2xl:px-10 lg:py-10 2xl:py-16'>
          <div className=' bg-white-2 rounded-2xl py-6'>
            <p className='text-center text-2xl text-white'>Select Token Bound Account</p>
          </div>
          <div className='bg-white-2 rounded-3xl'>
            <div className='border-2 border-black-1 rounded-2xl p-5 mt-14'>
              <div className="flex flex-col gap-4">
                <div className='bg-hero p-4 rounded-2xl'>
                  <div className='flex items-center justify-between'>
                    <p className='font-mono text-xl'>0.00</p>
                    <Button2>Token Select</Button2>
                  </div>
                </div>
                <div className='bg-hero p-4 rounded-2xl'>
                  <div className='flex items-center justify-between'>
                    <p className='font-mono text-xl'>0.00</p>
                    <Button2>Token Select</Button2>
                  </div>
                </div>
                <button className="bg-button px-8 py-4 rounded-xl font-semibold">Swap</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default swap