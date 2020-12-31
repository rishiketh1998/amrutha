import React from "react";
import {Button, Card, Form, Modal} from "react-bootstrap";
import {TextField, Radio, FormControl, FormLabel, RadioGroup, FormControlLabel} from "@material-ui/core";

export const Register = (props) => {
    return (
        <Modal  show={props.show}
                onHide={props.onHide}
                backdrop="static"
                keyboard={false}
                size={"lg"}
                centered={true}
        >
            <Modal.Header>
                <Modal.Title>Register</Modal.Title>
            </Modal.Header>
            <Modal.Body className="row mx-0">
                <Card className="col-lg-6 border-0">
                    <TextField variant="outlined" fullWidth label="FirstName" type="text" className="my-2" required={true}/>
                    <TextField variant="outlined" fullWidth label="LastName" type="text" className="my-2" required={true}/>
                    <TextField variant="outlined" fullWidth label="Email" type="email" className="my-2" required={true}/>
                    <TextField variant="outlined" fullWidth label="Password" type="password" className="my-2" required={true}/>
                </Card>
                <Card className="col-lg-6 border-0">
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" style={{flexDirection:"row"}}>
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                        </RadioGroup>
                    </FormControl>
                    <TextField id="date" label="D.O.B" variant="outlined"
                               className="my-2"
                        type="date" InputLabelProps={{shrink: true,}}
                    />
                    <TextField variant="outlined" fullWidth label="Height in cm" type="number"
                               className="my-2" required={true} />
                    <TextField variant="outlined" fullWidth label="Weight in kg" type="number"
                               className="my-2" required={true} />
                </Card>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" className="mr-2">Back</Button>
                <Button variant="outline-success" className="mr-2" onClick={() => {props.onHide();props.showRegister();}}>Register</Button>
            </Modal.Footer>
        </Modal>
    )
}