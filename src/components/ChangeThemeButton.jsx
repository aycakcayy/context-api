import {useContext} from "react";
import {ThemeContext} from "../contexts/ThemeContext";

function ChangeThemeButton(props){

    const {theme, themeName, setThemeName }= useContext(ThemeContext);

    return(
     <button className={`btn ${theme.button}`}
     onClick={()=> 
        setThemeName(prev=> prev=== 'light' ? 'dark' : 'light')} 
     >Change Theme - {`${themeName.toUpperCase()}`}
     </button>
     );
}

export default ChangeThemeButton;