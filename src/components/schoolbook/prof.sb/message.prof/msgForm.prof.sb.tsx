import { Controller, useForm } from "react-hook-form";
import Form from "../../../parts/form/form";
import ComForm from "../../../parts/form/formTextarea";
import { useAppDispatch, useAppSelector } from "../../../../store/hook";
import { postMsg } from "../../../../api/schoolbook/APIprof.sb/msgAPIprof.sb";
import { setComment } from "../../../../store/slices/comment.slice";

function MsgFormProfSB () {

    const { handleSubmit, control } = useForm()
    const id = useAppSelector(state => state.connect.idClasse)
    const dispatch = useAppDispatch()

    const onSubmit = async (data : any) => {
        try {
            data.classe = id
            await postMsg(data)
            data = { choice : "all"}
            dispatch(setComment(data))
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <h2>Envoyer un message à un élève ou à la direction</h2>
            
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <Controller
                        control={control}
                        name="prenom"
                        render={({field}) => (
                            <Form
                                {...field}
                                label="Prénom: "
                                type="text"
                                className="msgForm"
                                required={true}
                            />
                        )}
                    />
                </div>
                <br />
                <div>
                    <Controller
                        control={control}
                        name="content"
                        render={({field}) => (
                            <ComForm
                                {...field}
                                label="Ecris ton message: "
                                className="msgForm"
                                required={true}
                                cols={50}
                                rows={5 }
                            />
                        )}
                    />
                </div>
                <div>
                    <button type="submit">Envoyer</button>
                </div>
                <br />
            </form>
        </>
    )
}

export default MsgFormProfSB
