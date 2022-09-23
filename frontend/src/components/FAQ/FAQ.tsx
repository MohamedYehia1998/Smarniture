import React from 'react'
import { Row, Col } from 'react-bootstrap';
import ReactCardFlip from 'react-card-flip';
import { useState } from 'react'
import Question from './Question/Question';
import Answer from './Answer/Answer';
import { fixLanguage } from '../../utils';
import { faqItems } from '../../lang';
import { RootState } from '../../store';
import { useSelector } from 'react-redux';

export default function Contact() {

    const [q1, setQ1] = useState(false)
    const [q2, setQ2] = useState(false)
    const [q3, setQ3] = useState(false)


    let language = useSelector(
        (state: RootState) => state.Language.lang
    ) as string;

    return (
        <>
            <Row style={{ marginBottom: '120px' }}>
                <Col onClick={() => setQ1(!q1)} xs={12} style={{ cursor: 'pointer', display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '10vh' }}>
                    <ReactCardFlip isFlipped={q1} flipDirection="horizontal">
                        <Question question={faqItems[fixLanguage(language)].a.question} />
                        <Answer answer={faqItems[fixLanguage(language)].a.answer} />
                    </ReactCardFlip>
                </Col>

                <Col onClick={() => setQ2(!q2)} xs={12} style={{ cursor: 'pointer', display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '10vh' }}>
                    <ReactCardFlip isFlipped={q2} flipDirection="horizontal">
                        <Question question={faqItems[fixLanguage(language)].b.question} />
                        <Answer answer={faqItems[fixLanguage(language)].b.answer} />
                    </ReactCardFlip>
                </Col>

                <Col onClick={() => setQ3(!q3)} xs={12} style={{ cursor: 'pointer', display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '10vh' }}>
                    <ReactCardFlip isFlipped={q3} flipDirection="horizontal">
                        <Question question={faqItems[fixLanguage(language)].c.question} />
                        <Answer answer={faqItems[fixLanguage(language)].c.answer} />
                    </ReactCardFlip>
                </Col>
            </Row>
        </>

    )
}
