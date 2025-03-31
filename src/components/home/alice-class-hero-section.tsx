import Image from "next/image";
import { Fragment } from "react";

export const AliceClassHeroSection: React.FC = () => {
  return (
    <section className="container mx-auto pb-20 flex flex-col justify-center">
      <div className="grid grid-cols-12 gap-6 mt-20 max-md:mt-10 items-center">
        {/* Text Section */}
        <div className="col-span-6 max-md:col-span-12">
          <div className="text-black">
            <div className="text-4xl font-bold text-[#B62232]">
              Đạt Điểm IELTS Như Ý Muốn Trong Thời Gian Ngắn Cùng Alice&apos;s Class
            </div>
            <div className="mt-8 text-[16px] tracking-tight leading-8">
              Bạn muốn đạt band IELTS đủ với yêu cầu của trường? Loay hoay không biết bắt đầu học từ đâu, áp lực vì sợ không đủ thời gian? Dù đã vào các trung tâm để học nhưng điểm số vẫn không tiến triển, thậm chí tệ đi? Tôi là Đỗ Thị Ngọc Diễm, và trung tâm Alice’s Class của tôi đã giúp 100% học viên nâng band và đạt điểm IELTS như kỳ vọng.
              <br />
              <br />
              Chúng tôi làm được điều này nhờ phương pháp giảng dạy tận tâm, lắng nghe và lộ trình học được thiết kế riêng cho từng học viên. Điều này giúp học viên nhận ra điểm yếu để tập trung cải thiện, từ đó bứt phá tiếng Anh hiệu quả và đạt được điểm số mong muốn.
            </div>
          </div>
        </div>

        {/* Founder Card Section */}

        <div className="
          col-start-8 col-span-5 
          max-md:col-span-12 
          relative flex justify-center items-center">
          <div className="relative w-full aspect-square">
            <Image
              src="/assets/alice.jpg"
              alt="Alice's Class Founder"
              width={2000}
              height={2000}
              className="object-cover rounded-lg w-full h-auto z-10"
              quality={100}
            />
            {/* Khối nội dung tên + chức danh */}
            {/* <div className="
                absolute bottom-[10%] right-[10%] 
                md:bottom-[-13%] md:right-[5%] 
                max-sm:bottom-[-13%] max-sm:right-[20px]
                lg:bottom-[-7%] lg:right-[2%]
                text-center bg-[#F8F8F8] rounded-full aspect-square flex items-center justify-center flex-col p-8 -z-10">
              <div className="text-[24px] font-bold mt-2 max-sm:text-[18px]">
                Đỗ Thị Ngọc Diễm
              </div>
              <div className="text-[18px] max-sm:text-[16px]">
                FOUNDER
              </div>
              <div className="text-[18px] text-[#B62232] mt-1 font-bold max-sm:text-[16px]">
                8.0 IELTS
              </div>
            </div> */}
          </div>
        </div>

      </div>
    </section>
  );
};