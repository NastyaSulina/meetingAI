import type { Meta, StoryObj } from '@storybook/react'
import { DropDown } from './DropDown'

const meta = {
    title: 'Components/DropDown',
    component: DropDown,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        header: {
            control: 'text',
        },
        number: {
            control: { type: 'range', min: 1, max: 9 },
        },
    },
} satisfies Meta<typeof DropDown>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        header: 'Полная текстовая расшифровка',
        number: 3,
        children: '',
    },
}
