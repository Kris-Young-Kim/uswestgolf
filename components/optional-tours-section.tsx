import { itinerary } from "@/data/itinerary"
import { Badge } from "@/components/ui/badge"
import { Sparkles, DollarSign, Clock, Star } from "lucide-react"

const dayLabels: Record<number, string> = {
  4: "넷째 날 · 라스베이거스",
  5: "다섯째 날 · 라스베이거스",
}

export function OptionalToursSection() {
  const daysWithOptional = itinerary.filter(
    (day) => day.optionalTours && day.optionalTours.length > 0,
  )

  return (
    <section id="optional-tours" className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <Badge className="mb-3 border-none bg-primary/10 text-primary">
            OPTIONAL TOURS
          </Badge>
          <h2 className="text-balance text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
            선택 관광 프로그램
          </h2>
          <p className="mt-2 text-muted-foreground">
            현장에서 바로 신청 가능 · 별도 결제
          </p>
        </div>

        <div className="mt-10 space-y-8">
          {daysWithOptional.map((day) => (
            <div key={day.day}>
              <div className="mb-4 flex items-center gap-2">
                <Badge variant="outline" className="border-primary/30 text-primary">
                  Day {day.day}
                </Badge>
                <span className="text-sm font-medium text-muted-foreground">
                  {dayLabels[day.day] ?? day.city}
                </span>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {day.optionalTours!.map((tour) => (
                  <div
                    key={tour.name}
                    className="flex flex-col gap-3 rounded-xl border border-border bg-card p-5 transition-shadow hover:shadow-md"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                          <Sparkles className="size-4 text-primary" />
                        </div>
                        <h3 className="font-semibold text-foreground">
                          {tour.name}
                        </h3>
                      </div>
                      <span className="shrink-0 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                        {tour.price}
                      </span>
                    </div>

                    {tour.note && (
                      <p className="text-xs leading-relaxed text-muted-foreground">
                        {tour.note}
                      </p>
                    )}

                    <div className="mt-auto flex items-center gap-1 text-xs text-muted-foreground">
                      <DollarSign className="size-3" />
                      현장 결제 · 별도 비용
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 px-5 py-4 dark:border-amber-900/30 dark:bg-amber-950/20">
          <Star className="mt-0.5 size-4 shrink-0 text-amber-600 dark:text-amber-400" />
          <p className="text-sm leading-relaxed text-amber-800 dark:text-amber-300">
            선택 관광은 현장에서 가이드와 협의 후 신청하며, 비용은 별도 현장 결제입니다.
            인원에 따라 일정이 변경될 수 있습니다.
          </p>
        </div>
      </div>
    </section>
  )
}
