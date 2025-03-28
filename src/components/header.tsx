import Image from 'next/image';
import React from 'react';

export const Header = () => {
  return (
    <header className="py-4 bg-[#FFF6F1]">
      <div className="container mx-auto flex flex-row justify-between items-center px-4">
        {/* Logo */}
        <div className="mb-4 md:mb-0 flex-shrink-0">
          <Image
            src="/assets/logo.svg"
            alt="Logo"
            width={180}
            height={50}
            className="w-[120px] md:w-[180px] h-auto"
          />
        </div>

        {/* Contact Section */}
        <div className="flex flex-col items-center md:flex-row md:items-center gap-4">
          <Image
            src="/assets/icons/call.svg"
            alt="Call Icon"
            width={30}
            height={30}
            className="w-[30px] h-[30px]"
          />
          <div className="text-center md:text-left">
            <p className="italic text-lg md:text-2xl">Bạn có câu hỏi?</p>
            <a href="tel:+4733378901" className='font-bold text-xl md:text-[28px] hover:underline'>076 728 9011</a>
          </div>
        </div>
      </div>
    </header>
  );
};