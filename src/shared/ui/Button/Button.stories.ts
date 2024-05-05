import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Button, ButtonType } from './Button'

const meta = {
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        text: {
            control: 'text',
        },
        ariaLabel: {
            control: 'text',
            description: 'ARIA-атрибут для вспомогательных технологий',
        },
        buttonType: {
            control: 'select',
            options: ButtonType,
        },
        isAnimated: {
            control: 'boolean',
        },
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: { onClick: fn() },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Black: Story = {
    args: {
        text: 'Скачать для Zoom Desktop',
        ariaLabel: 'Скачать для Zoom Desktop',
        buttonType: ButtonType.black,
    },
}

export const Animated: Story = {
    args: {
        text: 'Скачать для Zoom Desktop',
        ariaLabel: 'Скачать для Zoom Desktop',
        buttonType: ButtonType.black,
        isAnimated: true,
    },
}

export const White: Story = {
    args: {
        text: 'Отправить',
        ariaLabel: 'Отправить',
        buttonType: ButtonType.white,
    },
}

export const Gradient: Story = {
    args: {
        text: 'Скачать для Zoom Desktop',
        ariaLabel: 'Скачать для Zoom Desktop',
        buttonType: ButtonType.gradient,
    },
}
