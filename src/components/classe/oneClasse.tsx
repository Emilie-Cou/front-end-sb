import { useEffect, useState } from "react";
import { getOneClasse } from "../../api/classe/APIclasse";

interface ClasseProps {
    id: string,
    nom: string,
    desc: string,
    img: string,
}

function OneClasse({idClasse} : {idClasse : string}) {
    
    const [ classe , setClasse ] = useState<ClasseProps>({
        id: "",
        nom: "",
        desc: "",
        img: "",
    })

    const getClasse = async (idClasse : string) => {
        try {
            const laClasse = await getOneClasse(idClasse)
            setClasse(laClasse)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getClasse(idClasse)
    }, [])

    return (
        <>
            <div>
                <h1>Classe {classe.id}</h1>
                <h2>{classe.nom}</h2>
                <h3>Professeur à aller chercher</h3>
                <h4>Description</h4>
                <p>{classe.desc}</p>
                <img src={classe.img} alt="Ecole" width={300}/>
            </div>
        </>
    )
}

export default OneClasse
