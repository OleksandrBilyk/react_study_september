import {useForm} from "react-hook-form";

import {commentsService} from "../../services/commentsService";
import style from "./CommentsForm.module.css"

const CommentsForm = ({setComments}) => {

    const {reset, handleSubmit, register}  = useForm();
    const save = async (comment) => {
        const {data} = await commentsService.creating(comment);
        setComments(prev =>[...prev, data])
    }

    return (
        <div >
            <form onSubmit={handleSubmit(save)}>
                <fieldset className={style.field_comment}>
                    <legend>Create comment</legend>
                    <div>
                        <input type="text" placeholder={'name'} {...register('name')} className={style.name}/>
                        <input type="text" placeholder={'email'} {...register('email')} className={style.email}/>
                    </div>
                    <input type="text" placeholder={'body'} {...register('body')} className={style.body}/>
                    <button>SEND</button>
                </fieldset>
            </form>
        </div>
    );
};

export {CommentsForm};