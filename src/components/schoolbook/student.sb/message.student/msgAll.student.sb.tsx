import { useEffect, useState } from "react";
import { getAllMsgByIdClasse } from "../../../../api/schoolbook/APIstudent.sb/msgAPIstudent.sb";

interface MessageProps {
    prenom : string,
    content : string,
}

function MsgAllStudentSB () {

    const [ messages, setMessages ] = useState<MessageProps[]>([])

    const getAllByIdClasse = async (idClasse : {idClasse : string}) => {
        try {
            const allMsg = await getAllMsgByIdClasse(idClasse)
            setMessages(allMsg)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getAllByIdClasse({idClasse : "P1A"})
    }, [])

    return (
        <>
            <h1>Mes messages</h1>

            {messages.length > 0 ? (
                <div className="allComment">
                    {messages.map((msg, index) => (
                        <div key={index} className="afficheComment">
                            <h3>{msg.prenom}</h3>
                            <p>{msg.content}</p>
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

export default MsgAllStudentSB