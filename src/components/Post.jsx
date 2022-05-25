import React from 'react';
import {useNavigate} from "react-router-dom";
import '../styles/Post.css'
import DefButton from "./UI/button/DefButton";

const Post = (props) => {

    const navigate = useNavigate();

    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className="post__btns">
                <DefButton onClick={() => navigate(`/posts/${props.post.id}`)}>
                    Open
                </DefButton>
                <DefButton onClick={() => props.remove(props.post)}>
                    Delete
                </DefButton>
            </div>

        </div>
    );
};

export default Post;
