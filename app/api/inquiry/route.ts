import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"

const inquirySchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(10),
  departureDate: z.string().min(1),
  groupSize: z.string().min(1),
  message: z.string().optional(),
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const data = inquirySchema.parse(body)

    // TODO: 이메일 전송 연동 (Resend, Nodemailer 등)
    // 현재는 서버 콘솔에 로그 출력
    console.log("[INQUIRY]", {
      timestamp: new Date().toISOString(),
      ...data,
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "입력값이 올바르지 않습니다" }, { status: 400 })
    }
    return NextResponse.json({ error: "서버 오류가 발생했습니다" }, { status: 500 })
  }
}
