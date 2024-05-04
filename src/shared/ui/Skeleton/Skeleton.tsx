import React from 'react'
import cn from 'classnames'
import styles from './Skeleton.module.scss'

type Props = {
    width?: number
    height: number
    radius?: number
    isDark?: boolean
    isFullScreen?: boolean
}

export const Skeleton: React.FC<Props> = ({
    width = 0,
    height,
    radius = 20,
    isDark = false,
    isFullScreen = false,
}) => {
    return (
        <div
            className={cn(styles.root, isDark && styles.isDark)}
            style={{
                width: isFullScreen ? '100%' : `${width}px`,
                height: `${height}px`,
                borderRadius: `${radius}px`,
            }}
        />
    )
}
