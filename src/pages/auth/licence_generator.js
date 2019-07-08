import React from "react";
import { navigate } from "gatsby";
import styled from "styled-components";
import Layout from "./layout";
import { FormGroup, InputGroup, HTMLSelect, RadioGroup, Radio, Button, Dialog, Spinner, Classes } from "@blueprintjs/core";
import SectionWrapper from '../../components/SectionWrapper';
import { AxiosClient } from "../../components/Utils";

var AuthService = null;
if (typeof window !== `undefined`) {
    AuthService = require("../../components/Utils").Auth;
}

var date = new Date();

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

const AccountToolbar = styled.div`
    display: block;
    position: absolute;
    top: 24px;
    right: 40px;
    text-align: right;
    width: 200px;
    height: 56px;

    a {
        text-decoration: underline;
    }
`;

const CompletedMessageBar = styled.div`
    display: block;
    color: #F5F8FA;
    background-color: #3DCC91;
    padding: 24px;

    a {
        color: #0A6640;
        &:hover { text-decoration: underline }
    }
`;

class PageLicenceGenerator extends React.Component {
    state = {
        confirmOpen: false,
        isLoading: false,
        completed: false
    }

    _onChange = (evt) => {
        this.setState({[evt.target.name]: evt.target.value});
    }

    _onSubmit = (evt) => {
        evt.preventDefault();
        this.setState({ confirmOpen: true });
    }

    _onCancelGeneration = (evt) => {
        evt.preventDefault();
        this.setState({ confirmOpen: false });
    }

    _onConfirmGeneration = (evt) => {
        evt.preventDefault();
        this.setState({isLoading: true});

        let requestBody = {
            "paymentReference": this.state.purchaserSchool,
            "paymentSource": "",
            "chargeId": "",
            "purchaseDateMS": date.getTime(),
            "gameId": "180131",
            "productType": this.state.productType,
            "productDetail": {"languagePair": this.state.languagePair},
            "numberOfLicenses": parseInt(this.state.numberOfLicenses),
            "purchaserEmail": this.state.purchaserEmail,
            "purchaserFirstName": "",
            "purchaserLastName": "",
            "purchaserPhoneNumber": "",
            "purchaserPosition": "BD",
            "purchaserSchool": this.state.purchaserSchool,
            "sellerEmail": this.state.sellerEmail
        }
        AxiosClient.post("/functions/deliverProduct", requestBody, {
            headers: {
                'X-Parse-Session-Token': AuthService && AuthService.isAuthenticated()
            }
        })
        .then(res => {
            this.setState({
                isLoading: false,
                confirmOpen: false,
                completed: true
            });
        })
        .catch(err => {
            console.log(err)
        })
    }

    _onRestore = () => {
        if (typeof window !== `undefined`) {
            window.location.href = '/auth/licence_generator/';
        }
    }

    _onSignout = (evt) => {
        evt.preventDefault();
        if(AuthService) {
            AuthService.signout();
            setTimeout(() => {
                navigate('/auth');
            }, 1000);
        }
    }

    render() {
        if(AuthService && !AuthService.isAuthenticated()) {
            navigate('/auth');
            return (<div></div>);
        }

        return(
            <Layout>
                <MainWrapper>
                    <AccountToolbar>
                        <a onClick={this._onSignout}>Logout</a>
                    </AccountToolbar>
                    <SectionWrapper>
                        <h1>Fun with Ruby Rei</h1>
                        <h2>Generate and send credentials</h2>

                        {this.state.completed &&
                            <CompletedMessageBar>
                                <p>Licences generated successfully. An email with the licences created is also been sent to the specified email address.</p>
                                <p>What do you want do next?&nbsp;<a onClick={this._onRestore}>Generate a new set of licences</a> or <a onClick={this._onSignout}>Logout</a></p>
                            </CompletedMessageBar>
                        }

                        {!this.state.completed &&
                            <Form onSubmit={this._onSubmit}>
                                <FormGroup className="form-group" label="Which country are you in?">
                                    <HTMLSelect name="languagePair" onChange={this._onChange}>
                                        <option>Choose a country...</option>
                                        <option value="LALEN">Mexico</option>
                                        <option value="SPLEN">Spain</option>
                                        <option value="TULEN">Turkey</option>
                                    </HTMLSelect>
                                </FormGroup>
                                <FormGroup className="form-group" label="School name">
                                    <InputGroup large placeholder="e.g. Cambridge School" name="purchaserSchool" onChange={this._onChange}/>
                                </FormGroup>
                                <FormGroup className="form-group" label="Number of licences">
                                    <InputGroup large placeholder="e.g. 64" name="numberOfLicenses" onChange={this._onChange}/>
                                </FormGroup>
                                <RadioGroup inline className="form-group" label="Licence type" name="productType" onChange={this._onChange} selectedValue={this.state.productType}>
                                    <Radio label="Trial version" value="trial"/>
                                    <Radio label="Full version" value="standard"/>
                                </RadioGroup>
                                <FormGroup className="form-group" label="Teacher or school email address">
                                    <InputGroup large placeholder="e.g. teacher@school.com" type="email" name="purchaserEmail" onChange={this._onChange}/>
                                </FormGroup>
                                <FormGroup className="form-group" label="Your email address">
                                    <InputGroup large placeholder="e.g. salesrep@acmecorp.com" type="email" name="sellerEmail" onChange={this._onChange}/>
                                </FormGroup>
                                <Button large intent="success" text="Generate" type="submit" />
                            </Form>
                        }
                    </SectionWrapper>
                </MainWrapper>
                <Dialog
                    onClose={this._onCancelGeneration}
                    title="Confirm licences generation"
                    isOpen={this.state.confirmOpen}
                    canEscapeKeyClose={false}
                >
                    <div className={Classes.DIALOG_BODY}>
                        <p><span>Country:&nbsp;</span>{this.state.languagePair}</p>
                        <p><span>School name:&nbsp;</span>{this.state.purchaserSchool}</p>
                        <p><span>Number of licences:&nbsp;</span>{this.state.numberOfLicenses}</p>
                        <p><span>Licence type:&nbsp;</span>{this.state.productType}</p>
                        <p><span>Teacher/school email address:&nbsp;</span>{this.state.purchaserEmail}</p>
                        <p><span>Your email address:&nbsp;</span>{this.state.sellerEmail}</p>
                    </div>
                    <div className={Classes.DIALOG_FOOTER}>
                        <div className={Classes.DIALOG_FOOTER_ACTIONS}>
                            <Button disabled={this.state.isLoading} onClick={this._onCancelGeneration}>Cancel</Button>
                            <Button intent="success" disabled={this.state.isLoading} onClick={this._onConfirmGeneration}>{
                                this.state.isLoading ? <Spinner size={16} /> : "Confirm and send licences"
                            }</Button>
                        </div>
                    </div>
                </Dialog>
            </Layout>
        );
    }
} 

export default PageLicenceGenerator;