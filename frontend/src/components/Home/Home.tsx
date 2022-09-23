import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../images/a.jpg'
import img2 from '../../images/b.jpg'
import img3 from '../../images/c.jpg'
import logo from '../../images/logo2.png'
import whatsapp from '../../images/contact/whatsapp.png'


import classes from './Home.module.css'
import bg from '../../images/bg1.jpg'
import { RootState } from '../../store';
import { useSelector } from 'react-redux';
import { config } from '../../config';
import { fixLanguage } from '../../utils';
import { homeItems } from '../../lang';
import ContactItem from '../ContactItem/ContactItem';
import { Row, Col } from 'react-bootstrap';


function Home() {

    let language = useSelector(
        (state: RootState) => state.Language.lang
    ) as string;

    return (
        <>
            <Row style={{ backgroundImage: `url(${bg})`, backgroundPosition: '0% 95%' }} className={language === 'ar' ? classes.titleSectionAR : language === 'en' ? classes.titleSectionEN : config.defaultLang === 'ar' ? classes.titleSectionAR : classes.titleSectionEN}>
                <Col xs={12} md={8} className={classes.slogan}>
                    <div style={{ whiteSpace: 'pre-line', color: '#626262', fontFamily: 'Akaya Kanadaka', fontWeight: 600, padding: "50px" }}>
                        {homeItems[fixLanguage(language)].slogan}
                    </div>
                </Col>
                <Col xs={12} md={4} className="my-5" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <img
                        src={img2}
                        width={400}
                        style={{ border: '0px solid', borderRadius: '50px 50px 50px 50px', borderColor: '#30a9ab', }}
                        alt="First slide"
                    />
                </Col>
            </Row>

            <Row style={{ marginBottom: '120px' }}>
                {/* <Col xs={12} md={4} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '10vh' }}>
                    <ContactItem itemKey="phone" />
                </Col> */}
                <Col xs={12} md={6} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '10vh' }}>
                    <ContactItem itemKey="phone" />
                    <div>
                        <a style={{ textDecoration: 'none' }} href="https://wa.me/201142699288/?text=سلام عليكم Smarniture .. عندي استفسار بخصوص">
                            +20 114 269 9288 <span><img width={25} src={whatsapp} alt="" /></span>
                        </a>
                    </div>

                </Col>
                <Col xs={12} md={6} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '10vh' }}>
                    <ContactItem itemKey="email" />
                    <a href="mailto: info@smarniture.com">info@smarniture.com</a>
                </Col>
            </Row>
        </>


    );
}

export default Home;