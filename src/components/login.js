import React, {useState} from "react";
import {Modal, Form, Card, Button} from "react-bootstrap";
import { TextField } from "@material-ui/core";
import useFormHook from "../hooks/useFormHook";


export const Login = (props) => {
    const [userData, handleChange, handleReset] = useFormHook({
        'userName': "",
        "password": ""
    })
    const [ error, setError ] = useState(false)
    const handleSubmit = e => {
        e.preventDefault()
        if((userData.userName).toLowerCase() === 'sam' && (userData.password).toLowerCase() === 'sam') {
            props.setLogdedIn(true)
            setError(false)
            handleReset()
            props.onHide()
        } else {
            setError(true)
        }
    }
    return (
        <Modal
            show={props.show}
            onHide={props.onHide}
            backdrop="static"
            keyboard={false}
            size={"lg"}
            centered={true}
        >
            <Modal.Body className="row mx-0">
                <Card className="col-lg-6 border-0">
                    <img src="https://i.pinimg.com/originals/09/95/fa/0995faf27114dfd2eaee8452ba2ebd64.jpg"
                         alt={"logo"}/>
                </Card>
                <Card className="col-lg-6 justify-content-center">
                    <h4 className=" lead my-2" style={{fontWeight: "bold",fontFamily: "sans-serif"}}>Login</h4>
                    <Form onSubmit={handleSubmit}>
                        <TextField variant="outlined" fullWidth label="Username"
                                   type="text" className="my-2" required={true} name="userName" value={userData.userName}
                                    onChange={handleChange} error={error} helperText={error ? "Invalid Username": ""}/>
                        <TextField variant="outlined" fullWidth label="Password"
                                   type="password" className="my-2" required={true} name="password" value={userData.password}
                                   onChange={handleChange} error={error} helperText={error ? "Invalid Password": ""}/>
                        <div className="row my-2 mx-0">
                            <Button variant="outline-primary" className="mr-2" type="submit">Login</Button>
                            <Button variant="outline-info" className="mr-2" onClick={() => {props.onHide();props.showRegister();}}>Register</Button>
                        </div>
                    </Form>
                </Card>
            </Modal.Body>
        </Modal>
    )
}
