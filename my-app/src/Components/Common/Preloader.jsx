import s from "../FiendUsers/Users.module.css";
import preloader from "../../assets/images/preloaders.svg";
import React from "react";

const Preloader = (props) => {
    return <div className={s.preloader}><img src={preloader} alt=""/></div>
}

export default Preloader