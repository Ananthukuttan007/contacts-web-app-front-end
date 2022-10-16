import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import axios from 'axios'

function Send({ number }) {
    const [message, setMessage] = useState("Hi, This is a test message")
    const navigate = useNavigate()
    let contactDetailsFromProps = ["Not selected", "Not selected"]
    if (number.length > 0) { //if number selected
        contactDetailsFromProps = number.split(",") //spliting name and number from number Object
    }
    const sendMsg = (e) => {
        e.preventDefault();
        let Data = {
            name: contactDetailsFromProps[0],  //name from number object prop
            number: contactDetailsFromProps[1], //phone number from number object prop
            message: message
        }
        axios.post('https://ananthas-contacts-web-app.herokuapp.com/message', Data) //for posting msg
            .then(function (response) {
                console.log(response.data);
                alert(response.data.message);
                navigate('/')
            })
            .catch(function (error) {
                alert('error')
            });
    }
    return (
        <>
            <br /> <br /><br />
            <Container>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Message</Form.Label>
                        <Form.Control onChange={(e) => setMessage(e.target.value)} type="text" required placeholder="Enter your message (Note: an Otp will be received by the recepient)"

                        />
                    </Form.Group>
                    <ListGroup>
                        <ListGroup.Item>{contactDetailsFromProps[0]}</ListGroup.Item>
                        <ListGroup.Item>{contactDetailsFromProps[1]}</ListGroup.Item>
                    </ListGroup>
                    <br />
                    <Button variant="secondary" size="sm"
                        onClick={() => { navigate('/info') }}
                    >
                        Back
                    </Button>
                    &nbsp; &nbsp; &nbsp;
                    <Button variant="success" type="submit" size="sm"
                        onClick={sendMsg}
                    >
                        Send
                    </Button>
                </Form>
            </Container>
        </>
    )
}

export default Send