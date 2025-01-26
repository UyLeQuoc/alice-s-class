import Image from 'next/image'
import React from 'react'

export const Header = () => {
  return (
    <header className="py-4 bg-[#FFF6F1]">
        <div className='container mx-auto'>
            <Image src="/assets/logo.png" alt="Logo" width={100} height={100} />
        </div>
    </header>
  )
}
