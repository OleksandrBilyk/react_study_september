import {useEffect, useState} from "react";

import {postService} from "../../services/postService";
import style from './Posts.module.css';
import {Post} from "../Post/Post"
import {PostDetails} from "../PostDetails/PostDetails";

const Posts = () => {
    const [posts, setPosts] = useState([])
    const [postDetails, setPostDetails] = useState(null)


    const click = (post) => {
        setPostDetails(post)
    }


    useEffect(() => {
        postService.getAll().then(({data})=>setPosts(data))
    }, []);
    return (
        <div>
            <div className={style.Posts}>
                {posts.map(post => <Post key={post.id} post={post} click={click} />)}
            </div>
            {
                postDetails && <PostDetails postDetails={postDetails}/>
            }
        </div>
    );
};

export {Posts};