import { useState } from "react";
import MsgFormProfSB from "./msgForm.prof.sb";
import MsgAllProfSB from "./msgAll.prof.sb";

function MessageProfSB () {

    const [ writeMessage, setWriteMessage ] = useState(true)

    const handleAction = function () {
        setWriteMessage(!writeMessage)
    }

    return (
        <>
            <h1>MessageProfSB</h1>
            <button onClick={handleAction}>
                {writeMessage ? "Mes messages" : "Envoyer un message?"}
            </button>
            {writeMessage ? <MsgFormProfSB /> : <MsgAllProfSB />}
        </>
    )
}

export default MessageProfSB