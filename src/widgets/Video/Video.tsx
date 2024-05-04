import React, { FC } from 'react'
import { Player } from 'video-react'
import styles from './Video.module.scss'

export const Video: FC = () => {
    return (
        <div className={styles.root}>
            <Player>
                {/* <Player poster='/assets/poster.png'> */}
                {/* <source src='' /> */}
            </Player>
        </div>
    )
}
