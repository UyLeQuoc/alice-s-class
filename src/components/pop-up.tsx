"use client";

import * as React from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SuccessDialog } from "./success";
import Image from "next/image";

export default function PopUpForm({ open, setOpen }: any) {
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
  const [successDialogOpen, setSuccessDialogOpen] = React.useState(false);

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
        setOpen(false);
        setSuccessDialogOpen(true);
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
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-[600px] rounded-lg p-6 bg-[#FFF6F1]">
          <DialogHeader>
            <DialogTitle className="text-center text-[36px] font-bold text-red-700">
              Đăng Ký Nhận Buổi Tư Vấn Chiến Lược Miễn Phí
            </DialogTitle>
            <DialogDescription className="text-center text-[16px] text-[#1D1D1D]">
              Trong buổi tư vấn, chuyên gia của chúng tôi sẽ hướng dẫn phương pháp nền áp dụng và lộ trình học chỉ dành
              riêng cho bạn... Giúp bạn đạt được điểm IELTS như mong muốn.
            </DialogDescription>
          </DialogHeader>

          <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
            <div className="relative">
              <Image src="/assets/icons/person.svg" alt="Person" width={24} height={24} className="absolute top-1/2 left-3 transform -translate-y-1/2" />
              <Input name="name" placeholder="Tên của bạn" className="pl-12 border-[#B62232] rounded-none" value={formData.name} onChange={handleChange} />
            </div>
              {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
            <div className="relative">
              <Image src="/assets/icons/closed.svg" alt="Email" width={24} height={24} className="absolute top-1/2 left-3 transform -translate-y-1/2" />
              <Input type="email" name="email" placeholder="Địa chỉ Email" className="pl-12 border-[#B62232] rounded-none" value={formData.email} onChange={handleChange} />
            </div>
              {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
            <div className="relative">
              <Image src="/assets/icons/call.svg" alt="Phone" width={24} height={24} className="absolute top-1/2 left-3 transform -translate-y-1/2" />
              <Input type="tel" name="phone" placeholder="Số điện thoại" className="pl-12 border-[#B62232] rounded-none" value={formData.phone} onChange={handleChange} />
            </div>
              {errors.phone && <p className="text-red-600 text-sm">{errors.phone}</p>}
            <div className="relative">
              <Image src="/assets/icons/comment.svg" alt="Message" width={24} height={24} className="absolute top-5 left-3 transform -translate-y-1/2" />
              <Textarea name="message" placeholder="Câu hỏi thêm (Nếu có)" className="pl-12 min-h-[100px] border-[#B62232] rounded-none" value={formData.message} onChange={handleChange} />
            </div>
            <Button type="submit" className="w-full bg-red-700 text-white hover:bg-red-800 rounded-none" disabled={loading}>
              {loading ? "Đang gửi..." : "NHẬN BUỔI TƯ VẤN LỘ TRÌNH HỌC MIỄN PHÍ"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      <SuccessDialog open={successDialogOpen} onOpenChange={setSuccessDialogOpen} />
    </>
  );
}
