import React, { useState, useEffect } from 'react'
import axios from 'axios'
import GameOver from './Screens/GameOver'

export const CountContext = React.createContext()

// TODO : insert counter

export default function App() {
    const [t, setT] = useState('')
    const [word, setWord] = useState('hi')
    const [count, setCount] = useState(0)
    const wordLength = t.length - 1
    const wordApi = 'https://random-word-api.herokuapp.com/word?number=1000'
    const [words, setWords] = useState([]) // fetched words from api
    const [counter, setCounter] = useState(9)
    const [active, setActive] = useState(false)

    //fetches 1000 random words from api on app initial load
    useEffect(() => {
        axios
            .get(wordApi)
            .then(res => {
                setWords(res.data)
            })
            .catch(err => {
                console.log(err)
            })
        console.log('fetched')
    }, [])

    // 10 seconds timer
    useEffect(() => {
        if (active === true && counter > 0) {
            const timer =
                counter > 0 && setInterval(() => setCounter(counter - 1), 1000)
            return () => clearInterval(timer)
        } else if (counter === 0) gameOver()
    }, [counter])

    const startGame = () => {
        setActive(true)
        console.log(active)
        setCounter(10)
    }

    //returns alert whith count of correct typed words and sets a new word, resets setT and resets the counter
    const gameOver = () => {
        alert(`Game Over! You got ${count} words`)
        setWord(words[getRandomInt(0, 1000)])
        setT('')
        setActive(false)
    }

    // returns random int between min and max
    const getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    //loads new word afters all letter where typed correctly or return gameOver() after a wrong letter was typed
    const wordProcesser = () => {
        if (t === '') return
        if (t[wordLength] !== word[wordLength]) return gameOver()
        if (t === word) {
            setWord(words[getRandomInt(0, 1000)])
            setT('')
            setCounter(10)
        }
    }

    // counts up if a complete word was typed correctly
    const counterLogic = () => {
        if (t === word) setCount(count + 1)
    }

    wordProcesser()
    counterLogic()

    return (
        <div className='App'>
            <div className='wrapper'>
                <h1>Word Guess !!</h1>
                <h2>Type as fast as you can!</h2>
                <button
                    onClick={() => {
                        startGame()
                    }}>
                    start
                </button>
                <CountContext.Provider value={count}>
                    <GameOver />
                </CountContext.Provider>
                <p>Time left: {counter} seconds</p>
                <h3>{word}</h3>
                <input
                    value={t}
                    className='input'
                    onChange={e => setT(e.target.value)}></input>
                <p className='word-count'>word count: {count}</p>
                {/*t === word ? <div>correct!</div> : null*/}
            </div>
        </div>
    )
}
