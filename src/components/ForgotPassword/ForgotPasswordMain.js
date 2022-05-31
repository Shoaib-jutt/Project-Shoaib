import React, { Component, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import NotificationAlert from 'react-notification-alert';

var Success = {
    place: 'tr',
    message: (
        <div>
            <div>
                Email has been sent successfully to your email.
            </div>
        </div>
    ),
    type: "success",
    autoDismiss: 7
}


var Error = {
    place: 'tr',
    message: (
        <div>
            <div>
                Some error happened. Try again.
            </div>
        </div>
    ),
    type: "danger",
    autoDismiss: 7
}
class ForgotPasswordMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
          email: ''
        };
    }
   
    async forgotPassword() {
        
        return fetch(`${process.env.API_URL}/forgot_password`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.state)
        });
          
    }   
    
    handleForgotPassword = async e => {
        e.preventDefault();		
        const result = await this.forgotPassword();
        if(result.ok){
           this.alertSuccess();
           this.setState({ email: '' });
        } else {
            this.alertError();
        }
    }  

    alertSuccess(){
        this.refs.notify.notificationAlert(Success);
    }

    alertError(){
        this.refs.notify.notificationAlert(Error);
    }

    render() {
        return (
            <main>
                <section className="signup__area po-rel-z1 pt-100 pb-145">
                    <div className="sign__shape">
                        <img className="man-1" src="assets/img/icon/sign/man-1.png" alt="img not found"/>
                        <img className="man-2" src="assets/img/icon/sign/man-2.png" alt="img not found"/>
                        <img className="circle" src="assets/img/icon/sign/circle.png" alt="img not found"/>
                        <img className="zigzag" src="assets/img/icon/sign/zigzag.png" alt="img not found"/>
                        <img className="dot" src="assets/img/icon/sign/dot.png" alt="img not found"/>
                        <img className="bg" src="assets/img/icon/sign/sign-up.png" alt="img not found"/>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-8 offset-xxl-2 col-xl-8 offset-xl-2">
                                <div className="section__title-wrapper text-center mb-55">
                                    <h2 className="section__title">Forgot your <br/>  password?</h2>
                                    <p>if you don't have an account you can <Link href="/sign-up"><a>Register here!</a></Link></p>
                                </div>
                            </div>
                        </div>
                        <NotificationAlert ref="notify" zIndex={9999} onClick={() => console.log("hey")} />

                        <div className="row">
                            <div className="col-xxl-6 offset-xxl-3 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
                                <div className="sign__wrapper white-bg">                                    
                                    <div className="sign__form">
                                    <form onSubmit={this.handleForgotPassword}>
                                        <div className="sign__input-wrapper mb-25">
                                            <h5>Work email</h5>
                                            <div className="sign__input">
                                                <input type="text" placeholder="e-mail address" name='email' value={this.state.email}
                                                onChange={e => this.setState({ email : e.target.value})}/>
                                                <i><FontAwesomeIcon icon={['fas', 'envelope']} /></i>
                                            </div>
                                        </div>                                    
                                        <button type='submit' className="e-btn w-100"> <span></span> Forgot Password</button>
                                        <div className="sign__new text-center mt-20">
                                            <p>New to Market? <Link href="/sign-up"><a>Sign Up</a></Link></p>
                                        </div>
                                    </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

        	</main>
        );
    }
}

export default ForgotPasswordMain;