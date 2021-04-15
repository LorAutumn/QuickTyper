import React, { useState, useEffect } from 'react'
import axios from 'axios'
import GameOver from './Screens/GameOver'

export const CountContext = React.createContext()

// TODO : write reset timer function
// TODO : write function to restart game on gameOver

export default function App() {
    const [t, setT] = useState('')
    const [word, setWord] = useState('hi')
    const [count, setCount] = useState(0)
    const wordLength = t.length - 1
    const wordApi = 'https://random-word-api.herokuapp.com/word?number=1000'
    const [words, setWords] = useState([]) // fetched words from api
    const [counter, setCounter] = useState(10)
    const [active, setActive] = useState(false)
    const [time, setTime] = useState(10)
    const [timerId, setTimerId] = useState(null)

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

    console.log('zeit', time)

    function zeit() {
        if (time >= 1) {
            setTime(prevCount => prevCount - 1)
        } else {
            clearInterval(timerId)
            setTimerId(null)
        }
    }

    useEffect(() => {
        if (time === 0) gameOver()
    }, [time])

    function startStopTimer() {
        if (timerId) {
            clearInterval(timerId)
            setTimerId(null)
        } else {
            //setTimerId(setInterval(() => zeit(), 1000))
            setTimerId(setInterval(zeit, 1000))
        }
    }

    //returns alert whith count of correct typed words and sets a new word, resets setT and resets the counter
    const gameOver = () => {
        alert(`Game Over! You got ${count} words`)
        setWord(words[getRandomInt(0, 1000)])
        setT('')
        setActive(false)
        clearInterval(timerId)
        setTime(10)
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
                <button onClick={() => startStopTimer()}>start</button>
                <CountContext.Provider value={count}>
                    <GameOver />
                </CountContext.Provider>
                <p>Time left: {time} seconds</p>
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
