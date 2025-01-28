"use client";

import * as React from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SuccessDialog } from "./success";

export default function PopUpForm({ open, setOpen }: any) {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [successDialogOpen, setSuccessDialogOpen] = React.useState(false); // Trạng thái SuccessDialog

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const scriptURL = "https://script.google.com/macros/s/AKfycbxrnmm_H1u7kVQyt3-N_LNnLPoYo0pKpK8oYGc3b85_AOy5Fmx2nftnNAX1UvrutnIZug/exec";

    try {
      const formEncodedData = new URLSearchParams();
      formEncodedData.append("name", formData.name);
      formEncodedData.append("email", formData.email);
      formEncodedData.append("phone", formData.phone);
      formEncodedData.append("message", formData.message);

      const response = await axios.post(scriptURL, formEncodedData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      if (response.status === 200) {
        setFormData({ name: "", email: "", phone: "", message: "" });
        setOpen(false); // Đóng PopUpForm
        setSuccessDialogOpen(true); // Mở SuccessDialog
      } else {
        alert("Lỗi khi gửi, vui lòng thử lại.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Lỗi kết nối, vui lòng thử lại.");
    }
  };

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-[400px] rounded-lg p-6">
          <DialogHeader>
            <DialogTitle className="text-center text-xl font-medium text-red-700">
              Đăng Ký Nhận Buổi Tư Vấn Chiến Lược Miễn Phí
            </DialogTitle>
            <DialogDescription className="text-center text-sm text-gray-600">
              Trong buổi tư vấn, chuyên gia của chúng tôi sẽ hướng dẫn phương pháp nền áp dụng và lộ trình học chỉ dành
              riêng cho bạn... Giúp bạn đạt được điểm IELTS như mong muốn.
            </DialogDescription>
          </DialogHeader>

          <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Input name="name" placeholder="Tên của bạn" className="border-red-200 placeholder:text-gray-500" value={formData.name} onChange={handleChange} />
            </div>
            <div className="space-y-2">
              <Input type="email" name="email" placeholder="Địa chỉ Email" className="border-red-200 placeholder:text-gray-500" value={formData.email} onChange={handleChange} />
            </div>
            <div className="space-y-2">
              <Input type="tel" name="phone" placeholder="Số điện thoại" className="border-red-200 placeholder:text-gray-500" value={formData.phone} onChange={handleChange} />
            </div>
            <div className="space-y-2">
              <Textarea name="message" placeholder="Câu hỏi thêm (Nếu có)" className="min-h-[100px] border-red-200 placeholder:text-gray-500" value={formData.message} onChange={handleChange} />
            </div>
            <Button type="submit" className="w-full bg-red-700 text-white hover:bg-red-800">
              NHẬN BUỔI TƯ VẤN CHIẾN LƯỢC MIỄN PHÍ
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      <SuccessDialog open={successDialogOpen} onOpenChange={setSuccessDialogOpen} />
    </>
  );
}
