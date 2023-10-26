import { useState } from 'react'

const useWordle = (solution) => {
    const [turn, setTurn] = useState(0)
    const [currentGuess, setCurrentGuess] = useState('')
    const [guesses, setGuesses] = useState([...Array(6)]) //guesses will be an array
    const [history, setHistory] = useState([]) //old guesses will be a string
    const [isCorrect, setIsCorrect] = useState(false)

    //formats guesses into an array of letter objs [{key: 'a', color: 'yellow'}]
    const formatGuess = () => {
        let solutionArray = [...solution]
        let formattedGuess = [...currentGuess].map((l) => {
            return {
                key: l, 
                color: 'grey'
            }
        })
        //find any green letters
        formattedGuess.forEach((l, i) => {
            if(solution[i] === l.key) {
                formattedGuess[i].color = 'green'
                solutionArray[i] = null
            }
        })
        //find any yellow letters
        formattedGuess.forEach((l, i) => {
            if(solutionArray.includes(l.key) && l.color !== 'green'){
                formattedGuess[i].color = 'yellow'
                solutionArray[solutionArray.indexOf(l.key)] = null
            }
        })
        return formattedGuess
    }

    //add a new guess, update isCorrect state if guess=correct, turn++
    const addNewGuess = (formattedGuess) => {
        if(currentGuess === solution){
            setIsCorrect(true)
        }
        setGuesses((prevGuesses) => {
            let newGuesses = [...prevGuesses]
            newGuesses[turn] = formattedGuess
            return newGuesses
        })
        setHistory((prevHistory) => {
            return [...prevHistory, currentGuess]
        })
        setTurn(prevTurn =>{
            return prevTurn + 1 
        })
        setCurrentGuess('')

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
            const formatted = formatGuess()
            addNewGuess(formatted)
            console.log(formatted)
            
        }
        if(key==='Backspace'){
            setCurrentGuess(prev => prev.slice(0, -1))
                return 
        }
        const regex = /^[A-Za-z]$/
        if(regex.test(key)){
            if(currentGuess.length < 5 ){
                setCurrentGuess(prev =>prev + key)
            }
        }

         
    }

    return {turn, currentGuess, guesses, isCorrect, handleKeyup}
}

export default useWordle