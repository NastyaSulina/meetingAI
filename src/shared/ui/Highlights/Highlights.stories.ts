import type { Meta, StoryObj } from '@storybook/react'
import { Highlights, HighlightsType } from './Highlights'

const meta = {
    title: 'Components/Highlights',
    component: Highlights,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        text: {
            control: 'text',
        },
        isTextColorLight: {
            control: 'boolean',
        },
        withArrow: {
            control: 'boolean',
        },
        highlightsType: {
            control: 'select',
            options: HighlightsType,
        },
    },
} satisfies Meta<typeof Highlights>

export default meta
type Story = StoryObj<typeof meta>

export const GreenFill: Story = {
    args: {
        text: 'справиться с этой проблемой',
        isTextColorLight: false,
        highlightsType: HighlightsType.greenFill,
        withArrow: false,
    },
}

export const Stroke: Story = {
    args: {
        text: 'много онлайн-встреч',
        isTextColorLight: false,
        highlightsType: HighlightsType.stroke,
        withArrow: false,
    },
}

export const GradientFill: Story = {
    args: {
        text: 'регулярными рабочими встречами',
        isTextColorLight: true,
        highlightsType: HighlightsType.gradientFill,
        withArrow: false,
    },
}

export const WithArrow: Story = {
    args: {
        text: 'регулярными рабочими встречами',
        isTextColorLight: false,
        highlightsType: HighlightsType.gradientFill,
        withArrow: true,
    },
}
