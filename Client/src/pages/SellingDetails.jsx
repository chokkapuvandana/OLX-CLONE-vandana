import { Link } from "react-router-dom";
import "./SellingDetails.css";

export default function SellerHomepage() {
  return (
    <div className="bokada">
      <p className="detail">Upload Image of the product</p>
      <p className="detail">Product Name/Model</p>
      <p className="detail">Product Description</p>
      <p className="detail">Purchased Date</p>
      <p className="detail">Selling Price</p>
      <p className="detail">Contact Number</p>

      <div className="_9876">
        <button id="button1">Cancel</button>
        <button id="button2">Save</button>
      </div>
      <div className="update">
        <button id="button3">Update</button>
      </div>
      <div className="qwerty">
      <Link to={"/buyercategory"}><button id="button4" >BUY</button></Link>
      <Link to={"/sellercategory"}><button  id="button5" >SELL</button></Link>
      </div>
        
    </div>
  );
}