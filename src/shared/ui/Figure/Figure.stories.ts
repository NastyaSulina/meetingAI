import type { Meta, StoryObj } from '@storybook/react'
import { Figure, FigureType } from './Figure'

const meta = {
    title: 'Components/Figure',
    component: Figure,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        fill: {
            control: 'text',
        },
        height: {
            control: { type: 'range', min: 80, max: 400 },
        },
        width: {
            control: { type: 'range', min: 80, max: 400 },
        },
        figureType: {
            control: 'select',
            options: FigureType,
        },
    },
} satisfies Meta<typeof Figure>

export default meta
type Story = StoryObj<typeof meta>

export const Star: Story = {
    args: {
        figureType: FigureType.STAR,
        width: 200,
        height: 200,
        fill: 'linear-gradient(90deg, #FF5924 0%, #FF8F8C 50.69%, #F5C0EE 100%)',
    },
}

export const Arc: Story = {
    args: {
        figureType: FigureType.ARC,
        width: 320,
        height: 160,
        fill: 'black',
    },
}

export const Circles: Story = {
    args: {
        figureType: FigureType.CIRCLES,
        width: 300,
        height: 160,
        fill: 'rgba(234, 255, 106, 1)',
    },
}
