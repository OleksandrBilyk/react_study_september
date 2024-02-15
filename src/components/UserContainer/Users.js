import {useEffect, useState} from "react";

import {userService} from "../../services/userService";
import {User} from "./User";
import style from "./User.module.css"
const Users = () => {
    const [users, setUsers] = useState([]);


    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data))
    }, [])

    return (
        <div className={style.users}>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};