import React, { Component, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import NotificationAlert from 'react-notification-alert';

var Success = {
    place: 'tr',
    message: (
        <div>
            <div>
                Your Password has been reset successfully
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

class ResetPasswordMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
          email: '',
          password: '',
          password_confirmation: '',
          token: '',
        };
    }
   
    async resetPassword() {        
        return fetch(`${process.env.API_URL}/password/reset/post`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.state)
        });
    }   

    callResetPassword  = async e => {
        const result = await this.resetPassword();
        console.log(result);
        if(result.ok){
           this.alertSuccess();
           this.setState({ email: '', password: '',  password_confirmation: '',
            token: ''});
        } else {
            this.alertError();
        }
          
    }
    
    handleResetPassword = async e => {
        e.preventDefault();	
        this.setState({token: sessionStorage.getItem('token') },
        function() { this.callResetPassword(); }
        );	
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
                                    <h2 className="section__title">Reset your <br/>  password.</h2>
                                    <p>if you don't have an account you can <Link href="/sign-up"><a>Register here!</a></Link></p>
                                </div>
                            </div>
                        </div>
                        <NotificationAlert ref="notify" zIndex={9999} />

                        <div className="row">
                            <div className="col-xxl-6 offset-xxl-3 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
                                <div className="sign__wrapper white-bg">                                
                                    <div className="sign__form">
                                    <form onSubmit={this.handleResetPassword}>
                                        <div className="sign__input-wrapper mb-25">
                                            <h5>Work email</h5>
                                            <div className="sign__input">
                                                <input type="text" placeholder="e-mail address" name='email'
                                                onChange={e => this.setState({ email : e.target.value})}/>
                                                <i><FontAwesomeIcon icon={['fas', 'envelope']} /></i>
                                            </div>
                                        </div>
                                        <div className="sign__input-wrapper mb-10">
                                            <h5>Password</h5>
                                            <div className="sign__input">
                                                <input type="password" placeholder="Password" name='password'
                                                onChange={e => this.setState({ password : e.target.value})}/>
                                                <i><FontAwesomeIcon icon={['fas', 'lock']} /></i>
                                            </div>
                                        </div>
                                        <div className="sign__input-wrapper mb-10">
                                            <h5>Confirm Password</h5>
                                            <div className="sign__input">
                                                <input type="password" placeholder="Confirm Password" name='password'
                                                onChange={e => this.setState({ password_confirmation : e.target.value})}/>
                                                <i><FontAwesomeIcon icon={['fas', 'lock']} /></i>
                                            </div>
                                        </div>
                                        <button type='submit' className="e-btn w-100"> <span></span> Reset Password</button>
                                      
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

export default ResetPasswordMain;