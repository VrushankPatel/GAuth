import React, { Component } from "react";
import { Form, Row, InputGroup, Button, Card, Alert } from "react-bootstrap";
import constants from "../common/Constants";

class Signup extends Component {
    state = {
        page: this.props.page,
        firstName: "",
        lastName: "",
        userName: "",
        pwd: "",
        confpwd: "",
        errorShow: false,
        errorMessage: "",
        toggleForm: true,
    };

    componentDidMount = () => {
        console.log("vrushank");
    }
    regex = constants.regex;

    handleSubmit = () => {
        if (this.state.firstName.trim() === "" || this.state.lastName.trim() === "") {
            this.showError(constants.errors.INVALID_FIRSTNAME_LASTNAME);
            return;
        }
        if (!this.regex.test(this.state.userName)) {
            this.showError(constants.errors.INVALID_USERNAME);
            return;
        }
        if (!this.regex.test(this.state.pwd)) {
            this.showError(constants.errors.INVALID_PASSWORD);
            return;
        }
        if (this.state.pwd !== this.state.confpwd) {
            this.showError(constants.errors.PASSWORD_MATCH);
            return;
        }
        console.log("success");
    };

    showError = (errorMessage) => {
        this.setState({ errorMessage: errorMessage, errorShow: true }, () => {
            setTimeout(() => {
                this.setState({ errorShow: false });
            }, constants.errorMessageTimeout)
        });
    }

    render() {
        return (
            <div className="container pt-4 pb-5">
                <div className="row justify-content-center" style={{ display: this.state.toggleForm ? "none" : "default" }}>
                    <div className="col-lg-6 col-md-8 col-12">
                        <Card>
                            <Alert style={{ display: this.state.errorShow ? "block" : "none" }} variant={"danger"}>
                                {this.state.errorMessage}
                            </Alert>
                            <Form onSubmit={this.handleSubmit} >
                                <Row className="mb-3 p-xl-5 p-lg-5 p-md-5 p-sm-5 p-0">
                                    <Form.Group className="pb-3" controlId="validationCustom01">
                                        <Form.Label>First name</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="First name"
                                            onChange={(e) => {
                                                this.setState({ firstName: e.target.value })
                                            }}
                                            defaultValue=""
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group className="pb-3" controlId="validationCustom02">
                                        <Form.Label>Last name</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            minLength={2}
                                            placeholder="Last name"
                                            onChange={(e) => {
                                                this.setState({ lastName: e.target.value })
                                            }}
                                        />
                                    </Form.Group>
                                    <Form.Group className="pb-3" controlId="validationCustomUsername">
                                        <Form.Label>Username</Form.Label>
                                        <InputGroup hasValidation>
                                            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                            <Form.Control
                                                type="text"
                                                placeholder="John@123"
                                                aria-describedby="inputGroupPrepend"
                                                onChange={(e) => {
                                                    this.setState({ userName: e.target.value })
                                                }}
                                                minLength="10"
                                                required
                                            />
                                        </InputGroup>
                                    </Form.Group>
                                    <Form.Group className="pb-3" controlId="validationPassword">
                                        <Form.Label>Password</Form.Label>
                                        <InputGroup hasValidation>
                                            <Form.Control
                                                type="password"
                                                placeholder="Password"
                                                aria-describedby="inputGroupPrepend"
                                                onChange={(e) => {
                                                    this.setState({ pwd: e.target.value })
                                                }}
                                                minLength={10}
                                                required
                                            />
                                        </InputGroup>
                                    </Form.Group>
                                    <Form.Group className="pb-3" controlId="validationPassword2">
                                        <Form.Label>Confirm Password</Form.Label>
                                        <InputGroup hasValidation>
                                            <Form.Control
                                                type="password"
                                                placeholder="Confirm Password"
                                                aria-describedby="inputGroupPrepend"
                                                onChange={(e) => {
                                                    this.setState({ confpwd: e.target.value })
                                                }}
                                                minLength={10}
                                                required
                                            />
                                        </InputGroup>
                                    </Form.Group>
                                </Row>
                                <Button className="mb-5" onClick={this.handleSubmit}>Submit</Button>
                            </Form>
                        </Card>
                    </div>
                </div>
                <canvas style={{ width: "1001px", height: "601px", display: this.state.toggleForm ? "default" : "none", background: "url('https://firebasestorage.googleapis.com/v0/b/gauth-x.appspot.com/o/image.jpg?alt=media')", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover", border: "1px solid black" }}></canvas>
            </div>
        );
    }
}

export default Signup;