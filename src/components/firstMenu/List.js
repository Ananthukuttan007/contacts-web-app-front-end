import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import NavBar from '../NavBar';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
function List({ number, setNumber }) {
    const [state, setState] = useState([]); //for contacts array from satabase
    const navigate = useNavigate()
    useEffect(() => {
        axios.get('https://ananthas-contacts-web-app.herokuapp.com/contact') //connects to get method backend 
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
                <thead style={{ backgroundColor: "#198754", color: "white" }}>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Contact Number</th>
                        <th className='col-sm-2'>Select</th>
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
                                    <td><Button variant="secondary" size="sm"
                                        value={[contact.name, contact.number]}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setNumber(e.target.value)
                                            console.log(number)
                                            navigate("/info")
                                        }}>More</Button > </td>
                                </tr>

                            )
                        }
                    )}
                </tbody>
            </Table>
        </>

    )
}

export default List