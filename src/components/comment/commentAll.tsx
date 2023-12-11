import { useEffect, useState } from "react";
import { getAllComment } from "../../api/comment/APIcomment";
import './comment.scss'


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
                <div className="allComment">
                    {comments.map((cmt, index) => (
                        <div key={index} className="afficheComment">
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