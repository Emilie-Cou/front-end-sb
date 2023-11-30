import {FC, forwardRef} from "react";

interface IComForm {
    className: string
    label: string
    required: boolean
}

const ComForm: FC<IComForm> = forwardRef<HTMLInputElement, IComForm>(({ className, label, required}) => {


    return (
        <>
            <label>
                {label}
            </label>
            <br />
            <textarea 
                className={className}
                required={required}
            />
        </>
    )
})

export default ComForm