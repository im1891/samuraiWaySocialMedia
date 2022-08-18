import React from "react";
import style from './Profile.module.css'
function Profile() {
    return (
        <div className={style.content}>
            <div>
                <img
                    src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
                    alt="banner"/>
            </div>
            <div>
                ava + description
            </div>
            <div className={style.posts}>
                My Posts
                <div className={style.item}>
                    New post
                </div>
                <div>
                    <div className={style.item}>
                        New post 1
                    </div>
                    <div>
                        New post 2
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;