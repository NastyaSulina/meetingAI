import React from 'react'
import cn from 'classnames'
import styles from './Skeleton.module.scss'

type Props = {
    width: number
    height: number
    radius?: number
    isDark?: boolean
}

export const Skeleton: React.FC<Props> = ({ width, height, radius = 20, isDark = false }) => {
    return (
        <div
            className={cn(styles.root, isDark && styles.isDark)}
            style={{ width: `${width}px`, height: `${height}px`, borderRadius: `${radius}px` }}
        />
    )
}
