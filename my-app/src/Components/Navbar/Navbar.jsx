    import s from './Navbar.module.css'
    import {Link} from "react-router-dom";

    const Navbar = () => {
        return (
            <div className={s.menu}>
                <li className={s.item}><Link to="/profile/:invoiceId">Profile</Link></li>
                <li className={s.item}><Link to="/dialog">Messages</Link></li>
                <li className={s.item}><Link to="/news">News</Link></li>
                <li className={s.item}><Link to="/music">Music</Link></li>
                <li className={s.item}><Link to="/control">Setting</Link></li>
                <li className={s.item}><Link to="/fiend">Fiend users</Link></li>
            </div>
        )
    }

    export default Navbar



