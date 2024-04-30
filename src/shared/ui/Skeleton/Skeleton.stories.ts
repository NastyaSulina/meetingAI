import type { Meta, StoryObj } from '@storybook/react'
import { Skeleton } from './Skeleton'

const meta = {
    title: 'Components/Skeleton',
    component: Skeleton,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        height: { control: { type: 'range', min: 10, max: 200 } },
        width: { control: { type: 'range', min: 10, max: 200 } },
        radius: { control: { type: 'range', min: 0, max: 200 } },
    },
} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

export const SkeletonDefault: Story = {
    args: {
        width: 170,
        height: 36,
        radius: 20,
    },
}

export const SkeletonDark: Story = {
    args: {
        width: 400,
        height: 120,
        radius: 20,
        isDark: true,
    },
}
