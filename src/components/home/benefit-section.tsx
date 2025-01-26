export interface BenefitItemProps {
    iconSrc: string;
    title: string;
    description: string;
  }
  
  export interface ConsultationButtonProps {
    text: string;
    subText: string;
  }

  export const BenefitItem: React.FC<BenefitItemProps> = ({ iconSrc, title, description }) => {
    return (
      <div className="flex flex-col justify-center mt-9 w-full max-md:max-w-full">
        <div className="flex flex-wrap justify-center items-center w-full text-3xl font-bold tracking-tight leading-9 max-md:max-w-full">
          <img
            loading="lazy"
            src={iconSrc}
            alt=""
            className="object-contain shrink-0 self-stretch my-auto aspect-square w-[50px]"
          />
          <div className="grow shrink self-stretch my-auto w-[770px] max-md:max-w-full">
            {title}
          </div>
        </div>
        <div className="self-end text-2xl tracking-tight leading-8 max-md:max-w-full">
          {description}
        </div>
      </div>
    );
  };

  export const ConsultationButton: React.FC<ConsultationButtonProps> = ({ text, subText }) => {
    return (
      <div className="flex flex-col self-center mt-16 max-w-full text-2xl tracking-tight text-center w-[588px] max-md:mt-10">
        <button className="gap-2.5 self-stretch px-12 py-5 w-full leading-none text-white bg-rose-700 max-md:px-5 max-md:max-w-full">
          <span className="font-bold">{text}</span>
        </button>
        <div className="self-center mt-2.5 leading-8 text-black max-md:max-w-full">
          {subText}
        </div>
      </div>
    );
  };

  const benefitsData = [
    {
      iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/33fc38ff20bd5828d9d1bd214cafef4740818e121742981ebd583f0d7e9dc9cf?apiKey=7ed9c1bb2a694ebca97c186157446de0&",
      title: "Sai lầm nghiêm trọng trong cách học IELTS của 90% học viên đang mắc phải",
      description: "Nếu như bạn đã từng là người \"cày\" ngày đêm nhưng điểm số vẫn dậm chân tại chỗ, thì có thể bạn đang mắc phải lỗi sai lầm phổ biến này, đây cũng là nguyên nhân gốc rễ khiến bạn học mãi không tiến bộ"
    },
    {
      iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/29f1776a9aa6e9fec119d6e09e9b1082baa1927b8914101f87fb09ad6b3cbd88?apiKey=7ed9c1bb2a694ebca97c186157446de0&",
      title: "Nhận lộ trình học và cách học phù hợp cho bạn, và tại sao thiếu cái này bạn khó đạt điểm IELTS như kỳ vọng",
      description: "Chúng tôi đã xây dựng lộ trình cho mỗi học viên trong hơn 3 năm và họ luôn đạt được target nhanh ít hơn 30% so với lúc tự học - và bây giờ bạn cũng có thể đạt được kết quả giống vậy! Lộ trình và phương pháp đã được điều chỉnh để phù hợp với mục tiêu, thời gian và khả năng của bạn"
    },
    {
      iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/33fc38ff20bd5828d9d1bd214cafef4740818e121742981ebd583f0d7e9dc9cf?apiKey=7ed9c1bb2a694ebca97c186157446de0&",
      title: "Chiến lược làm bài giúp bạn bứt phá từng kỹ năng mà nhiều trung tâm không muốn tiết lộ với bạn",
      description: "Chuyên gia 9.0 IELTS sẽ chia sẻ chiến lược làm bài hiệu quả cho từng phần thi, cách tối ưu hóa điểm số dựa trên điểm mạnh của bạn và phương pháp luyện tập chuyên sâu để khắc phục điểm yếu."
    },
    {
      iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/33fc38ff20bd5828d9d1bd214cafef4740818e121742981ebd583f0d7e9dc9cf?apiKey=7ed9c1bb2a694ebca97c186157446de0&",
      title: "Làm thế nào để đạt được điểm số IELTS mục tiêu mà không cần \"cày ngày cày đêm\" hay \"nhồi nhét\" từ vựng?",
      description: "(Gợi ý: Bạn sẽ không tìm thấy thông tin này chỉ với một cú click chuột trên Google đâu!)"
    },
    {
      iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/33fc38ff20bd5828d9d1bd214cafef4740818e121742981ebd583f0d7e9dc9cf?apiKey=7ed9c1bb2a694ebca97c186157446de0&",
      title: "Giải đáp \"tất tần tật\" thắc mắc về IELTS",
      description: "Bạn có bất kỳ câu hỏi nào về kỳ thi IELTS, phương pháp học, tài liệu ôn luyện hay chiến lược làm bài? Hãy đặt câu hỏi trực tiếp với chúng tôi để được giải đáp (chúng tôi là chuyên gia trong IELTS chứ không phải nhân viên bán hàng)"
    }
  ];
  
  export const ConsultationBenefitsSection: React.FC = () => {
    return (
      <div className="flex gap-2.5 justify-center items-center px-80 py-24 bg-white max-md:px-5">
        <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[831px]">
          <div className="flex flex-col w-full text-black max-md:max-w-full">
            <h1 className="text-4xl font-bold tracking-tighter text-center max-md:max-w-full">
              Đây Là Tóm Tắt Những Gì Bạn Sẽ Nhận Được Trong Buổi Tư Vấn Miễn Phí...
            </h1>
            <div className="flex flex-col mt-16 w-full max-md:mt-10 max-md:max-w-full">
              {benefitsData.map((benefit, index) => (
                <BenefitItem
                  key={index}
                  iconSrc={benefit.iconSrc}
                  title={benefit.title}
                  description={benefit.description}
                />
              ))}
            </div>
          </div>
          <ConsultationButton
            text="NHẬN BUỔI TƯ VẤN CHIẾN LƯỢC MIỄN PHÍ"
            subText="Tìm hiểu cách bạn chắc chắn nâng được band điểm IELTS và tự tin sử dụng tiếng Anh vào đời sống thường ngày"
          />
        </div>
      </div>
    );
  };