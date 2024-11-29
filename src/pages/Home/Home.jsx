import React from 'react'
import HeroSectionHome from '../../components/HeroSections/HeroSectionHome/HeroSectionHome'
import DestinationSection from '../../components/DestinationSection/DestinationSection'
import HotelSection from '../../components/HotelSection/HotelSection'

const Home = () => {
  return (
    <main>
      <HeroSectionHome />
      <DestinationSection />
      <HotelSection />
    </main>
  )
}

export default Home