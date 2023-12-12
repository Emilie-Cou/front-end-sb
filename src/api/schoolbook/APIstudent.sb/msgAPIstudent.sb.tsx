import axios from "axios";

const baseUrl = "http://localhost:3000/msg-parent"

export const getAllMsgByIdClasse = (idClasse : any) => {

    return axios.post(baseUrl, idClasse)
    
    .then((response) => {
        const messages = response.data.map((msg : any) => ({
            prenom: msg.prenom,
            content: msg.content,
        }))
        return messages
    })
    
    .catch(function (error) {
            console.error(error)
            throw error
        })

    .finally(function () {
        console.log("It's okay, baby!")
    })
}


export const postMsg = (data: any) => {
    
    return axios.post(`${baseUrl}/msg`, data)
    
        .then((response) => {
            console.log("response ==== " , response)
        })
        
        .catch(function (error) {
            console.error("error === " , error);
            throw error
        })

        .finally(function () {
            console.log("It's okay, baby!");
        })  
}