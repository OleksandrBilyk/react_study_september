import style from "./Persons.module.css"

const Person = ({character}) => {
    const {id, name, status, species, gender, image} = character;
    return (
        <div className={style.Character}>
            <p className='id'>id: {id}</p>
            <h2 className="name">name: {name}</h2>
            <p className="status">status: {status}</p>
            <p className="species">species: {species}</p>
            <p className="gender">gender: {gender}</p>
            <div className="image"><img src={image} alt={name}/></div>
        </div>
    );
};

export {Person};