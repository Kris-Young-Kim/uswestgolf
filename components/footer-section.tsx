import { MapPin, Phone, User, MessageCircle, FileText } from "lucide-react"

const mintour = {
  name: "민투어",
  type: "국내외여행업",
  registration: "146-02-02477",
  address: "강원특별자치도 원주시 서원대로 172, 3층(단계동)",
  tel1: "033-742-8053",
  tel2: "010-4766-8053",
  ceo: "김민규",
  kakao: "mintour",
}

export function FooterSection() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <div className="flex size-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-xs font-bold text-primary-foreground">M</span>
              </div>
              <span className="text-sm font-bold text-foreground">MINTOUR</span>
            </div>
            <h2 className="mt-2 text-sm font-bold text-foreground">
              {mintour.name} ({mintour.type})
            </h2>
          </div>

          {/* Mintour info */}
          <div className="space-y-1.5">
            <div className="flex items-start gap-1.5 text-xs text-muted-foreground">
              <FileText className="mt-0.5 size-3 shrink-0" />
              <span>등록번호: {mintour.registration}</span>
            </div>
            <div className="flex items-start gap-1.5 text-xs text-muted-foreground">
              <MapPin className="mt-0.5 size-3 shrink-0" />
              <span>{mintour.address}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Phone className="size-3 shrink-0" />
              <span>{mintour.tel1} · {mintour.tel2}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <User className="size-3 shrink-0" />
              <span>대표: {mintour.ceo}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <MessageCircle className="size-3 shrink-0" />
              <span>카카오톡: {mintour.kakao}</span>
            </div>
          </div>
        </div>

        {/* Disclaimers */}
        <div className="mt-8 border-t border-border pt-6">
          <p className="text-center text-[10px] leading-relaxed text-muted-foreground">
            손님의 부주의로 인한 부상, 분실은 관례에 따라 면책됨을 알려드립니다.
          </p>
        </div>

        <div className="mt-4 text-center">
          <p className="text-[10px] text-muted-foreground">
            {`© ${new Date().getFullYear()} 민투어. All rights reserved.`}
          </p>
        </div>
      </div>
    </footer>
  )
}
