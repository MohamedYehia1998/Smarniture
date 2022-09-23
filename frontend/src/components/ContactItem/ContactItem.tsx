import React from 'react'
import Card from 'react-bootstrap/Card';

interface ContactItemProps {
    itemKey: string;
    children?: React.ReactNode;
}

const ContactItem: React.FC<ContactItemProps> = ({ itemKey }) => {



    return (
        <Card border="light" style={{ width: '12rem' }}>
            <div style={{ textAlign: 'center' }}>
                <img style={{border:'none', width: '90px', borderRadius: '65%'}}  src={require(`../../images/contact/${itemKey}.png`)} alt="" />
            </div>
        </Card>
    )
}

export default ContactItem;