import s from "./DialogItem.module.css"
import {Link} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <Link to={props.id} className={s.dialog}>{props.name}</Link>
        </div>
    )
}

export default DialogItem