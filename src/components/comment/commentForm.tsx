import { Controller, useForm } from "react-hook-form";
import Form from "../parts/form/form";

function CommentForm() {

    const { handleSubmit, control } = useForm()

    const onSubmit = (data: any) => {
        console.log(data)
    }
    
    return (
        <>
            <h1>Formulaire de commentaire</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="commentForm">
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

                <Controller
                    control={control}
                    name="content"
                    render={({field}) => (
                        <Form
                            {...field}
                            label="Ecris ton message: "
                            type="text"
                            className="commentFormInput"
                            required={true}
                        />
                    )}
                />

                <button type="submit">Envoyer</button>
            </form>
        </>
    )
}

export default CommentForm