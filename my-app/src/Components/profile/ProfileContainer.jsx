import React, {useEffect, useState} from 'react'
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profileReducer";
import Profile from "./Profile";
import {useParams} from "react-router-dom";
import {usersAPI} from  '../../api/api'
import Login from "../Login/Login";


function Invoice (props) {
    let {invoiceId} = useParams();

    const [users] = useState(0)

    useEffect(() => {
        const fetchData  = usersAPI.redirectToUser(invoiceId, props.setUserProfile)
        fetchData()
    }, [users])

    // if(!props.auth){
    //     return <Login/>
    // }

    return  (
        <div>
            <div>
                <Profile {...props} profile={props.profile}/>
            </div>
        </div>
    )
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    auth: state.auth.isAuth
})

export default connect(mapStateToProps, {setUserProfile})(Invoice)