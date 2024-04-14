import React, { useState, FC } from 'react'
import styles from './Input.module.scss'

type Props = {
    label?: string
    placeholder?: string
    inputName: string
    inputType: InputType
    required: boolean
}

export enum InputType {
    input = 'input',
    textarea = 'textarea',
}

function useInput(defaultValue = '') {
    const [value, setValue] = useState(defaultValue)

    function onChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setValue(e.target.value)
    }

    return {
        value,
        onChange,
    }
}

export const Input: FC<Props> = ({
    label = '',
    placeholder = '',
    inputName,
    inputType,
    required,
}) => {
    const inputProps = useInput()

    return (
        <div className={styles.root}>
            <label className={styles.label}>
                <span>{label}</span>

                {inputType === InputType.input ? (
                    <input
                        {...inputProps}
                        placeholder={placeholder}
                        name={inputName}
                        type='text'
                        required={required}
                    />
                ) : (
                    <textarea
                        {...inputProps}
                        placeholder={placeholder}
                        name={inputName}
                        required={required}
                    />
                )}
            </label>
        </div>
    )
}
