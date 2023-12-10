import axios from "axios";

const baseUrl = "http://localhost:3000/classe/"

export const getAllClasse = () => {
    
    return axios.get(baseUrl)
    
        .then((response) => {
            const classes = response.data.map((clss: any) => ({
                    id: clss.idClasse,
                    prof: clss.prof.nom,
                    nom: clss.nomClasse,
                    desc: clss.miniDesc,
                    img: clss.img,
            }));
            return classes;
        })

        .catch(function (error) {
            console.error(error);
            throw error
        })

        .finally(function () {
            console.log("It's okay, baby!");
        })  
}

export const getOneClasse = (idClasse : string) => {

    return axios.get(baseUrl + idClasse)

        .then((response) => {
            const classe = {
                id : response.data.idClasse,
                prof: response.data.prof.nom,
                nom: response.data.nomClasse,
                desc: response.data.desc,
                img: response.data.img,
            }
            return classe;
        })

        .catch(function (error) {
            console.log(error);
            throw error
        })

        .finally(function () {
            console.log("It's okay, baby!");
        })  
}