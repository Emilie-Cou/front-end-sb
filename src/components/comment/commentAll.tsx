import { useEffect, useState } from "react";
import { getAllComment } from "../../api/comment/APIcomment";


interface CommentProps {
    prenom: string,
    content: string
}
     

function CommentAll() {
    
    const [ comments, setComments ] = useState<CommentProps[]>([])

    const getAll = async () => {
        try {
            const allComments = await getAllComment()
            setComments(allComments)
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
            <h1>Les commentaires</h1>

            {comments.length > 0 ? (
                <div>
                    {comments.map((cmt, index) => (
                        <div key={index}>
                            <h3>{cmt.prenom}</h3>
                            <p>{cmt.content}</p>
                        </div>
                        ))
                    }
                </div>
            ) : (
                <p>Il n'y a pas de message...</p>
            )}
        </>
    )
}

export default CommentAll