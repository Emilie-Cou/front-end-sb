import axios from "axios";

export const getStudentClasse = (idClasse : string) => {
    
    return axios.get(`http://localhost:3000/student/classe/${idClasse}`)
    
        .then((response) => {
            const stuCls = response.data.map((stu: any) => ({
                    idStudent: stu.idStudent,
                    psw1: stu.psw1,
                    psw2 : stu.psw2,
                    nom: stu.nom,
                    prenom: stu.prenom,
                    email1: stu.email1,
                    email2: stu.email2,
                    parentSep: stu.parentsSepares
            }));
            return stuCls;
        })

        .catch(function (error) {
            console.error(error);
            throw error
        })

        .finally(function () {
            console.log("It's okay, baby!");
        })  
}