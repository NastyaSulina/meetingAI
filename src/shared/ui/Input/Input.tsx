import React from 'react'
import cn from 'classnames'
import styles from './Input.module.scss'

export enum InputType {
    input = 'input',
    textarea = 'textarea',
}

type Props = {
    inputType: InputType
    label: string
    inputName: string
    required?: boolean
    value?: string
    onInputChange?: (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        inputName: string,
    ) => void
    placeholder?: string
    id?: string
    type?: string
    isWhite?: boolean
    readOnly?: boolean
    isEnlarged?: boolean
} & React.InputHTMLAttributes<HTMLInputElement> &
    React.TextareaHTMLAttributes<HTMLTextAreaElement>

export const Input: React.FC<Props> = ({
    inputType,
    label = '',
    inputName,
    required,
    onInputChange,
    placeholder,
    id,
    type,
    isWhite,
    isEnlarged,
    ...inputProps
}) => {
    return (
        <div
            className={cn(styles.root, isWhite && styles.isWhite, isEnlarged && styles.isEnlarged)}
        >
            <label className={styles.label} htmlFor={inputName}>
                {label && <span>{label}</span>}

                {inputType === InputType.input ? (
                    <input
                        {...inputProps}
                        placeholder={placeholder}
                        name={inputName}
                        type='text'
                        required={required}
                        onChange={(e) => {
                            onInputChange(e, inputName)
                        }}
                    />
                ) : (
                    <textarea
                        {...inputProps}
                        placeholder={placeholder}
                        name={inputName}
                        required={required}
                        onChange={(e) => {
                            onInputChange(e, inputName)
                        }}
                    />
                )}
            </label>
        </div>
    )
}
