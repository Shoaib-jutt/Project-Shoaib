import React from 'react';
import FooterThree from '../components/Layout/Footer/FooterStyleThree';
import ForgotPasswordMain from '../components/ForgotPassword/ForgotPasswordMain';
import HeaderFour from '../components/Layout/Header/HeaderStyleFour';

class ForgotPassword extends React.Component {

    static getInitialProps({store}) {}

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
            <HeaderFour />
            <ForgotPasswordMain />
            <FooterThree />
            </React.Fragment>
        );
    }
}


export default ForgotPassword;