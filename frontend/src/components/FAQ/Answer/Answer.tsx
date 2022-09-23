import React from 'react'
import classes from './Answer.module.css'

interface answerProps {
    answer: string
}

const Answer: React.FC<answerProps> = ({answer}) => {
    return (
        <div className={classes.answer}>
            {answer}
        </div>
    )
}

export default Answer