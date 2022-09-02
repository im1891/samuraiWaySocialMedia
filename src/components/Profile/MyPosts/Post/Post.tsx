import React from "react";
import style from './Post.module.css'
import {PostType} from "../../../../Redux/state";


export const Post: React.FC<PostType> = (props) => {

    const {message, likesCount, id} = props;

    return (
        <div key={id} className={style.item}>
            <img
                src="https://ca-times.brightspotcdn.com/dims4/default/7728ddf/2147483647/strip/true/crop/5617x3745+0+0/resize/840x560!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F74%2F3c%2F99389cff4d9b893ec0c49a581df9%2Fla-photos-1staff-3058612-et-0910-toronto-photo-studio-mon-jlc-35821.jpg"
                alt="avatar"/>
            {message}
            <div>
                <span>like: {likesCount}</span>
            </div>
        </div>
    )
}