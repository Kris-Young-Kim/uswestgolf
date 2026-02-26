import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import nodemailer from "nodemailer"

const inquirySchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(10),
  departureDate: z.string().min(1),
  groupSize: z.string().min(1),
  message: z.string().optional(),
})

const transporter = nodemailer.createTransport({
  host: "smtp.naver.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.NAVER_EMAIL,
    pass: process.env.NAVER_PASSWORD,
  },
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const data = inquirySchema.parse(body)

    await transporter.sendMail({
      from: `"민투어 문의" <${process.env.NAVER_EMAIL}>`,
      to: "2000minkyu@naver.com",
      subject: `[민투어] 미서부 골프여행 문의 - ${data.name} (${data.groupSize})`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <h2 style="color: #1a6b4a; border-bottom: 2px solid #1a6b4a; padding-bottom: 8px;">
            미서부 골프여행 예약 문의
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr style="background: #f5f5f5;">
              <td style="padding: 10px 14px; font-weight: bold; width: 120px;">이름</td>
              <td style="padding: 10px 14px;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 14px; font-weight: bold;">연락처</td>
              <td style="padding: 10px 14px;">${data.phone}</td>
            </tr>
            <tr style="background: #f5f5f5;">
              <td style="padding: 10px 14px; font-weight: bold;">출발 희망일</td>
              <td style="padding: 10px 14px;">${data.departureDate}</td>
            </tr>
            <tr>
              <td style="padding: 10px 14px; font-weight: bold;">인원수</td>
              <td style="padding: 10px 14px;">${data.groupSize}</td>
            </tr>
            <tr style="background: #f5f5f5;">
              <td style="padding: 10px 14px; font-weight: bold; vertical-align: top;">문의 내용</td>
              <td style="padding: 10px 14px;">${data.message ?? "(없음)"}</td>
            </tr>
          </table>
          <p style="margin-top: 24px; color: #888; font-size: 12px;">
            접수 시각: ${new Date().toLocaleString("ko-KR", { timeZone: "Asia/Seoul" })}
          </p>
        </div>
      `,
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "입력값이 올바르지 않습니다" }, { status: 400 })
    }
    console.error("[INQUIRY EMAIL ERROR]", error)
    return NextResponse.json({ error: "서버 오류가 발생했습니다" }, { status: 500 })
  }
}
