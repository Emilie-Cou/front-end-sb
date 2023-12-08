import {FC, forwardRef} from "react";

interface IPersForm {
    type: string
    className: string
    label: string
    required: boolean
    value: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
}

const Form: FC<IPersForm> = forwardRef<HTMLInputElement, IPersForm>(({ type, className, label, required, value, onChange, onBlur }, ref) => {


    return (
        <>
            <label>
                    {label}
            </label>
            
            <input 
                ref={ref} 
                type={type}
                className={className}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                required={required}
            />
        </>
    )
})

export default Form