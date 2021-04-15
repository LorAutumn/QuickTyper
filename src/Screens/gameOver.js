import React, { useContext } from 'react'
import { CountContext } from '../App'
import { StartStopContext } from '../App'

function GameOver() {
    const count = useContext(CountContext)
    const startStop = useContext(StartStopContext)

    console.log('count', count)

    return (
        <div>
            <h2>Game Over</h2>
            <p>You got {count} words</p>
            <button onClick={startStop} className='restart-button'>
                restart?
            </button>
        </div>
    )
}

export default GameOver
