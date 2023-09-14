import fiit_logo from '../FIIT tagline.png';
import "./Nav.css"

function Nav() {
    return (
      <div className="nav-container">
        <a
          href="https://tryfiit.com/"
        >
          <img src={fiit_logo} alt="fiit logo"></img>
        </a>
        
      </div>
    );
  }
  
  export default Nav;