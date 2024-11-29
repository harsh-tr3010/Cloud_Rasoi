// import logo from './logo.svg';
// import './App.css';
// import Sidebar from './Sidebar';

// function App() {
//   return (
//     <div className="App">
//       <Sidebar />
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import AboutUs from "./AboutUs";
import Reviews from "./Reviews";
import ContactUs from "./ContactUs";
import Profile from "./Profile";
import UserSignUp from "./UserSignUp";
import Login from "./Login";
import Udashboard from "./Udashboard";
import OurRasoi from "./OurRasoi";
import Searchbar from "./Searchbar";
import SBBMB from './SBBMB';
import SDC from './SDC';
import Saihub from './Saihub';
import Tiffinservice from './Tiffinservice';
import Popup from './Popup';
import Anupama from './Anupama';
import Narayan from './Narayan';
// import Durga from './Durga';
import Caterersdash from "./Caterersdash";
// import Uprofile from "./Uprofile";
import Vendorfirstpage from "./Vendorfirstpage";
import VendorLogin from "./VendorLogin";
import VendorSignUp from "./VendorSignUp";
import Vdashboard from "./Vdashboard";
// import Deliveryboyregis from "./Deliveryboyregis";
import Venprofile from "./Venprofile";
import Menuorders from "./Menuorders";
import Venmenupopup from "./Venmenupopup";
import AddRasoi from "./AddRasoi";
import Catererssignup from "./Catererssignup";
import Catererslogin from "./Catererslogin";
import Caterersdetail from "./Caterersdetail";
import AddTiffin from "./AddTiffin";
import Deliverysignup from './Deliverysignup';
import Deliverylogin from './Deliverylogin';
import Delboylistinsert from './Delboylistinsert';
import Cart from './Cart';

function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}></Route>
        <Route path="AboutUs" element={<AboutUs/>}></Route>
        <Route path="Reviews" element={<Reviews/>}></Route>
        <Route path="ContactUs" element={<ContactUs/>}></Route>
        <Route path="Profile" element={<Profile/>}></Route>   
        <Route path="UserSignUp" element={<UserSignUp/>}></Route>
        <Route path="Login" element={<Login/>}></Route>
        <Route path="Udashboard" element={<Udashboard/>}></Route>
        <Route path="OurRasoi" element={<OurRasoi/>}></Route>
        <Route path="Searchbar" element={<Searchbar/>}></Route> 
        <Route path="SBBMB/:id" element={<SBBMB/>}></Route>
        <Route path="SDC" element={<SDC/>}></Route>
        <Route path="Saihub" element={<Saihub/>}></Route>    
        <Route path="Tiffinservice" element={<Tiffinservice/>}></Route>    
        <Route path="Popup" element={<Popup/>}></Route>
        <Route path="Anupama" element={<Anupama/>}></Route>    
        <Route path="Narayan" element={<Narayan/>}></Route>    
        {/* <Route path="Durga" element={<Durga/>}></Route>     */}
        <Route path="Caterersdash" element={<Caterersdash/>}></Route>   
        <Route path="Venprofile" element={<Venprofile/>}></Route>
        {/* <Route path="Uprofile" element={<Uprofile/>}></Route>     */}
        <Route path="Vendorfirstpage" element={<Vendorfirstpage/>}></Route>    
        <Route path="VendorLogin" element={<VendorLogin/>}></Route>    
        <Route path="VendorSignUp" element={<VendorSignUp/>}></Route>  
        <Route path="Vdashboard" element={<Vdashboard/>}></Route>
        {/* <Route path="Deliveryboyregis" element={<Deliveryboyregis/>}></Route> */}
        <Route path="Menuorders" element={<Menuorders/>}></Route>
        <Route path="Venmenupopup" element={<Venmenupopup/>}></Route>
        <Route path="AddRasoi" element={<AddRasoi/>}></Route> 
        <Route path="Catererssignup" element={<Catererssignup/>}></Route> 
        <Route path="Catererslogin" element={<Catererslogin/>}></Route> 
        <Route path="Caterersdetail" element={<Caterersdetail/>}></Route> 
        <Route path="AddTiffin" element={<AddTiffin/>}></Route>
        <Route path="Deliverysignup" element={<Deliverysignup/>}></Route> 
        <Route path="Deliverylogin" element={<Deliverylogin/>}></Route> 
        <Route path="Delboylistinsert" element={<Delboylistinsert/>}></Route> 
        <Route path="Cart" element={<Cart/>}></Route> 




        

      </Routes>
    </Router>
  )
}

export default App;