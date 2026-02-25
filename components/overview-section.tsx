import { Calendar, MapPin, Users, Car } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const highlights = [
  {
    icon: Calendar,
    label: "여행 기간",
    value: "6박 7일",
    desc: "알찬 일정으로 구성",
  },
  {
    icon: MapPin,
    label: "방문 지역",
    value: "3개 도시",
    desc: "LA, 그랜드캐니언, 라스베이거스",
  },
  {
    icon: Users,
    label: "골프 라운딩",
    value: "2회",
    desc: "무어팍 CC + 시에나 GC",
  },
  {
    icon: Car,
    label: "전용 차량",
    value: "7인승 벤",
    desc: "기사 겸 가이드 동행",
  },
]

export function OverviewSection() {
  return (
    <section id="overview" className="bg-card py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <Badge className="mb-3 border-none bg-primary/10 text-primary">TOUR OVERVIEW</Badge>
          <h2 className="text-balance text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
            미서부의 모든 것을 담은 프리미엄 투어
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            산타모니카 비치의 햇살, 그랜드캐니언의 장엄한 절경, 라스베이거스의 화려한 밤,
            그리고 명문 골프 코스에서의 잊지 못할 라운딩까지.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="group flex flex-col items-center rounded-xl border border-border bg-background p-6 text-center transition-all hover:border-primary/20 hover:shadow-md"
            >
              <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                <item.icon className="size-6 text-primary" />
              </div>
              <p className="mt-4 text-2xl font-bold text-foreground">{item.value}</p>
              <p className="mt-1 text-sm font-semibold text-foreground">{item.label}</p>
              <p className="mt-1 text-xs text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
