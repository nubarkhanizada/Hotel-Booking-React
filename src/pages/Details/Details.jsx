import React from 'react'
import HeroSectionDetails from '../../components/HeroSections/HeroSectionDetails/HeroSectionDetails'
import HotelShowcaseSlider from '../../components/Sliders/HotelShowcaseSlider/HotelShowcaseSlider'
import RoomSection from '../../components/RoomSection/RoomSection'
import HotelAmenitiesSection from '../../components/HotelAmenitiesSection/HotelAmenitiesSection'

const Details = () => {
  return (
    <main>
      <HeroSectionDetails />
      <RoomSection />
      <HotelAmenitiesSection/>
      <HotelShowcaseSlider />
    </main>
  )
}

export default Details