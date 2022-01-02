import s from './NotFountPage.module.css'
import {Link} from "react-router-dom";

const NotFountPage = () => {
    return (
        <div className={s.error__page}>
            <div>
                Not found page.
            </div>
            <div><Link to="/profile">Go home?</Link></div>
        </div>
    )
}

export default NotFountPage