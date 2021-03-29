import React, { useState } from 'react'

export default function App() {
    const [t, setT] = useState('')

    return (
        <div className='App'>
            <div className='wrapper'>
                <h1>Word Guess !!</h1>
                <h2>Type as fast as you can!</h2>
                <h3>hi</h3>
                <input
                    value={t}
                    className='input'
                    onChange={e => setT(e.target.value)}></input>
                {t === 'hi' ? <div>hi</div> : null}
            </div>
        </div>
    )
}

// if word correct then setT to new Word
// if word incorrect then print end text: you got x words correct
// input box empty
// count correct word up
