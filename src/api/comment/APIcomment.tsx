import axios from "axios";

const baseUrl = "http://localhost:3000/comment"

export const getAllComment = () => {
    
    return axios.get(baseUrl)
    
        .then((response) => {
            const comments = response.data.map((cmt: any) => ({
                prenom: cmt.prenom,
                content: cmt.content,
            }));
            return comments;
        })

        .catch(function (error) {
            console.log(error);
            throw error
        })

        .finally(function () {
            console.log("It's okay, baby!");
        })  
}

// export const getAllComment = async () => {
//     try {
//         console.log("test");
        
//         const response = await axios.get(baseUrl)
//         console.log("response");
//         console.log(response);
        
//         if (response) {
//             const comments = response.data.map((cmt: any) => ({
//                 prenom: cmt.prenom,
//                 content: cmt.content
//             }))
//             return comments;
//         }
//     } catch (err) {
//         console.error(err)
//     }
// }


export const postComment = (data: any) => {
    
    return axios.post(baseUrl, data)
    
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