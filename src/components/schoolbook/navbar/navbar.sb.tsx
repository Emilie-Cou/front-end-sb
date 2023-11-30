import { Link } from "react-router-dom";

function NavbarSB() {

    return (
        <>
            <nav>
                <h3>Ceci est la navbar du SchoolBook</h3>
                <ul>
                    <li>
                        <Link to=''>Quelque part</Link>
                    </li>
                    <li>
                        <Link to=''>Quelque part</Link>
                    </li>
                    <li>
                        <Link to=''>Quelque part</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default NavbarSB