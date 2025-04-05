"use client";

import * as React from "react";
import axios from "axios";
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

export function ContactForm() {
  const router = useRouter();
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [errors, setErrors] = React.useState({
    name: "",
    email: "",
    phone: ""
  });

  const [loading, setLoading] = React.useState(false);

  const validateForm = () => {
    let newErrors = { name: "", email: "", phone: "" };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Vui lòng nhập tên";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Vui lòng nhập email";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email không hợp lệ";
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Vui lòng nhập số điện thoại";
      isValid = false;
    } else if (!/^\d{10,11}$/.test(formData.phone)) {
      newErrors.phone = "Số điện thoại không hợp lệ";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbxzjtClMYfkcJRrgHl-AEFCRTeEq-2VHr8hXJbwIYgmkI7ds_ioPTKZ6-BPD7Dh_dJQnA/exec";

    setLoading(true);
    try {
      const response = await axios.post(scriptURL, formData, {
        headers: {
          "Content-Type": "text/plain;charset=utf-8"
        }
      });

      if (response.status === 200 && response.data.status === "success") {
        setFormData({ name: "", email: "", phone: "", message: "" });
        router.push('/thank-you');
      } else {
        alert("Lỗi khi gửi, vui lòng thử lại.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Lỗi kết nối, vui lòng thử lại.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact-section" className="flex gap-2.5 justify-center items-center px-40 md:px-20 pt-20 pb-20 mt-0 text-2xl tracking-tight text-black bg-white max-md:px-5 max-md:pb-24">
      <div className="flex flex-col items-center self-stretch my-auto min-w-[240px] w-[700px]">      
        <h1 className="text-4xl font-bold tracking-tighter text-center mb-16 text-[#B62232] max-w-4xl">
          Nhận Lộ Trình Và Phương Pháp Học Giúp Bạn Đạt 6.5 IELTS
        </h1>
      <form className="space-y-4 bg-white w-full" onSubmit={handleSubmit}>
        <div className="space-y-1">
          <div className="relative">
            <Image src="/assets/icons/person.svg" alt="Person" width={20} height={20} className="absolute top-1/2 left-3 transform -translate-y-1/2 z-10" />
            <Input 
              name="name" 
              placeholder="Tên của bạn" 
              className="pl-12 border-[#B62232] rounded-none py-6" 
              value={formData.name} 
              onChange={handleChange} 
            />
          </div>
          {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
        </div>

        <div className="space-y-1">
          <div className="relative">
            <Image src="/assets/icons/closed.svg" alt="Email" width={20} height={20} className="absolute top-1/2 left-3 transform -translate-y-1/2 z-10" />
            <Input 
              type="email" 
              name="email" 
              placeholder="Email của bạn" 
              className="pl-12 border-[#B62232] rounded-none py-6" 
              value={formData.email} 
              onChange={handleChange} 
            />
          </div>
          {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
        </div>

        <div className="space-y-1">
          <div className="relative">
            <Image src="/assets/icons/call.svg" alt="Phone" width={20} height={20} className="absolute top-1/2 left-3 transform -translate-y-1/2 z-10" />
            <Input 
              type="tel" 
              name="phone" 
              placeholder="Số điện thoại (Chúng tôi sẽ nhắn tin qua Zalo)" 
              className="pl-12 border-[#B62232] rounded-none py-6" 
              value={formData.phone} 
              onChange={handleChange} 
            />
          </div>
          {errors.phone && <p className="text-red-600 text-sm">{errors.phone}</p>}
        </div>

        <div className="relative">
          <Image src="/assets/icons/comment.svg" alt="Message" width={20} height={20} className="absolute top-5 left-3 transform -translate-y-1/2 z-10" />
          <Textarea 
            name="message" 
            placeholder="Câu hỏi thêm (Nếu có)" 
            className="pl-12 min-h-[100px] border-[#B62232] rounded-none" 
            value={formData.message} 
            onChange={handleChange} 
          />
        </div>

        <button
          type="submit"
          className="gap-2.5 self-stretch px-12 py-5 w-full leading-none text-white bg-rose-700 max-md:px-5 max-md:max-w-full"
          disabled={loading}
        >
          <span className="font-bold">
            {loading ? (
              <span className="loader mr-2"></span>
            ) : (
              "NHẬN BUỔI TƯ VẤN LỘ TRÌNH HỌC"
            )}
          </span>
        </button>
        <div className="self-center mt-2.5 leading-6 md:leading-8 text-black text-[16px] md:text-[18px] italic font-bold text-center">
          Tìm hiểu cách bạn chắc chắn nâng được band điểm IELTS và tự tin sử dụng tiếng Anh vào đời sống thường ngày
        </div>
      </form>
    </div>
  </div>
  );
}