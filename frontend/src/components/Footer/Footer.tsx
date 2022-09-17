import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import logo from '../../images/logo.png';
import logo2 from '../../images/logo2.png';


export default function PageFooter() {
    return (
        <MDBFooter style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }} className='text-center text-lg-start text-muted'>
            <section className='d-flex justify-content-center p-4 border-bottom'>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="facebook-f" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="twitter" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="google" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="instagram" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="linkedin" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="github" />
                    </a>
                </div>
            </section>

            <section className=''>
                <MDBContainer className='text-center text-md-start mt-5'>
                    <MDBRow className='mt-3'>

                        <MDBCol style={{ textAlign: 'center' }} md="4" sm="12" className='mx-auto mb-md-4 mb-4'>
                            <p>
                                <MDBIcon icon="envelope" className="me-3" />
                                info@smarniture.com
                            </p>
                        </MDBCol>
                        <MDBCol style={{ textAlign: 'center' }} md="4" sm="12" className='mx-auto mb-md-4 mb-4'>
                            <p>
                                <MDBIcon icon="home" className="me-2" />
                                Alexandria, Egypt
                            </p>

                        </MDBCol>
                        <MDBCol style={{ textAlign: 'center' }} md="4" sm="12" className='mx-auto mb-md-4 mb-4'>
                            <p>
                                <MDBIcon icon="phone" className="me-3" /> + 20 12 8 2111 789
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

            <div className='text-center p-4' style={{ color: 'white', backgroundColor: '#707070' }}>
                <div style={{ textAlign: 'left', display: 'inline' }}>
                    <img width={20} src={logo} alt="" />
                </div> <b>Smarniture </b>
                © 2021
            </div>
        </MDBFooter>
    );
}