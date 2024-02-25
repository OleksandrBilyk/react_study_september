import style from './Header.module.css';
import {useAppContext} from "../../hooks";

const Header = () => {
    const [name,] = useAppContext();
    return (
        <div className={style.Header}>
            {
                name ?
                    <h1>{name}</h1>
                    :
                    <h1>Rick & Morty</h1>
            }
        </div>
    );
};

export {Header};