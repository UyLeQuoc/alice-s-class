"use client"

import { Check } from "lucide-react"
import { Dialog, DialogContent } from "@/components/ui/dialog"

interface SuccessDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function SuccessDialog({ open, onOpenChange }: SuccessDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md p-6 text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#B62232]">
          <Check className="h-8 w-8 text-white" />
        </div>
        <h2 className="mb-4 text-2xl font-bold uppercase tracking-tight text-[#B62232]">
          Alice's class đã nhận được liên hệ của bạn
        </h2>
        <p className="text-gray-600">Chúng tôi sẽ liên hệ lại bạn ngay khi có lịch trống.</p>
      </DialogContent>
    </Dialog>
  )
}

