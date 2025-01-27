import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

export const HeroSection = () => {
  return (
    <section className="px-4 py-12 md:px-6 lg:px-8 relative h-[calc(100vh-4rem)] flex items-center justify-center">
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
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="mb-6 text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl flex flex-col gap-6">
          <div className='flex flex-col gap-2'>
            <span className="text-white text-[56px] whitespace-nowrap">CÁCH ĐỂ ĐẠT ĐƯỢC BẤT KÌ BAND</span>
            <span className="text-white text-[56px] whitespace-nowrap">ĐIỂM IETLS NÀO BẠN THÍCH... </span>
          </div>
          <div className='flex flex-col gap-2'>
            <span className="text-white text-[32px]">Ngay Cả Khi Bạn Chưa Biết Từng Kỹ Năng</span>
            <span className="text-white text-[32px]">Được Chấm Điểm Như Thế Nào</span>
          </div>
        </h1>

        <p className="mx-auto mb-12 max-w-3xl text-[24px] text-white md:text-xl font-semibold mt-10">
        Nhận Buổi Tư Vấn Chiến Lược Miễn Phí - Chiến Lược Chỉ Dành Cho Riêng Bạn, Để Khám Phá Cách Đạt Được Điểm IELTS Như Mong Muốn Nhanh Và Hiệu Quả
        </p>

        <Button className="bg-[#C41E3A] px-8 py-8 text-lg font-semibold text-white hover:bg-[#A01830] md:text-xl rounded-none">
          NHẬN BUỔI TƯ VẤN CHIẾN LƯỢC MIỄN PHÍ
        </Button>
      </div>
    </section>
  );
};
