import { Outlet } from "react-router-dom";
import NavbarSB from "./navbar/navbar.sb";
import ConnectForm from "../connect/connectForm";
import { useState } from "react";

function HomeSB () {

    const [ isConnected, setIsConnected ] = useState(true)

    return (
        <>
            <NavbarSB />
            <h1>HomeSB</h1>
            {isConnected? <Outlet /> : <ConnectForm />}
        </>
    )
}

export default HomeSB