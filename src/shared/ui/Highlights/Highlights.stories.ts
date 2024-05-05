import type { Meta, StoryObj } from '@storybook/react'
import { Highlights, HighlightsType, HighlightsSize } from './Highlights'

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
        highlightsSize: {
            control: 'select',
            options: HighlightsSize,
        },
    },
} satisfies Meta<typeof Highlights>

export default meta
type Story = StoryObj<typeof meta>

export const LittleSize: Story = {
    args: {
        text: 'профессиональное образование',
        isTextColorLight: false,
        withArrow: false,
        highlightsType: HighlightsType.orangeFill,
        highlightsSize: HighlightsSize.little,
    },
}

export const DefaultSize: Story = {
    args: {
        text: 'искусство',
        isTextColorLight: false,
        withArrow: false,
        highlightsType: HighlightsType.greenFill,
        highlightsSize: HighlightsSize.default,
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

export const WithArrow: Story = {
    args: {
        text: 'регулярными рабочими встречами',
        isTextColorLight: false,
        highlightsType: HighlightsType.gradientFill,
        withArrow: true,
    },
}
