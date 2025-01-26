import Image from "next/image";
import * as React from "react";

export interface TestimonialImageProps {
    src: string;
    alt: string;
    className?: string;
  }
  
  export interface TestimonialColumnProps {
    images: TestimonialImageProps[];
  }
  
export const TestimonialColumn: React.FC<TestimonialColumnProps> = ({ images }) => (
  <div className="flex flex-col self-stretch my-auto min-w-[240px]">
    {images.map((image, index) => (
      <TestimonialImage
        key={index}
        src={image.src}
        alt={image.alt}
        className={`${index > 0 ? "mt-5" : ""} ${image.className}`}
      />
    ))}
  </div>
);


export const TestimonialImage: React.FC<TestimonialImageProps> = ({ src, alt, className }) => (
    <Image
      loading="lazy"
      src={src}
      alt={alt}
      className={`object-contain w-full ${className}`}
        width={262}
        height={262}
    />
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
      { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/3313a37a076a39beb2ffc8b34e2126727e21be0350d0090872a13357070245ab?apiKey=7ed9c1bb2a694ebca97c186157446de0&", alt: "Student success story 5", className: "aspect-[2.08]" }
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
  return (
    <div className="flex flex-col justify-center items-center py-24 bg-white max-md:px-5 container mx-auto">
      <div className="flex flex-col w-full">
        <h1 className="self-center text-4xl font-bold tracking-tighter text-center text-black w-[680px] max-md:max-w-full">
          Những Nhận Xét Gần Đây Của Học Viên Thành Công Đạt Kết Quả Mong Muốn
        </h1>
        <div className="flex flex-col mt-12 w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-wrap gap-2.5 justify-center items-center w-full max-md:max-w-full">
            {testimonialData.map((column, index) => (
              <div key={index} style={{ width: column.width }}>
                <TestimonialColumn images={column.images} />
              </div>
            ))}
          </div>
          <div className="flex flex-col self-center mt-16 max-w-full text-2xl tracking-tight text-center w-[588px] max-md:mt-10">
            <button 
              className="gap-2.5 self-stretch px-12 py-6 w-full leading-none text-white bg-rose-700 max-md:px-5 max-md:max-w-full"
              aria-label="Nhận buổi tư vấn chiến lược miễn phí"
            >
              <span className="font-bold">
                NHẬN BUỔI TƯ VẤN CHIẾN LƯỢC MIỄN PHÍ
              </span>
            </button>
            <p className="self-center mt-2.5 leading-8 text-black max-md:max-w-full">
              Tìm hiểu cách bạn chắc chắn nâng được band
                <br />
              điểm IELTS và tự tin sử dụng tiếng Anh vào đời
                <br />
               sống thường ngày
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};