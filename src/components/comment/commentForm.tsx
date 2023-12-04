import { Controller, useForm } from "react-hook-form";
import Form from "../parts/form/form";
import ComForm from "../parts/form/formTextarea";

function CommentForm() {

    const { handleSubmit, control } = useForm()

    const onSubmit = (data: any) => {
        console.log(data)
    }
    
    return (
        <>
            <h1>Formulaire de commentaire</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="commentForm">
                <div>
                    <Controller
                        control={control}
                        name="user"
                        render={({field}) => (
                            <Form
                                {...field}
                                label="Prénom: "
                                type="text"
                                className="commentFormInput"
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
                            className="commentFormInput"
                            required={true}
                            cols={50}
                            rows={5}
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

export default CommentForm