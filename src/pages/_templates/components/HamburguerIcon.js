import React, { useState } from 'react'
import './HamburguerIcon.css'

const HamburguerIcon = props => {
    const { barStyle, style } = props
    const [isClosed, setIsClosed] = useState(false)

    return (
        <button
            style={{ ...style }}
            className={`HamburguerIcon ${isClosed ? 'close' : ''}`}
            onClick={() => setIsClosed(!isClosed)}
        >
            <div
                style={{ ...barStyle }}
                className={`HamburguerIcon__Bar ${isClosed ? 'close' : ''}`}
            />
        </button>
    )
}

export default HamburguerIcon