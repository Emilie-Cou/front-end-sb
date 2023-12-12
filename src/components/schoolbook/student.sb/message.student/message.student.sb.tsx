import { useState } from "react";
import MsgFormStudentSB from "./msgForm.student.sb";
import MsgAllStudentSB from "./msgAll.student.sb";

function MessageStudentSB () {

    const [ writeMessage, setWriteMessage ] = useState<boolean>()

    return (
        <>
            <h1>MessageStudentSB</h1>
            <h2>Ici, tu peux consulter tes messages ou en envoyer.</h2>

            <button onClick={() => setWriteMessage(true)}>
                Envoyer un message?
            </button>
            <button onClick={() => setWriteMessage(false)}>
                Mes messages
            </button>

            <br /> <br />

            { writeMessage == true ? 
                <MsgFormStudentSB />
                : writeMessage == false ?
                    <MsgAllStudentSB />
                    : null
            }
        </>
    )
}

export default MessageStudentSB