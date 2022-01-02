import s from './Profile.module.css'
import ProfileArt from "./ProfileArt/ProfileArt";
import MyPostsContainer from "./Posts/MyPostsContainer";

const Profile = (props) => {
        return (
        <div className={s.content}>
            <ProfileArt profile={props.profile}/>
            <div className={s.post}>
                <MyPostsContainer/>
            </div>
        </div>
    );
};

export default Profile