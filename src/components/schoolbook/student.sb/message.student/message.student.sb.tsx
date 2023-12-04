import { useState } from "react";
import MsgFormStudentSB from "./msgForm.student.sb";
import MsgAllStudentSB from "./msgAll.student.sb";

function MessageStudentSB () {

    const [ writeMessage, setWriteMessage ] = useState(true)

    const handleAction = function () {
        setWriteMessage(!writeMessage)
    }

    return (
        <>
            <h1>MessageStudentSB</h1>
            <button onClick={handleAction}>
                {writeMessage ? "Mes messages" : "Envoyer un message?"}
            </button>
            {writeMessage ? <MsgFormStudentSB /> : <MsgAllStudentSB />}
        </>
    )
}

export default MessageStudentSB
