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

function NavBar() {

    let dispatch = useDispatch();

    let [navSeparator, setnavSeparator] = useState<string>("")

    let language = useSelector(
        (state: RootState) => state.Language.lang
    ) as string;

    useEffect(() => {
        if (!language || language === undefined) {
            localStorage.setItem('lang', 'en')
            setnavSeparator("me-auto")
        }
        else {
            if (language == 'ar') {
                document.documentElement.dir = 'rtl'
                setnavSeparator("ms-auto")
            }
            else {
                document.documentElement.dir = 'ltr'
                setnavSeparator("me-auto")
            }
        }
    }, [])

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
                <NavLink style={{ margin: '10px', cursor: 'context-menu' }} to="/"><img width={55} src={logo} alt="" /></NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className={navSeparator}>
                        <NavLink className={classes.navitem} to="/">{navbarItems[fixLanguage(language)].home}</NavLink>
                        <NavLink className={classes.navitem} to="/about">{navbarItems[fixLanguage(language)].aboutUs}</NavLink>
                        <NavDropdown title={<span className={classes.dropdown}>{navbarItems[fixLanguage(language)].products}</span>}>
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
                        <div><span onClick={() => {language === 'ar'? changeLanguage('en') : changeLanguage('ar')}} className={classes.dropdown}><img className={classes.flag} src={language === 'ar' ? ar : en} alt="" /></span></div>
                        {/* <NavDropdown title={<span className={classes.dropdown}><img className={classes.flag} src={language === 'ar' ? ar : en} alt="" /></span>}>
                            <NavDropdown.Item onClick={() => { changeLanguage('ar') }}>العربية <div style={{ display: 'inline', float: 'left' }}><img src={ar} width={20} alt="" /></div></NavDropdown.Item>
                            <NavDropdown.Item onClick={() => { changeLanguage('en') }}>English <div style={{ display: 'inline', float: 'left' }}><img src={en} width={20} alt="" /></div></NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;