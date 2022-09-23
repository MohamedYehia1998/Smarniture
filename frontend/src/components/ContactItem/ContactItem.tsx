import React from 'react'
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';
import { aboutUsItems } from '../../lang';
import { RootState } from '../../store';
import { fixLanguage } from '../../utils';
import classes from '../Personnel/Personnel.module.css'

interface ContactItemProps {
    itemKey: string;
    children?: React.ReactNode;
}

const ContactItem: React.FC<ContactItemProps> = ({ itemKey }) => {

    let language = useSelector(
        (state: RootState) => state.Language.lang
    ) as string;

    return (
        <Card border="light" style={{ width: '18rem' }}>
            <div style={{ textAlign: 'center' }}>
                <img className={classes.pic} style={{border:'none'}}  src={require(`../../images/contact/${itemKey}.png`)} alt="" />
            </div>
            {/* <Card.Body>
                <div style={{ textAlign: 'center' }}><Card.Title>Phone Number</Card.Title></div>
                <div style={{ textAlign: 'center', margin: '15px auto', color: 'grey', fontWeight: '500' }}>
                    <Card.Text>
                        Call Phone
                    </Card.Text>
                </div>
                <div style={{ marginTop: '15px' }}>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </div>
            </Card.Body> */}
        </Card>
    )
}

export default ContactItem;