// ** styles import
import '../../style/home.css'
import SingleProduct from './SingleProduct'

const ProductSide = () => {
  return (
    <div className="products__container">
        <div className="row">
            <div className="col-md-6 col-xl-4">
                <SingleProduct flag='store'/>
            </div>
            <div className="col-md-6 col-xl-4">
                <SingleProduct flag='store'/>
            </div>
            <div className="col-md-6 col-xl-4">
                <SingleProduct flag='store'/>
            </div>
            <div className="col-md-6 col-xl-4">
                <SingleProduct flag='store'/>
            </div>
            <div className="col-md-6 col-xl-4">
                <SingleProduct flag='store'/>
            </div>
            <div className="col-md-6 col-xl-4">
                <SingleProduct flag='store'/>
            </div>
        </div>
    </div>
  )
}

export default ProductSide