import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import DefLoader from "../components/UI/loader/DefLoader";
import Comment from "../components/Comment";
import CommentsList from "../components/CommentsList";

const PostPage = () => {

    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const params = useParams();
    const [fetchingPostByID, isPostLoading, errorPost] = useFetching(async (id)=> {
        const response = await PostService.getByID(id);
        setPost(response);
    });

    const [fetchingComments, isCommentsLoading, errorComments] = useFetching(async (id)=> {
        const response = await PostService.getCommentsByPostID(id);
        setComments(response);
    });

    useEffect(() => {
        fetchingPostByID(params.id);
        fetchingComments(params.id);
    }, []);

    
    
    return (
        <div>
            <h1>Page of post {params.id}</h1>
            {isPostLoading ? <DefLoader/> : <h2>{post.title}</h2>}
            <p>{post.body}</p>
            <h3>Comments</h3>
            {isCommentsLoading ? <DefLoader/> : <CommentsList comments={comments}/>}
        </div>
    );
};

export default PostPage;
