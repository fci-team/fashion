// ** components
import { BlogsSection, CollectionArea, FeaturedProduct, FlashProduct, Partiners, StoreSection, Testimonials } from "../components"
import DealWrapperSection from "../components/apps/DealWrapperSection"
import HomeCarousel from "../components/apps/HomeCarousel"

// ** hooks
import { useBackToTop } from "../hooks/useBackToTop"

const Home = () => {

  // ** Hooks
  useBackToTop()

  return (
    <div>
      <HomeCarousel/>
      <FeaturedProduct/>
      <CollectionArea/>
      <StoreSection/>
      <DealWrapperSection/>
      <FlashProduct/>
      <Testimonials/>
      <BlogsSection/>
      <Partiners/>

    </div>
  )
}

export default Home