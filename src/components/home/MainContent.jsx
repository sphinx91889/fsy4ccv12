import HeroSection from './HeroSection'
import ConferenceInfo from './ConferenceInfo'
import FeaturedSection from './FeaturedSection'
import EventsGrid from './EventsGrid'
import DailyThemes from './DailyThemes'
import WhatToExpect from './WhatToExpect'
import SocialFeed from './SocialFeed'

export default function MainContent() {
  return (
    <main>
      <HeroSection />
      <ConferenceInfo />
      <FeaturedSection />
      <EventsGrid />
      <DailyThemes />
      <WhatToExpect />
      <SocialFeed />
    </main>
  )
}
