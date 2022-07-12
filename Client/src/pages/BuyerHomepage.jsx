import cycle from './cycle2.jpg';
import './BuyerHomePage.css'
import Dropdown from '../components/Dropdown'
import { Link } from 'react-router-dom';
const BuyerHomepage = () => {
    return ( 
        <div className="buyerhomepage">
            <Dropdown styles={{margin:'20px'}} />
            <input type="search" id="search" name="search" placeholder="Search for what you are looking" />
            <p>Showing all Cycles available...</p>
            <div className="card">
                <img className='proimg' src={cycle} alt="Product" />
                <Link  to={"/productdetails"}> 
                    <div className="image__overlay">
                        <div className="TITLE">
                            Product 1
                            <p class="image__description">
                                Price 2500,negotiable
                            </p>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="card">      
                <img className='proimg' src={cycle} alt="Product" />
                <Link  to={"/productdetails"}> 
                    <div className="image__overlay">
                        <div className="TITLE">
                            Product -2
                            <p class="image__description">
                                Price 2800,negotiable
                            </p>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="card">
                <img className='proimg' src={cycle} alt="Product" />
                <Link  to={"/productdetails"}> 
                    <div className="image__overlay">
                        <div className="TITLE">
                            Product - 3
                            <p class="image__description">
                                Price 3500,negotiable
                             </p>
                        </div>
                    </div>
                </Link>
            </div>
            <div  className="card">
                <img className='proimg' src={cycle} alt="Product" />
                <Link  to={"/productdetails"}> 
                    <div className="image__overlay">
                        <div className="TITLE">
                            Product-4 
                            <p class="image__description">
                                Price 3200,negotiable
                             </p>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="card">
                <img className='proimg' src={cycle} alt="Product" />
                <Link  to={"/productdetails"}> 
                    <div className="image__overlay">
                        <div className="TITLE">
                            Product-5
                            <p class="image__description">
                                Price 3200
                            </p>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="card">
                <img className='proimg' src={cycle} alt="Product" />
                <Link  to={"/productdetails"}> 
                    <div className="image__overlay">
                        <div className="TITLE">
                            Product 6
                            Price 3200,negotiable
                        </div>
                    </div>
                </Link>
            </div>
            <div className="card">
                <img className='proimg' src={cycle} alt="Product" />
                <Link  to={"/productdetails"}> 
                    <div className="image__overlay">
                        <div className="TITLE">
                            Product 7
                            <p class="image__description">
                                Price 3200
                            </p>
                        </div>
                    </div>
                </Link>    
            </div>
            <div className="card">
                <img className='proimg' src={cycle} alt="Product" />
                <Link  to={"/productdetails"}> 
                    <div className="image__overlay">
                        <div className="TITLE">
                            Product 8
                            <p class="image__description">
                                Price 3200,negotiable
                            </p>
                        </div>
                    </div>
                </Link>    
            </div>
            <div className="card">
                <img className='proimg' src={cycle} alt="Product" />
                <Link  to={"/productdetails"}> 
                    <div className="image__overlay">
                        <div className="TITLE">
                            Product 9
                            <p class="image__description">
                                Price 3200
                            </p>
                        </div>
                    </div>
                </Link>
            </div>
            <Link to={"/buyercategory"}><button className='efgh' >BUY</button></Link>
            <Link to={"/sellercategory"}><button  className='efgh' >SELL</button></Link>

        </div>
     );
}
 
export default BuyerHomepage;