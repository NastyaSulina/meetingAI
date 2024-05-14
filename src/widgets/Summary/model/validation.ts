import { ValidationType } from '@/shared/ui/Input/model/validation'

export const summaryValidation = {
    label: '',
    multiline: true,
    id: 'summary',
    name: 'summary',
    placeholder: '',
    isEnlarged: true,
    isWhite: true,
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