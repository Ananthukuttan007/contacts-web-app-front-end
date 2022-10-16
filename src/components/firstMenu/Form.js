import React, { useState } from 'react'
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';


//formPage for adding new contacts


function FormPage() {
    const navigate = useNavigate()
    const [state, setState] = useState({  //the credentials will be saved into this hook
        name: "",
        number: ""
    });
    const submit = (e) => { //submit function linked to the submit btn
        e.preventDefault();
        if (state.name.length < 3) {  //assuming 3 to be the minimum chars allowed
            alert("A Name should contain atleast 3 characters")
        }
        else if (state.number.length !== 10) {  //phone number without 10 chars will not receive sms 
            alert("Mobile number of 10 characters is only accepted ")
        }
        else {
            axios.post('https://ananthas-contacts-web-app.herokuapp.com/contact', state)
                //here it connects with backend for adding new contact to the database
                .then(function (response) {
                    console.log(response.data);
                    alert(response.data.message);
                    navigate('/') //back to contacts list after adding new contacts successfully
                })
                .catch(function (error) {
                    alert('error')
                });
        }
    }

    return (
        <>
            <br /> <br /><br />
            <Container>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name"
                            onChange={(e) => { setState({ ...state, name: e.target.value }) }}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control type="number" placeholder="Type only 10 digit mobile number"
                            onChange={(e) => { setState({ ...state, number: e.target.value }) }}
                        />
                    </Form.Group>
                    <Button variant="secondary" size="sm"
                        onClick={() => { navigate('/') }}
                    >
                        Back
                    </Button>
                    &nbsp; &nbsp; &nbsp;
                    <Button variant="success" type="submit" size="sm"
                        onClick={submit}
                    >
                        Submit
                    </Button>
                </Form>
            </Container>
        </>

    )
}

export default FormPage