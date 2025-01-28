import Image from 'next/image'
import React from 'react'

export default function FutureSection() {
  return (
    <section className="container mx-auto px-4 py-8 sm:px-6 lg:px-8 bg-[#FFF6F1]">
      <div className="grid gap-12 lg:grid-cols-11 items-center">
        {/* Left column with stacked images */}
        <div className="space-y-6 lg:col-span-5 order-last lg:order-first">
          <Image
            src="/assets/alice/1.jpg"
            alt="IELTS students celebrating"
            width={600}
            height={400}
            className="shadow-lg w-full aspect-video object-cover rounded-lg"
            priority
          />
          <Image
            src="/assets/alice/1.jpg"
            alt="IELTS certificate showcase"
            width={600}
            height={400}
            className="shadow-lg w-full aspect-video object-cover rounded-lg"
          />
        </div>

        {/* Right column with text content */}
        <div className="space-y-8 lg:col-span-6">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#B62232] leading-tight">
            Cuộc Sống Của Bạn Sẽ Thế Nào Nếu Đạt Được Điểm IELTS Mong Muốn
          </h1>
          <div className="space-y-6 text-gray-700">
            <p className="text-base md:text-lg">
              Thử tưởng tượng 5 năm nữa nhé: Bạn có thể đang làm công việc mơ ước trong môi trường quốc tế năng động?
              Hay đang sải bước trên giảng đường đại học danh tiếng ở nước ngoài? Hoặc có thể bạn đang vi vu khắp thế
              giới, tự tin kết bạn năm châu? Nghe thật tuyệt phải không?
            </p>
            <p className="text-base md:text-lg">
              Thực ra, những điều tuyệt vời ấy hoàn toàn khả thi! Và tiếng Anh chính là chìa khóa vàng để bạn mở ra cánh
              cửa tương lai đó. Dù bạn mơ ước du học, thăng tiến trong sự nghiệp hay chỉ đơn giản là có nhiều bạn bè
              quốc tế, thì thành thạo ngôn ngữ này chính là bước đệm vững chắc nhất.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
