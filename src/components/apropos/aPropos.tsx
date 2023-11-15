import Description from "./description";
import ProjPed from "./projPed";
import Adresse from "../parts/other/adresse"

function APropos() {

    const picsEcole = "/pics/ecole/Ecole.jpg"

    return (
        <>
            <h1> École Maternelle et Primaire Sarty</h1>
            <h4>Adresse de l'école</h4>
            <Adresse />
            <img src={picsEcole} alt="Photo de l'école" />
            <Description />
            <ProjPed />
        </>
    )
}

export default APropos