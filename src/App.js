import {Routes, Route} from "react-router-dom";
import {useContext, useEffect} from "react";
//my components
import Home from "./components/Home";
import About from "./components/About";
import UserProfile from "./components/UserProfile";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeContext, ThemeContextProvider } from "./contexts/ThemeContext";
import {ThemeProvider} from "styled-components";
import { styledComponentsTheme } from "./styledComponents/styledComponentsTheme";

function App() {
  const {themeName} = useContext(ThemeContext);

  return (
    <ThemeProvider theme={styledComponentsTheme[themeName]}>  {/* styled components içersinden geliyor*/} 
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
    </ThemeProvider>
   
  );
}

export default App;
