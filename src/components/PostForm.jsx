import React, {useState} from 'react';
import DefInput from "./UI/input/DefInput";
import DefButton from "./UI/button/DefButton";

const PostForm = ({create}) => {

    const [post, setPost] = useState({
        title:'',
        body: ''
    });

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            id: Date.now(),
            title: post.title,
            body:  post.body
        }
        create(newPost);
        setPost({
            title:'',
            body: ''
        })
    };

    return (
        <form>
            <DefInput onChange={event => setPost({...post, title: event.target.value})} type="text" placeholder="Title"
                      value={post.title}/>
            <DefInput onChange={event => setPost({...post, body: event.target.value})} type="text" placeholder="Description"
                      value={post.body}/>
            <DefButton onClick={addNewPost}>Add</DefButton>
        </form>
    );
};

export default PostForm;
