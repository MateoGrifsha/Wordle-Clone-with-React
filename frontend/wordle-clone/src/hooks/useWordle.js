import { useState } from 'react'

const useWordle = (solution) => {
    const [turn, setTurn] = useState(0)
    const [currentGuess, setCurrentGuess] = useState('')
    const [guesses, setGuesses] = useState([]) //guesses will be an array
    const [history, setHistory] = useState([]) //old guesses will be a string
    const [isCorrect, setIsCorrect] = useState(false)

    //formats guesses into an array of letter objs [{key: 'a', color: 'yellow'}]
    const formatGuess = () => {

    }

    //add a new guess, update isCorrect state if guess=correct, turn++
    const addNewGuess = () => {

    }

    //handle a keyup event and track current guess, on enter -> add guess
    const handleKeyup = () => {
         
    }

    return {turn, currentGuess, guesses, isCorrect, handleKeyup}
}

export default useWordle