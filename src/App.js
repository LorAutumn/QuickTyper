import React, { useState } from 'react'

export default function App() {
    const [t, setT] = useState('')
    const [word, setWord] = useState('hi')
    const [count, setCount] = useState(0)

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
                <p className='answer'>word count: {count}</p>
                {t === word ? <div>correct!</div> : null}
            </div>
        </div>
    )
}

// if word correct then setT to new Word (mock = ho)
// if word incorrect then print end text: you got x words correct
// input box empty
// count correct word up
