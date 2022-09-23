import React from 'react'
import classes from './Question.module.css'

interface questionProps {
    question: string
}

const Question: React.FC<questionProps> = ({question}) => {
    return (
        <div className={classes.question}>
            {question}
        </div>
    )
}

export default Question