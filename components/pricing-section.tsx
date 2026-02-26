import { Check, X, AlertTriangle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { pricing, notices } from "@/data/itinerary"

export function PricingSection() {
  return (
    <section id="pricing" className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <Badge className="mb-3 border-none bg-primary/10 text-primary">PRICING</Badge>
          <h2 className="text-balance text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
            요금 안내
          </h2>
        </div>

        <div className="mx-auto mt-10 max-w-3xl">
          {/* Price box */}
          <div className="overflow-hidden rounded-2xl border border-primary/20 bg-card">
            <div className="bg-primary px-6 py-8 text-center text-primary-foreground">
              <p className="text-sm font-medium text-primary-foreground/80">1인 행사 비용</p>
              <p className="mt-2 text-4xl font-bold sm:text-5xl">{pricing.perPerson}</p>
              <p className="mt-1 text-sm text-primary-foreground/70">{pricing.basis}</p>
            </div>

            <div className="grid gap-6 p-6 sm:grid-cols-2">
              {/* Inclusions */}
              <div>
                <h3 className="mb-4 flex items-center gap-2 text-sm font-bold text-foreground">
                  <span className="flex size-5 items-center justify-center rounded-full bg-primary/10">
                    <Check className="size-3 text-primary" />
                  </span>
                  포함 내역
                </h3>
                <ul className="flex flex-col gap-3">
                  {pricing.inclusions.map((item) => (
                    <li key={item.label} className="flex items-start gap-2">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      <div>
                        <p className="text-sm font-medium text-foreground">{item.label}</p>
                        {item.desc && (
                          <p className="text-xs text-muted-foreground">{item.desc}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Exclusions */}
              <div>
                <h3 className="mb-4 flex items-center gap-2 text-sm font-bold text-foreground">
                  <span className="flex size-5 items-center justify-center rounded-full bg-accent/10">
                    <X className="size-3 text-accent" />
                  </span>
                  불포함 내역
                </h3>
                <ul className="flex flex-col gap-3">
                  {pricing.exclusions.map((item) => (
                    <li key={item.label} className="flex items-start gap-2">
                      <X className="mt-0.5 size-4 shrink-0 text-accent" />
                      <div>
                        <p className="text-sm font-medium text-foreground">{item.label}</p>
                        {item.desc && (
                          <p className="text-xs text-muted-foreground">{item.desc}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Notices */}
          <div className="mt-6 rounded-xl border border-border bg-muted/50 p-5">
            <h3 className="mb-3 flex items-center gap-2 text-sm font-bold text-foreground">
              <AlertTriangle className="size-4 text-accent" />
              안내 사항
            </h3>
            <ul className="flex flex-col gap-2">
              {notices.map((notice, i) => (
                <li key={i} className="flex items-start gap-2 text-xs leading-relaxed text-muted-foreground">
                  <span className="mt-1.5 size-1 shrink-0 rounded-full bg-muted-foreground/40" />
                  {notice}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
