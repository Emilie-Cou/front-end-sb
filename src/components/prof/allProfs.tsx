import { useEffect, useState } from "react";
import { getAllProf } from "../../api/prof/APIProf";
import './allProfs.scss'

interface ProfProps {
    nom: string,
    nomClasse: string,
    idClasse: string,
    img: string,
    id: string,
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
            <h1>L'équipe éducative</h1>

            <ul className="afficheAll">
                <h2>Les Professeurs:</h2>
                {profs.map((prof, index) => (
                    <li key={index}>
                        {prof.idClasse !== 'DIR' && prof.idClasse !== 'SEC1' && prof.idClasse !== 'SEC2' ?
                            <div className="afficheAllDiv">
                                <h3>Professeur</h3>
                                <p>{prof.nom}</p>
                                <p>{prof.id}</p>
                                <p>{prof.nomClasse}</p>
                                <h2>Et voici une photo</h2>
                                <img src={prof.img} alt="Photo du prof" width="300" />
                            </div>
                        : null }
                    </li>
                ))}
                <br />
                <h2>La direction:</h2>
                {profs.map((prof, index) => (
                    <li key={index}>
                        {prof.idClasse == 'DIR' ?
                            <div className="afficheAllDiv">
                                <h3>Directrice</h3>
                                <p>{prof.nom}</p>
                                <p>{prof.id}</p>
                                <p>{prof.nomClasse}</p>
                                <h2>Et voici une photo</h2>
                                <img src={prof.img} alt="Photo du prof" width="300" />
                            </div>
                        : prof.idClasse == 'SEC1' || prof.idClasse == 'SEC2' ? 
                            <div className="afficheAllDiv">
                                <h3>Secrétaire</h3>
                                <p>{prof.nom}</p>
                                <p>{prof.id}</p>
                                <p>{prof.nomClasse}</p>
                                <h2>Et voici une photo</h2>
                                <img src={prof.img} alt="Photo du prof" width="300" />
                            </div>
                        : null
                        }
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Profs
