import axios from "axios";

const baseUrl = "http://localhost:3000/classe"

export const getAllClasse = () => {
    
    return axios.get(baseUrl)
    
        .then((response) => {
            const classes = response.data.map((cls: any) => ({
                    id: cls.idClasse,
                    nom: cls.nomClasse,
                    desc: cls.miniDesc,
                    img: cls.img,
            }));
            return classes;
        })

        .catch(function (error) {
            console.log(error);
            throw error
        })

        .finally(function () {
            console.log("It's okay, baby!");
        })  
}