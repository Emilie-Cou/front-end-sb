import './navbar.css'
import { Link } from "react-router-dom";

function Navbar() {

    return (
      <>
        <nav>
            <h3>Ceci est la navbar</h3>
            <ul>
              <li>
                <Link to=''>Home</Link>
              </li>
              <li>
                <Link to='/classes'>Les classes</Link>
              </li>
              <li>
                <Link to='/profs'>Corps professoral</Link>
              </li>
              <li>
                <Link to='/apropos'>A propos</Link>
              </li>
              <li>
                <Link to='/comment'>Commentaires</Link>
              </li>
              <li>
                <Link to='/comment/form'>Ajouter un commentaire</Link>
              </li>
              <li>
                <Link to='/homesb'>HomeSB</Link>
              </li>
            </ul>
        </nav>
      </>
    )
  }
  
  export default Navbar