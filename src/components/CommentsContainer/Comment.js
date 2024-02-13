import {useNavigate} from "react-router-dom";
import style from "./Comment.module.css"

const Comment = ({comment}) => {
    const {id, postId, name, body, email} = comment;
    const navigate = useNavigate();
    return (
        <div className={style.comment}>
            <article>
                <div>id: {id}</div>
                <div className={style.name}>name: {name}</div>
                <div>body: {body}</div>
                <div>email: {email}</div>
                <div>postId: {postId}</div>
                <button onClick={() => navigate('post', {state: postId})}>getPost</button>
            </article>
            <div className={id}>

            </div>
        </div>
    );
};

export {Comment};