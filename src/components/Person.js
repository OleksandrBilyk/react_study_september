import React from 'react';
import "./Person.css"
const Person = ({person}) => {
    const {id, name, status, species, gender, image} = person;
    return (
        <div className={"person"}>
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