import {useNavigate} from "react-router-dom";

import style from "./User.module.css"

const UserDetail = ({user}) => {
    const {id, name, username, email, address, phone, website, company} = user;
    const navigate = useNavigate();
    return (
        <div className={style.user_card}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <div>address - city: {address.city}</div>
            <div>address - street: {address.street}</div>
            <div>phone: {phone}</div>
            <div>website: {website}</div>
            <div>company: {company.name}</div>
            <button className={style.button_post} onClick={()=>navigate(`${id}`)}>post of current user</button>
        </div>
    );
};

export {UserDetail};