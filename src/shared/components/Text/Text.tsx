import React, { FC } from 'react'
import styles from './Text.module.scss'

type Props = {
    text?: string
    textType: TextType
}

export enum TextType {
    header = 'header',
    subhead = 'subhead',
    additionalText = 'additionalText',
    captions = 'captions',
    bodyParagraph = 'bodyParagraph',
    bPHighlights = 'bPHighlights',
}

export const Text: FC<Props> = ({ text = '', textType }) => {
    return <span className={(styles.root, styles[textType])}>{text}</span>
}
