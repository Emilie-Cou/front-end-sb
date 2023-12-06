import { useEffect, useState } from "react";
import { getStudentClasse } from "../../../api/schoolbook/APIprof.sb/classeAPIprof.sb";

interface StudentProps {
    idStudent: string,
    psw1: string,
    psw2 : string,
    nom: string,
    prenom: string,
    email1: string,
    email2: string,
    parentSep: boolean
}

function ClasseProfSB () {

    const [ student, setStudent ] = useState<StudentProps[]>([])

    const getStudent = async (idClasse : string) => {
        try {
            const allStudents = await getStudentClasse(idClasse)
            setStudent(allStudents)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getStudent("P1A")
    }, [])

    return (
        <>
            <h1>ClasseProfSB</h1>
            <h2>Voici tes élèves</h2>

            {student.map((stu, index) => (
                <div key={index}>
                    <h4>{stu.nom} {stu.prenom}, {stu.idStudent}</h4>
                    <p>Parents séparés: {stu.parentSep == true ? "oui" : "non"}</p>
                    <p>Email1: {stu.email1}</p>
                    <p>Email2: {stu.email2? stu.email2 : "---"}</p>
                </div>
            ))}
        </>
    )
}

export default ClasseProfSB