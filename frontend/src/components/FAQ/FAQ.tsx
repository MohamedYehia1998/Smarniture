import React from 'react'
import { Row, Col } from 'react-bootstrap';
import ContactItem from '../ContactItem/ContactItem';
import Personnel from '../Personnel/Personnel';

import ReactCardFlip from 'react-card-flip';
import { useEffect, useState } from 'react'


export default function Contact() {

    const [isFlipped, setIsFlipped] = useState(false)

    return (
        <>
            <button onClick={() => setIsFlipped(!isFlipped)}>Show Answer</button>

            <Row style={{ marginBottom: '120px' }}>
                <Col xs={12} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '10vh' }}>
                    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                        <div style={{height: '10vh', width:'80vw', border: '1px solid black'}}>What is the color of the sky?</div>
                        <div style={{height: '10vh', width:'80vw', border: '1px solid black'}}>Blue</div>
                    </ReactCardFlip>
                </Col>
                <Col xs={12} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '10vh' }}>
                    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                        <div style={{height: '10vh', width:'80vw', border: '1px solid black'}}>Do you have a pet?</div>
                        <div style={{height: '10vh', width:'80vw', border: '1px solid black'}}>No</div>
                    </ReactCardFlip>
                </Col>
                <Col xs={12} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '10vh' }}>
                    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                        <div style={{height: '10vh', width:'80vw', border: '1px solid black'}}>What is the color of the sky?</div>
                        <div style={{height: '10vh', width:'80vw', border: '1px solid black'}}>Blue</div>
                    </ReactCardFlip>
                </Col>
                <Col xs={12} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '10vh' }}>
                    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                        <div style={{height: '10vh', width:'80vw', border: '1px solid black'}}>Do you have a pet?</div>
                        <div style={{height: '10vh', width:'80vw', border: '1px solid black'}}>No</div>
                    </ReactCardFlip>
                </Col>
            </Row>
        </>

    )
}
