import s from './Posts.module.css'
import Post from "./Post/Post";
import React from "react";

const Posts = (props) => {
    let postsElement = props.profilePage.postData.map(post => <Post name={post.name} key={post.id} message={post.message} like={post.likesCount} />)

    let onAddPost = () => {
        props.addNewPost();
    }

    let onPostChange = (e) => {
        let text = e.target.value;
        props.onPostChanges(text)
    }

    return (
        <div className={s.posts}>
            <div>
                <textarea onChange={onPostChange} value={props.changeText} className={s.resize} cols="50" rows="5"/>
            </div>
            <div>
                <button onClick={onAddPost} className={s.btn}>Отправить</button>
            </div>
            {postsElement}
        </div>
    )
}

export default Posts