import React from 'react';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../images/a.jpg'
import img2 from '../../images/b.jpg'
import img3 from '../../images/c.jpg'
import logo from '../../images/logo2.png'

import classes from './Home.module.css'
import bg from '../../images/bg1.jpg'
import { RootState } from '../../store';
import { useSelector } from 'react-redux';
import { config } from '../../config';
import { fixLanguage } from '../../utils';
import { homeItems } from '../../lang';

function Home() {

    let language = useSelector(
        (state: RootState) => state.Language.lang
    ) as string;

    return (

        <Row style={{backgroundImage: `url(${bg})`, backgroundPosition: '0% 95%'}} className={language === 'ar' ? classes.titleSectionAR : language === 'en' ? classes.titleSectionEN : config.defaultLang === 'ar' ? classes.titleSectionAR : classes.titleSectionEN}>
            <Col xs={12} md={8} className={classes.slogan}>
                <div style={{ whiteSpace: 'pre-line', letterSpacing: '0.3rem', color: 'darkcyan', fontFamily:'Akaya Kanadaka', fontWeight: 600, padding:"50px" }}>
                    {homeItems[fixLanguage(language)].slogan}
                </div>
            </Col>
            <Col xs={12} md={4} className="my-5" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <img
                    src={img2}
                    width = {400}
                    style={{ border: '0px solid', borderRadius: '50px 50px 45px 5px', borderColor: '#30a9ab', }}
                    alt="First slide"
                />
            </Col>
        </Row>

    );
}

export default Home;