import React, { FC } from 'react'
import styles from './Text.module.scss'

type Props = {
    text?: string
    textType: TextType
    children?: React.JSX.Element | React.JSX.Element[]
}

export enum TextType {
    default = 'default',
    header = 'header',
    subhead = 'subhead',
    additionalText = 'additionalText',
    captions = 'captions',
    bodyParagraph = 'bodyParagraph',
    bPHighlights = 'bPHighlights',
}

export const Text: FC<Props> = ({ text = '', textType, children }) => {
    return <span className={(styles.root, styles[textType])}>{children ?? text}</span>
}
