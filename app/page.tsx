import { TopNavBar } from "@/components/top-nav-bar"
import { GlobalNavBar } from "@/components/global-nav-bar"
import { HeroSection } from "@/components/hero-section"
import { OverviewSection } from "@/components/overview-section"
import { ItinerarySection } from "@/components/itinerary-section"
import { GolfCourseSection } from "@/components/golf-course-section"
import { PricingSection } from "@/components/pricing-section"
import { OptionalToursSection } from "@/components/optional-tours-section"
import { RouteMapSection } from "@/components/route-map-section"
import { TravelerGuideSection } from "@/components/traveler-guide-section"
import { InquirySection } from "@/components/inquiry-section"
import { FooterSection } from "@/components/footer-section"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <TopNavBar />
      <GlobalNavBar />
      <main>
        <HeroSection />
        <OverviewSection />
        <RouteMapSection />
        <ItinerarySection />
        <GolfCourseSection />
        <PricingSection />
        <OptionalToursSection />
        <TravelerGuideSection />
        <InquirySection />
      </main>
      <FooterSection />
      <ScrollToTop />
    </div>
  )
}
