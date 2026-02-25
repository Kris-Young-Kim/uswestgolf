"use client"

import { useState } from "react"
import { MapPin, Clock, Hotel, Eye, CircleDot, Plane, ExternalLink, AlertCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { itinerary, type ItineraryDay } from "@/data/itinerary"

function getTypeLabel(type: ItineraryDay["type"]) {
  switch (type) {
    case "golf":
      return "골프"
    case "sightseeing":
      return "관광"
    case "travel":
      return "이동"
  }
}

function getTypeColor(type: ItineraryDay["type"]) {
  switch (type) {
    case "golf":
      return "bg-primary text-primary-foreground"
    case "sightseeing":
      return "bg-accent text-accent-foreground"
    case "travel":
      return "bg-muted text-muted-foreground"
  }
}

function getTypeIcon(type: ItineraryDay["type"]) {
  switch (type) {
    case "golf":
      return <CircleDot className="size-4" />
    case "sightseeing":
      return <Eye className="size-4" />
    case "travel":
      return <Plane className="size-4" />
  }
}

function DayCard({ day, onClick }: { day: ItineraryDay; onClick: () => void }) {
  const isGolf = day.type === "golf"
  const spanClass =
    day.day === 4
      ? "md:col-span-2"
      : day.day === 1 || day.day === 7
        ? ""
        : ""

  return (
    <button
      type="button"
      onClick={onClick}
      className={`group flex flex-col rounded-xl border border-border bg-card p-5 text-left transition-all hover:border-primary/30 hover:shadow-lg ${spanClass}`}
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-muted-foreground">{day.label}</span>
        <Badge className={`${getTypeColor(day.type)} border-none text-[10px]`}>
          {getTypeIcon(day.type)}
          <span className="ml-1">{getTypeLabel(day.type)}</span>
        </Badge>
      </div>

      <div className="mt-3 flex items-center gap-2">
        <MapPin className="size-4 shrink-0 text-primary" />
        <span className="text-sm font-semibold text-foreground">{day.city}</span>
      </div>

      <h3 className="mt-2 text-base font-bold text-foreground group-hover:text-primary sm:text-lg">
        {day.title}
      </h3>

      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{day.keyActivity}</p>

      {isGolf && day.golfCourse && (
        <div className="mt-3 rounded-lg bg-primary/5 px-3 py-2">
          <p className="text-xs font-semibold text-primary">{day.golfCourse.name}</p>
          <p className="text-[10px] text-primary/70">
            {"티샷 "}{day.golfCourse.teeTime}{" | "}{day.golfCourse.note}
          </p>
        </div>
      )}

      {day.hotel && (
        <div className="mt-auto flex items-center gap-1.5 pt-4 text-xs text-muted-foreground">
          <Hotel className="size-3" />
          <span className="line-clamp-1">{day.hotel}</span>
        </div>
      )}

      <div className="mt-3 flex items-center gap-1 text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
        상세 보기
        <ExternalLink className="size-3" />
      </div>
    </button>
  )
}

function DayDetailDialog({
  day,
  open,
  onOpenChange,
}: {
  day: ItineraryDay | null
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  if (!day) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-xl">
        <DialogHeader>
          <div className="flex items-center gap-2">
            <Badge className={`${getTypeColor(day.type)} border-none`}>
              {getTypeIcon(day.type)}
              <span className="ml-1">{getTypeLabel(day.type)}</span>
            </Badge>
            <span className="text-sm text-muted-foreground">{day.label}</span>
          </div>
          <DialogTitle className="text-xl">
            <span className="text-primary">{day.city}</span>
            {" - "}
            {day.title}
          </DialogTitle>
          <DialogDescription className="sr-only">
            {day.label} 상세 일정
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-4">
          {/* Details */}
          <div className="rounded-lg border border-border p-4">
            <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
              <Clock className="size-4 text-primary" />
              상세 일정
            </h4>
            <ul className="flex flex-col gap-2">
              {day.details.map((detail, i) => (
                <li key={i} className="flex items-start gap-2 text-sm leading-relaxed text-foreground">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary/40" />
                  {detail}
                </li>
              ))}
            </ul>
          </div>

          {/* Golf Course info */}
          {day.golfCourse && (
            <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
              <h4 className="mb-2 text-sm font-semibold text-primary">
                골프 코스 정보
              </h4>
              <p className="text-sm font-medium text-foreground">{day.golfCourse.name}</p>
              <div className="mt-2 flex flex-wrap gap-3 text-xs text-muted-foreground">
                <span>
                  {"티샷: "}{day.golfCourse.teeTime}
                </span>
                <span>{day.golfCourse.note}</span>
              </div>
              <a
                href={day.golfCourse.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
              >
                공식 웹사이트
                <ExternalLink className="size-3" />
              </a>
            </div>
          )}

          {/* Hotel */}
          {day.hotel && (
            <div className="flex items-center gap-2 rounded-lg bg-muted p-3">
              <Hotel className="size-4 shrink-0 text-muted-foreground" />
              <div>
                <p className="text-xs text-muted-foreground">숙소</p>
                <p className="text-sm font-medium text-foreground">{day.hotel}</p>
              </div>
            </div>
          )}

          {/* Optional Tours */}
          {day.optionalTours && day.optionalTours.length > 0 && (
            <div className="rounded-lg border border-accent/20 bg-accent/5 p-4">
              <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-accent">
                <AlertCircle className="size-4" />
                선택 관광 (현장 결제)
              </h4>
              <div className="flex flex-col gap-2">
                {day.optionalTours.map((tour, i) => (
                  <div key={i} className="flex items-start justify-between gap-2 rounded-md bg-card p-3 text-sm">
                    <div>
                      <p className="font-medium text-foreground">{tour.name}</p>
                      {tour.note && (
                        <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{tour.note}</p>
                      )}
                    </div>
                    <span className="shrink-0 font-bold text-accent">{tour.price}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

export function ItinerarySection() {
  const [selectedDay, setSelectedDay] = useState<ItineraryDay | null>(null)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [filter, setFilter] = useState("all")

  const filteredDays = itinerary.filter((day) => {
    if (filter === "all") return true
    if (filter === "golf") return day.type === "golf"
    if (filter === "sightseeing") return day.type === "sightseeing" || day.type === "travel"
    return true
  })

  return (
    <section id="itinerary" className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <Badge className="mb-3 border-none bg-primary/10 text-primary">DAILY ITINERARY</Badge>
          <h2 className="text-balance text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
            7일간의 특별한 여정
          </h2>
          <p className="mt-2 text-muted-foreground">
            각 일정을 클릭하면 상세 정보를 확인할 수 있습니다
          </p>
        </div>

        {/* Filter tabs */}
        <div className="mt-8 flex justify-center">
          <Tabs value={filter} onValueChange={setFilter} className="w-auto">
            <TabsList>
              <TabsTrigger value="all">전체 일정</TabsTrigger>
              <TabsTrigger value="golf">골프 라운딩</TabsTrigger>
              <TabsTrigger value="sightseeing">관광 & 이동</TabsTrigger>
            </TabsList>
            {/* TabsContent is needed for accessibility but we render content below */}
            <TabsContent value="all" className="hidden" />
            <TabsContent value="golf" className="hidden" />
            <TabsContent value="sightseeing" className="hidden" />
          </Tabs>
        </div>

        {/* Bento grid */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredDays.map((day) => (
            <DayCard
              key={day.day}
              day={day}
              onClick={() => {
                setSelectedDay(day)
                setDialogOpen(true)
              }}
            />
          ))}
        </div>
      </div>

      <DayDetailDialog day={selectedDay} open={dialogOpen} onOpenChange={setDialogOpen} />
    </section>
  )
}
