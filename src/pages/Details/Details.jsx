import React from 'react'
import HeroSectionDetails from '../../components/HeroSections/HeroSectionDetails/HeroSectionDetails'
import HotelShowcaseSlider from '../../components/Sliders/HotelShowcaseSlider/HotelShowcaseSlider'
import RoomSection from '../../components/RoomSection/RoomSection'
import AmenitySection from '../../components/AmenitySection/AmenitySection'

const Details = () => {
  return (
    <main>
      <HeroSectionDetails />
      <RoomSection />
      <AmenitySection/>
      <HotelShowcaseSlider />
    </main>
  )
}

export default Details