
import {User} from "./User";
import style from "./UsersContainer.module.css";

const Users = ({users}) => {

    return (
        <div  className={style.list_users}>
            {users.map((user, index) => <User key={index} user={user}/>)}
        </div>
    );
};

export {Users};