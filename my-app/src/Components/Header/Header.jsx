import s from './Header.module.css'
import {Link} from "react-router-dom";
import Login from "../Login/Login";

const  Header = (props) => {

    return(
        <div className={s.header}>
            <Link className={s.logo} to="/">
                <img src="https://www.logolynx.com/images/logolynx/84/8469417868cecacfa49fd979ffd4631d.png" alt="dota2"/>
            </Link>

            <div className={s.login__block}>
                {props.isAuth ? props.login : <Link to='/login'><Login /></Link>}
            </div>
        </div>
    )
}

export default Header