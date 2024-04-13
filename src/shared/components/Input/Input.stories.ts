import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'

const meta = {
    title: 'Components/Input',
    component: Input,
    parameters: {
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        label: {
            control: 'text',
        },
        placeholder: {
            control: 'text',
        },
    },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const InputDefault: Story = {
    args: {
        label: 'Ваше имя:',
        placeholder: 'Анастасия',
        inputName: 'test-input',
    },
}
