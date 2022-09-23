import React from 'react'

interface questionProps {
    question: string
}

const Question: React.FC<questionProps> = ({question}) => {
    return (
        <div style={{ minHeight: '10vh', width: '80vw', padding: '20px', backgroundColor: '#e7e7e7', borderRadius: '25px 25px 25px 25px' }}>
            {question}
        </div>
    )
}

export default Question