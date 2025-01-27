import Image from 'next/image'
import React from 'react'

export const Header = () => {
  return (
    <header className="py-4 bg-[#FFF6F1]">
        <div className='container mx-auto flex justify-between'>
            <Image src="/assets/logo.svg" alt="Logo" width={180} height={50} 
              //revolution

            />

            <div className='flex items-center gap-4'>
              <Image src="/assets/icons/call.png" alt="Logo" width={30} height={30} className='w-[30px] h-[30px]' />
              <div>
                <p className='italic text-2xl'>Bạn có câu hỏi?</p>
                <p className='font-bold text-[28px]'>076 728 9011</p>
              </div>
            </div>
        </div>
    </header>
  )
}
