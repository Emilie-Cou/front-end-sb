import { useEffect, useState } from "react";
import { getAllProf } from "../../api/prof/getProf";
import './allProfs.scss'

interface ProfProps {
    nom: string,
    nomClasse: string,
    idClasse: string,
    img: string,
}

function Profs() {

    const [ profs, setProfs ] = useState<ProfProps[]>([])

    const getAll = async () => {
        try {
            const allProfs = await getAllProf()
            setProfs(allProfs)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getAll()
    }, [])

    return (
        <>
            <h1>Les professeurs</h1>

            <ul className="afficheAll">
                {profs.map((prof, index) => (
                    <li key={index}>
                        <div className="afficheAllDiv">

                            {prof.idClasse == 'Dir' ?
                                <h3>Directrice</h3>
                                : prof.idClasse == 'SEC1' || prof.idClasse == 'SEC2' ?
                                    <h3>Secrétaire</h3>
                                    : <h3>Professeur</h3>
                            }

                            <p>{prof.nom}</p>
                            <p>{prof.nomClasse}</p>
                            <h2>Et voici une photo</h2>
                            <img src={prof.img} alt="Photo du prof" width="300" />
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Profs
