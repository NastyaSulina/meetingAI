export function findInputError(errors: Record<string, any>, name: string): Record<string, any> {
    const filtered = Object.keys(errors)
        .filter((key: string) => key.includes(name))
        .reduce((cur: Record<string, any>, key: string) => {
            return Object.assign(cur, { error: errors[key] })
        }, {})

    return filtered
}

export const isFormInvalid = (err: Record<string, any>): boolean => {
    if (Object.keys(err).length > 0) return true

    return false
}

export enum ValidationType {
    Required = 'required',
    MaxLength = 'maxLength',
    MinLength = 'minLength',
    Pattern = 'pattern',
    Min = 'min',
}

export const nameValidation = {
    name: 'name',
    id: 'name',
    label: 'Ваше имя:',
    type: 'text',
    placeholder: '',
    validation: {
        [ValidationType.Required]: {
            value: true,
            message: 'Это поле обязательно для заполнения',
        },
        [ValidationType.MaxLength]: {
            value: 30,
            message: 'Имя не должно превышать 30 символов',
        },
    },
}

export const letterValidation = {
    label: 'Ваш запрос:',
    multiline: true,
    id: 'letter',
    name: 'letter',
    placeholder: '',
    validation: {
        [ValidationType.Required]: {
            value: true,
            message: 'Это поле обязательно для заполнения',
        },
        [ValidationType.MaxLength]: {
            value: 1000,
            message: 'Запрос не должен превышать 1000 символов',
        },
    },
}

export const emailValidation = {
    label: 'Ваш e-mail:',
    name: 'email',
    type: 'email',
    id: 'email',
    placeholder: '',
    validation: {
        [ValidationType.Required]: {
            value: true,
            message: 'Это поле обязательно для заполнения',
        },
        [ValidationType.Pattern]: {
            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'Введите корректный e-mail',
        },
    },
}
