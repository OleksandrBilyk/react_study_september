import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";

import {postService} from "../../services/postService";
import style from "./Post.module.css";


const Post = () => {
    const {state: postId} = useLocation();
    const [post, setPosts] = useState([])

    useEffect(() => {
        postService.getByPostId(postId)
            .then(({data}) => setPosts(data))
    }, [postId]);
    const {id, body, title} = post;

    return (
        <div className={style.post}>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
        </div>
    );
};

export {Post};