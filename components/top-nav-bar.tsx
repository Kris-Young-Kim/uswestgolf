import { Phone, MessageCircle } from "lucide-react"
import { companyInfo } from "@/data/itinerary"

export function TopNavBar() {
  return (
    <div className="bg-emerald-dark text-primary-foreground">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-xs sm:text-sm">
        <div className="flex items-center gap-4">
          <a
            href={`tel:${companyInfo.telUS.replace(/[^0-9+]/g, "")}`}
            className="flex items-center gap-1.5 transition-opacity hover:opacity-80"
          >
            <Phone className="size-3.5" />
            <span className="hidden sm:inline">US</span> {companyInfo.telUS}
          </a>
          <a
            href={`tel:${companyInfo.telKorea.replace(/[^0-9+]/g, "")}`}
            className="flex items-center gap-1.5 transition-opacity hover:opacity-80"
          >
            <Phone className="size-3.5" />
            <span className="hidden sm:inline">KR</span> {companyInfo.telKorea}
          </a>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="flex items-center gap-1.5 transition-opacity hover:opacity-80"
            aria-label="KakaoTalk 문의"
          >
            <MessageCircle className="size-3.5" />
            <span className="hidden sm:inline">카카오톡 문의</span>
          </a>
        </div>
      </div>
    </div>
  )
}
