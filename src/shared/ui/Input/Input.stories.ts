import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Input, InputType } from './Input'

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
        inputType: {
            control: 'select',
            options: InputType,
        },
        isWhite: {
            control: 'boolean',
        },
        isEnlarged: {
            control: 'boolean',
        },
        value: {
            control: 'text',
        },
    },
    args: { onInputChange: fn() },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const InputText: Story = {
    args: {
        label: 'Ваш e-mail:',
        placeholder: 'email@yandex.ru',
        inputName: 'test-1',
        required: true,
        inputType: InputType.input,
        isWhite: true,
        id: 'test1',
        type: 'email',
    },
}

export const TextArea: Story = {
    args: {
        label: 'Ваш запрос:',
        placeholder: 'Добрый день...',
        inputName: 'test-2',
        required: true,
        inputType: InputType.textarea,
        isWhite: true,
        id: 'test2',
        isEnlarged: true,
        value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
}

export const BlackTextArea: Story = {
    args: {
        label: 'Ваш запрос:',
        placeholder: 'Добрый день...',
        inputName: 'test-3',
        required: true,
        inputType: InputType.textarea,
        isWhite: false,
        id: 'test3',
        isEnlarged: false,
        value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
}
