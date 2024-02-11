import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {useEffect} from "react";

import {carService} from "../../services/carService";
import {carValidator} from "../../validators/carValidator";


const CarForm = ({setTrigger, carForUpdate, setCarForUpdate}) => {
    const {register, reset, handleSubmit, formState: {isValid, errors}, setValue} = useForm({
        mode: 'all',
        resolver: joiResolver(carValidator)
    });


    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand, {shouldValidate: true})
            setValue('price', carForUpdate.price, {shouldValidate: true})
            setValue('year', carForUpdate.year, {shouldValidate: true})

        }
    }, [carForUpdate, setValue])

    const save = async (car) => {
        console.log(car);
        if (carForUpdate){
            await carService.updateById(carForUpdate.id, car);
            setCarForUpdate(null)
        } else {
            await carService.creating(car);
        }
        setTrigger(prev => !prev)
        reset()
    }

    return (
        <>
            <form onSubmit={handleSubmit(save)}>
                <input type="text" placeholder={'brand'} {...register('brand')}/>
                <input type="text" placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
                <input type="text" placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
                <button disabled={!isValid}>save</button>
            </form>
            {errors.brand && <div>{errors.brand.message}</div>}
            {errors.price && <div>{errors.price.message}</div>}
            {errors.year && <div>{errors.year.message}</div>}
        </>
    );
};

export {CarForm};