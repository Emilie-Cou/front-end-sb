import { useForm, Controller } from "react-hook-form";
import Form from "../parts/form/form";

function ConnectForm() {
    
    const { handleSubmit, control } = useForm()

    const onSubmit = (data: any) => {
        console.log(data)
    }    

    return (
        <>
            <h1>Formulaire de connexion</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="connectForm">
                <div>
                    <Controller
                        control={control}
                        name='user'
                        render={({field}) => (
                            <Form
                                {...field}
                                label="Nom d'utilisateur: "
                                type="text"
                                className="connectFormInput"
                                required={true}
                            />
                        )}
                    />
                </div>
                <br />
                <div>
                    <Controller
                        control={control}
                        name='password'
                        render={({field}) => (
                            <Form
                                {...field}
                                label="Mot de passe: "
                                type="password"
                                className="connectFormInput"
                                required={true}
                            />
                        )}
                    />
                </div>
                <br />                
                <div>
                    <button type="submit">Envoyer</button>
                </div>
                <br />
            </form> 
            <br />
        </>
    )
}

export default ConnectForm
