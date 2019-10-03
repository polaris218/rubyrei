import React from "react";
import { navigate } from "gatsby";
import styled from "styled-components";
import Layout from "./layout";
import { FormGroup, InputGroup, HTMLSelect, RadioGroup, Radio, Button, Dialog, Spinner, Classes } from "@blueprintjs/core";
import SectionWrapper from '../../components/SectionWrapper';
import { AxiosClient } from "../../components/Utils";
import FwRRCEPLogos from "../../assets/img/FwRR-CEPstamp.png";

var AuthService = null;
if (typeof window !== `undefined`) {
    AuthService = require("../../components/Utils").Auth;
}

var date = new Date();

const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validMultiEmailRegex = RegExp(/^(\s?[^\s,]+@[^\s,]+\.[^\s,]+\s?,)*(\s?[^\s,]+@[^\s,]+\.[^\s,]+)$/i);
const validNumberRegex = RegExp(/^(?=.*\d)(?=.*[1-9]).{1,10}$/);

const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
      (val) => val.length > 0 && (valid = false)
    );
    return valid;
  }
  
const countErrors = (errors) => {
    let count = 0;
    Object.values(errors).forEach(
        (val) => val.length > 0 && (count = count+1)
    );
    return count;
}

const forms = 
    [
        'languagePair',
        'purchaserSchool',
        'numberOfLicenses',
        'licenceType',
        'purchaserEmail',
        'sellerEmail'
    ];

const Error = styled.div`
    color: #db2269;
    font-size: 0.75em;    
    margin-top: 7px;
`;

const P = styled.span`
    margin-left: 10px;
`;

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
    .top-logos {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 60%;
        max-width: 400px;
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
    color: ##182026;
    background-color: #f2f2f2;
    padding: 24px;

    a {
        color: #0A6640;
        &:hover { text-decoration: underline }
    }
`;

const langPacksMap = {
    "LALEN":"Mexico",
    "SPLEN":"Spain",
    "TULEN":"Turkey"
};

class PageLicenceGenerator extends React.Component {
    form = React.createRef();
    state = {
        confirmOpen: false,
        isLoading: false,
        completed: false,
        formValid: false,
        errorCount: null,
        errors: {
          languagePair: '',
          purchaserSchool: '',
          numberOfLicenses: '',
          licenceType: '',
          purchaserEmail: '',
          sellerEmail: ''
        }
    }

    _onChange = (evt, isSubmit) => {
        if(!isSubmit)
            evt.preventDefault();
        const { name, value } = evt.target;
        const index = forms.indexOf(name);
        this.form.current[index > 3 ? index + 1 : index].value = value;    
        let errors = this.state.errors;        
        switch (name) {
          case 'languagePair': 
            errors.languagePair = 
              value.length > 6
                ? 'Please select a country.'
                : '';
            break;
          case 'purchaserSchool': 
            errors.purchaserSchool = 
              value.length < 1
                ? 'Please enter a school name.'
                : '';  
            break;
          case 'numberOfLicenses':         
            errors.numberOfLicenses = 
              validNumberRegex.test(value)
                ? 
                    (value > 250
                    ? 'You can create a maximum of 250 logins at one time.'
                    :''
                    )
                : 'Please enter a valid number between 1 - 250.'
              ;
            break;
          case 'licenceType': 
            errors.licenceType = 
              value.length < 1 
                ? 'Please select a licence type'
                : '';
            break;
          case 'purchaserEmail': 
            errors.purchaserEmail = 
              validMultiEmailRegex.test(value)
                ? ''
                : 'Email is not valid!';
            break;
          case 'sellerEmail':
            errors.sellerEmail = 
              validEmailRegex.test(value)
                ? ''
                : 'Email is not valid!';
            break;            
          default:
            break;
        }
    
        this.setState({errors, [name]: value});
        if(countErrors(errors) !== null && validateForm(errors) && isSubmit && index + 1 == 6)
            this.setState({ confirmOpen: true });
    }

    _onSubmit = (evt) => {
        evt.preventDefault();
        forms.map((item, key) =>
            {                
                this._onChange({target: {name: item, value: this.form.current[key > 3 ? key + 1 : key].value}}, true);
            });
        this.setState({ formValid: validateForm(this.state.errors )});
        this.setState({ errorCount: countErrors(this.state.errors )});
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
            "productType": "standard",
            "licenseType": this.state.licenceType,
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
        const {errors, formValid} = this.state;

        if(AuthService && !AuthService.isAuthenticated()) {
            navigate('/auth');
            return (<div></div>);
        }

        return(
            <Layout>
                <MainWrapper>
                    <AccountToolbar>
                        <a onClick={this._onSignout}>Log out</a>
                    </AccountToolbar>
                    <SectionWrapper>
                        <p><img className="top-logos" src={FwRRCEPLogos} alt="FUN with Ruby Rei and Cambridge Exam Preparation logos"/></p>
                        <h1>Licence Generation Form</h1>

                        {this.state.completed &&
                            <CompletedMessageBar>
                                <p>LICENCES GENERATED SUCCESSFULLY.</p>
                                <br/>
                                <p>The licences have been sent to the email addresses you provided.</p>
                                <br/>
                                <p><h3><b>What would you like to do next?</b></h3><a onClick={this._onRestore}>Generate a new set of licences</a>  |  <a onClick={this._onSignout}>Log out</a></p>
                            </CompletedMessageBar>
                        }

                        {!this.state.completed &&
                            <Form onSubmit={this._onSubmit} ref={this.form}>
                                <FormGroup className="form-group" label="Which country are you in?">
                                    <HTMLSelect name="languagePair" ref={this.languagePair} onChange={this._onChange}>
                                        <option>Choose a country...</option>
                                        <option value="LALEN">Mexico</option>
                                        <option value="SPLEN">Spain</option>
                                        <option value="TULEN">Turkey</option>
                                    </HTMLSelect>
                                    {errors.languagePair.length > 0 && 
                                        <Error>{errors.languagePair}</Error>}
                                </FormGroup>                                
                                <FormGroup className="form-group" label="School name">
                                    <InputGroup large placeholder="e.g. Cambridge School" name="purchaserSchool" onBlur={this._onChange} />
                                    {errors.purchaserSchool.length > 0 && 
                                        <Error>{errors.purchaserSchool}</Error>}
                                </FormGroup>                                                                
                                <FormGroup className="form-group" label="Number of logins">
                                    <InputGroup large placeholder="e.g. 64" name="numberOfLicenses" onBlur={this._onChange}/>
                                    {errors.numberOfLicenses.length > 0 && 
                                        <Error>{errors.numberOfLicenses}</Error>}
                                </FormGroup>
                                <RadioGroup inline className="form-group" label="Licence type" name="licenceType" onChange={this._onChange} selectedValue={this.state.licenceType}>
                                    <Radio label="Trial version" value="demo_v2"/>
                                    <Radio label="Full version" value="demo_v1"/>
                                    {errors.licenceType.length > 0 && 
                                        <Error>{errors.licenceType}</Error>}
                                </RadioGroup>
                                <FormGroup className="form-group" label="Teacher or school email address">
                                    <InputGroup large placeholder="e.g. teacher@school.com" name="purchaserEmail" onBlur={this._onChange}/>
                                    {errors.purchaserEmail.length > 0 && 
                                        <Error>{errors.purchaserEmail}</Error>}
                                </FormGroup>
                                <FormGroup className="form-group" label="Your email address">
                                    <InputGroup large placeholder="e.g. salesrep@acmecorp.com" type="email" name="sellerEmail" onBlur={this._onChange}/>
                                    {errors.sellerEmail.length > 0 && 
                                        <Error>{errors.sellerEmail}</Error>}
                                </FormGroup>
                                <Button large intent="success" text="Generate" type="submit" />
                                {this.state.errorCount !== null ? <P>Form is {formValid ? 'valid ✅' : 'invalid ❌'}</P> : ''}
                            </Form>
                        }
                    </SectionWrapper>
                </MainWrapper>
                <Dialog
                    onClose={this._onCancelGeneration}
                    title="Confirm your licence details"
                    isOpen={this.state.confirmOpen}
                    canEscapeKeyClose={false}
                >
                    <div className={Classes.DIALOG_BODY}>
                        <p><span>Country:&nbsp;</span>{langPacksMap[this.state.languagePair]}</p>
                        <p><span>School name:&nbsp;</span>{this.state.purchaserSchool}</p>
                        <p><span>Number of licences:&nbsp;</span>{this.state.numberOfLicenses}</p>
                        <p><span>Licence type:&nbsp;</span>{this.state.licenceType === "demo_v2" ? "Trial" : "Full"}</p>
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