import React from 'react'
import { Row, Col } from 'react-bootstrap';
import ReactCardFlip from 'react-card-flip';
import { useState } from 'react'
import Question from './Question/Question';
import Answer from './Answer/Answer';


export default function Contact() {

    const [q1, setQ1] = useState(false)
    const [q2, setQ2] = useState(false)
    const [q3, setQ3] = useState(false)

    return (
        <>
            <Row style={{ marginBottom: '120px' }}>
                <Col onClick={() => setQ1(!q1)} xs={12} style={{ cursor: 'pointer', display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '10vh' }}>
                    <ReactCardFlip isFlipped={q1} flipDirection="horizontal">
                        <Question question="What is the color of the sky?" />
                        <Answer answer="Blue." />
                    </ReactCardFlip>
                </Col>

                <Col onClick={() => setQ2(!q2)} xs={12} style={{ cursor: 'pointer', display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '10vh' }}>
                    <ReactCardFlip isFlipped={q2} flipDirection="horizontal">
                        <Question question="Do you have a pet at home?" />
                        <Answer answer="Yes, a cat." />
                    </ReactCardFlip>
                </Col>

                <Col onClick={() => setQ3(!q3)} xs={12} style={{ cursor: 'pointer', display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '10vh' }}>
                    <ReactCardFlip isFlipped={q3} flipDirection="horizontal">
                        <Question question="How often do you exercise?" />
                        <Answer answer="Usually twice per week but when I am busy, it's only once." />
                    </ReactCardFlip>
                </Col>
            </Row>
        </>

    )
}
