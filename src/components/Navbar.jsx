import {Link} from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";


const Navbar= (props) =>{

const {theme} = useContext(ThemeContext);


    return <> 
    
    <nav className={`navbar navbar-expand-lg ${theme.navbar}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>


    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" to="/">
              Anasayfa
              </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">
              Hakkımızda
              </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/user-profile" >
              Kullanıcı Profili
              </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    
    </>
}

export default Navbar