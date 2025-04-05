"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { XIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export interface ImageProps {
  src: string;
  alt: string;
  ieltsScore: number;
}

const images: ImageProps[] = [
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/53fff75d23f0a9d4ce02c7ca5f34522cdd908cd7eb96ecf6e4c1fd91463a16d4?apiKey=7ed9c1bb2a694ebca97c186157446de0&",
    alt: "Student achievement testimonial 1",
    ieltsScore: 7.5,
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a8a070e2cc1b6cf9ef9411ba09af25b74b87d769237bbc5e026bc6e01de15225?apiKey=7ed9c1bb2a694ebca97c186157446de0&",
    alt: "Student achievement testimonial 2",
    ieltsScore: 6.5,
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/792825aea5fbc28c26c558f230c53c86012591bc2a46f729bce1d40292af2639?apiKey=7ed9c1bb2a694ebca97c186157446de0&",
    alt: "Student achievement testimonial 3",
    ieltsScore: 7.0,
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/85476c45b1fdfffd4b6dba24ca1ee8f21cc234e111cd3619b1a1c79593451e45?apiKey=7ed9c1bb2a694ebca97c186157446de0&",
    alt: "Student achievement testimonial 4",
    ieltsScore: 6.5,
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a5ca6454729407c0f505087477a4beb24808aeba92048eb9e8346c5584061b02?apiKey=7ed9c1bb2a694ebca97c186157446de0&",
    alt: "Student achievement testimonial 5",
    ieltsScore: 6.0,
  },
  {
    src: "/assets/ielts-certificates/Nhu_Y_7.5.png",
    alt: "Alice’s Class - Tư vấn chiến lược miễn phí",
    ieltsScore: 7.5,
  },
  {
    src: "/assets/ielts-certificates/Thuy_Nga_7.png",
    alt: "Alice’s Class - Tư vấn chiến lược miễn phí",
    ieltsScore: 7.0,
  },
  {
    src: "/assets/ielts-certificates/Phuong_Anh_5.5.png",
    alt: "Alice’s Class - Tư vấn chiến lược miễn phí",
    ieltsScore: 5.5,
  },
  {
    src: "/assets/ielts-certificates/huyen_anh_6.png",
    alt: "Alice’s Class - Tư vấn chiến lược miễn phí",
    ieltsScore: 6.0,
  },
  {
    src: "/assets/ielts-certificates/dinh_hieu_7.png",
    alt: "Alice’s Class - Tư vấn chiến lược miễn phí",
    ieltsScore: 7.0,
  },
  {
    src: "/assets/ielts-certificates/anh_thu_6.png",
    alt: "Alice’s Class - Tư vấn chiến lược miễn phí",
    ieltsScore: 6.0,
  },
];

export const ResultSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<ImageProps | null>(null);

  const openModal = (image: ImageProps) => {
    setCurrentImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setTimeout(() => setCurrentImage(null), 300); // Wait for animation to complete before unmounting
  };

  return (
    <div className="flex flex-col justify-center items-center px-4 pt-24 pb-36 bg-white w-full">
      <h1 className="text-4xl font-bold tracking-tighter text-center mb-16 text-[#B62232] max-w-4xl">
        Con Số Không Biết Nói Dối, Những Thành Tích Của Học Viên Sau Khi Áp Dụng Phương Pháp
      </h1>

      <div className="w-full max-w-[1200px]">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{
            el: '.swiper-pagination-custom',    // Target our new div for pagination
            clickable: true,
          }}
          navigation
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="mySwiper"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div
                className="aspect-w-1 aspect-h-1 h-full cursor-pointer"
                onClick={() => openModal(image)}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={400}
                  height={400}
                  className="rounded-lg object-cover w-full h-full aspect-[12/16]"
                />

                {/* --- ADDED INFO BOX OVERLAY --- */}
                <div className="bg-[#B62232] text-white text-center p-3 rounded-b-lg">
                  <p className="text-xs mt-1">IELTS Overall: {image.ieltsScore.toFixed(1)}</p> {/* Show score */}
                </div>
                {/* --- END OF INFO BOX OVERLAY --- */}

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      {/* --- NEW Container for Controls --- */}
      <div className="swiper-controls-container flex justify-between items-center mt-4 px-4 h-8"> {/* Added h-8 for height */}
        {/* Placeholder for Prev Button */}
        <div className="swiper-button-prev-custom cursor-pointer">
          {/* Swiper will automatically add its arrow SVG here */}
        </div>

        {/* Placeholder for Pagination */}
        <div className="swiper-pagination-custom">
          {/* Swiper will automatically add pagination dots here */}
        </div>

        {/* Placeholder for Next Button */}
        <div className="swiper-button-next-custom cursor-pointer">
          {/* Swiper will automatically add its arrow SVG here */}
        </div>
      </div>
      {/* --- End Controls Container --- */}

      </div>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && currentImage !== null && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative p-4 bg-white rounded-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
            >
              <Image
                src={currentImage.src}
                alt={currentImage.alt}
                width={600}
                height={600}
                className="rounded-lg max-w-full"
              />
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 bg-white text-black p-2 rounded-full"
              >
                <XIcon size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
