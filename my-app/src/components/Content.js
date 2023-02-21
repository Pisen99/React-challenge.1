import React, { Component } from 'react';
import css from "./css/Content.module.css";
import { savedPosts } from "../posts.json";

export class Content extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className={css.Content}>
                <div className={css.TitleBar}>
                    <h1>My Posts</h1>
                </div>
                <div className={css.SearchResults}>
                    savedPosts.map()
                </div>
            </div>
        )
    }
}

export default Content;