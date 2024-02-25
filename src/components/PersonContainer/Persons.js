import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {characterService} from "../../services";
import {Person} from "./Person";
import {useAppContext} from "../../hooks";
import style from "./Persons.module.css"

const Persons = () => {
    const [characters, setCharacters] = useState([])
    const {idcharacter} = useParams();
    const navigate = useNavigate();
    const [, setName] = useAppContext();

    useEffect(() => {
        characterService.getByIds(idcharacter).then(({data}) => setCharacters(data))

    }, [idcharacter]);

    const back = () => {
        navigate(-1)
        setName(null)
    }
    return (
        <div>
            <button onClick={back}>back</button>
            <div className={style.Characters}>
                {characters.map(character => <Person key={character.id} character={character}/>)}
            </div>
        </div>
    );
};

export {Persons};