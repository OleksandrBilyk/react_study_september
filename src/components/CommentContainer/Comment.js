import style from "./Comment.module.css";

const Comment = ({comment}) => {
    const {id, name, email, body} = comment;

    return (
        <div className={style.comments_block}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>email: {email}</div>
            <div>body: {body}</div>
        </div>
    );
};

export {Comment};