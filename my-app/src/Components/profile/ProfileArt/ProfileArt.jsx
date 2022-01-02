import s from './ProfileArt.module.css'
import Preloader from "../../Common/Preloader";
import userPhoto from '../../../assets/images/images.png'

const ProfileArt = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div className={s.user}>
                <div className={s.content__logo}>
                    <img src="https://sfondo.info/i/original/0/6/7/4630.jpg" alt=""/>
                </div>
                <div className={s.users__data}>
                    <div>
                        <img className={s.user__photo} src={props.profile.photos.small != null ? props.profile.photos.small : userPhoto} alt=""/>
                    </div>
                    <div className={s.user__info}>
                        <div className={s.user__aboutMe}>{props.profile.fullName}</div>
                        <div className={s.user__aboutMe}>{props.profile.aboutMe}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileArt