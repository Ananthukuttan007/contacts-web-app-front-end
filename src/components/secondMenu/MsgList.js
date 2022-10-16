import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import NavBar from '../NavBar';
import axios from 'axios'

function MsgList() {
    const [state, setState] = useState([]);
    useEffect(() => {
        axios.get('https://ananthas-contacts-web-app.herokuapp.com/message')  //gets msg list from backend
            .then(function (response) {
                setState(response.data.reverse());
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [state])
    return (
        <>
            <NavBar />
            <Table striped bordered hover>
                <thead style={{ backgroundColor: "#123456", color: "white" }}>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Contact Number</th>
                        <th>Message</th>
                        <th>Otp</th>
                        <th>Time of Message</th>
                    </tr>
                </thead>
                <tbody>
                    {state.map(
                        (contact, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{contact.name}</td>
                                    <td>{contact.number}</td>
                                    <td>{contact.message}</td>
                                    <td>{contact.otp}</td>
                                    <td>{contact.date}</td>
                                </tr>

                            )
                        }
                    )}
                </tbody>
            </Table>
        </>

    )
}

export default MsgList