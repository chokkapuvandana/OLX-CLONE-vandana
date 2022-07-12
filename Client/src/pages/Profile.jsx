import { Link } from 'react-router-dom';
import './profile.css'
import profile from './profile.jpg'
const Profile = () => {
    return ( 
        <div className="prof">
            <img className='prio' src={profile} alt="" />
            <div className="profiledetails">
                <p >NAME</p>
                <p>HOSTEL</p>
                <p>MY ORDERS</p>
                <p>MY PRODUCTS</p>
                <p>EDIT/UPDATE MY PRODUCTS DETAILS</p>
                <p>Contact no.</p>
            </div>
            <Link to={"/buyercategory"}><button className='asdf' >BUY</button></Link>
            <Link to={"/sellercategory"}><button  className='asdf' >SELL</button></Link>
        </div>
     );
}
 
export default Profile;