import { Controller, useForm } from "react-hook-form";
import Form from "../parts/form/form";
import ComForm from "../parts/form/formTextarea";
import { postComment } from "../../api/comment/APIcomment";
import { useAppDispatch } from "../../store/hook";
import { setComment } from "../../store/slices/comment.slice";

function CommentForm() {

    const { handleSubmit, control } = useForm()
    const dispatch = useAppDispatch()

    const onSubmit = async (data: any) => {
        try {
            await postComment(data)
            data = { choice : "all" }
            dispatch(setComment(data))
        } catch (error) {
            console.error(error)
        }
    }
    
    return (
        <>
            <h1>Formulaire de commentaire</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="commentForm">
                <div>
                    <Controller
                        control={control}
                        name="prenom"
                        render={({field : {value, onBlur, onChange}}) => (
                            <Form
                                // {...field}
                                label="Prénom: "
                                type="text"
                                className="commentFormInput"
                                value={value}
                                onBlur={onBlur}
                                onChange={onChange}
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
                        render={({field : {value, onBlur, onChange}}) => (
                            <ComForm
                                // {...field}
                                label="Ecris ton message: "
                                className="commentFormInput"
                                value={value}
                                onBlur={onBlur}
                                onChange={onChange}
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