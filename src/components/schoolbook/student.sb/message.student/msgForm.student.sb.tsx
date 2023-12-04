import { Controller, useForm } from "react-hook-form";
import ComForm from "../../../parts/form/formTextarea";
import Form from "../../../parts/form/form";

function MsgFormStudentSB () {

    const { handleSubmit, control } = useForm()

    const onSubmit = (data : any) => {
        console.log(data);
    }

    return (
        <>
            <h2>Envoyer un message au prof ou à la direction</h2>
            
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

export default MsgFormStudentSB
