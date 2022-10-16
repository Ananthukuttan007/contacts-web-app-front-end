import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function Info({ number }) {
    const navigate = useNavigate()
    let contactDetailsFromProps = ["Not selected", "Not selected"] //if directed to the page from url, for error handling
    if (number.length > 0) { //if number selected
        contactDetailsFromProps = number.split(",") //spliting name and number from number Object
    }
    return (
        <>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <Container >
                &nbsp; &nbsp; &nbsp; &nbsp;
                <Card className='mx-auto ' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://www.bimstore.co/assets/images/fallback/user/profile/image-8.png" />
                    <Card.Body>
                        <Card.Title>Name: {contactDetailsFromProps[0]}</Card.Title>
                        <Card.Text>
                            Phone No: {contactDetailsFromProps[1]}
                        </Card.Text>
                        <Button variant="secondary" onClick={() => {
                            console.log(number)
                            navigate("/")
                        }}>Back</Button> &nbsp;
                        <Button variant="success"
                            onClick={() => {
                                console.log(number)
                                navigate("/send")
                            }}
                        >Send a Message</Button>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}

export default Info