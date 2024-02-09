
import style from "./UsersContainer.module.css";
const User = ({user}) => {
    const {id, name, username, email} = user;
    return (
        <div className={style.user_elem}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
        </div>
    );
};

export {User};