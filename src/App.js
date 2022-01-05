import {Routes, Route} from "react-router-dom";
import {useEffect} from "react";
import Home from "./components/Home";
import About from "./components/About";
import UserProfile from "./components/UserProfile";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeContextProvider } from "./contexts/ThemeContext";


function App() {

  return (
  
  
  <ThemeContextProvider>
  <div className="">
  <Navbar/>
 <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/user-profile" element={<UserProfile/>}/>
<Route path="*" element={<UserProfile/>}/>


 </Routes>

 <Footer/>


  </div>
  </ThemeContextProvider>
  );
}

export default App;
