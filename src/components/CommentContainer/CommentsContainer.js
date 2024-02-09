import React, {useEffect, useState} from 'react';

import {CommentsForm} from './CommentsForm'
import {commentsService} from "../../services/commentsService";
import {Comments} from "./Comments";
import style from "./CommentsContainer.module.css"

const CommentsContainer = () => {
    const [comments, setComments] = useState([])

    useEffect(() => {
        commentsService.getAll()
            .then(({data}) => setComments(data))
    }, []);

    return (
        <div>
            <div className={style.form_comment}>
                <CommentsForm setComments={setComments}/>
            </div>
            <Comments comments={comments}/>
        </div>
    );
};

export {CommentsContainer};