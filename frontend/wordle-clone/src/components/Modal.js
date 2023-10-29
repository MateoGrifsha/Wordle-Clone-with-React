import React from 'react'

export default function Modal({isCorrect, turn, solution}) {
  return (
    <div className='modal'>
        {isCorrect && (
            <div> 
                <h1>Congratulations, you win!</h1>
                <p className='solution'>The solution was: <em><strong>{solution}</strong></em></p>
                <p>You found the solution in {turn} {turn == 1 && (<span>guess</span>)} {turn > 1 && (<span>guesses</span>)}.</p>
            </div>
        )}
        {!isCorrect && (
            <div> 
                <h1>Unlucky, you ran out of guesses!</h1>
                <p className='solution'>The solution was <em>{solution}</em></p>
                <p>Better luck next time.</p>
            </div>
        )}
    </div>
  )
}
