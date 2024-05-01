import React, { FC } from 'react'
import cn from 'classnames'
import styles from './Highlights.module.scss'

type Props = {
    text?: string
    isTextColorLight?: boolean
    highlightsType: HighlightsType
    highlightsSize?: HighlightsSize
    withArrow?: boolean
}

export enum HighlightsType {
    stroke = 'stroke',
    greenFill = 'greenFill',
    gradientFill = 'gradientFill',
}

export enum HighlightsSize {
    default = 'default',
    little = 'little',
}

export const Highlights: FC<Props> = ({
    highlightsType,
    highlightsSize = HighlightsSize.default,
    text = '',
    isTextColorLight = false,
    withArrow = false,
}) => {
    return (
        <span
            className={cn(
                styles.root,
                styles[highlightsType],
                styles[highlightsSize],
                isTextColorLight ? styles.light : styles.dark,
                withArrow && styles.withArrow,
            )}
        >
            {text}
        </span>
    )
}
