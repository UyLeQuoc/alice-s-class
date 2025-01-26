import React from "react";
import { CTAButton } from "../cta-button";

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
      <div className="flex flex-col w-full text-black max-md:max-w-full">
        <div className="text-4xl font-bold tracking-tighter text-center max-md:max-w-full">
          {title}
        </div>
        <div className="self-center mt-10 text-2xl tracking-tight leading-8 max-md:max-w-full">
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
      title: "Chiến Lược Khác Biệt Để Giúp Bạn Thành Công Đạt Điểm IELTS Như Ý",
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
      <div className="flex gap-2.5 justify-center items-center px-96 py-24 mt-20 bg-orange-50 max-md:px-5 max-md:mt-10">
        <div className="flex flex-col justify-center self-stretch my-auto min-w-[440px] w-full xl:w-[649px] ">
          {/* Truyền prop bold */}
          <ContentSection
            title={content.title}
            description={content.description}
            bold={content.bold}
          />
          <div className="flex flex-col self-center mt-16 max-w-full text-2xl tracking-tight text-center w-[588px] max-md:mt-10">
            <CTAButton text="NHẬN BUỔI TƯ VẤN CHIẾN LƯỢC MIỄN PHÍ" />
            <div className="self-center mt-2.5 leading-8 text-black max-md:max-w-full">
              Tìm hiểu cách bạn chắc chắn nâng được band điểm IELTS và tự tin sử dụng tiếng Anh vào đời sống thường ngày
            </div>
          </div>
        </div>
      </div>
    );
  };
  