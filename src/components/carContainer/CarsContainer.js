import {useEffect, useState} from "react";

import {carService} from "../../services/carService";
import {CarForm} from "./CarForm";
import {Cars} from "./Cars";

const CarsContainer = () => {
    const [cars, setCars] = useState([])
    const [trigger, setTrigger] = useState(true)
    const [carForUpdate, setCarForUpdate] = useState(null);
    const [carForDelete, setCarForDelete] = useState(null);

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data))
    }, [trigger])

    return (
        <div>
            <CarForm setTrigger={setTrigger} carForUpdate={carForUpdate} carForDelete={carForDelete}/>
            <hr/>
            <Cars cars={cars} setCarForUpdate={setCarForUpdate} setCarForDelete={setCarForDelete}/>
        </div>
    );
};

export {CarsContainer};