import { Row, Col } from 'react-bootstrap';
import Personnel from '../Personnel/Personnel';


function About() {
    return (
        <Row>
            <Col xs={12} md={4} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '10vh' }}>
                <Personnel personkey="askar" />
            </Col>
            <Col xs={12} md={4} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '10vh' }}>
                <Personnel personkey="ghanem" />
            </Col>
            <Col xs={12} md={4} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '10vh' }}>
                <Personnel personkey="magdy" />
            </Col>
            <Col xs={12} md={4} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '10vh' }}>
                <Personnel personkey="ashraf" />
            </Col>
            <Col xs={12} md={4} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '10vh' }}>
                <Personnel personkey="abdelrahman" />
            </Col>
        </Row>

    );
}

export default About