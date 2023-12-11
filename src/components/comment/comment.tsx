import CommentAll from "./commentAll";
import CommentForm from "./commentForm";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { setComment } from "../../store/slices/comment.slice";

function Comment() {

    const dispatch = useAppDispatch()
    const choice = useAppSelector(state => state.comment.choice)

    const onClick = (value : any) => {
        const data = {choice : value}
        dispatch(setComment(data))
    }

    return (
        <>
            <h1>Les commentaires</h1>

            <div>
                <button onClick={() => onClick("all")}>Voir tous les commentaires</button>
                <button onClick={() => onClick('form')}>Laisser un commentaire</button>
            </div>
            
            <br />

            {choice == 'all' ? <CommentAll /> 
                : choice == 'form' ? <CommentForm />
                    : <CommentAll />
            }
        </>
    )
}

export default Comment