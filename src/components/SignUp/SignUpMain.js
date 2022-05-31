import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import PhoneInput from 'react-phone-number-input';
import NotificationAlert from 'react-notification-alert';
import 'react-phone-number-input/style.css';

var Success = {
    place: 'tr',
    message: (
        <div>
            <div>
                Your account has been created successfully. An email has been sent to your mentioned email for verification.
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

class SignUpMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          username: '',
          city: '',
          country: '',
          father_name: '',
          email: '',
          password: '',
          job_designation: '',
          job_location: '',
          year_of_graduation: '',
          institute: '',
          mobile_number: '',
          packages: '',
          duration: '',
          password_confirmation: '',
          whitelisted_conutries : ['US',  'UK',  'PK'],
          value: '',
        };
        
    }
   
    async registerUser() {
        
        return fetch(`${process.env.API_URL}/register`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.state)
        })
          .then(data => data.json())
    }   
    
    handleRegister = async e => {
        e.preventDefault();		
        const token = await this.registerUser();
        if(token.success){
            this.setToken(token.data.access_token);
            this.alertSuccess();
            //this.props.navigation.navigate("/");
            //this.props.history.push("/")
        } else {
            this.alertError();
        }         
    } 

    setToken(userToken) {
        sessionStorage.setItem('token', JSON.stringify(userToken));
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
                        <img className="man-1" src="assets/img/icon/sign/man-3.png" alt="img not found"/>
                        <img className="man-2 man-22" src="assets/img/icon/sign/man-2.png" alt="img not found"/>
                        <img className="circle" src="assets/img/icon/sign/circle.png" alt="img not found"/>
                        <img className="zigzag" src="assets/img/icon/sign/zigzag.png" alt="img not found"/>
                        <img className="dot" src="assets/img/icon/sign/dot.png" alt="img not found"/>
                        <img className="bg" src="assets/img/icon/sign/sign-up.png" alt="img not found"/>
                        <img className="flower" src="assets/img/icon/sign/flower.png" alt="img not found"/>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-8 offset-xxl-2 col-xl-8 offset-xl-2">
                                <div className="section__title-wrapper text-center mb-55">
                                    <h2 className="section__title">Create a free <br/>  Account</h2>
                                    <p>I'm a subhead that goes with a story.</p>
                                </div>
                            </div>
                        </div>
                        <NotificationAlert ref="notify" zIndex={9999} />

                        <div className="row">
                            <div className="col-xxl-6 offset-xxl-3 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
                                <div className="sign__wrapper white-bg">
                                    <div className="sign__header mb-35">
                                    <div className="sign__in text-center">
                                        <a href="#" className="sign__social g-plus text-start mb-15"><i><FontAwesomeIcon icon={['fab', 'google']} /></i>Sign Up with Google</a>
                                        <p> <span>........</span> Or, <Link href="/sign-up"><a>sign up</a></Link> with your email<span> ........</span> </p>
                                    </div>
                                    </div>
                                    <div className="sign__form">
                                    <form onSubmit={this.handleRegister}>
                                        <div className="sign__input-wrapper mb-25">
                                            <h5>Full Name</h5>
                                            <div className="sign__input">
                                                <input type="text" placeholder="Full name"
                                                 onChange={e => this.setState({ name : e.target.value})}/>
                                                <i><FontAwesomeIcon icon={['fas', 'user']} /></i>
                                            </div>
                                        </div>
                                        <div className="sign__input-wrapper mb-25">
                                            <h5>User Name</h5>
                                            <div className="sign__input">
                                                <input type="text" placeholder="User name"
                                                 onChange={e => this.setState({ username : e.target.value})}/>
                                                <i><FontAwesomeIcon icon={['fas', 'user']} /></i>
                                            </div>
                                        </div>
                                        <div className="sign__input-wrapper mb-25">
                                            <h5>Father Name</h5>
                                            <div className="sign__input">
                                                <input type="text" placeholder="Father name"
                                                 onChange={e => this.setState({ father_name : e.target.value})}/>
                                                <i><FontAwesomeIcon icon={['fas', 'user']} /></i>
                                            </div>
                                        </div>
                                        <div className="sign__input-wrapper mb-25">
                                            <h5>Work Email</h5>
                                            <div className="sign__input">
                                                <input type="text" placeholder="E-mail address"
                                                  onChange={e => this.setState({ email : e.target.value})}/>
                                                <i><FontAwesomeIcon icon={['fas', 'envelope']} /></i>
                                            </div>
                                        </div>                                 
                                        <div className="sign__input-wrapper mb-25">
                                            <h5>City</h5>
                                            <div className="sign__input">
                                                <input type="text" placeholder="City"
                                                  onChange={e => this.setState({ city : e.target.value})}/>
                                                <i><FontAwesomeIcon icon={['fas', 'envelope']} /></i>
                                            </div>
                                        </div>
                                        <div className="sign__input-wrapper mb-25">
                                            <h5>Country</h5>
                                            <div className="sign__input">
                                                
                                                <input type="text" placeholder="Country"
                                                  onChange={e => this.setState({ country : e.target.value})}/>
                                                <i><FontAwesomeIcon icon={['fas', 'envelope']} /></i>
                                            </div>
                                        </div>
                                        <div className="sign__input-wrapper mb-25">
                                            <h5>Mobile No</h5>
                                            <div className="sign__input">
                                                   <PhoneInput
                                                        defaultCountry="GB"
                                                        flagUrl={'https://flag.pk/flags/4x3/{xx}.svg'}
                                                        countries={this.state.whitelist}
                                                        value={this.state.mobile_number}
                                                        onChange={ (mobile_number) => this.setState({ mobile_number : mobile_number })}                                                      
                                                        />
                                              
                                            </div>
                                        </div>
                                       
                                        <div className="sign__input-wrapper mb-25">
                                            <h5>Year Of Graduation</h5>
                                            <div className="sign__input">
                                                <input type="text" placeholder="Year of graduation"
                                                  onChange={e => this.setState({ year_of_graduation : e.target.value})}/>
                                                <i><FontAwesomeIcon icon={['fas', 'envelope']} /></i>
                                            </div>
                                        </div>
                                        <div className="sign__input-wrapper mb-25">
                                            <h5>Institute</h5>
                                            <div className="sign__input">
                                                <input type="text" placeholder="Institute"
                                                  onChange={e => this.setState({ institute : e.target.value})}/>
                                                <i><FontAwesomeIcon icon={['fas', 'envelope']} /></i>
                                            </div>
                                        </div>
                                        <div className="sign__input-wrapper mb-25">
                                            <h5>Job Designation</h5>
                                            <div className="sign__input">
                                                <input type="text" placeholder="Job designation"
                                                  onChange={e => this.setState({ job_designation : e.target.value})}/>
                                                <i><FontAwesomeIcon icon={['fas', 'envelope']} /></i>
                                            </div>
                                        </div>
                                        <div className="sign__input-wrapper mb-25">
                                            <h5>Job Location</h5>
                                            <div className="sign__input">
                                                <input type="text" placeholder="Job location"
                                                  onChange={e => this.setState({ job_location : e.target.value})}/>
                                                <i><FontAwesomeIcon icon={['fas', 'envelope']} /></i>
                                            </div>
                                        </div>
                                        <div className="sign__input-wrapper mb-25">
                                            <h5>Packages</h5>
                                            <div className="sign__input">
                                                <input type="text" placeholder="Packages"
                                                  onChange={e => this.setState({ packages : e.target.value})}/>
                                                <i><FontAwesomeIcon icon={['fas', 'envelope']} /></i>
                                            </div>
                                        </div>
                                        <div className="sign__input-wrapper mb-25">
                                            <h5>Duration</h5>
                                            <div className="sign__input">
                                                <input type="text" placeholder="Duration"
                                                  onChange={e => this.setState({ duration : e.target.value})}/>
                                                <i><FontAwesomeIcon icon={['fas', 'envelope']} /></i>
                                            </div>
                                        </div>
                                  
                                        <div className="sign__input-wrapper mb-25">
                                            <h5>Password</h5>
                                            <div className="sign__input">
                                                <input type="text" placeholder="Password"
                                                 onChange={e => this.setState({ password : e.target.value})}/>
                                                <i><FontAwesomeIcon icon={['fas', 'lock']} /></i>
                                            </div>
                                        </div>
                                        <div className="sign__input-wrapper mb-10">
                                            <h5>Re-Password</h5>
                                            <div className="sign__input">
                                                <input type="text" placeholder="Re-Password"
                                                 onChange={e => this.setState({ password_confirmation : e.target.value})}/>
                                                <i><FontAwesomeIcon icon={['fas', 'lock']} /></i>
                                            </div>
                                        </div>
                                        <div className="sign__action d-flex justify-content-between mb-30">
                                            <div className="sign__agree d-flex align-items-center">
                                                <input className="m-check-input" type="checkbox" id="m-agree"/>
                                                <label className="m-check-label" htmlFor="m-agree">I agree to the <a href="#">Terms & Conditions</a>
                                                </label>
                                            </div>
                                        </div>
                                        <button className="e-btn w-100"> <span></span> Sign Up</button>
                                        <div className="sign__new text-center mt-20">
                                            <p>Already in Markit ? <Link href="/sign-in"><a>Sign In</a></Link></p>
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

export default SignUpMain;