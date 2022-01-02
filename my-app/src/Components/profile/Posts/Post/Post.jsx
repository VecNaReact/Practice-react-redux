import s from './Post.module.css'

const Post = (props) => {

    return (
        <div className={s.post}>
            <div className={s.post__face}>
                <div className={s.users__and__message}>
                    <a href="#"><img src="https://avatarko.ru/img/kartinka/30/pokemon_naushniki_pikachu_29279.jpg" alt=""/></a>
                    <a className={s.nick__name} href='#'>{props.name}</a>
                </div>
                <div>
                    <span className={s.post__text}>{props.message}</span>
                </div>
                <div>
                    <span className={s.like}>Like {props.like}</span>
                </div>
            </div>
        </div>
    )
}

export default Post