import { useEffect, useState } from "react";
import { getAllClasse } from "../../api/classe/getClasse";


interface ClasseProps {
    id: string,
    nom: string,
    desc: string,
    img: string,
}

function Classes() {

    const [ classes, setClasses ] = useState<ClasseProps[]>([])
    const [ selectedClasse, setSelectedClasse ] = useState('')

    const getAll = async () => {
        try {
            const allClasses = await getAllClasse()
            setClasses(allClasses)
        } 
        catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getAll()
        }, [])
    
    return (
        <>
            <h1>Les classes</h1>

            <button onClick={getAll}> Tous </button>

            {selectedClasse !== '' ? (
                <p>Détailler la classe</p>
            ) : (
                <ul>
                    {classes.map((cls, index) => (
                        <li key={index}>
                            <div>
                                <h3>{cls.nom}</h3>
                                <p>Professeur: a faire</p>
                                <p>{cls.desc}</p>
                                <h2>En voici une photo</h2>
                                <img src='{cls.img}' alt="Ecole du bas" width="300" />
                            </div>
                        </li>
                    ))}
                </ul>
            )}








        </>
    )
}

export default Classes