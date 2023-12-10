import { useState } from "react";
import CommentAll from "./commentAll";
import CommentForm from "./commentForm";

function Comment() {

    const [ choice, setChoice ] = useState('')

    return (
        <>
            <h1>Les commentaires</h1>

            <div>
                <button onClick={() => setChoice('all')}>Voir tous les commentaires</button>
                <button onClick={() => setChoice('form')}>Laisser un commentaire</button>
            </div>
            
            <br />

            {choice == 'all' ? <CommentAll /> 
                : choice == 'form' ? <CommentForm />
                    : null
            }
        </>
    )
}

export default Comment