import React, {useEffect, useState} from 'react';

import {UsersForm} from './UsersForm'
import {usersService} from "../../services/userService";
import {Users} from "./Users";
import style from "./UsersContainer.module.css"

const UsersContainer = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        usersService.getAll()
            .then(({data}) => setUsers(data))
    }, []);

    return (
        <div className={style.block_users}>
            <div className={style.form_user}>
                <UsersForm setUsers={setUsers}/>
            </div>
            <Users users={users}/>
        </div>
    );
};

export {UsersContainer};