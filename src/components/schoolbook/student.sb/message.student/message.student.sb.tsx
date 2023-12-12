import { useEffect } from "react";
import MsgFormStudentSB from "./msgForm.student.sb";
import MsgAllStudentSB from "./msgAll.student.sb";
import { useAppDispatch, useAppSelector } from "../../../../store/hook";
import { setComment } from "../../../../store/slices/comment.slice";

function MessageStudentSB () {

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
            <h1>MessageStudentSB</h1>
            <h2>Ici, tu peux consulter tes messages ou en envoyer.</h2>

            <button onClick={() => onClick("form")}>
                Envoyer un message?
            </button>
            <button onClick={() => onClick("all")}>
                Mes messages
            </button>

            <br /> <br />

            { choice == "form"  ? 
                <MsgFormStudentSB />
                : choice == "all" ?
                    <MsgAllStudentSB />
                    : null
            }
        </>
    )
}

export default MessageStudentSB