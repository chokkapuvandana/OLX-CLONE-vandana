import "./ProductDetails.css";
import cycle from './cycle2.jpg'
import Dropdown from "../components/Dropdown";

export default function Cycle() {
  return (
    <div className="productdetails">
      <Dropdown />
      <div className="top">
        <input
          type="search"
          id="search"
          name="search"
          placeholder="Search for what you are looking"
        />
      </div>
      <img src={cycle} alt="Cycle" className="imgStyle" />
      <div className="productName">Product Name/Model</div>
      <p className="productDescription">
        FAT TYER 21 SHIMANO TZ GEARS. NEW CYCLE AVAILABLE FAT TYER 21 SHIMANO TZ
        GEARS. NEW CYCLE AVAILABLE FAT TYER 21 SHIMANO TZ GEARS. NEW CYCLE
        AVAILABLE
      </p>
      <div className="purchaseDate">Purchase Date</div>
      <div className="sellingPrice">Selling Price</div>
      <div className="contactSeller">Contact Seller</div>
    </div>
  );
}