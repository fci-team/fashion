// ** styles
import "../../style/home.css";

// ** icons
import { Cart, SuitHeart, ArrowRepeat, Eye } from "react-bootstrap-icons";
const SingleProduct = () => {
  return (
    <div className="product__container">
      <div className="product__header">
        <div className="product__img">
          <img
            src="https://hexfashion.xyz/assets/tenant/uploads/media-uploader/hexfashion/frame-34514-min1668592571.jpg"
            alt=""
          />
        </div>
        <div className="product__buttons d-flex gap-3 justify-content-center">
          <button>
            <Cart size={18} />
          </button>
          <button>
            <SuitHeart size={18} />
          </button>
          <button>
            <ArrowRepeat size={18} />
          </button>
          <button>
            <Eye size={18} />
          </button>
        </div>
        <div className="product__flags">
          <span className="descount">88% Off</span>
          <span className="arrival">100 Salses</span>
        </div>
      </div>
      <div className="product__description pt-4">
        <h4>Buck Long Sleeve</h4>
        <h6 className="d-flex gap-2 align-items-center">
          <span>63$</span>
          <del>80$</del>
        </h6>
      </div>
    </div>
  );
};

export default SingleProduct;
