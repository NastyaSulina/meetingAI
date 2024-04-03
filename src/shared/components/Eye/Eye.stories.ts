import type { Meta, StoryObj } from '@storybook/react'
import { Eye } from './Eye'

const meta = {
    title: 'Components/Eye',
    component: Eye,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof Eye>

export default meta
type Story = StoryObj<typeof meta>

export const AnimatedEye: Story = {
    args: {},
}
