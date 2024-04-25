import React, { FC } from 'react'
import { Player } from 'video-react'

export const Video: FC = () => {
    return <Player playsInline poster='/assets/poster.png' src='/' />
}
