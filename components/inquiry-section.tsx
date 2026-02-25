"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Phone, MessageCircle, Globe, Send, CheckCircle, AlertCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { companyInfo } from "@/data/itinerary"

const inquirySchema = z.object({
  name: z.string().min(2, "이름은 2자 이상 입력해주세요"),
  phone: z.string().min(10, "연락처를 올바르게 입력해주세요"),
  departureDate: z.string().min(1, "출발 희망일을 입력해주세요"),
  groupSize: z.string().min(1, "인원수를 선택해주세요"),
  message: z.string().optional(),
})

type InquiryForm = z.infer<typeof inquirySchema>

export function InquirySection() {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<InquiryForm>({
    resolver: zodResolver(inquirySchema),
  })

  async function onSubmit(data: InquiryForm) {
    setIsSubmitting(true)
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error()
      setSubmitStatus("success")
      reset()
    } catch {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="inquiry" className="bg-primary py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <Badge className="mb-3 border-none bg-primary-foreground/10 text-primary-foreground">
            BOOK NOW
          </Badge>
          <h2 className="text-balance text-2xl font-bold text-primary-foreground sm:text-3xl lg:text-4xl">
            지금 바로 예약 문의하세요
          </h2>
          <p className="mt-3 text-primary-foreground/70">
            즐거운 여행에는 항상 GAJU TOUR가 함께 합니다
          </p>
        </div>

        {/* Contact buttons */}
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
          <a
            href={`tel:${companyInfo.telUS.replace(/[^0-9+]/g, "")}`}
            className="flex flex-col items-center gap-3 rounded-xl bg-primary-foreground/10 p-6 transition-colors hover:bg-primary-foreground/15"
          >
            <Phone className="size-6 text-primary-foreground" />
            <div>
              <p className="text-xs text-primary-foreground/70">US 전화</p>
              <p className="text-sm font-bold text-primary-foreground">{companyInfo.telUS}</p>
            </div>
          </a>

          <a
            href={`tel:${companyInfo.telKorea.replace(/[^0-9+]/g, "")}`}
            className="flex flex-col items-center gap-3 rounded-xl bg-primary-foreground/10 p-6 transition-colors hover:bg-primary-foreground/15"
          >
            <Phone className="size-6 text-primary-foreground" />
            <div>
              <p className="text-xs text-primary-foreground/70">한국 전화</p>
              <p className="text-sm font-bold text-primary-foreground">{companyInfo.telKorea}</p>
            </div>
          </a>

          <a
            href="#"
            className="flex flex-col items-center gap-3 rounded-xl bg-primary-foreground/10 p-6 transition-colors hover:bg-primary-foreground/15"
          >
            <MessageCircle className="size-6 text-primary-foreground" />
            <div>
              <p className="text-xs text-primary-foreground/70">카카오톡</p>
              <p className="text-sm font-bold text-primary-foreground">실시간 문의</p>
            </div>
          </a>
        </div>

        {/* Inquiry form */}
        <div className="mx-auto mt-12 max-w-2xl rounded-2xl bg-primary-foreground/10 p-6 sm:p-8">
          <h3 className="mb-6 text-lg font-bold text-primary-foreground">온라인 문의</h3>

          {submitStatus === "success" ? (
            <div className="flex flex-col items-center gap-4 py-8 text-center">
              <CheckCircle className="size-12 text-green-300" />
              <div>
                <p className="text-lg font-bold text-primary-foreground">문의가 접수되었습니다</p>
                <p className="mt-1 text-sm text-primary-foreground/70">
                  빠른 시간 내에 연락드리겠습니다
                </p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSubmitStatus("idle")}
                className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                새 문의 작성
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label className="text-sm text-primary-foreground/80">
                    이름 <span className="text-red-300">*</span>
                  </Label>
                  <Input
                    {...register("name")}
                    placeholder="홍길동"
                    className="border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/40 focus-visible:ring-primary-foreground/30"
                  />
                  {errors.name && (
                    <p className="text-xs text-red-300">{errors.name.message}</p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <Label className="text-sm text-primary-foreground/80">
                    연락처 <span className="text-red-300">*</span>
                  </Label>
                  <Input
                    {...register("phone")}
                    placeholder="010-0000-0000"
                    className="border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/40 focus-visible:ring-primary-foreground/30"
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-300">{errors.phone.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label className="text-sm text-primary-foreground/80">
                    출발 희망일 <span className="text-red-300">*</span>
                  </Label>
                  <Input
                    {...register("departureDate")}
                    type="date"
                    className="border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground [color-scheme:dark] focus-visible:ring-primary-foreground/30"
                  />
                  {errors.departureDate && (
                    <p className="text-xs text-red-300">{errors.departureDate.message}</p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <Label className="text-sm text-primary-foreground/80">
                    인원수 <span className="text-red-300">*</span>
                  </Label>
                  <Select onValueChange={(v) => setValue("groupSize", v)}>
                    <SelectTrigger className="border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground focus:ring-primary-foreground/30">
                      <SelectValue placeholder="인원 선택" />
                    </SelectTrigger>
                    <SelectContent>
                      {["2인", "3인", "4인", "5인", "6인", "7인", "8인 이상"].map((n) => (
                        <SelectItem key={n} value={n}>{n}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.groupSize && (
                    <p className="text-xs text-red-300">{errors.groupSize.message}</p>
                  )}
                </div>
              </div>

              <div className="space-y-1.5">
                <Label className="text-sm text-primary-foreground/80">문의 내용</Label>
                <Textarea
                  {...register("message")}
                  placeholder="궁금하신 사항을 자유롭게 입력해주세요"
                  rows={4}
                  className="resize-none border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/40 focus-visible:ring-primary-foreground/30"
                />
              </div>

              {submitStatus === "error" && (
                <div className="flex items-center gap-2 rounded-lg bg-red-500/20 px-4 py-3">
                  <AlertCircle className="size-4 shrink-0 text-red-300" />
                  <p className="text-sm text-red-300">
                    전송에 실패했습니다. 전화로 문의해 주세요.
                  </p>
                </div>
              )}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                <Send className="size-4" />
                {isSubmitting ? "전송 중..." : "문의 보내기"}
              </Button>
            </form>
          )}
        </div>

        <div className="mt-8 text-center">
          <a
            href={`https://${companyInfo.website}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              size="lg"
              className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <Globe className="size-4" />
              {companyInfo.website}
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
