import style from "./Todo.module.css"
const Todo = ({todo}) => {
    const {id, title, completed} = todo;
    return (
        <div className={completed.toString() === 'true' ? style.true : style.false}>
            <div>id: {id}</div>
            <div className={style.title}>title: {title}</div>
            <div>completed: {`${completed}`}</div>
        </div>
    );
};

export {Todo};