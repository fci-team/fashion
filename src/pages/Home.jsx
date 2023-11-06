import { CollectionArea, FeaturedProduct } from "../components"
import HomeCarousel from "../components/apps/HomeCarousel"

const Home = () => {
  return (
    <div>
      <HomeCarousel/>
      <FeaturedProduct/>
      <CollectionArea/>
    </div>
  )
}

export default Home