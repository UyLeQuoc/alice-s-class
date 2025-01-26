import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="px-4 py-12 md:px-6 lg:px-8 bg-[#FFF6F1] relative">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="mb-6 text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl flex flex-col gap-2">
          <span className="text-[#C41E3A]">Cách Để Đạt Được Bất Kỳ Band Điểm</span>
          <span>
            <span className="text-[#C41E3A]">IELTS Nào Bạn Thích...</span>{" "}
            <span className="text-black">Ngay Cả Khi</span>
          </span>
          <span className="text-black">Bạn Chưa Biết Từng Kỹ Năng Được</span>
          <span className="text-black">Chấm Điểm Như Thế Nào</span>
        </h1>

        <p className="mx-auto mb-12 max-w-3xl text-lg text-gray-900 md:text-xl font-semibold mt-10">
          Nhận Buổi Tư Vấn Chiến Lược Miễn Phí—Chiến Lược Chỉ Dành Cho Riêng Bạn, Để Khám Phá Cách Đạt Được Điểm IELTS
          Như Mong Muốn Nhanh Và Hiệu Quả
        </p>

        <Button className="bg-[#C41E3A] px-8 py-8 text-lg font-semibold text-white hover:bg-[#A01830] md:text-xl rounded-none">
          NHẬN BUỔI TƯ VẤN CHIẾN LƯỢC MIỄN PHÍ
        </Button>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
        <div className="h-12 w-12 rounded-full bg-[#FFF6F1] shadow-lg flex items-center justify-center cursor-pointer hover:shadow-xl transition-all duration-300">
          <ChevronDown size={32} className="text-[#C41E3A]" />
        </div>
      </div>
    </section>
  );
};
