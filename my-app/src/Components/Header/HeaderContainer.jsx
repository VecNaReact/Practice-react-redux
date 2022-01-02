import React from "react";
import Header from "./Header";

import {getMyName} from "../../redux/authReducer";
import {connect} from "react-redux";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getMyName()
    }

    render() {
        return (
            <Header {...this.props} />
        )
    }
}

debugger

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login:  state.auth.login
})

export default connect(mapStateToProps, {getMyName})(HeaderContainer)