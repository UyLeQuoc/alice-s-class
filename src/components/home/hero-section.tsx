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
        <p className="mx-auto mb-8 md:mb-12 max-w-full text-[12px] sm:text-[16px] md:text-[18px] lg:text-[16px] text-white mt-6 md:mt-10">
          HOANG MANG VÌ HỌC IELTS MÃI KHÔNG TIẾN BỘ MÀ DEADLINE NGÀY CÀNG GẦN?
        </p>
        <h1 className="mb-4 md:mb-6 text-[24px] text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl flex flex-col gap-4 md:gap-6 text-white max-w-4xl">
          “Em Từng Rất Áp Lực Vì Hạn Nộp Hồ Sơ Chỉ Còn 5 Tháng Nhưng Lại Chưa Từng Học IELTS... Bây Giờ Em Đã Có 6.5 IELTS, Đậu Trường Mình Mơ Ước… Chỉ Trong 3 Tháng, Dù Lúc Đó Em Chỉ Có Thể Học IELTS 2 Tiếng/Ngày"
        </h1>
        <p className="mx-auto mb-8 md:mb-12 max-w-3xl text-[12px] sm:text-[16px] md:text-[18px] lg:text-[22px] text-white mt-6 md:mt-10 text-wrap">
          Bạn có thể đạt được bất kỳ band IELTS nào nhờ vào việc biết điểm yếu của mình. Nhận buổi tư vấn miễn phí cùng Founder Ngọc Diễm và khám phá cách bạn có thể chinh phục band điểm IELTS mong muốn.
        </p>
      
        <div className="flex flex-col items-center mt-8 max-w-full text-lg md:text-2xl tracking-tight text-center w-full lg:w-[700px] lg:mx-auto max-md:mt-10">
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

