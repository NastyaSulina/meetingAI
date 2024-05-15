import React, { FC } from 'react'
import cn from 'classnames'
import styles from './Highlight.module.scss'

type Props = {
    text?: string
    isTextColorLight?: boolean
    highlightType: HighlightType
    highlightSize?: HighlightSize
    withArrow?: boolean
}

export enum HighlightType {
    stroke = 'stroke',
    greenFill = 'greenFill',
    gradientFill = 'gradientFill',
    orangeFill = 'orangeFill',
}

export enum HighlightSize {
    default = 'default',
    little = 'little',
}

export const Highlight: FC<Props> = ({
    highlightType,
    highlightSize = HighlightSize.default,
    text = '',
    isTextColorLight = false,
    withArrow = false,
}) => {
    return (
        <span
            className={cn(
                styles.root,
                styles[highlightType],
                styles[highlightSize],
                isTextColorLight ? styles.light : styles.dark,
                withArrow && styles.withArrow,
            )}
        >
            {text}
        </span>
    )
}
