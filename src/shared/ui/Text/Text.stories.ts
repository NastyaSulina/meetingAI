import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextType } from './Text'

const meta = {
    title: 'Components/Text',
    component: Text,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        text: {
            control: 'text',
        },
        textType: {
            control: 'select',
            options: TextType,
        },
    },
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const Header: Story = {
    args: {
        text: 'По итогам встречи с Points вы получите информацию о прошедшем zoom звонке. Перетаскивайте карточки, чтобы узнать, что входит в резюме каждой конференции!',
        textType: TextType.header,
    },
}

export const Subhead: Story = {
    args: {
        text: 'По итогам встречи с Points вы получите информацию о прошедшем zoom звонке. Перетаскивайте карточки, чтобы узнать, что входит в резюме каждой конференции!',
        textType: TextType.subhead,
    },
}

export const BPHighlights: Story = {
    args: {
        text: 'По итогам встречи с Points вы получите информацию о прошедшем zoom звонке. Перетаскивайте карточки, чтобы узнать, что входит в резюме каждой конференции!',
        textType: TextType.bPHighlights,
    },
}

export const BodyParagraph: Story = {
    args: {
        text: 'По итогам встречи с Points вы получите информацию о прошедшем zoom звонке. Перетаскивайте карточки, чтобы узнать, что входит в резюме каждой конференции!',
        textType: TextType.bodyParagraph,
    },
}

export const Captions: Story = {
    args: {
        text: 'По итогам встречи с Points вы получите информацию о прошедшем zoom звонке. Перетаскивайте карточки, чтобы узнать, что входит в резюме каждой конференции!',
        textType: TextType.captions,
    },
}

export const AdditionalText: Story = {
    args: {
        text: 'По итогам встречи с Points вы получите информацию о прошедшем zoom звонке. Перетаскивайте карточки, чтобы узнать, что входит в резюме каждой конференции!',
        textType: TextType.additionalText,
    },
}
