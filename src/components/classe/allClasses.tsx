import { useEffect, useState } from "react";
import { getAllClasse } from "../../api/classe/APIclasse";
import './allClasses.scss'
import OneClasse from "./oneClasse";

interface ClasseProps {
    id: string,
    prof: string,
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

            <button onClick={() => setSelectedClasse('')}> Tous </button>

            {selectedClasse == '' ? (
                <ul className="afficheAll">
                    {classes.map((cls, index) => (
                        <li key={index} onClick={() => setSelectedClasse(cls.id)}>
                            <div className="afficheAllDiv">
                                <h3>{cls.nom}</h3>
                                <p>Professeur: {cls.prof}</p> 
                                <p>{cls.desc}</p>
                                <h2>En voici une photo</h2>
                                <img src={cls.img} alt="Ecole du bas" width="300" />
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <OneClasse idClasse={selectedClasse} />
            )}
        </>
    )
}

export default Classes