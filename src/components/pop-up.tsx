"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function PopUpForm({
    open,
    setOpen,
}:any) {
  return (
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

        <form className="mt-4 space-y-4">
          <div className="space-y-2">
            <Input placeholder="Tên của bạn" className="border-red-200 placeholder:text-gray-500" />
          </div>
          <div className="space-y-2">
            <Input type="email" placeholder="Địa chỉ Email" className="border-red-200 placeholder:text-gray-500" />
          </div>
          <div className="space-y-2">
            <Input type="tel" placeholder="Số điện thoại" className="border-red-200 placeholder:text-gray-500" />
          </div>
          <div className="space-y-2">
            <Textarea
              placeholder="Câu hỏi thêm (Nếu có)"
              className="min-h-[100px] border-red-200 placeholder:text-gray-500"
            />
          </div>
          <Button type="submit" className="w-full bg-red-700 text-white hover:bg-red-800">
            NHẬN BUỔI TƯ VẤN CHIẾN LƯỢC MIỄN PHÍ
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

