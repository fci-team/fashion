import { CollectionArea, FeaturedProduct, FlashProduct, StoreSection, Testimonials } from "../components"
import DealWrapperSection from "../components/apps/DealWrapperSection"
import HomeCarousel from "../components/apps/HomeCarousel"

const Home = () => {
  return (
    <div>
      <HomeCarousel/>
      <FeaturedProduct/>
      <CollectionArea/>
      <StoreSection/>
      <DealWrapperSection/>
      <FlashProduct/>
      <Testimonials/>
    </div>
  )
}

export default Home