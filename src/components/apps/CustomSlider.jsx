// alice slider libiray
import AliceCarousel from 'react-alice-carousel';

// ** css
import 'react-alice-carousel/lib/alice-carousel.css';
import SingleProduct from './SingleProduct';

// ** Components

const CustomSlider = () => {

    // ** vars
    const items=[
        <SingleProduct key={1} flag='slider'/>,
        <SingleProduct key={2} flag='slider'/>,
        <SingleProduct key={3} flag='slider'/>
        
    ]
    
    const responsive = {
        0: { items: 1 },
        768: { items: 2 },
        1200: { items: 3 , itemsFit: 'contain' },
    };
    return (
        <>
            <AliceCarousel
            items={items}
            responsive={responsive}
            controlsStrategy="alternate"
            autoPlay={true}
            infinite={true}
            autoPlayInterval={5000}
            disableDotsControls
            />
        </>
    )
}
   
  export default  CustomSlider
