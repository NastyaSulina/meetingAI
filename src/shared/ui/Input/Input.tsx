import React, { FC } from 'react'
import cn from 'classnames'
import { FieldValues, RegisterOptions, useFormContext } from 'react-hook-form'
import styles from './Input.module.scss'
import { findInputError, isFormInvalid } from './Input.config'

export type Props = {
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
    const { register, formState } = useFormContext() ?? {}
    const { errors } = formState ?? {}

    // TODO: Временное решение для storybook
    const inputErrors = register ? findInputError(errors, name) : {}
    const isInvalid = register ? isFormInvalid(inputErrors) : true
    const inputProps = register ? register(name, validation) : {}

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
                    {...inputProps}
                />
            ) : (
                <input id={id} type={type} placeholder={placeholder} {...inputProps} />
            )}

            {isInvalid && <p className={styles.error}>{inputErrors?.error?.message}</p>}
        </div>
    )
}
