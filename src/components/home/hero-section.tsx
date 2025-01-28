import { Button } from "@/components/ui/button"
import { usePopUpStore } from "@/lib/popupStore"
import Image from "next/image"

export const HeroSection = () => {
  const { openPopUp } = usePopUpStore()

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
            <span className="text-white text-wrap text-[24px] sm:text-[28px] md:text-[36px] lg:text-[48px]">
              CÁCH ĐỂ ĐẠT ĐƯỢC BẤT KÌ BAND
            </span>
            <span className="hidden md:block text-white text-wrap text-[24px] sm:text-[28px] md:text-[36px] lg:text-[48px] mt-2">
              ĐIỂM IETLS NÀO BẠN THÍCH...{" "}
            </span>
          </div>
          <div className="flex flex-col gap-1 md:gap-2">
            <span className="text-white text-wrap text-[16px] sm:text-[18px] md:text-[24px] lg:text-[28px]">
              Ngay Cả Khi Bạn Chưa Biết Từng Kỹ Năng
            </span>
            <span className="text-white text-wrap text-[16px] sm:text-[18px] md:text-[24px] lg:text-[28px] -mt-2">
              Được Chấm Điểm Như Thế Nào
            </span>
          </div>
        </h1>

        <p className="mx-auto mb-8 md:mb-12 max-w-3xl text-[12px] sm:text-[16px] md:text-[18px] lg:text-[22px] text-white italic mt-6 md:mt-10 text-wrap">
          Nhận Buổi Tư Vấn Chiến Lược Miễn Phí - Chiến Lược Chỉ Dành Cho Riêng Bạn, Để Khám Phá Cách Đạt Được Điểm IELTS
          Như Mong Muốn Nhanh Và Hiệu Quả
        </p>

        <Button 
          onClick={ openPopUp}
        className="bg-[#C41E3A] px-4 sm:px-6 md:px-10 py-4 md:py-4 lg:py-8 text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white hover:bg-[#A01830] rounded-none w-full sm:w-auto">
          NHẬN BUỔI TƯ VẤN CHIẾN LƯỢC MIỄN PHÍ
        </Button>
      </div>
    </section>
  )
}

