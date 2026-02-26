"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { label: "투어 개요", href: "#overview" },
  { label: "일정표", href: "#itinerary" },
  { label: "골프 코스", href: "#golf-courses" },
  { label: "요금 안내", href: "#pricing" },
  { label: "여행자 가이드", href: "#traveler-guide" },
]

export function GlobalNavBar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <a href="#" className="flex items-center gap-2">
          <div className="flex size-9 items-center justify-center rounded-lg bg-primary">
            <span className="text-sm font-bold text-primary-foreground">M</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold leading-tight text-foreground">
              MINTOUR
            </span>
            <span className="text-[10px] leading-tight text-muted-foreground">
              미서부 골프 투어 전문
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="메인 메뉴">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href="#inquiry">
            <Button className="hidden animate-pulse bg-accent text-accent-foreground hover:bg-accent/90 sm:inline-flex">
              예약 문의
            </Button>
          </a>
          <button
            type="button"
            className="rounded-md p-2 text-foreground lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="메뉴 열기"
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="border-t border-border bg-card px-4 py-4 lg:hidden" aria-label="모바일 메뉴">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a href="#inquiry" onClick={() => setMobileOpen(false)}>
              <Button className="mt-2 w-full bg-accent text-accent-foreground hover:bg-accent/90">
                예약 문의
              </Button>
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
