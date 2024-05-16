import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'
import { ValidationType } from './Input.config'

const meta = {
    title: 'Components/Input',
    component: Input,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        label: {
            control: 'text',
        },
        placeholder: {
            control: 'text',
        },
        required: {
            control: 'boolean',
        },
        isWhite: {
            control: 'boolean',
        },
        isEnlarged: {
            control: 'boolean',
        },
        defaultValue: {
            control: 'text',
        },
    },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const InputName: Story = {
    args: {
        name: 'name',
        id: 'name',
        label: 'Ваше имя:',
        type: 'text',
        placeholder: '',
        isWhite: true,
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
    },
}

export const TextArea: Story = {
    args: {
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
        isEnlarged: true,
        isWhite: true,
        defaultValue:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
}

export const BlackTextArea: Story = {
    args: {
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
        isEnlarged: true,
        isWhite: false,
        defaultValue:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    parameters: {
        backgrounds: {
            default: 'gray',
            values: [
                {
                    name: 'gray',
                    value: '#111',
                },
            ],
        },
    },
}
