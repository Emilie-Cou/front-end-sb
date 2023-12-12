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
            <p>Je ne sais pas quoi mettre ici</p>
            {isConnected? <Outlet /> : <ConnectForm />}
        </>
    )
}

export default HomeSB

// //! A faire au moment de la gestion l'auth
// Gérer la navbar
// A modifier en fonction de la connection:
//     si je ne suis pas connecté :
//         page home + connect
//     si je suis student:
//         page home student
//     si je suis prof:
//         page home prof
//     si je me deconnecte:
//         message deco + page home + connect