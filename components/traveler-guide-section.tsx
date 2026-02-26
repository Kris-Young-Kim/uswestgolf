import { HandCoins, Briefcase, Info } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { tipGuide, preparations } from "@/data/itinerary"

export function TravelerGuideSection() {
  return (
    <section id="traveler-guide" className="bg-muted/50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <Badge className="mb-3 border-none bg-primary/10 text-primary">{"TRAVELER'S GUIDE"}</Badge>
          <h2 className="text-balance text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
            여행자 가이드
          </h2>
          <p className="mt-2 text-muted-foreground">
            미국 여행이 처음이신 분들을 위한 필수 안내
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
          {/* Tip culture */}
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-lg bg-accent/10">
                <HandCoins className="size-5 text-accent" />
              </div>
              <div>
                <h3 className="text-base font-bold text-foreground">팁(Tip) 문화 안내</h3>
                <p className="text-xs text-muted-foreground">미국은 팁이 생활화되어 있습니다</p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              {tipGuide.map((item) => (
                <div
                  key={item.place}
                  className="flex items-center justify-between rounded-lg bg-muted px-4 py-3"
                >
                  <span className="text-sm font-medium text-foreground">{item.place}</span>
                  <span className="text-sm font-bold text-accent">{item.amount}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Preparations */}
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                <Briefcase className="size-5 text-primary" />
              </div>
              <div>
                <h3 className="text-base font-bold text-foreground">준비물 체크리스트</h3>
                <p className="text-xs text-muted-foreground">여행 전 꼭 확인해 주세요</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {preparations.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-lg bg-muted px-4 py-3"
                >
                  <span className="size-2 rounded-full bg-primary" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-start gap-2 rounded-lg border border-primary/20 bg-primary/5 p-3">
              <Info className="mt-0.5 size-4 shrink-0 text-primary" />
              <p className="text-xs leading-relaxed text-foreground">
                미국 입국 시 여권에 6개월 이상의 유효기간이 있어야 입국이 가능합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
