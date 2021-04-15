import React, { useContext } from 'react'
import { StartStopContext } from '../App'

function WelcomeScreen() {
    const startStop = useContext(StartStopContext)

    return (
        <div className='welcome-screen-wrapper'>
            <h2>Welcome to the Game!</h2>
            <p>
                Type the displayed words without miss-spelling within 10
                seconds!
            </p>
            <button className='start-button' onClick={startStop}>
                Press to Start
            </button>
        </div>
    )
}

export default WelcomeScreen
