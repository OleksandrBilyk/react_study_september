import style from './CommentsContainer.module.css'
const Comment = ({comment}) => {
    const {id, name, body, email} = comment;
    return (
        <div>
            <div>id: {id}</div>
            <div className={style.name}>name: {name}</div>
            <div>body: {body}</div>
            <div>email: {email}</div>
        </div>
    );
};

export {Comment};