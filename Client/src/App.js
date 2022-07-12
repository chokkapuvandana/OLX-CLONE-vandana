import Splash from "./pages/Splash";
import Login from "./pages/Login";
import Button from "./components/Button";
import Home from "./pages/Home";
import Dropdown from "./components/Dropdown";
import '../src/App.css'
import { BrowserRouter, Routes,Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import BuyerCategoryPage from './pages/BuyerCategorypage'
import SellerHomepage from "./pages/SellingDetails";
import Profile from './pages/Profile'
import Cycle from './pages/ProductDetails'
import BuyerHomepage from "./pages/BuyerHomepage";
import SellerCategorypage from "./pages/SellerCategorypage";
function App() {
  // const user = true;
  const [user,setUser] = useState(null);

  useEffect(() => {
    const getUser =  () => {
      fetch('http://localhost:5000/auth/login/success', {
        method: "GET",
        credentials: 'include',
        headers: {
          'Accept': "application/json",
          "Content-Type": "application/json",
          'Access-Control-Allow-Credentials':'true',
        }
      }).then(response => {
        if (response.status === 200) return response.json();
        throw new Error("authentication has been failed")
      }).then(resObject => {
        setUser(resObject.user)
      } ).catch(err=>{
        console.log(err)
      })
    }
    getUser();
  }, [])

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/auth/login" element={user ? <Navigate to={'/home'} /> : <Login/>} />
        </Routes>
        {/* < Splash /> */}
        {/* <Login /> */}
        <div className="home">
          <Routes>
            <Route path="/home" element={user ? <Home/> : <Navigate to={'/auth/login'}/> } />
          </Routes>
        </div>
        {/* <Routes>
          <Route path="/dropdown" element={<Dropdown />} />
        </Routes> */}
        <Routes>
          <Route path="/buyercategory" element={user ? <BuyerCategoryPage/> : <Navigate to={'/auth/login'}/> } />
        </Routes>
        <Routes>
          <Route path="/buyerhomepage" element={user ? <BuyerHomepage/> : <Navigate to={'/auth/login'}/>} />
        </Routes>
        <Routes>
          <Route path="/sellercategory" element={user ? <SellerCategorypage/> : <Navigate to={'/auth/login'}/>} />
        </Routes>
        <Routes>
          <Route path="/sellerhomepage" element={user ? <SellerHomepage/> : <Navigate to={'/auth/login'}/>} />
        </Routes>
        <Routes>
          <Route path="/profile" element={user ? <Profile/> : <Navigate to={'/auth/login'}/>} />
        </Routes>
        <Routes>
          <Route path="/productdetails" element={user ? <Cycle/> : <Navigate to={'/auth/login'} /> } />
        </Routes>
    </div>
    </BrowserRouter> 
  );
}

export default App;
