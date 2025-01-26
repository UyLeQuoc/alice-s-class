import Image from "next/image";
import * as React from "react";

export interface ImageProps {
    src: string;
    alt: string;
    className: string;
  }
  
  export interface ImageRowProps {
    images: ImageProps[];
  }
  
export const ImageRow: React.FC<ImageRowProps> = ({ images }) => {
  return (
    <div className="flex flex-wrap gap-2.5 items-center w-full max-md:max-w-full">
      {images.map((image: ImageProps, index: number) => (
        <Image
          key={index}
          loading="lazy"
          src={image.src}
          alt={image.alt}
          className={image.className}
            width={262}
            height={262}
        />
      ))}
    </div>
  );
};

const firstRowImages: ImageProps[] = [
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/53fff75d23f0a9d4ce02c7ca5f34522cdd908cd7eb96ecf6e4c1fd91463a16d4?apiKey=7ed9c1bb2a694ebca97c186157446de0&",
    alt: "Student achievement testimonial 1",
    className: "object-contain grow shrink self-stretch my-auto aspect-[0.71] w-[179px]"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a8a070e2cc1b6cf9ef9411ba09af25b74b87d769237bbc5e026bc6e01de15225?apiKey=7ed9c1bb2a694ebca97c186157446de0&",
    alt: "Student achievement testimonial 2",
    className: "object-contain grow shrink self-stretch my-auto aspect-[0.7] w-[178px]"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/792825aea5fbc28c26c558f230c53c86012591bc2a46f729bce1d40292af2639?apiKey=7ed9c1bb2a694ebca97c186157446de0&",
    alt: "Student achievement testimonial 3",
    className: "object-contain grow shrink self-stretch my-auto w-56 aspect-[0.85] min-w-[240px]"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/85476c45b1fdfffd4b6dba24ca1ee8f21cc234e111cd3619b1a1c79593451e45?apiKey=7ed9c1bb2a694ebca97c186157446de0&",
    alt: "Student achievement testimonial 4",
    className: "object-contain grow shrink self-stretch my-auto aspect-[0.74] w-[189px]"
  }
];

const secondRowImages: ImageProps[] = [
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a5ca6454729407c0f505087477a4beb24808aeba92048eb9e8346c5584061b02?apiKey=7ed9c1bb2a694ebca97c186157446de0&",
    alt: "Student achievement testimonial 5",
    className: "object-contain grow shrink aspect-[0.7] w-[179px]"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/927fbcf48f88a75460825fed78515d2efead80de42a2cbc5b9c5209c7d5b3725?apiKey=7ed9c1bb2a694ebca97c186157446de0&",
    alt: "Student achievement testimonial 6",
    className: "object-contain grow shrink aspect-[1.54] min-w-[240px] w-[442px] max-md:max-w-full"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/450bf955563156d0766bb1b54628107014bdb05b3b09a26c0d3ad3ea307a0ff9?apiKey=7ed9c1bb2a694ebca97c186157446de0&",
    alt: "Student achievement testimonial 7",
    className: "object-contain grow shrink aspect-[0.71] w-[181px]"
  }
];

const thirdRowImages: ImageProps[] = [
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/890d6e4651bf9ecd469e4162f227d4ef5b935ae28f8ae578f725842d6f86c530?apiKey=7ed9c1bb2a694ebca97c186157446de0&",
    alt: "Student achievement testimonial 8",
    className: "object-contain shrink-0 aspect-[0.51] w-[166px]"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/52f5db1573e725280522b9877d0f44e2877bff1c6f260572caeb84792fcb1683?apiKey=7ed9c1bb2a694ebca97c186157446de0&",
    alt: "Student achievement testimonial 9",
    className: "object-contain aspect-[1.14] min-w-[240px] w-[371px]"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c83af17a4d8736006e46c6bdf525872b333707f31da4f8e72c3b51603fb2c433?apiKey=7ed9c1bb2a694ebca97c186157446de0&",
    alt: "Student achievement testimonial 10",
    className: "object-contain aspect-[1.13] min-w-[240px] w-[364px]"
  }
];

const fourthRowImages: ImageProps[] = [
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a95d4f80cec04bdd15564fcaf845d3a6faa680498dd7459e53fab8cb6e9bc390?apiKey=7ed9c1bb2a694ebca97c186157446de0&",
    alt: "Student achievement testimonial 11",
    className: "object-contain shrink-0 self-stretch my-auto aspect-[0.46] w-[151px]"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/4f68fdd1181f9bdafb9bf758760bd040c79c60d3b3a8389fcfe0b5df79531451?apiKey=7ed9c1bb2a694ebca97c186157446de0&",
    alt: "Student achievement testimonial 12",
    className: "object-contain grow shrink self-stretch my-auto aspect-[0.75] min-w-[240px] w-[215px]"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/7b7eb1d1681d06b9f7710e931498033acbe27147d5601cbe55482b11fb000dd1?apiKey=7ed9c1bb2a694ebca97c186157446de0&",
    alt: "Student achievement testimonial 13",
    className: "object-contain grow shrink self-stretch my-auto aspect-[0.7] w-[199px]"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/0f21dee6b9b5eed76725f257c0814e2e7932f380089a59f49324d5b6c4b5f281?apiKey=7ed9c1bb2a694ebca97c186157446de0&",
    alt: "Student achievement testimonial 14",
    className: "object-contain grow shrink self-stretch my-auto aspect-[0.77] min-w-[240px] w-[222px]"
  }
];

export const ResultSection: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center px-56 pt-24 pb-36 bg-white max-md:px-5 max-md:pb-24 max-md:max-w-full">
      <h1 className="text-4xl font-bold tracking-tighter text-center text-black max-md:max-w-full">
        Con Số Không Biết Nói Dối, Những Thành Tích Của Học Viên Sau Khi Áp Dụng
        Phương Pháp
      </h1>
      <div className="flex flex-col mt-16 max-w-full w-[976px] max-md:mt-10">
        <ImageRow images={firstRowImages} />
        <div className="mt-2.5">
          <ImageRow images={secondRowImages} />
        </div>
        <div className="mt-2.5">
          <ImageRow images={thirdRowImages} />
        </div>
        <div className="mt-2.5">
          <ImageRow images={fourthRowImages} />
        </div>
      </div>
    </div>
  );
};