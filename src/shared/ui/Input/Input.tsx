import React, { FC } from 'react'
import cn from 'classnames'
import { FieldValues, RegisterOptions, useFormContext } from 'react-hook-form'
import styles from './Input.module.scss'
import { findInputError, isFormInvalid } from './model/validation'

type Props = {
    label: string
    placeholder?: string
    id: string
    type?: string
    name: string
    required?: boolean
    defaultValue?: string
    validation?: RegisterOptions<FieldValues, string>
    readOnly?: boolean
    // Отображение
    multiline?: boolean
    isWhite?: boolean
    isEnlarged?: boolean
}

export const Input: FC<Props> = ({
    name,
    label,
    type,
    id,
    placeholder,
    validation,
    multiline,
    isWhite,
    isEnlarged,
    readOnly = false,
    defaultValue,
}) => {
    const {
        register,
        formState: { errors },
    } = useFormContext()

    const inputErrors = findInputError(errors, name)
    const isInvalid = isFormInvalid(inputErrors)

    return (
        <div
            className={cn(styles.root, isWhite && styles.isWhite, isEnlarged && styles.isEnlarged)}
        >
            {label && (
                <label htmlFor={id} className={styles.label}>
                    {label}
                </label>
            )}

            {multiline ? (
                <textarea
                    id={id}
                    placeholder={placeholder}
                    readOnly={readOnly}
                    defaultValue={defaultValue}
                    {...register(name, validation)}
                />
            ) : (
                <input
                    id={id}
                    type={type}
                    placeholder={placeholder}
                    {...register(name, validation)}
                />
            )}

            {isInvalid && <p className={styles.error}>{inputErrors?.error?.message}</p>}
        </div>
    )
}
