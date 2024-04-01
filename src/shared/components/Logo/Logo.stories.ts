import type { Meta, StoryObj } from '@storybook/react'
import { Logo } from './Logo'

const meta = {
    title: 'Components/Logo',
    component: Logo,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        fontSize: { control: { type: 'range', min: 19, max: 200 } },
    },
} satisfies Meta<typeof Logo>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultLogo: Story = {
    args: {
        fontSize: 19.78,
    },
}
