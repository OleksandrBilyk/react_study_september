import style from "./Post.module.css"
const Post = ({post, click}) => {
    const {id, title} = post;
    return (
        <div className={style.Post}>
            <p>id: {id}</p>
            <p>title: {title}</p>
            <button onClick={()=>click(post)}>Details</button>
        </div>
    );
};

export {Post};