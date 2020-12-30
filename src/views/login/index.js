import React  , {Component , Fragment } from 'react';
import "./index.scss";



import LoginForm from "./LoginForm";
import RegesterForm from "./RegesterForm";

class  Index extends Component{
    constructor(){
        super();
        this.state = {
            formType : 'login',
        }; 
    }

    switchForm = (value) =>{
        this.setState({
            formType : value
        });
            console.log(value);
    }

    render (){
        return (
            <div className="form-warp">
                <div>
                    {
                        this.state.formType === "login" ? 
                        <LoginForm switchForm = {this.switchForm}></LoginForm> 
                        : <RegesterForm  switchForm = {this.switchForm}></RegesterForm>
                    }                     
                </div>
            </div>
        );
    }
}


export default Index;