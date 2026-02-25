import { ExternalLink, Award, Clock, MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { itinerary } from "@/data/itinerary"

const courseLocationMap: Record<string, string> = {
  "무어팍 컨트리클럽 (Moorpark Country Club)": "캘리포니아주 무어팍",
  "시에나 컨트리클럽 (Siena Golf Club)": "네바다주 라스베이거스",
}

const courseDescMap: Record<string, string> = {
  "무어팍 컨트리클럽 (Moorpark Country Club)":
    "LA 근교에 위치한 명문 퍼블릭 코스로, 캘리포니아의 아름다운 산악 전경을 배경으로 라운딩을 즐길 수 있습니다.",
  "시에나 컨트리클럽 (Siena Golf Club)":
    "라스베이거스의 아름다운 사막 경관 속에 자리한 세미프라이빗 코스로, 도전적인 레이아웃과 탁 트인 전경이 매력입니다.",
}

const courseFeaturesMap: Record<string, string[]> = {
  "무어팍 컨트리클럽 (Moorpark Country Club)": [
    "아름다운 산악 전망",
    "18홀 퍼블릭 코스",
    "프로 숍 & 레스토랑",
  ],
  "시에나 컨트리클럽 (Siena Golf Club)": [
    "사막 속 오아시스 코스",
    "18홀 세미프라이빗",
    "라스베이거스 전경",
  ],
}

export function GolfCourseSection() {
  const golfDays = itinerary.filter((d) => d.golfCourse)

  return (
    <section id="golf-courses" className="bg-muted/50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <Badge className="mb-3 border-none bg-primary/10 text-primary">GOLF COURSES</Badge>
          <h2 className="text-balance text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
            명문 골프 코스 라운딩
          </h2>
          <p className="mt-2 text-muted-foreground">
            골프채 렌트 2회 포함 - 별도 준비 없이 편하게 라운딩하세요
          </p>
        </div>

        {/* Golf rental highlight */}
        <div className="mx-auto mt-8 flex max-w-md items-center justify-center gap-3 rounded-xl border border-primary/20 bg-primary/5 px-6 py-4">
          <Award className="size-8 shrink-0 text-primary" />
          <div>
            <p className="text-sm font-bold text-primary">골프채 렌트 2회 포함</p>
            <p className="text-xs leading-relaxed text-muted-foreground">
              무어팍 CC + 시에나 GC, 두 곳 모두 골프채 렌탈 비용이 행사비에 포함되어 있습니다
            </p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {golfDays.map((day) => {
            const course = day.golfCourse!
            const location = courseLocationMap[course.name] ?? day.city
            const desc = courseDescMap[course.name] ?? ""
            const features = courseFeaturesMap[course.name] ?? []

            return (
              <div
                key={course.name}
                className="flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-lg"
              >
                <div className="bg-primary/5 px-6 py-5">
                  <div className="flex items-center justify-between">
                    <Badge className="border-none bg-primary text-primary-foreground">
                      Day {day.day}
                    </Badge>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="size-3" />
                      {"티샷 "}{course.teeTime}
                    </div>
                  </div>
                  <h3 className="mt-3 text-xl font-bold text-foreground">
                    {course.name.split(" (")[0]}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {course.name.match(/\((.+)\)/)?.[1] ?? ""}
                  </p>
                  <div className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="size-3" />
                    {location}
                  </div>
                </div>

                <div className="flex flex-1 flex-col px-6 py-5">
                  <p className="text-sm leading-relaxed text-foreground">{desc}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {features.map((f) => (
                      <span
                        key={f}
                        className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {f}
                      </span>
                    ))}
                    {course.note && (
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        {course.note}
                      </span>
                    )}
                  </div>

                  <div className="mt-auto pt-5">
                    <a href={course.url} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="gap-1.5">
                        공식 웹사이트 방문
                        <ExternalLink className="size-3" />
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
