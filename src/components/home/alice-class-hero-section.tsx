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
              Đạt IELTS điểm cao như ý muốn trong thời gian ngắn nhất cùng Alice&apos;s Class
            </div>
            <div className="mt-8 text-[16px] tracking-tight leading-8">
              Bạn đang tìm cách đạt điểm IELTS như trường yêu cầu? Loay hoay không biết bắt đầu học tiếng Anh từ đâu, hay thiếu tự tin với khả năng sử dụng tiếng Anh hiện tại? Bạn đã dành nhiều thời gian, tiền bạc cho các trung tâm Anh ngữ, &quot;cày&quot; ngày đêm nhưng điểm số vẫn dậm chân tại chỗ, thậm chí còn tụt hạng? Thì bạn đã tìm đến đúng nơi. Tôi là Đỗ Thị Ngọc Diễm, và trung tâm của tôi, Alice&apos;s Class, đã <span className="font-bold">thành công giúp 100% học viên</span> nâng band và đạt được điểm IELTS như kỳ vọng.
              <br />
              <br />
              Chúng tôi đạt được kết quả này nhờ phương pháp giảng dạy lắng nghe, tận tâm, kết hợp sự quan tâm đến từng học viên và <span className="font-bold">lộ trình học tập &quot;đo ni đóng giày&quot;</span>. Nhờ đó giúp học viên nhận ra điểm yếu để tập trung giải quyết, từ đó bứt phá tiếng Anh hiệu quả và đạt được điểm số như mong muốn.
            </div>
          </div>
        </div>

        {/* Founder Card Section */}

        <div className="
          col-start-8
          col-span-5
        max-md:col-span-12">
          <Image
            src="/assets/person.png"
            alt="Alice's Class Founder"
            width={500}
            height={500}
            className="object-cover rounded-lg"
            quality={100}
          />
        </div>
      </div>
    </section>
  );
};