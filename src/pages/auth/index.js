import React from "react";
import { navigate } from "gatsby";
import styled from "styled-components";
import Layout from "./layout";
import { FormGroup, InputGroup, Button, Classes, /*Toaster, Position, Intent*/ } from "@blueprintjs/core";
import SectionWrapper from '../../components/SectionWrapper';
import { AxiosClient } from "../../components/Utils";
import FunLogoMain from "../../assets/img/fun-ruby-logo-main.png";

var AuthService = null;
if (typeof window !== `undefined`) {
    AuthService = require("../../components/Utils").Auth;
}

const MainWrapper = styled.div`
    display: block;
    max-width: 560px;
    margin: 0 auto;
    margin-top: 48px;

    h1, h2 {
        display: block;
        text-align: center;
    }

    h2 {
        font-weight: 400;
        font-size: 1.2em;
    }
    .fun-logo {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 50%;
        max-width: 200px;
    }
`;

const Form = styled.form`
    background-color: #f2f2f2;
    padding: 40px;
    margin-top: 40px;

    .form-group {
        margin-bottom: 32px;
    }

    .${Classes.FORM_GROUP} label.${Classes.LABEL} {
        margin-bottom: 8px;
    }
`;

/*
const ErrorToaster = Toaster.create({
    className: 'error-toaster',
    intent: Intent.DANGER,
    position: Position.TOP
}); 
*/

class AuthPage extends React.Component {
    state = {
        username: '',
        password: ''
    }

    _onChange = (evt) => {
        this.setState({[evt.target.name]: evt.target.value});
    }

    _onSubmit = (evt) => {
        evt.preventDefault();

        AxiosClient.get("/login", {
            params: {
                username: this.state.username,
                password: this.state.password
            }
        })
        .then(res => {
            if(AuthService)
                AuthService.signin(res.data.sessionToken);
            setTimeout(navigate("/auth/licence_generator"), 2000);
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        return(
            <Layout>
                <MainWrapper>
                    <SectionWrapper>
                        <p><img className="fun-logo" src={FunLogoMain} alt="FUN with Ruby Rei logo"/></p>
                        <h1>Licence Generator Login</h1>

                        <Form onSubmit={this._onSubmit}>
                            <FormGroup className="form-group" label="Username">
                                <InputGroup large name="username" placeholder="Your username" onChange={this._onChange}/>
                            </FormGroup>
                            <FormGroup className="form-group" label="Password">
                                <InputGroup large type="password" name="password" placeholder="Your password" onChange={this._onChange}/>
                            </FormGroup>
                            <Button large intent="success" type="submit" text="Sign in"/>
                        </Form>
                    </SectionWrapper>
                </MainWrapper>
            </Layout>
        );
    }
}

export default AuthPage;