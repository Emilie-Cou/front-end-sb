import { useState } from "react";
import MsgFormProfSB from "./msgForm.prof.sb";
import MsgAllProfSB from "./msgAll.prof.sb";

function MessageProfSB () {

    const [ writeMessage, setWriteMessage ] = useState<boolean>()

    return (
        <>
            <h1>MessageProfSB</h1>
            <h2>Ici, tu peux consulter tes messages ou en envoyer.</h2>

            <button onClick={() => setWriteMessage(true)}>
                Envoyer un message?
            </button>
            <button onClick={() => setWriteMessage(false)}>
                Mes messages
            </button>

            <br /> <br />

            { writeMessage == true ? 
                <MsgFormProfSB />
                : writeMessage == false ?
                    <MsgAllProfSB />
                    : null
            }
        </>
    )
}

export default MessageProfSB