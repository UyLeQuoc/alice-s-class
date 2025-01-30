"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface TestimonialProps {
  quote: string;
  author: string;
  achievement: string;
}

export const TestimonialQuote: React.FC<TestimonialProps> = ({ quote, author, achievement }) => {
  return (
    <div className="flex flex-col justify-center w-full text-zinc-300">
      <div className="text-base tracking-tight leading-8">
        <p className="text-[16px] font-medium text-center px-8">{quote}</p>
      </div>
      <div className="self-center mt-4 text-[24px] tracking-tight leading-none">
        <span className="font-bold text-zinc-300">
          {author} - {achievement}
        </span>
      </div>
    </div>
  );
};

const testimonialData = [
  {
    quote:
      "Ngày trước em cứ loay hoay mãi với IELTS, chật vật với con số 5.0. May sao em biết đến Alice’s Class, chỉ 2 tháng thôi mà em lên hẳn 6.5. Thầy cô ở đây tận tâm lắm, chỉ bảo từng li từng tí, phương pháp học cũng hay nữa, giúp em sửa được mấy lỗi sai hay mắc, tự tin lên hẳn. Học ở Alice’s Class thích lắm, không chỉ giỏi lên mà còn vui nữa, đi học mà lúc nào cũng thấy thoải mái, được động viên nhiều. Nhờ có thầy cô mà em không chỉ cải thiện được tiếng Anh mà còn có thêm động lực để thực hiện những dự định sắp tới.",
    author: "Trung Kiên",
    achievement: "IELTS 6.5",
  },
  {
    quote:
      "Trước đây, Tường nhà mình học IELTS ở một trung tâm khác, ròng rã 7 khóa liền mà điểm chỉ từ 3.0 lên được 3.5, chán nản lắm. Vợ chồng mình sốt ruột quá, quyết định cho con chuyển trung tâm. May mắn thế nào lại biết đến Alice’s Class, cho con vào học. Phải nói là thay đổi hẳn luôn! Chỉ sau 2 khóa luyện thi cấp tốc, con mình thi phát đạt luôn 6.0, đúng như mong ước của cả nhà. Mà không chỉ điểm số đâu, con thay đổi cả cách học, tự tin lên trông thấy, thấy tiến bộ thực sự ấy. Gia đình mình cảm ơn Alice’s Class, cảm ơn thầy cô và các anh chị nhân viên ở trung tâm nhiều lắm!",
    author: "Phụ huynh của bạn Tường",
    achievement: "IELTS 6.0",
  },
  {
    quote:
      "Em xin chân thành cảm ơn cô Diễm, thầy Thông, chị Vy và trung tâm đã hỗ trợ em rất nhiệt tình trong suốt thời gian qua. Em nghĩ rằng để đạt được điểm số này chính là nhờ sự giúp đỡ rất nhiều từ quý thầy cô và trung tâm. Em không biết nói gì hơn ngoài lời cảm ơn, cùng lời chúc sức khỏe và thành công đến thầy cô. Em sẽ luôn trân quý khoảng thời gian vừa qua được đồng hành cùng mọi người ở Alice’s Class.",
    author: "Mai Tấn Duy",
    achievement: "IELTS 7.5",
  }
];


export const FeedbackSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialData.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialData.length) % testimonialData.length);
  };

  return (
    <div className="flex flex-col justify-center items-center px-5 py-20 text-center relative overflow-hidden mb-10 md:mb-20">
      <div className="flex flex-col max-w-full w-[931px] py-40 items-center justify-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white capitalize">
          Học Viên Và Phụ Huynh Nói Gì Về Alice's Class Sau Khi Trải Nghiệm Chất Lượng Giảng Dạy
        </h2>
        <Image
            src="/assets/icons/quote.svg"
            alt="Quote"
            width={64}
            height={64}
            className="mt-6"
        />
        <div className="mt-6 relative min-h-[200px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <TestimonialQuote
                quote={testimonialData[currentIndex].quote}
                author={testimonialData[currentIndex].author}
                achievement={testimonialData[currentIndex].achievement}
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute -left-12 inset-0 flex justify-between items-center">
            <button
              onClick={prevTestimonial}
              className=" hidden lg:block text-black p-2 rounded-full shadow-md hover:shadow-lg focus:outline-none"
            >
              <Image
                loading="lazy"
                src="/assets/icons/arrow-left-square.svg"
                alt="Previous"
                width={36}
                height={36}
              />
            </button>
            
          </div>
          <div className="absolute top-0 bottom-0 -right-12 flex justify-between items-center">
            <button
              onClick={nextTestimonial}
              className=" hidden lg:block text-black p-2 rounded-full shadow-md hover:shadow-lg focus:outline-none"
            >
              <Image
                loading="lazy"
                src="/assets/icons/arrow-right-square.svg"
                alt="Next"
                width={36}
                height={36}
              />
            </button>
          </div>
        </div>
        {/* mobile */}
        <div className="lg:hidden flex justify-between items-center mt-4">
          <button
            onClick={prevTestimonial}
            className="text-black p-2 rounded-full shadow-md hover:shadow-lg focus:outline-none"
          >
            <Image
              loading="lazy"
              src="/assets/icons/arrow-left-square.svg"
              alt="Previous"
              width={36}
              height={36}
            />
          </button>
          <button
            onClick={nextTestimonial}
            className="text-black p-2 rounded-full shadow-md hover:shadow-lg focus:outline-none"
          >
            <Image
              loading="lazy"
              src="/assets/icons/arrow-right-square.svg"
              alt="Next"
              width={36}
              height={36}
            />
          </button>
        </div>
      </div>

      <Image
        src="/assets/quote.jpg"
        alt="Background"
        width={3000}
        height={3000}
        quality={100}
        className="object-cover w-full h-full absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
};
