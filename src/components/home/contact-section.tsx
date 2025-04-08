"use client"

// import ContactForm from './ContactForm'; // <-- Import the NEW component
import Image from "next/image";
// import { CTAButton } from "../cta-button";

export interface ContactItemProps {
    icon: string;
    title: string;
    description: string;
  }
  
  export interface FormInputProps {
    label: string;
    type?: string;
    id: string;
    isTextArea?: boolean;
  }

export const ContactItem: React.FC<ContactItemProps> = ({ icon, title, description }) => {
  return (
    <div className="flex gap-8 items-center mt-8 w-full max-md:max-w-full">
      <Image
        loading="lazy"
        src={"/assets/icons/checkbox.svg"}
        width={36}
        height={36}
        alt=""
        className="object-contain shrink-0 self-stretch my-auto aspect-square w-[36px]"
      />
      <div className="grow shrink self-stretch my-auto max-md:max-w-full text-[16px] leading-8">
        <span className="font-bold text-[16px] leading-8 text-[#B62232]">{title}</span> <br /> {description}
      </div>
    </div>
  );
};


export const FormInput: React.FC<FormInputProps> = ({ label, type = "text", id, isTextArea }) => {
  return (
    <div className="flex flex-col justify-center items-start px-2.5 py-3.5 mt-2.5 w-full bg-white border border-black border-solid min-h-[59px] max-md:max-w-full">
      <label htmlFor={id} className="sr-only">{label}</label>
      {isTextArea ? (
        <textarea
          id={id}
          placeholder={label}
          className="gap-5 self-stretch w-full bg-transparent border-none resize-none"
          rows={4}
        />
      ) : (
        <input
          type={type}
          id={id}
          placeholder={label}
          className="gap-5 self-stretch w-full bg-transparent border-none"
        />
      )}
    </div>
  );
};

const contactItems = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/bac92ce903602a5c78a807495b4aecd619626bc3e2acd7527b117782b6ad77a8?apiKey=7ed9c1bb2a694ebca97c186157446de0&",
    title: 'Bạn nghĩ rằng mình "không có cửa" đạt band điểm cao vì đã thử nhiều cách mà không hiệu quả?',
    description: 'SAI RỒI! Chúng tôi sẽ chỉ cho bạn phương pháp đột phá band điểm IELTS trong thời gian ngắn, bất chấp xuất phát điểm của bạn là ở đâu'
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/bac92ce903602a5c78a807495b4aecd619626bc3e2acd7527b117782b6ad77a8?apiKey=7ed9c1bb2a694ebca97c186157446de0&",
    title: 'Tại sao học tiếng Anh qua phim ảnh là thứ tệ nhất bạn có thể làm khi bắt đầu học tiếng Anh?',
    description: 'Ở góc nhìn bề mặt, lựa chọn này có vẻ hợp lý vì có thể vừa học tiếng Anh vừa giải trí, nhưng thực tế bạn có thể đang tự "tăng độ khó"'
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/bac92ce903602a5c78a807495b4aecd619626bc3e2acd7527b117782b6ad77a8?apiKey=7ed9c1bb2a694ebca97c186157446de0&", 
    title: 'Bạn có thể kể tên 4 trong số 5 yếu tố "ghi điểm" với giám khảo IELTS?',
    description: 'Chúng tôi sẽ tiết lộ 5 tiêu chí mà giám khảo IELTS luôn tìm kiếm ở các thí sinh, giúp bạn chuẩn bị tốt nhất cho bài thi và đạt kết quả cao nhất'
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/bac92ce903602a5c78a807495b4aecd619626bc3e2acd7527b117782b6ad77a8?apiKey=7ed9c1bb2a694ebca97c186157446de0&",
    title: 'Và nhiều, nhiều hơn thế nữa!',
    description: ''
  }
];

export const ContactFormSection: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="flex gap-2.5 justify-center items-center px-40 md:px-20 pt-20 pb-20 mt-0 text-2xl tracking-tight text-black bg-white max-md:px-5 max-md:pb-24">
      <div className="flex flex-col items-center self-stretch my-auto min-w-[240px] w-[700px]">
        <h1 className="self-stretch text-4xl font-bold tracking-tighter text-center max-md:max-w-full text-[#B62232]">
          Liên Hệ Ngay Để Được Tư Vấn Miễn Phí, Xây Dựng Lộ Trình Chinh Phục IELTS
        </h1>
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
        <div className="flex flex-col mt-10 max-w-full text-[16px] leading-8">
          <div className="flex flex-col w-full max-md:max-w-full">
            <div className="max-md:max-w-full">
              Điền thông tin của bạn vào bên dưới ngay bây giờ và chuyên gia IELTS 8.0 sẽ hướng dẫn bạn cách để đạt điểm IELTS như mong muốn.
              <br /><br />
              Trong buổi tư vấn, chúng tôi sẽ cùng trao đổi về mục tiêu, sở thích, hoạt động thường ngày và định hướng tương lai của bạn. Từ đó vạch ra được lộ trình, phương pháp nhanh chóng và hiệu quả nhất giúp bạn chinh phục mục tiêu.
              <br /><br />
              Còn đây là những thông tin khác bạn sẽ khám phá được trong buổi tư vấn…
            </div>  
          <div className="flex flex-col mt-8 w-full max-md:max-w-full">
            {contactItems.map((item, index) => (
              <ContactItem key={index} {...item} />
            ))}
          </div>
          <div className="mt-10 max-md:max-w-full text-[16px] leading-8">
            <span className="font-bold">Tại sao chúng tôi lại tư vấn miễn phí?</span> Đơn giản vì chúng tôi tin rằng, khi bạn hiểu rõ giá trị của Alice's Class, bạn sẽ muốn đồng hành cùng chúng tôi trên hành trình chinh phục IELTS. Nếu không, cũng không sao cả! Dù lựa chọn của bạn thế nào, chúng tôi vẫn mong muốn được chia sẻ kiến thức, giúp các bạn học sinh, sinh viên hiểu rõ hơn về IELTS và định hướng học tập đúng đắn.
            <br /><br />
            Và chúng tôi rất tiếc phải chia sẻ rằng số lượng buổi tư vấn rất hạn chế. Do lịch trình bận rộn, chúng tôi chỉ có thể dành thời gian cho 20 cuộc hẹn mỗi tháng.
            <br /><br />
            Nên nếu bạn không may là người thứ 21, bạn sẽ phải vào danh sách chờ cho đến khi có thêm chỗ trống. Cho nên hãy điền thông tin của bạn bên dưới để chúng tôi liên hệ ngay khi có thể.
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};