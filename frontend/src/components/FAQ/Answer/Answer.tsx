import React from 'react'

interface answerProps {
    answer: string
}

const Answer: React.FC<answerProps> = ({answer}) => {
    return (
        <div style={{ minHeight: '10vh', width: '80vw', padding: '20px', backgroundColor: '#abdbe3', borderRadius: '25px 25px 25px 25px' }}>
            {answer}
        </div>
    )
}

export default Answer