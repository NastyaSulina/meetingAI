import type { Meta, StoryObj } from '@storybook/react'
import { Eye } from './Eye'

const meta = {
    title: 'Components/Eye',
    component: Eye,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        scale: { control: { type: 'range', min: 0, max: 3, step: 0.1 } },
    },
} satisfies Meta<typeof Eye>

export default meta
type Story = StoryObj<typeof meta>

export const AnimatedEye: Story = {
    args: {
        scale: 1,
    },
}
