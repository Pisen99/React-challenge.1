import React from 'react';
import css from "./css/PostItem.module.css";

function PostItem(props) {

    return (
        props.savedPosts.map((post) => {
            const {title, name, image, description} = post
            return <div className={css.SearchItem} key={post.title}>
                <p>{post.title}</p>
                <p>{post.name}</p>
                <img src={post.image} alt="random" />
                <p>{post.description}</p>
            </div>
        })
    )
}

export default PostItem;