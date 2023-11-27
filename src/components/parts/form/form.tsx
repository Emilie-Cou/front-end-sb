import {FC, forwardRef} from "react";

interface IPersForm {
    type: string
    className: string
    label: string
    required: boolean
}

const Form: FC<IPersForm> = forwardRef<HTMLInputElement, IPersForm>(({ type, className, label, required}, ref) => {


    return (
        <>
            <label>
                    {label}
            </label>

            <input 
                ref={ref} 
                type={type}
                className={className}
                required={required}
            />
        </>
    )
})

export default Form