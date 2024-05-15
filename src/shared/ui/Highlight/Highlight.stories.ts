import type { Meta, StoryObj } from '@storybook/react'
import { Highlight, HighlightType, HighlightSize } from './Highlight'

const meta = {
    title: 'Components/Highlight',
    component: Highlight,
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
        highlightType: {
            control: 'select',
            options: HighlightType,
        },
        highlightSize: {
            control: 'select',
            options: HighlightSize,
        },
    },
} satisfies Meta<typeof Highlight>

export default meta
type Story = StoryObj<typeof meta>

export const LittleSize: Story = {
    args: {
        text: 'профессиональное образование',
        isTextColorLight: false,
        withArrow: false,
        highlightType: HighlightType.orangeFill,
        highlightSize: HighlightSize.little,
    },
}

export const DefaultSize: Story = {
    args: {
        text: 'искусство',
        isTextColorLight: false,
        withArrow: false,
        highlightType: HighlightType.greenFill,
        highlightSize: HighlightSize.default,
    },
}
export const Stroke: Story = {
    args: {
        text: 'много онлайн-встреч',
        isTextColorLight: false,
        highlightType: HighlightType.stroke,
        withArrow: false,
    },
}

export const WithArrow: Story = {
    args: {
        text: 'регулярными рабочими встречами',
        isTextColorLight: false,
        highlightType: HighlightType.gradientFill,
        withArrow: true,
    },
}
