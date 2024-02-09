import {Comment} from "./Comment";

const Comments = ({comments}) => {

    return (
        <div>
            {comments.map((comment, index) => <Comment key={index} comment={comment}/>)}
        </div>
    );
};

export {Comments};