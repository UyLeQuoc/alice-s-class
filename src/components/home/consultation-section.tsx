import React from "react";
import { CTAButton } from "../cta-button";
import Image from "next/image";

export interface ConsultationButtonProps {
    text: string;
    onClick?: () => void;
  }
  
  export interface ContentSectionProps {
    title: string;
    description: string[];
  }

  export const ContentSection: React.FC<ContentSectionProps & { bold?: string[] }> = ({
    title,
    description,
    bold = [],
  }) => {
    const formatText = (text: string) => {
      const regex = new RegExp(`(${bold.join("|")})`, "gi");
      return text.split(regex).map((part, index) =>
        bold.includes(part) ? (
          <span key={index} className="font-bold text-black">
            {part}
          </span>
        ) : (
          part
        )
      );
    };
  
    return (
      <div className="flex flex-col w-full text-black max-md:max-w-full items-center justify-center">
        <div className="text-[36px] text-[#B62232] font-bold tracking-tighter text-center max-md:max-w-full leading-[48px]  min-w-[440px] w-full xl:w-[649px]">
          Chiến Lược Khác Biệt Giúp Bạn <br />
          Thành Công Đạt Điểm IELTS Như Ý
        </div>
        <div className="w-full flex items-center justify-center mt-8">
          <Image
            src={"/assets/laptop.png"}
            alt="Consultation"
            width={1500}
            height={500}
            quality={100}
            className="object-cover rounded-lg"
          />
        </div>
        <div className="self-center mt-10 text-[16px] tracking-tight leading-8 max-md:max-w-full  min-w-[440px] w-full xl:w-[649px] ">
          {description.map((paragraph, index) => (
            <React.Fragment key={index}>
              {formatText(paragraph)}
              {index < description.length - 1 && (
                <>
                  <br />
                  <br />
                </>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  };
  

  export const ConsultationSection: React.FC = () => {
    const content = {
      title: "Chiến Lược Khác Biệt Giúp Bạn Thành Công Đạt Điểm IELTS Như Ý",
      description: [
        `Chìa khóa để đạt được band điểm IELTS mục tiêu và sử dụng tiếng Anh thành thạo chính là lộ trình học được cá nhân hóa, tập trung vào kỹ năng còn yếu và chiêm nghiệm liên tục để kịp thời giải quyết vấn đề. Thiếu đi điều này, bạn có nguy cơ cao sẽ lãng phí thời gian, công sức, mãi dậm chân tại chỗ. Đáng tiếc, đây là thực trạng của nhiều người khi áp dụng những phương pháp học thiếu cá nhân hóa, không giải quyết được gốc rễ vấn đề và không phù hợp với năng lực của mình.`,
        `Chúng tôi xây dựng nền tảng tiếng Anh vững chắc bằng cách phát triển toàn diện 4 kỹ năng Nghe - Nói - Đọc - Viết thông qua các chủ đề thực tế, gần gũi, đồng thời tạo môi trường 100% tiếng Anh để học viên đắm chìm và rèn luyện phản xạ. Điểm khác biệt tạo nên sự đột phá chính là hệ thống độc quyền Tracking System: Theo dõi chi tiết tiến độ của bản thân, từ đó điều chỉnh lộ trình học tập tức thời. Nhờ vậy, bạn sẽ tối ưu thời gian học, tập trung khắc phục điểm yếu và đi đúng hướng trên hành trình chinh phục IELTS.`,
      ],
      bold: [
        "Đáng tiếc",
        "Tracking System: Theo dõi chi tiết tiến độ của bản thân",
      ],
    };
  
    return (
      <section className="relative">
        <div className="flex gap-2.5 justify-center items-center px-80 py-20 bg-orange-50 max-md:px-5 max-md:mt-10 relative">
          <div className="flex flex-col justify-center self-stretch my-auto">
            {/* Truyền prop bold */}
            <ContentSection
              title={content.title}
              description={content.description}
              bold={content.bold}
            />
            <div className="flex flex-col self-center mt-8 max-w-full text-2xl tracking-tight text-center w-[588px] max-md:mt-10">
              <CTAButton text="NHẬN BUỔI TƯ VẤN CHIẾN LƯỢC MIỄN PHÍ" />
              <div className="self-center mt-2.5 leading-8 text-black max-md:max-w-full text-[20px] italic font-bold">
                Tìm hiểu cách bạn chắc chắn nâng được band điểm IELTS <br /> và tự tin sử dụng tiếng Anh vào đời sống thường ngày
              </div>
            </div>
          </div>
        </div>

        {/* <div className="absolute hidden md:block top-0 right-0 z-10">
          <Image src="/assets/books/1.png" alt="Consultation" width={500} height={500} className="h-[350px] w-[300px]" />
        </div>

        <div className="absolute hidden md:block top-1/3 -left-32 z-10">
          <Image src="/assets/books/2.png" alt="Consultation" width={500} height={500} className="h-[350px] w-[300px]" />
        </div>

        <div className="absolute hidden md:block -bottom-32 -right-32 z-10">
          <Image src="/assets/books/3.png" alt="Consultation" width={500} height={500} className="h-[350px] w-[300px]" />
        </div> */}
      </section>
    );
  };
  