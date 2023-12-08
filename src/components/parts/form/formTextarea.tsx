import {FC, forwardRef} from "react";

interface IComForm {
    className: string
    label: string
    required: boolean
    cols: number
    rows: number
    value: string
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
    onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void
}

const ComForm: FC<IComForm> = forwardRef<HTMLTextAreaElement, IComForm>(({ className, label, required, cols, rows, value, onChange, onBlur }) => {


    return (
        <>
            <label>
                {label}
            </label>
            <br />
            <textarea 
                className={className}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                required={required}
                cols={cols}
                rows={rows}
            />
        </>
    )
})

export default ComForm