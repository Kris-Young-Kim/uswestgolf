import Image from "next/image"
import { Download } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-golf.jpg"
          alt="캘리포니아 골프장에서 석양을 바라보며 스윙하는 골퍼"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-dark/90 via-emerald-dark/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-dark/80 via-transparent to-emerald-dark/30" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-center px-4 py-20 sm:py-28 md:py-36 lg:py-44">
        <Badge className="mb-4 border-none bg-accent/90 text-accent-foreground">
          7 Days Premium Tour
        </Badge>

        <h1 className="max-w-2xl text-balance text-3xl font-bold leading-tight tracking-tight text-primary-foreground sm:text-4xl md:text-5xl lg:text-6xl">
          {"인생의 가장 아름다운 샷,"}
          <br />
          <span className="text-sunset-light">미서부 7일 골프 & 시닉 투어</span>
        </h1>

        <p className="mt-4 max-w-lg text-pretty text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
          LA, 그랜드캐니언, 라스베이거스를 아우르는 프리미엄 골프 여행. 명문 골프 코스에서의 라운딩과 세계적인 자연 경관을 한 번에 즐기세요.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href="#itinerary">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              일정 확인하기
            </Button>
          </a>
          <a href="#pricing">
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              요금 안내
            </Button>
          </a>
          <a href="/itinerary.pdf" download="가주투어_미서부골프여행_일정표.pdf">
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <Download className="size-4" />
              일정표 다운로드
            </Button>
          </a>
        </div>

        {/* Key selling badges */}
        <div className="mt-10 flex flex-wrap gap-3">
          {["골프채 렌트 2회 포함", "7인승 전용 차량", "전 일정 가이드 동행", "호텔 & 식사 포함"].map(
            (badge) => (
              <span
                key={badge}
                className="rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-1.5 text-xs font-medium text-primary-foreground backdrop-blur-sm sm:text-sm"
              >
                {badge}
              </span>
            )
          )}
        </div>
      </div>

      {/* Route breadcrumb */}
      <div className="relative border-t border-primary-foreground/10 bg-emerald-dark/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 overflow-x-auto px-4 py-3 text-xs font-medium text-primary-foreground/70 sm:gap-3 sm:text-sm">
          {["LA", "무어팍 CC", "그랜드캐니언", "라스베이거스", "시에나 GC", "캘리코", "LA"].map(
            (point, i, arr) => (
              <span key={`${point}-${i}`} className="flex shrink-0 items-center gap-2 sm:gap-3">
                <span className="whitespace-nowrap">{point}</span>
                {i < arr.length - 1 && (
                  <span className="text-sunset">{">"}</span>
                )}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  )
}
