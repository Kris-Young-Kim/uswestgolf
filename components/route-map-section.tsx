import { Plane, Flag, Camera, ShoppingBag } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const route = [
  {
    id: "incheon",
    label: "인천",
    sublabel: "출발",
    icon: Plane,
    color: "bg-sky-500",
    textColor: "text-sky-700 dark:text-sky-400",
    borderColor: "border-sky-200 dark:border-sky-800",
    bgColor: "bg-sky-50 dark:bg-sky-950/30",
    days: "",
  },
  {
    id: "la",
    label: "로스앤젤레스",
    sublabel: "LA",
    icon: Camera,
    color: "bg-amber-500",
    textColor: "text-amber-700 dark:text-amber-400",
    borderColor: "border-amber-200 dark:border-amber-800",
    bgColor: "bg-amber-50 dark:bg-amber-950/30",
    days: "Day 1–2",
    activities: ["산타모니카 비치", "베버리힐스", "무어팍 CC 라운딩", "그리피스 천문대"],
  },
  {
    id: "grandcanyon",
    label: "그랜드캐니언",
    sublabel: "Grand Canyon",
    icon: Camera,
    color: "bg-orange-500",
    textColor: "text-orange-700 dark:text-orange-400",
    borderColor: "border-orange-200 dark:border-orange-800",
    bgColor: "bg-orange-50 dark:bg-orange-950/30",
    days: "Day 3–4",
    activities: ["모하비 사막 횡단", "매더 포인트", "엔젤 포인트", "야바파이 포인트"],
  },
  {
    id: "lasvegas",
    label: "라스베이거스",
    sublabel: "Las Vegas",
    icon: Flag,
    color: "bg-primary",
    textColor: "text-primary",
    borderColor: "border-primary/20",
    bgColor: "bg-primary/5",
    days: "Day 4–5",
    activities: ["MGM Grand 숙박", "시에나 GC 라운딩", "프리몬트 야경", "KA·O·Sphere 쇼"],
  },
  {
    id: "calico",
    label: "캘리코 & 아울렛",
    sublabel: "Calico & Ontario",
    icon: ShoppingBag,
    color: "bg-purple-500",
    textColor: "text-purple-700 dark:text-purple-400",
    borderColor: "border-purple-200 dark:border-purple-800",
    bgColor: "bg-purple-50 dark:bg-purple-950/30",
    days: "Day 6",
    activities: ["캘리코 고스트타운", "온타리오 프리미엄 아울렛"],
  },
  {
    id: "return",
    label: "인천",
    sublabel: "귀국",
    icon: Plane,
    color: "bg-sky-500",
    textColor: "text-sky-700 dark:text-sky-400",
    borderColor: "border-sky-200 dark:border-sky-800",
    bgColor: "bg-sky-50 dark:bg-sky-950/30",
    days: "Day 7",
  },
]

export function RouteMapSection() {
  return (
    <section id="route" className="bg-muted/30 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <Badge className="mb-3 border-none bg-primary/10 text-primary">TOUR ROUTE</Badge>
          <h2 className="text-balance text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
            7일 여행 루트
          </h2>
          <p className="mt-2 text-muted-foreground">
            인천에서 출발해 LA · 그랜드캐니언 · 라스베이거스를 순환하는 프리미엄 코스
          </p>
        </div>

        {/* Desktop: horizontal stepper */}
        <div className="mt-12 hidden lg:block">
          <div className="relative flex items-start justify-between gap-2">
            {/* Connector line */}
            <div className="absolute left-0 right-0 top-8 h-px bg-border" aria-hidden />

            {route.map((stop, index) => {
              const Icon = stop.icon
              return (
                <div key={stop.id} className="relative z-10 flex flex-1 flex-col items-center">
                  <div
                    className={`flex size-16 items-center justify-center rounded-full ${stop.color} shadow-md`}
                  >
                    <Icon className="size-7 text-white" />
                  </div>

                  {stop.days && (
                    <span className="mt-3 rounded-full bg-foreground/10 px-2 py-0.5 text-xs font-medium text-muted-foreground">
                      {stop.days}
                    </span>
                  )}

                  <p className="mt-2 text-center text-sm font-bold text-foreground">
                    {stop.label}
                  </p>
                  <p className="text-center text-xs text-muted-foreground">{stop.sublabel}</p>

                  {stop.activities && (
                    <ul className="mt-3 space-y-1 text-center">
                      {stop.activities.map((a) => (
                        <li key={a} className="text-xs text-muted-foreground">
                          {a}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="mt-10 space-y-0 lg:hidden">
          {route.map((stop, index) => {
            const Icon = stop.icon
            const isLast = index === route.length - 1
            return (
              <div key={stop.id} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div
                    className={`flex size-10 shrink-0 items-center justify-center rounded-full ${stop.color} shadow`}
                  >
                    <Icon className="size-5 text-white" />
                  </div>
                  {!isLast && <div className="mt-1 w-px flex-1 bg-border" />}
                </div>

                <div className={`mb-6 flex-1 rounded-xl border p-4 ${stop.borderColor} ${stop.bgColor}`}>
                  <div className="flex items-center gap-2">
                    <p className={`font-bold ${stop.textColor}`}>{stop.label}</p>
                    {stop.days && (
                      <span className="rounded-full bg-foreground/10 px-2 py-0.5 text-xs text-muted-foreground">
                        {stop.days}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">{stop.sublabel}</p>
                  {stop.activities && (
                    <ul className="mt-2 space-y-0.5">
                      {stop.activities.map((a) => (
                        <li key={a} className="text-xs text-muted-foreground">
                          · {a}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
