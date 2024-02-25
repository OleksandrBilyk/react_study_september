
import {useNavigate} from "react-router-dom";

import style from "./Episodes.module.css"
import {useAppContext} from "../../hooks";

const Episode = ({episod}) => {
    const {id, name, air_date, episode, characters} = episod;
    const navigate = useNavigate();
    const [, setName] = useAppContext();

    const toCharacters = () => {
        const idcharacter = characters.map(character => character.split('/').slice(-1)[0]).join(',');
        setName(name)
        navigate(`/character/${idcharacter}`)
    };
    return (
        <div onClick={toCharacters} className={style.episode_box}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>air_date: {air_date}</div>
            <div>episode: {episode}</div>
        </div>
    );
};

export {Episode};