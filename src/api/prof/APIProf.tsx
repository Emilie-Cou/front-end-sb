import axios from "axios";

const baseUrl = "http://localhost:3000/prof"

export const getAllProf = () => {
    
    return axios.get(baseUrl)
    
        .then((response) => {
            console.log("response dans apiprof ===== " , response);

            const profs = response.data.map((prfs: any) => ({
                    id: prfs.idProf,
                    idClasse: prfs.classe.idClasse,
                    nom: prfs.nom,
                    img: prfs.img,
            }));
            console.log("profs dans apiprof ===== " , profs);

            return profs;
        })

        .catch(function (error) {
            console.log(error);
            throw error
        })

        .finally(function () {
            console.log("It's okay, baby!");
        })  
}