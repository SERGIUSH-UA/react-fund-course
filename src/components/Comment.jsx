import React from 'react';

const Comment = ({comment}) => {
    return (
        <div className="comment">
            <h5>{comment.email}</h5>
            <div>{comment.body}</div>
        </div>
    );
};

export default Comment;
