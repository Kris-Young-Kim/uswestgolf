import { Phone, MessageCircle, ClipboardList } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { companyInfo } from "@/data/itinerary"

export function InquirySection() {
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
            즐거운 여행에는 항상 민투어가 함께 합니다
          </p>
        </div>

        {/* Contact buttons */}
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
          <a
            href={`tel:${companyInfo.telUS.replace(/[^0-9+]/g, "")}`}
            className="flex flex-col items-center gap-3 rounded-xl bg-primary-foreground/10 p-6 transition-colors hover:bg-primary-foreground/15"
          >
            <Phone className="size-6 text-primary-foreground" />
            <div className="text-center">
              <p className="text-xs text-primary-foreground/70">회사 전화</p>
              <p className="text-sm font-bold text-primary-foreground">{companyInfo.telUS}</p>
            </div>
          </a>

          <a
            href={`tel:${companyInfo.telKorea.replace(/[^0-9+]/g, "")}`}
            className="flex flex-col items-center gap-3 rounded-xl bg-primary-foreground/10 p-6 transition-colors hover:bg-primary-foreground/15"
          >
            <Phone className="size-6 text-primary-foreground" />
            <div className="text-center">
              <p className="text-xs text-primary-foreground/70">휴대 전화</p>
              <p className="text-sm font-bold text-primary-foreground">{companyInfo.telKorea}</p>
            </div>
          </a>

          <a
            href="https://form.naver.com/response/sxBUmLcXFXyDkXErmF2y9g"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 rounded-xl bg-primary-foreground/10 p-6 transition-colors hover:bg-primary-foreground/15"
          >
            <ClipboardList className="size-6 text-primary-foreground" />
            <div className="text-center">
              <p className="text-xs text-primary-foreground/70">온라인 문의</p>
              <p className="text-sm font-bold text-primary-foreground">네이버 폼</p>
            </div>
          </a>
        </div>

        <div className="mt-6 text-center">
          <a
            href={`https://pf.kakao.com/_${companyInfo.kakao}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              size="lg"
              className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <MessageCircle className="size-4" />
              카카오톡 채널: {companyInfo.kakao}
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
