import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { IconButton, IconButtonType } from './IconButton'

const meta = {
    title: 'Components/IconButton',
    component: IconButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        ariaLabel: {
            control: 'text',
            description: 'ARIA-атрибут для вспомогательных технологий',
        },
        iconButtonType: {
            control: 'select',
            options: IconButtonType,
        },
    },
    args: { onClick: fn() },
} satisfies Meta<typeof IconButton>

export default meta
type Story = StoryObj<typeof meta>

export const CopyButton: Story = {
    args: {
        ariaLabel: 'Скопировать резюме встречи в буфер обмена',
        iconButtonType: IconButtonType.copy,
    },
}

export const EditButton: Story = {
    args: {
        ariaLabel: 'Редактировать резюме встречи',
        iconButtonType: IconButtonType.edit,
    },
}

export const ResetButton: Story = {
    args: {
        ariaLabel: 'Вернуться к оригинальному тексту резюме встречи',
        iconButtonType: IconButtonType.reset,
    },
}
