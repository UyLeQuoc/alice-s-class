import Image from "next/image";
import * as React from "react";
import { CTAButton } from "../cta-button";

interface TitledSectionProps {
  title: string;
  description: string;
  imgSrc: string;
  imgAlt: string;
}

function TitledSection({ title, description, imgSrc, imgAlt }: TitledSectionProps) {
  return (
    <div className="flex flex-row items-start gap-4 mt-6 w-full max-w-4xl">
      <Image
        src={"/assets/icons/black-checkbox.svg"}
        width={36}
        height={36}
        alt=""
        className="object-contain shrink-0"
      />
      <div className="flex-1">
        <h3 className="text-xl md:text-2xl font-semibold text-black">{title}</h3>
        <p className="mt-2 text-base leading-7 text-gray-800">{description}</p>
      </div>
    </div>
  );
}

export function BenefitSection() {
  const sections = [
    {
      title: "Sai Lầm Nghiêm Trọng 90% Người Học IELTS Đang Mắc Phải",
      description:
        "Nếu như bạn đã từng là người \"cày\" ngày đêm nhưng điểm số vẫn dậm chân tại chỗ, thì có thể bạn đang mắc phải lỗi sai lầm phổ biến này, đây cũng là nguyên nhân gốc rễ khiến bạn học mãi không tiến bộ",
      imgSrc: "/assets/icons/black-checkbox.svg",
      imgAlt: "Icon illustrating common mistakes"
    },
    {
      title: "Tại Sao Bạn Phải Có Lộ Trình Và Phương Pháp Học Ngay Lập Tức",
      description:
        "Nếu như bạn chưa có, chúng tôi sẽ cho bạn một lộ trình và phương pháp chỉ dành riêng cho bạn. Và giải thích tại sao khi có được lộ trình này, học viên cũ luôn có được kết quả nhanh hơn 30% so với lúc tự học",
      imgSrc: "/assets/icons/black-checkbox.svg",
      imgAlt: "Icon showing learning roadmap"
    },
    {
      title:
        "Làm Thế Nào Để Đạt Được Điểm Số IELTS Mục Tiêu Mà Không Cần \"Cày Ngày Cày Đêm\" Hay \"Nhồi Nhét\" Từ Vựng?",
      description:
        "(Gợi ý: Bạn sẽ không tìm thấy thông tin này chỉ với một cú click chuột trên Google đâu!)",
      imgSrc: "/assets/icons/black-checkbox.svg",
      imgAlt: "Icon providing learning tips"
    },
    {
      title:
        "Chiến Lược Làm Bài Giúp Bạn Bứt Phá Từng Kỹ Năng Mà Nhiều Trung Tâm Không Muốn Tiết Lộ Với Bạn",
      description:
        "Chuyên gia 8.0 IELTS sẽ chia sẻ chiến lược làm bài hiệu quả cho từng phần thi, cách tối ưu hóa điểm số dựa trên điểm mạnh của bạn và phương pháp luyện tập chuyên sâu để khắc phục điểm yếu.",
      imgSrc: "/assets/icons/black-checkbox.svg",
      imgAlt: "Icon showing exam strategies"
    },
    {
      title: "Giải đáp \"tất tần tật\" thắc mắc về IELTS",
      description:
        "Bạn có bất kỳ câu hỏi nào về kỳ thi IELTS, phương pháp học, tài liệu ôn luyện hay chiến lược làm bài? Chúng tôi sẽ giải đáp toàn bộ mọi thứ, không giấu giếm bất cứ thứ gì",
      imgSrc: "/assets/icons/black-checkbox.svg",
      imgAlt: "Icon answering IELTS queries"
    }
  ];

  return (
    <div className="relative flex flex-col justify-center items-center py-16 px-6 sm:px-10 lg:px-32 bg-orange-50 overflow-hidden">
      {/* Header Text */}
      <div className="text-3xl md:text-4xl font-bold text-center text-rose-700 capitalize max-w-2xl">
        Đây Là Tóm Tắt Những Gì Bạn Sẽ Nhận Được Trong Buổi Tư Vấn Miễn Phí...
      </div>

      {/* Benefit Sections */}
      <div className="flex flex-col mt-8 w-full max-w-4xl">
        {sections.map((section, index) => (
          <TitledSection
            key={index}
            title={section.title}
            description={section.description}
            imgSrc={section.imgSrc}
            imgAlt={section.imgAlt}
          />
        ))}
      </div>

      {/* CTA Button */}
      <div className="flex flex-col self-center mt-8 max-w-full text-lg md:text-2xl tracking-tight text-center w-full lg:w-[700px] max-md:mt-10">
        <CTAButton text="NHẬN BUỔI TƯ VẤN CHIẾN LƯỢC MIỄN PHÍ" />
        <div className="self-center mt-2.5 leading-8 text-black max-md:max-w-full text-[18px] md:text-[20px] italic font-bold">
          Tìm hiểu cách bạn chắc chắn nâng được band điểm IELTS <br /> và tự tin sử dụng tiếng Anh vào đời sống thường ngày
        </div>
      </div>

      {/* Floating Book Images for Design */}
      <div className="absolute hidden lg:block top-1/3 -left-32 z-10">
        <Image src="/assets/books/2.png" alt="Consultation" width={300} height={400} className="h-[300px] w-[250px]" />
      </div>

      <div className="absolute hidden lg:block -bottom-0 -right-20 z-10">
        <Image src="/assets/books/3.png" alt="Consultation" width={300} height={400} className="h-[300px] w-[250px]" />
      </div>
    </div>
  );
}
