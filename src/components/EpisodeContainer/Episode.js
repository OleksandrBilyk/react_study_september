
import {useNavigate} from "react-router-dom";
import style from "./Episodes.module.css"

const Episode = ({episod}) => {
    const {id, name, air_date, episode} = episod;
    const navigate = useNavigate();
    return (
        <div onClick={() => navigate('/persons')} className={style.episode_box}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>air_date: {air_date}</div>
            <div>episode: {episode}</div>
        </div>
    );
};

export {Episode};