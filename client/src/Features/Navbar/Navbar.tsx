import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBirthdayCake, faCake} from  '@fortawesome/free-solid-svg-icons'

export default function Navbar(){
    return(
      <div>
         <nav className="navbar navbar-dark bg-dark fixed-top mb-2">
  <div className="container-fluid col-12">
        <a className="navbar-brand" href="#"><FontAwesomeIcon icon={faCake}/></a>
        <a className="navbar-brand" href="#">Ghanshyam's</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
        <span className="navbar-toggler-icon"></span>
        </button>
    
    <div className="offcanvas offcanvas-end text-bg-dark" tabIndex={-1} id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title gold-text" id="offcanvasDarkNavbarLabel">Hi, Sidharth</h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Categories
            </a>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li><a className="dropdown-item" href="#">Cakes</a></li>
              <li><a className="dropdown-item" href="#">Mocktails</a></li>
              <li><a className="dropdown-item" href="#">Decor Materials</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
      </div>
       
    )
}