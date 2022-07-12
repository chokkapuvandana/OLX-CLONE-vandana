import './BuyerCategoryPage.css'
import cycle from './cycledemo.jpg';
import book from './book1.jpg';
import laptop from './laptop1.jpg';
import bed from './mattress1.jpg';
import electrical from './ElectricalItems1.jpeg';
import othertypes from './Othertypes1.jpeg';
import Dropdown from '../components/Dropdown';
import { Link } from 'react-router-dom';
const BuyerCategoryPage = () => {
    return (
        <div className="categorypage">
            <Dropdown/>
            <input type="search" id="search" name="search" placeholder="Search for what you are looking"/>
            <h5>Shop By Category</h5>
            <div className="card">
            <img className='itemimg'  src={cycle} alt="Product" />
                    <Link to={'/buyerhomepage'} ><div className="image__overlay">
                        <div className="TITLE">Cycle</div>
                    </div></Link>
                </div>
                <div className="card">
                    <img className='itemimg' src={book} alt="Product" />
                    <Link to={'/buyerhomepage'} ><div className="image__overlay">
                        <div className="TITLE">Books</div>
                    </div></Link>
                </div>
                <div className="card">
                    <img className='itemimg' src={laptop} alt="Product" />
                    <Link to={'/buyerhomepage'} ><div className="image__overlay">
                        <div className="TITLE">Laptop/desktop</div>
                    </div></Link> 
                </div>
                <div className="card">
                <img className='itemimg' src={bed} alt="Product" />
                <Link to={'/buyerhomepage'} ><div className="image__overlay">
                        <div className="TITLE">Bed</div>
                    </div></Link>  
                </div>
                <div className="card">
                <img className='itemimg' src={electrical} alt="Product" />
                <Link to={'/buyerhomepage'} ><div className="image__overlay">
                        <div className="TITLE">Electrical Items</div>
                    </div></Link>
                </div>
                <div className="card">
                <img className='itemimg' src={othertypes} alt="Product" />
                <Link to={'/buyerhomepage'} >
                    <div className="image__overlay">
                        <div className="TITLE">OtherTypes</div>
                    </div></Link>
                </div>
                <Link to={"/buyercategory"}><button className='abcd' >BUY</button></Link>
            <Link to={"/sellercategory"}><button  className='abcd' >SELL</button></Link>
        </div>
    );
}
 
export default BuyerCategoryPage;