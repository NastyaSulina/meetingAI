import React, { FC } from 'react'
import cn from 'classnames'
import styles from './Highlights.module.scss'

type Props = {
    text?: string
    isLight?: boolean
    highlightsType: HighlightsType
}

export enum HighlightsType {
    stroke = 'stroke',
    greenFill = 'greenFill',
    gradientFill = 'gradientFill',
}

export const Highlights: FC<Props> = ({ text = '', highlightsType, isLight = false }) => {
    return (
        <span
            className={cn(
                styles.root,
                styles[highlightsType],
                isLight ? styles.light : styles.default,
            )}
        >
            {text}
        </span>
    )
}
