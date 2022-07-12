import './Home.css'
import logo1 from './logo.PNG'
import Button from '../components/Button'
import Dropdown from '../components/Dropdown'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className='MAIN' >
      <Dropdown styles={{margin:'20px'}} />
      <img className='Logo' src={logo1} alt="logo" />
      <div className='buttonb'>
      <Link to={'/buyercategory'}><Button styles={ {padding:'20px 22px', margin:'0px 0px 20px 0px'}} text={<b><h1>Buy</h1></b>} /></Link>
      <Link to={'/sellercategory'}><Button styles={{padding:'22px 27px',margin:'13px 0px 0px 0px'}} text={ <b><h1>Sell</h1></b> } /></Link>
      </div> 
    </div>
  )
}

export default Home