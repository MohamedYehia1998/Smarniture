import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../images/logo.png';
import ar from '../../images/lang/egypt.png';
import en from '../../images/lang/uk.png';
import classes from './NavBar.module.css';
import { NavLink } from 'react-router-dom';
import { navbarItems } from '../../lang';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from '../../store';
import { setLanguage } from '../../store/slices/languageSlice';
import { fixLanguage } from '../../utils';
import { config } from '../../config';

function NavBar() {

    // language settings
    let dispatch = useDispatch();
    let [navSeparator, setnavSeparator] = useState<string>("")
    let language = useSelector(
        (state: RootState) => state.Language.lang
    ) as string;


    // drop down hide/show
    let [show, setShow] = useState(false);
    const showDropdown = (event: React.FormEvent<EventTarget>) => {
        setShow(!show);
    }
    const hideDropdown = (event: React.FormEvent<EventTarget>) => {
        setShow(false);
    }

    useEffect(() => {
        if (!language || language === undefined) {
            localStorage.setItem('lang', config.defaultLang)
            setnavSeparator("me-auto")
        }
        else {
            if (language == 'ar') {
                document.documentElement.dir = 'rtl'
                setnavSeparator("ms-auto")
            }
            else if (language == 'en') {
                document.documentElement.dir = 'ltr'
                setnavSeparator("me-auto")
            }
            else {
                if (config.defaultLang === 'ar') {
                    document.documentElement.dir = 'rtl'
                    setnavSeparator("ms-auto")
                }
                else if (config.defaultLang === 'en') {
                    document.documentElement.dir = 'ltr'
                    setnavSeparator("me-auto")
                }
            }
        }
    }, [])

    // switch language and set frontend on flag click
    const changeLanguage = (language: string) => {
        if (language === 'ar') {
            localStorage.setItem('lang', 'ar')
            setnavSeparator("ms-auto")
            dispatch(setLanguage({ lang: 'ar' }));
            document.documentElement.dir = 'rtl'
        }
        else {
            localStorage.setItem('lang', 'en')
            setnavSeparator("me-auto")
            dispatch(setLanguage({ lang: 'en' }));
            document.documentElement.dir = 'ltr'
        }
    }

    return (
        <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: '#30a9ab' }} variant="dark">
            <Container>
                <NavLink style={{ margin: '10px', cursor: 'context-menu' }} to="/"><img width={45} src={logo} alt="" /></NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className={navSeparator}>
                        <NavLink className={classes.navitem} to="/">{navbarItems[fixLanguage(language)].home}</NavLink>
                        <NavLink className={classes.navitem} to="/about">{navbarItems[fixLanguage(language)].aboutUs}</NavLink>
                        <NavDropdown show={show} onMouseEnter={showDropdown} onMouseLeave={hideDropdown} title={<span className={classes.dropdown}>{navbarItems[fixLanguage(language)].products}</span>}>
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <div>
                            <span onClick={() => { language === 'ar' ? changeLanguage('en') : changeLanguage('ar') }} className={classes.dropdown}>
                                <img className={classes.flag} src={language === 'ar' ? ar : language === 'en' ? en : (config.defaultLang === 'en' ? en : ar)} alt="" />
                            </span>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;