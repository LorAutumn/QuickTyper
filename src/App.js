import React, { useState, useEffect } from 'react'

export default function App() {
    const [t, setT] = useState('')
    const [word, setWord] = useState('hi')
    const [count, setCount] = useState(0)
    const wordLength = t.length - 1

    const wordProcesser = () => {
        if (t === '') return
        if (t[wordLength] !== word[wordLength]) {
            alert(`Game Over! You got ${count} words`)
        }
        if (t === word) {
            setWord('ho')
            setT('')
        }
    }

    const counterLogic = () => {
        if (t === word) setCount(count + 1)
    }

    wordProcesser()
    counterLogic()

    console.log(word[2])

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
                <p className='word-count'>word count: {count}</p>
                {t === word ? <div>correct!</div> : null}
            </div>
        </div>
    )
}
