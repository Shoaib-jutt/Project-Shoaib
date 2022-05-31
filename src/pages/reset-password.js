import React from 'react';
import FooterThree from '../components/Layout/Footer/FooterStyleThree';
import ResetPasswordMain from '../components/ResetPassword/ResetPasswordMain';
import HeaderFour from '../components/Layout/Header/HeaderStyleFour';

class ResetPassword extends React.Component {

    static getInitialProps({store}) {}

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
            <HeaderFour />
            <ResetPasswordMain />
            <FooterThree />
            </React.Fragment>
        );
    }
}


export default ResetPassword;