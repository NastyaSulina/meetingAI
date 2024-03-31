import React, { FC } from 'react'
import cn from 'classnames'
import styles from './Highlights.module.scss'

type Props = {
    text?: string
    isTextColorLight?: boolean
    highlightsType: HighlightsType
    withArrow?: boolean
}

export enum HighlightsType {
    stroke = 'stroke',
    greenFill = 'greenFill',
    gradientFill = 'gradientFill',
}

export const Highlights: FC<Props> = ({
    highlightsType,
    text = '',
    isTextColorLight = false,
    withArrow = false,
}) => {
    return (
        <span
            className={cn(
                styles.root,
                styles[highlightsType],
                isTextColorLight ? styles.light : styles.default,
                withArrow && styles.withArrow,
            )}
        >
            {text}
        </span>
    )
}
