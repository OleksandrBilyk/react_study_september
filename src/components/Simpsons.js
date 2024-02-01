import React from 'react';
import './Simpsons.css'
const Simpsons = ({simpson}) => {
    const {name, surname, age, photo} = simpson;
    console.log({name})
    return (
        <div className={"one_simpson"}>
            <div>{name}</div>
            <div>{surname}</div>
            <div>{age}</div>
            <div className={"photo"}><img src={photo} alt={name}/></div>
        </div>
    );
};

export {Simpsons};