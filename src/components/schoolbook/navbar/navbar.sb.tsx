import { Link } from "react-router-dom";
import './navbar.sb.scss'

function NavbarSB() {

    return (
        <>
            <nav className="navsb">
                <ul>
                    <li>
                        <Link to='/homesb'>Home</Link>
                    </li>
                    <li>
                        <Link to='homestudent'>Home student</Link>
                    </li>
                    <li>
                        <Link to='messagestudent'>Message student</Link>
                    </li>
                    <li>
                        <Link to='bookstudent'>Book student</Link>
                    </li>
                    <li>
                        <Link to='homeprof'>Home prof</Link>
                    </li>
                    <li>
                        <Link to='classeprof'>Classe prof</Link>
                    </li>
                    <li>
                        <Link to='messageprof'>Message prof</Link>
                    </li>
                    <li>
                        <Link to='bookprof'>Book prof</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default NavbarSB