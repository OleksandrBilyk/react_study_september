import {useNavigate} from "react-router-dom";

import style from "./User.module.css"
import imgSrc from "../../pictures/icons8-male-user-94.png"
const User = ({user}) => {
    const {id, name} = user;
    const navigate = useNavigate();

    return (
        <div className={style.user}>
            <div>id: {id}</div>
            <div>name: {name}</div>
                <img className={style.image} src={imgSrc} alt={"people_photo"}/>
            <button className={style.button} onClick={()=>navigate(`user-details/${id}`, {state: user})}>Details</button>
        </div>
    );
};

export {User};