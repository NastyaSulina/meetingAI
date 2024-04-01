import * as React from 'react'
import styles from './Logo.module.scss'

type Props = {
    fontSize?: number
}

export const Logo: React.FC<Props> = ({ fontSize = 19.78 }) => {
    return (
        <div className={styles.root} style={{ fontSize: `${fontSize}px` }}>
            Points
        </div>
    )
}
