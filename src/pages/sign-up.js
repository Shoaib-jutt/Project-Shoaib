import React from 'react';
import FooterThree from '../components/Layout/Footer/FooterStyleThree';
import HeaderThree from '../components/Layout/Header/HeaderStyleThree';
import SignUpMain from '../components/SignUp/SignUpMain';

class SignIn extends React.Component {

    static getInitialProps({store}) {}

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
            <HeaderThree />
            <SignUpMain />
            <FooterThree />
            </React.Fragment>
        );
    }
}


export default SignIn;