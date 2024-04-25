import React, { FC } from 'react'
import cn from 'classnames'
import styles from './Figure.module.scss'

type Props = {
    figureType: FigureType
    width: number
    height: number
    fill: string
    children?: React.JSX.Element | React.JSX.Element[]
}

export enum FigureType {
    ARC = 'arc',
    STAR = 'star',
    CIRCLES = 'circles',
}

export const Figure: FC<Props> = ({ figureType, width, height, fill, children }) => {
    return (
        <div
            className={cn(styles.root, styles[figureType])}
            style={{ width: `${width}px`, height: `${height}px`, background: fill }}
            aria-hidden
        >
            {children}
        </div>
    )
}
