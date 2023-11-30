import axios from "axios";

const baseUrl = "http://localhost:3000/prof"

export const getAllProf = () => {
    
    return axios.get(baseUrl)
    
        .then((response) => {
            const profs = response.data.map((prfs: any) => ({
                    id: prfs.idClasse,
                    nom: prfs.nom,
                    desc: prfs.miniDesc,
                    img: prfs.img,
            }));
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