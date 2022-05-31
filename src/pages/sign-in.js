import React from 'react';
import FooterThree from '../components/Layout/Footer/FooterStyleThree';
// import SignInMain from '../components/SignIn/SignInMain';
import Signinmainn from "../components/SignIn/Signinmainn"
import HeaderThree from '../components/Layout/Header/HeaderStyleThree';

class SignIn extends React.Component {

    static getInitialProps({store}) {}

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
            <HeaderThree />
          <Signinmainn/>
            <FooterThree />
            </React.Fragment>
        );
    }
}


export default SignIn;