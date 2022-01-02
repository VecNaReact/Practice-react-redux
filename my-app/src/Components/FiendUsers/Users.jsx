import React from 'react'
import s from "./Users.module.css";
import userPhoto from "../../assets/images/images.png";
import {Link} from "react-router-dom";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div className={s.user}>
            <div className={s.users__page_number}>
                {
                    pages.map(pag => {
                        return <span className={props.currentPage === pag && s.selectedPage}
                                     onClick={e => props.onPageChanged(pag)}>{pag}</span>
                    })
                }
            </div>
            {props.usersData.map(u => {

                    return (
                        <div key={u.id}>
                            <div className={s.user__avatar}>
                                <div className={s.user__link}>
                                    <Link to={'/profile/' + u.id}>
                                        <img src={u.photos.small != null ? u.photos.small : userPhoto} alt=""/>
                                    </Link>
                                    {u.followed
                                        ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={ () =>{
                                            props.unfollow(u.id)
                                        }}>
                                            Unfollow
                                        </button>
                                        : <button disabled={props.followingInProgress.some( id => id === u.id)} onClick={ () => {
                                            props.follow(u.id)
                                        }}>
                                            Follow
                                        </button>
                                    }
                                </div>
                                <div className={s.user__info}>
                                    <div className={s.user__bio}>
                                        <div>{u.name}</div>
                                        <div>{u.status}</div>
                                    </div>
                                    <div className={s.user__location}>
                                        <div>{/*'u.location.country'*/}</div>
                                        <div>{/*'u.location.city'*/}</div>
                                    </div>
                                </div>
                            </div>
                        </div>)
                }
            )
            }
        </div>
    )
}

export default Users