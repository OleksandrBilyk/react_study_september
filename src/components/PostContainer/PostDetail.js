import {Comment} from "../CommentContainer/Comment";


const PostDetail = ({post, comments}) => {
    const {id, userId, title, body} = post;
    return (
        <div>
            <div>id: {id}</div>
            <div>userId: {userId}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
            <hr/>
            <div>
                {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
            </div>
        </div>
    );
};

export {PostDetail};