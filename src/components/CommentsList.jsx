import React from 'react';
import Comment from "./Comment";

const CommentsList = ({comments}) => {
    return (
        <div className="comments__list">
            {comments.map(comm =>
                <Comment key={comm.id} comment={comm}/>)}
        </div>
    );
};

export default CommentsList;
