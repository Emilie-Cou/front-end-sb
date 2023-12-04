import { Outlet } from "react-router-dom";
import NavbarSB from "./navbar/navbar.sb";

function HomeSB () {


    return (
        <>
            <NavbarSB />
            <h1>HomeSB</h1>
            <Outlet />
        </>
    )
}

export default HomeSB