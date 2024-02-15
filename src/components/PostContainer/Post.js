import {useNavigate} from "react-router-dom";

import style from "./Post.module.css";

const Post = ({post}) => {
    const {id, title} = post;
    const navigate = useNavigate();

    return (
        <div className={style.post_block}>
            <div>title: {title}</div>
            <button onClick={()=>navigate(`/post-details/${id}`, {state: post})}>Details</button>
        </div>
    );
};

export {Post};