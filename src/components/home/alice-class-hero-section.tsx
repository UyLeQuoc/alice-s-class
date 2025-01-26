import Image from "next/image";
import { Fragment } from "react";

export const AliceClassHeroSection: React.FC = () => {
  const founderData = {
    name: "Đỗ Thị Ngọc Diễm",
    title: "FOUNDER",
    achievements: ["9.0 Listening ", "& Reading"], 
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/405cce17793824d67ed2d2f34bed7c0deddaeb19959cfb841e0abd822f5551eb?apiKey=7ed9c1bb2a694ebca97c186157446de0&",
    avatarUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/f9d05a1b4bdd452043844fcc7c0856af135e08430fa2c15cebaf5e845141157a?apiKey=7ed9c1bb2a694ebca97c186157446de0&",
  };

  return (
    <section className="container mx-auto pb-32">
      <div className="self-center mt-28 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-8 max-md:flex-col">
        <div className="flex flex-col flex-[3] max-md:ml-0 max-md:w-full pr-24">
          <div className="flex flex-col text-black max-md:mt-10 max-md:max-w-full">
            <div className="text-4xl font-bold tracking-tighter max-md:max-w-full">
              Đạt IELTS điểm cao như ý muốn trong thời gian ngắn nhất cùng
              Alice&apos;s Class
            </div>
            <div className="mt-4 text-2xl tracking-tight leading-8 max-md:max-w-full">
              Bạn đang tìm cách đạt điểm IELTS như trường yêu cầu? Loay hoay
              không biết bắt đầu học tiếng Anh từ đâu, hay thiếu tự tin với khả
              năng sử dụng tiếng Anh hiện tại? Bạn đã dành nhiều thời gian, tiền
              bạc cho các trung tâm Anh ngữ, &quot;cày&quot; ngày đêm nhưng điểm
              số vẫn dậm chân tại chỗ, thậm chí còn tụt hạng? Thì bạn đã tìm đến
              đúng nơi. Tôi là Đỗ Thị Ngọc Diễm, và trung tâm của tôi, Alice&apos;s
              Class, đã{" "}
              <span className="font-bold">thành công giúp 100% học viên</span>{" "}
              nâng band và đạt được điểm IELTS như kỳ vọng.
              <br />
              <br />
              Chúng tôi đạt được kết quả này nhờ phương pháp giảng dạy lắng
              nghe, tận tâm, kết hợp sự quan tâm đến từng học viên và{" "}
              <span className="font-bold">
                lộ trình học tập &quot;đo ni đóng giày&quot;
              </span>
              . Nhờ đó giúp học viên nhận ra điểm yếu để tập trung giải quyết,
              từ đó bứt phá tiếng Anh hiệu quả và đạt được điểm số như mong
              muốn.
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-[2] ml-5 max-md:ml-0 max-md:w-full">
          <FounderCard {...founderData} />
        </div>
      </div>
    </div>
    </section>
  );
};

export interface FounderCardProps {
    name: string;
    title: string;
    achievements: string[];
    imageUrl: string;
    avatarUrl: string;
  }


export const FounderCard: React.FC<FounderCardProps> = ({
  name,
  title,
  achievements,
  imageUrl,
  avatarUrl,
}) => {
  return (
    <div className="flex flex-col grow mt-28 max-md:mt-10">
      <div className="flex relative z-10 flex-col items-start pb-80 w-full max-md:pr-5 max-md:pb-24">
        <Image
          loading="lazy"
          src={imageUrl}
          alt={`Portrait of ${name}`}
          className="object-contain absolute inset-0 size-full"
          width={251}
          height={223}
        />
        <div className="absolute -bottom-[50%] right-10 -z-10 flex flex-col self-end pt-28 pr-9 pb-3.5 pl-3 mt-0 max-w-full rounded-full bg-stone-50 w-[251px] max-md:pt-24 max-md:pr-5 max-md:mr-2.5">
          <div className="self-start text-2xl tracking-tight leading-none text-black">
            <span className="font-bold">{name}</span>
          </div>
          <div className="text-lg tracking-tight leading-8 text-right text-rose-700">
            {title}
            {achievements.map((achievement: string, index: number) => (
              <Fragment key={index}>
                <br />
                <span className="font-bold text-rose-700">{achievement}</span>
              </Fragment>
            ))}
          </div>
        </div>

        {/* legit */}
        <div className="flex absolute -top-10 z-10 flex-col items-center px-0.5 mt-0 mb-0 bg-white rounded-full h-[140px] w-[140px] max-md:mb-2.5">
            <Image
              loading="lazy"
              src={avatarUrl}
              alt={`${name} avatar`}
              className="object-contain w-full aspect-square max-md:-mr-0.5"
              width={168}
              height={168}
            />
          </div>
      </div>
      
    </div>
  );
};
