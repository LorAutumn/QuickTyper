import React, { useContext } from 'react'
import { CountContext } from '../App'

function GameOver() {
    const count = useContext(CountContext)
    console.log('count', count)

    return (
        <div>
            <h2>Game Over</h2>
            <p>You got {count} words</p>
        </div>
    )
}

export default GameOver
