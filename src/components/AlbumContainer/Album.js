
import style from "./Album.module.css"
const Album = ({album}) => {
    const {id, title} = album;
    return (
        <div>
            <div>id: {id}</div>
            <div className={style.title}>title: {title}</div>
        </div>
    );
};

export {Album};