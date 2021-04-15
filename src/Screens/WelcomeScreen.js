import React, { useContext } from 'react'
import { StartStopContext } from '../App'

function WelcomeScreen() {
    const startStop = useContext(StartStopContext)

    return (
        <div className='welcome-screen-wrapper'>
            <div className='welcome-screen-content'>
                <h2>Welcome to the Game!</h2>
                <p>
                    Type the displayed words within 10 seconds without
                    miss-spelling !
                </p>
                <button className='start-button' onClick={startStop}>
                    Press to Start
                </button>
            </div>
        </div>
    )
}

export default WelcomeScreen
