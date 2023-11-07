import { CollectionArea, FeaturedProduct, StoreSection } from "../components"
import HomeCarousel from "../components/apps/HomeCarousel"

const Home = () => {
  return (
    <div>
      <HomeCarousel/>
      <FeaturedProduct/>
      <CollectionArea/>
      <StoreSection/>
    </div>
  )
}

export default Home