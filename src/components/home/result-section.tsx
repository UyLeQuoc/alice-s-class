"use client"

import Image from "next/image"
import type * as React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation } from "swiper/modules"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

export interface ImageProps {
  src: string
  alt: string
}

const images: ImageProps[] = [
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/53fff75d23f0a9d4ce02c7ca5f34522cdd908cd7eb96ecf6e4c1fd91463a16d4?apiKey=7ed9c1bb2a694ebca97c186157446de0&",
    alt: "Student achievement testimonial 1",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a8a070e2cc1b6cf9ef9411ba09af25b74b87d769237bbc5e026bc6e01de15225?apiKey=7ed9c1bb2a694ebca97c186157446de0&",
    alt: "Student achievement testimonial 2",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/792825aea5fbc28c26c558f230c53c86012591bc2a46f729bce1d40292af2639?apiKey=7ed9c1bb2a694ebca97c186157446de0&",
    alt: "Student achievement testimonial 3",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/85476c45b1fdfffd4b6dba24ca1ee8f21cc234e111cd3619b1a1c79593451e45?apiKey=7ed9c1bb2a694ebca97c186157446de0&",
    alt: "Student achievement testimonial 4",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a5ca6454729407c0f505087477a4beb24808aeba92048eb9e8346c5584061b02?apiKey=7ed9c1bb2a694ebca97c186157446de0&",
    alt: "Student achievement testimonial 5",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/450bf955563156d0766bb1b54628107014bdb05b3b09a26c0d3ad3ea307a0ff9?apiKey=7ed9c1bb2a694ebca97c186157446de0&",
    alt: "Student achievement testimonial 7",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/4f68fdd1181f9bdafb9bf758760bd040c79c60d3b3a8389fcfe0b5df79531451?apiKey=7ed9c1bb2a694ebca97c186157446de0&",
    alt: "Student achievement testimonial 12",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/7b7eb1d1681d06b9f7710e931498033acbe27147d5601cbe55482b11fb000dd1?apiKey=7ed9c1bb2a694ebca97c186157446de0&",
    alt: "Student achievement testimonial 13",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/0f21dee6b9b5eed76725f257c0814e2e7932f380089a59f49324d5b6c4b5f281?apiKey=7ed9c1bb2a694ebca97c186157446de0&",
    alt: "Student achievement testimonial 14",
  },
]

export const ResultSection: React.FC = () => {
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
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          className="mySwiper"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="aspect-w-1 aspect-h-1 h-full">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={400}
                  height={400}
                  className="rounded-lg object-cover bg-red-400 w-full h-full aspect-[12/16]"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

