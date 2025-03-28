"use client";

import * as React from "react";
import axios from "axios";
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
// import { SuccessDialog } from "./success"; // Make sure this path is correct
import Image from "next/image";

// Note: We removed the 'open' and 'setOpen' props as they are for the Dialog
export default function ContactForm() {
  const router = useRouter(); // <-- ADD THIS LINE
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
//   const [successDialogOpen, setSuccessDialogOpen] = React.useState(false);

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
        // setSuccessDialogOpen(true);
        router.push('/thank-you');

        // ReactPixel.track("Success", {
        //   buttonText: "Success",
        // })
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

  // We only return the form itself and the SuccessDialog
  return (
    <>
      {/* Form Title and Description (Optional - you can add these above the form in ContactFormSection if you prefer) */}
       
       {/* <div className="text-center mb-6">
          <h2 className="text-[28px] md:text-[36px] font-bold text-red-700">
             Đăng Ký Nhận Buổi Tư Vấn Chiến Lược Miễn Phí
           </h2>
           <p className="text-[16px] text-[#1D1D1D] mt-2">
             Trong buổi tư vấn, chuyên gia của chúng tôi sẽ hướng dẫn phương pháp nền áp dụng và lộ trình học chỉ dành
             riêng cho bạn... Giúp bạn đạt được điểm IELTS như mong muốn.
           </p>
       </div> */}

      {/* The actual form */}
      <form className="space-y-4 bg-white w-full" onSubmit={handleSubmit}>
        <div className="relative">
          <Image src="/assets/icons/person.svg" alt="Person" width={20} height={20} className="absolute top-1/2 left-3 transform -translate-y-1/2" />
          <Input name="name" placeholder="Tên của bạn" className="pl-10 border-[#B62232] h-12" value={formData.name} onChange={handleChange} />
           {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
        </div>

        <div className="relative">
          <Image src="/assets/icons/closed.svg" alt="Email" width={20} height={20} className="absolute top-1/2 left-3 transform -translate-y-1/2" />
          <Input type="email" name="email" placeholder="Địa chỉ Email" className="pl-10 border-[#B62232] rounded-md h-12" value={formData.email} onChange={handleChange} />
           {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
        </div>

        <div className="relative">
          <Image src="/assets/icons/call.svg" alt="Phone" width={20} height={20} className="absolute top-1/2 left-3 transform -translate-y-1/2" />
          <Input type="tel" name="phone" placeholder="Số điện thoại" className="pl-10 border-[#B62232] rounded-md h-12" value={formData.phone} onChange={handleChange} />
           {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
        </div>

        <div className="relative">
          <Image src="/assets/icons/comment.svg" alt="Message" width={20} height={20} className="absolute top-5 left-3 transform -translate-y-1/2" />
          <Textarea name="message" placeholder="Câu hỏi thêm (Nếu có)" className="pl-10 min-h-[100px] border-[#B62232] rounded-md" value={formData.message} onChange={handleChange} />
        </div>

        <Button type="submit" className="w-full bg-red-700 text-white hover:bg-red-800 rounded-md h-12 text-lg font-semibold" disabled={loading}>
          {loading ? (
             <span className="loader mr-2"></span> /* Simple loader */
           ) : (
             "NHẬN BUỔI TƯ VẤN LỘ TRÌNH HỌC"
           )}
        </Button>
      </form>

      {/* Keep the Success Dialog logic */}
      {/* <SuccessDialog open={successDialogOpen} onOpenChange={setSuccessDialogOpen} /> */}
    </>
  );
}
