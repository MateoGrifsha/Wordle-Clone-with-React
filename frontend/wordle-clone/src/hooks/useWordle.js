import { useState } from 'react'

const useWordle = (solution) => {
    const [turn, setTurn] = useState(0)
    const [currentGuess, setCurrentGuess] = useState('')
    const [guesses, setGuesses] = useState([]) //guesses will be an array
    const [history, setHistory] = useState([]) //old guesses will be a string
    const [isCorrect, setIsCorrect] = useState(false)

    //formats guesses into an array of letter objs [{key: 'a', color: 'yellow'}]
    const formatGuess = () => {
        console.log('formatting guess - ', currentGuess)
    }

    //add a new guess, update isCorrect state if guess=correct, turn++
    const addNewGuess = () => {

    }

    //handle a keyup event and track current guess, on enter -> add guess
    const handleKeyup = ({key}) => {
        if(key === 'Enter'){
            //only add word if the turn is less than 5
            if(turn > 5){
                console.log('no more guesses left')
                return
            }
            //no duplicate words
            if(history.includes(currentGuess)){
                console.log('you already tried that guess')
                return
            }
            // word must be 5 characters long
            if(currentGuess.length !== 5) {
                console.log('word must be 5 characters long')
                return
            }
            formatGuess()
            
        }
        if(key==='Backspace'){
            setCurrentGuess((prev) => {
                return prev.slice(0, -1)
            })
            return 
        }
        const regex = /^[A-Za-z]$/
        if(regex.test(key)){
            if(currentGuess.length < 5 ){
                setCurrentGuess((prev) => {
                    return prev + key
                })
            }
        }

         
    }

    return {turn, currentGuess, guesses, isCorrect, handleKeyup}
}

export default useWordle