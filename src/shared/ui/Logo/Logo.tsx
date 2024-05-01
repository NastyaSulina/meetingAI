import * as React from 'react'
import cn from 'classnames'
import { Link } from 'react-router-dom'
import styles from './Logo.module.scss'

type Props = {
    fontSize?: number
    isWhite?: boolean
}

export const Logo: React.FC<Props> = ({ fontSize = 19.78, isWhite = false }) => {
    return (
        <Link
            className={cn(styles.root, isWhite && styles.isWhite)}
            style={{ fontSize: `${fontSize}px` }}
            // TODO: Добавить навигацию на главную
            to='/'
        >
            Points
        </Link>
    )
}
