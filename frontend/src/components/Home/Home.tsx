import React from 'react';
import img1 from '../../images/a.jpg'
import img2 from '../../images/b.jpg'
import img3 from '../../images/c.jpg'
import logo from '../../images/logo2.png'
import whatsapp from '../../images/contact/whatsapp.png'
import Carousel from './Carousel/Carousel'

import classes from './Home.module.css'
import bg from '../../images/bg2.jpg'
import { RootState } from '../../store';
import { useSelector } from 'react-redux';
import { config } from '../../config';
import { fixLanguage } from '../../utils';
import { contactItems, homeItems } from '../../lang';
import ContactItem from '../ContactItem/ContactItem';
import { Row, Col } from 'react-bootstrap';


function Home() {

    let language = useSelector(
        (state: RootState) => state.Language.lang
    ) as string;

    return (
        <>
            <Row style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bg})` }} className={language === 'ar' ? classes.titleSectionAR : language === 'en' ? classes.titleSectionEN : config.defaultLang === 'ar' ? classes.titleSectionAR : classes.titleSectionEN}>
                <Col xs={12} md={8} className={classes.slogan}>
                    {homeItems[fixLanguage(language)].slogan}
                </Col>
                {/* <Col xs={12} md={4} className="my-5" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <img
                        src={img2}
                        width={window.matchMedia('(max-width: 908px)').matches ? 300 : 400}
                        style={{ border: '0px solid', borderRadius: '50px 50px 50px 50px', borderColor: '#30a9ab', }}
                        alt="First slide"
                    />
                </Col> */}
            </Row>

            <Row style={{padding:'30px', marginTop:'100px', backgroundColor:'#efefef'}}>
                <Carousel />
            </Row>



            <Row style={{ marginBottom: '120px' }}>
                <Col xs={6} md={6} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '10vh' }}>
                    <ContactItem itemKey="phone" />
                    <a target="_blank" style={{ textDecoration: 'none' }} href="https://wa.me/201142699288/?text=???????? ?????????? Smarniture .. ???????? ?????????????? ??????????">
                        {contactItems[fixLanguage(language)].phone} <span><img width={25} src={whatsapp} alt="" /></span>
                    </a>
                </Col>
                <Col xs={6} md={6} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '10vh' }}>
                    <ContactItem itemKey="email" />
                    <a href="mailto: info@smarniture.com">info@smarniture.com</a>
                </Col>
            </Row>

        </>


    );
}

export default Home;