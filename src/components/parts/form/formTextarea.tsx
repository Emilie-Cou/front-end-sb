import {FC, forwardRef} from "react";

interface IComForm {
    className: string
    label: string
    required: boolean
    cols: number
    rows: number
}

const ComForm: FC<IComForm> = forwardRef<HTMLInputElement, IComForm>(({ className, label, required, cols, rows}) => {


    return (
        <>
            <label>
                {label}
            </label>
            <br />
            <textarea 
                className={className}
                required={required}
                cols={cols}
                rows={rows}
            />
        </>
    )
})

export default ComForm