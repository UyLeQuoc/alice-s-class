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
      <div className="flex flex-col w-full text-black max-md:w-full items-center justify-center">
        <div className="text-[28px] md:text-[36px] text-[#B62232] font-bold tracking-tighter text-center leading-[36px] md:leading-[48px] w-full lg:w-[60%]">
          Chiến Lược Khác Biệt Giúp Bạn Thành Công Đạt Điểm IELTS Như Ý
        </div>
        <div className="w-full flex items-center justify-center mt-8">
          <Image
            src={"/assets/laptop.png"}
            alt="Consultation"
            width={1500}
            height={500}
            quality={100}
            className="object-cover rounded-lg w-full max-w-[800px]"
          />
        </div>
        <div className="self-center mt-10 text-[14px] md:text-[16px] tracking-tight leading-6 md:leading-8 max-md:w-full lg:w-[60%]">
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
        `Chìa khóa để đạt điểm IELTS như ý chính là lộ trình học được cá nhân hóa, tập trung vào điểm yếu và liên tục chiêm nghiệm để cải thiện. Thiếu điều này, bạn dễ lãng phí thời gian và công sức. Đáng tiếc, rất nhiều người lại đang gặp tình trạng này khi áp dụng những phương pháp học thiếu cá nhân hóa, không phù hợp với năng lực bản thân.`,
        `Chúng tôi giúp bạn xây dựng nền tảng vững chắc bằng cách phát triển toàn diện 4 kỹ năng qua các chủ đề thực tế và luyện tập áp dụng tiếng Anh vào đời sống. Điểm khác biệt tạo nên sự đột phá của chúng tôi chính là Tracking System: Theo dõi chi tiết tiến độ của bản thân, từ đó điều chỉnh lộ trình học tức thời, giúp bạn tối ưu thời gian, tập trung khắc phục điểm yếu và chinh phục IELTS hiệu quả.`,
      ],
      bold: [
        "Đáng tiếc",
        "Tracking System: Theo dõi chi tiết tiến độ của bản thân",
      ],
    };
  
    return (
      <section className="relative overflow-hidden">
        <div className="flex flex-col md:flex-row gap-2.5 justify-center items-center px-6 md:px-10 lg:px-40 py-10 md:py-20 bg-orange-50 max-md:mt-10">
          <div className="flex flex-col justify-center self-stretch my-auto w-full">
            <ContentSection
              title={content.title}
              description={content.description}
              bold={content.bold}
            />
            <div className="flex flex-col self-center mt-8 max-w-full text-base md:text-lg tracking-tight text-center w-full lg:w-[700px] max-md:mt-10">
              <CTAButton text="NHẬN BUỔI TƯ VẤN LỘ TRÌNH HỌC MIỄN PHÍ" />
              <div className="self-center mt-2.5 leading-6 md:leading-8 text-black text-[16px] md:text-[18px] italic font-bold">
                Tìm hiểu cách bạn chắc chắn nâng được band điểm IELTS và tự tin sử dụng tiếng Anh vào đời sống thường ngày
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
