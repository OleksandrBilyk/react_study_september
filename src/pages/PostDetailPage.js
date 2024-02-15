import {PostDetail} from "../components/PostContainer/PostDetail";
import {Outlet, useLoaderData, useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {postService} from "../services/postService";


const PostDetailPage = () => {
    const {data} = useLoaderData();
    const comments = data;
    const {postId} = useParams();
    const [post, setPost] = useState(null)
    const {state} = useLocation();
    useEffect(() => {
        if (state) {
            setPost(state)
        } else {
            postService.getByPostId(postId).then(({data}) => setPost(data))
        }
    }, [postId, state])

    return (
        <div>
            {post && <PostDetail post={post} comments={comments}/>}
            <Outlet/>
        </div>
    );
};


export {PostDetailPage};