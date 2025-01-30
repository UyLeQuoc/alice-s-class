"use client";

import Image from "next/image";
import React, { useState } from "react";
import { CTAButton } from "../cta-button";
import { XIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface TestimonialImageProps {
  src: string;
  alt: string;
  className?: string;
}

export interface TestimonialColumnProps {
  images: TestimonialImageProps[];
  onImageClick: (index: number) => void;
}

export const TestimonialColumn: React.FC<TestimonialColumnProps> = ({ images, onImageClick }) => (
  <div className="flex flex-col gap-5 self-stretch min-w-[240px]">
    {images.map((image, index) => (
      <div key={index} className="relative cursor-pointer" onClick={() => onImageClick(index)}>
        <Image
          src={image.src}
          alt={image.alt}
          className={`object-cover rounded-md shadow-md w-full ${image.className}`}
          width={262}
          height={262}
          loading="lazy"
        />
      </div>
    ))}
  </div>
);

const testimonialData = [
  {
    width: "262px",
    images: [
      { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/61991238b2260a5eacf9f5dec4628678dec4d8bcb82220af268ace3e72baa1a3?apiKey=7ed9c1bb2a694ebca97c186157446de0&", alt: "Student success story 1", className: "aspect-[0.56]" },
      { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/61a4c917797f11f5e80edb1181e4c88cc19be6040563460d35e7d3eddaf1d274?apiKey=7ed9c1bb2a694ebca97c186157446de0&", alt: "Student success story 2", className: "aspect-[1.97]" }
    ]
  },
  {
    width: "296px",
    images: [
      { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/6e562eb7895a93250be58905387122531b86672851ed8c01dfcd55c685a0a9b5?apiKey=7ed9c1bb2a694ebca97c186157446de0&", alt: "Student success story 3", className: "aspect-[1.91]" },
      { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/deac1382eaa1e6a2a5da49a39d7010a9847df4930fca1b67106fbe3173d98706?apiKey=7ed9c1bb2a694ebca97c186157446de0&", alt: "Student success story 4", className: "aspect-[1.15]" },
      { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/3313a37a076a39beb2ffc8b34e2126727e21be0350d0090872a13357070245ab?apiKey=7ed9c1bb2a694ebca97c186157446de0&", alt: "Student success story 4", className: "aspect-[2.08]" }
    ]
  },
  {
    width: "265px",
    images: [
      { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/4596144e531cb001154acc3a2c9e57c9635f1cb5c88cd07ed17e529a17b10e12?apiKey=7ed9c1bb2a694ebca97c186157446de0&", alt: "Student success story 6", className: "aspect-[2.5]" },
      { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/7d3cd29da037f2247777563c9696562d9172eb0181cde272cbb985cc4d2b6e8d?apiKey=7ed9c1bb2a694ebca97c186157446de0&", alt: "Student success story 7", className: "aspect-[2.7]" },
      { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/63bcc7c9860ca90cc414cc114c5072367086c6266137478564a095c221e83b59?apiKey=7ed9c1bb2a694ebca97c186157446de0&", alt: "Student success story 8", className: "aspect-[0.67]" }
    ]
  },
  {
    width: "263px",
    images: [
      { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e94f8711892c134d27641ad92c8ba23f27458b0835ea68e332b46ddca083d131?apiKey=7ed9c1bb2a694ebca97c186157446de0&", alt: "Student success story 9", className: "aspect-[0.75]" },
      { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/6f87254e4ddfc09186e7cdeba8e7a586e125f569cfa0f61b3ac0241e412b7b5d?apiKey=7ed9c1bb2a694ebca97c186157446de0&", alt: "Student success story 10", className: "aspect-[1.04]" }
    ]
  }
];

export const TestimonialsSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<TestimonialImageProps | null>(null);

  const openModal = (image: TestimonialImageProps) => {
    setCurrentImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setTimeout(() => setCurrentImage(null), 300); // Delay to allow animation to complete
  };

  return (
    <div className="flex flex-col justify-center items-center py-20 bg-white max-md:px-5 container mx-auto">
      <div className="flex flex-col w-full">
        <h1 className="self-center text-4xl font-bold tracking-tighter text-center w-[680px] max-md:max-w-full text-[#B62232]">
          Những Nhận Xét Gần Đây Của Học Viên Thành Công Đạt Kết Quả Mong Muốn
        </h1>
        <div className="flex-wrap gap-6 justify-center mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {testimonialData.map((column, columnIndex) => (
            <TestimonialColumn key={columnIndex} images={column.images} onImageClick={(index) => openModal(column.images[index])} />
          ))}
        </div>
        <div className="flex flex-col self-center mt-8 max-w-full text-lg md:text-2xl tracking-tight text-center w-full lg:w-[700px] max-md:mt-10">
          <CTAButton text="NHẬN BUỔI TƯ VẤN CHIẾN LƯỢC MIỄN PHÍ" />
          <div className="self-center mt-2.5 leading-8 text-black max-md:max-w-full text-[18px] md:text-[20px] italic font-bold">
            Tìm hiểu cách bạn chắc chắn nâng được band điểm IELTS và tự tin sử dụng tiếng Anh vào đời sống thường ngày
          </div>
        </div>
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
              className="relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e:any) => e.stopPropagation()} // Prevent close when clicking inside the modal
            >
              <Image
                src={currentImage.src}
                alt={currentImage.alt}
                width={500}
                height={500}
                className="rounded-lg"
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
