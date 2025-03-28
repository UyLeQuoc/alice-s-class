import { usePopUpStore } from "@/lib/popupStore"
import Image from "next/image"
import { GoogleRatingDisplay } from '@/components/GoogleRatingDisplay'; // Adjust path if needed
import { CTAButton } from "../cta-button"

export const HeroSection = () => {
  return (
    <section className="px-4 py-12 md:px-6 lg:px-8 relative h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
      <div>
        <Image
          src={"/assets/hero.jpg"}
          alt="IELTS Hero"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute inset-0 -z-10"
        />
      </div>
      <div className="mx-auto text-center max-w-[90vw]">
        <h1 className="mb-4 md:mb-6 text-xl font-bold leading-tight tracking-tight sm:text-2xl md:text-3xl lg:text-4xl flex flex-col gap-4 md:gap-6">
          <div className="flex flex-col gap-1 md:gap-2">
          <span className="md:hidden block text-white text-wrap text-[24px] sm:text-[28px] md:text-[36px] lg:text-[48px]">
              CÁCH ĐỂ ĐẠT 6.5 IETLS TRONG VÒNG 3 THÁNG...
            </span>

            <span className="hidden md:block text-white text-wrap text-[24px] sm:text-[28px] md:text-[36px] lg:text-[48px]">
              CÁCH ĐỂ ĐẠT 6.5 IETLS TRONG
            </span>
            <span className="hidden md:block text-white text-wrap text-[24px] sm:text-[28px] md:text-[36px] lg:text-[48px] mt-2">
             VÒNG 3 THÁNG...{" "}
            </span>
          </div>
          <div className="flex flex-col gap-1 md:gap-2">
            <span className="text-white text-wrap text-[16px] sm:text-[18px] md:text-[24px] lg:text-[28px]">
              Mà Không Cần Phải Luyện Đề IELTS Mỗi Ngày
            </span>
          </div>
        </h1>

        <p className="mx-auto mb-8 md:mb-12 max-w-3xl text-[12px] sm:text-[16px] md:text-[18px] lg:text-[22px] text-white italic mt-6 md:mt-10 text-wrap">
          Nhận Buổi Tư Vấn Chiến Lược Miễn Phí - Chiến Lược Chỉ Dành Cho Riêng Bạn, Để Khám Phá Cách Đạt Được Điểm IELTS
          Như Mong Muốn Nhanh Và Hiệu Quả
        </p>

       <div className="flex flex-col self-center mt-8 max-w-full text-lg md:text-2xl tracking-tight text-center w-full lg:w-[700px] max-md:mt-10">
                 <CTAButton text="NHẬN BUỔI TƯ VẤN LỘ TRÌNH HỌC MIỄN PHÍ" />
               </div>

        <div className="mt-4 flex justify-center"> {/* Centers the rating display */}
          <GoogleRatingDisplay
            rating={5} // <-- Put your actual rating here
            reviewCount={18} // <-- Put your actual review count here
            googleMapsUrl="https://maps.app.goo.gl/1DohPwA8fZxFWk3Y7" // <-- Optional: Put URL here
          />
        </div>

      </div>
    </section>
  )
}

