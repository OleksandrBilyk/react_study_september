import {useForm} from "react-hook-form";

import {usersService} from "../../services/userService";
import style from "./UsersForm.module.css"

const UsersForm = ({setUsers}) => {

    const {reset, handleSubmit, register}  = useForm();
    const save = async (user) => {
        const {data} = await usersService.creating(user);
        setUsers(prev =>[...prev, data])
    }

    return (
        <div className={style.create_user}>
            <form onSubmit={handleSubmit(save)}>
                <fieldset>
                    <legend>Create user</legend>
                    <input type="text" placeholder={'name'} {...register('name')} />
                    <input type="text" placeholder={'username'} {...register('username')} />
                    <input type="text" placeholder={'email'} {...register('email')} />
                    <input type="text" placeholder={'street'} {...register('address.street')} />
                    <input type="text" placeholder={'city'} {...register('address.city')} />
                    <button>SEND</button>
                </fieldset>
            </form>
        </div>
    );
};

export {UsersForm};