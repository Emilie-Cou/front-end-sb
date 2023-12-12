import MsgFormProfSB from "./msgForm.prof.sb";
import MsgAllProfSB from "./msgAll.prof.sb";
import { useAppDispatch, useAppSelector } from "../../../../store/hook";
import { setComment } from "../../../../store/slices/comment.slice";
import { useEffect } from "react";

function MessageProfSB () {

    const dispatch = useAppDispatch()
    const choice = useAppSelector(state => state.comment.choice)

    const onClick = (value : any) => {
        const data = {choice : value}
        dispatch(setComment(data))
    }

    useEffect(() => {
        const data = {choice : ""}
        dispatch(setComment(data))
    }, [])

    return (
        <>
            <h1>MessageProfSB</h1>
            <h2>Ici, tu peux consulter tes messages ou en envoyer.</h2>

            <button onClick={() => onClick("form")}>
                Envoyer un message?
            </button>
            <button onClick={() => onClick("all")}>
                Mes messages
            </button>

            <br /> <br />

            { choice == "form" ? 
                <MsgFormProfSB />
                : choice == "all" ?
                    <MsgAllProfSB />
                    : null
            }
        </>
    )
}

export default MessageProfSB