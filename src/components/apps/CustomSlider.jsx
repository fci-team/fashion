/* eslint-disable react/prop-types */
// ** alice slider libiray
import AliceCarousel from 'react-alice-carousel';

// ** css
import 'react-alice-carousel/lib/alice-carousel.css';
import SingleProduct from './SingleProduct';
import TestimonialCard from './TestimonialCard';

// ** Components

const CustomSlider = ({type}) => {

    // ** vars
    const clients = [
        <TestimonialCard key={1}/>,
        <TestimonialCard key={2}/>,
        <TestimonialCard key={3}/>,
        <TestimonialCard key={4}/>
    ]
    const items=[
        <SingleProduct key={1} flag='slider'/>,
        <SingleProduct key={2} flag='slider'/>,
        <SingleProduct key={3} flag='slider'/>
        
    ]
    
    const responsive1 = {
        0: { items: 1 },
        768: { items: 2 },
        1200: { items: 3, itemsFit: 'contain' },
    };
    const responsive2 = {
        0: { items: 1 },
        1200: { items: 2 },
    };
    return (
        <>
            <AliceCarousel
            items={type==='feedbacks'?clients:items}
            responsive={type==='feedbacks'?responsive2:responsive1}
            controlsStrategy="alternate"
            autoPlay={true}
            infinite={true}
            autoPlayInterval={5000}
            disableDotsControls ={true}
            />
        </>
    )
}
   
  export default  CustomSlider
