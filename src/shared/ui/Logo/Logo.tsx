import * as React from 'react'
import cn from 'classnames'
import styles from './Logo.module.scss'

type Props = {
    fontSize?: number
    isWhite?: boolean
}

export const Logo: React.FC<Props> = ({ fontSize = 19.78, isWhite = false }) => {
    return (
        <a
            className={cn(styles.root, isWhite && styles.isWhite)}
            data-test-id='logo'
            style={{ fontSize: `${fontSize}px` }}
            href='/'
        >
            Points
        </a>
    )
}
