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
    },
    args: { onInputChange: fn() },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const InputText: Story = {
    args: {
        label: 'Ваше имя:',
        placeholder: 'Анастасия',
        inputName: 'test-1',
        required: true,
        inputType: InputType.input,
        isWhite: true,
        id: 'test1',
    },
}

export const TextArea: Story = {
    args: {
        label: 'Ваш запрос:',
        placeholder: 'Добрый день...',
        inputName: 'test-2',
        required: true,
        inputType: InputType.textarea,
        isWhite: false,
        id: 'test2',
    },
}
