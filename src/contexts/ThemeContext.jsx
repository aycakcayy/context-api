import { createContext, useState , useEffect} from "react";

const ThemeContext= createContext();  //bilgiyi tutan 
   
    const themes = {
        light: {
            backgroundColor: "bg-light",
            color: "text-dark",
            button: "btn-primary",
            navbar:"navbar-light bg-light"
        },
        dark: {
            backgroundColor: "bg-dark",
            color: "text-light",
            button: "btn-danger",
            navbar:"navbar-light bg-dark"
        }
    }
    
    
    
    function ThemeContextProvider(props){  //bigiyi sağlayan
    

    const[themeName, setThemeName] =useState("light");

    useEffect( ()=> {
   
        const localThemeName= localStorage.getItem("themeName") ? localStorage.getItem('themeName', themeName) : localStorage.
        setItem("themeName", themeName);

        setThemeName(localThemeName);
      } , []);   //sayfa ilk açıldığında çalışır
    
      useEffect( ()=> {

        localStorage.setItem("themeName", themeName);
        const theme = themeName=== "light" ? themes.light : themes.dark;
        document.body.className="";
        document.body.classList.add(theme.backgroundColor, theme.color);
      } , [themeName]);   
    

    return (
  
    <ThemeContext.Provider
     value={{theme: themeName=== "light" ? themes.light : themes.dark, 
     setThemeName,
     themeName
     }}>
     {props.children}
    </ThemeContext.Provider>
    
    );
}


export {ThemeContext, ThemeContextProvider}