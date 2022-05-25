import React, {useEffect, useRef, useState} from "react";

import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import DefModal from "../components/UI/modal/DefModal";
import DefButton from "../components/UI/button/DefButton";
import {usePosts} from "../hooks/usePosts";
import PostService from "../API/PostService";
import DefLoader from "../components/UI/loader/DefLoader";
import {useFetching} from "../hooks/useFetching";
import {getPagesCount} from "../utils/pagination";
import {usePagination} from "../hooks/usePagination";
import Pagination from "../components/UI/pagination/Pagination";
import {useObserver} from "../hooks/useObserver";
import DefSelect from "../components/UI/select/DefSelect";

function Posts() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const lastElement = useRef();
    const totalPagesArray = usePagination(totalPages);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const [fetchPosts, isPostLoading, postError] = useFetching(async  (limit, page)=> {
        const response = await PostService.getAll(limit, page);
        setPosts([...posts, ...response.data]);
        const totalItems = response.headers['x-total-count'];
        setTotalPages(getPagesCount(totalItems, limit));
    });

    useEffect(() => {
        fetchPosts(limit, page);
    }, [page, limit]);

    useObserver(lastElement, page < totalPages, isPostLoading, () => {
        setPage(page + 1);
    });


    const changePage = (page) => {
        setPage(page);
    }

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="App">
            <DefButton style={{marginTop: "30px"}} onClick={() => setModal(true)}>Add post</DefButton>
            <DefModal visible={modal} setVisible={setModal}><PostForm create={createPost}/></DefModal>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            <DefSelect value={limit} onChange={value => setLimit(value)} defaultValue="Posts by one page"
            options={[
                {value: 5, name: '5'},
                {value: 10, name: '10'},
                {value: 25, name: '25'},
                {value: -1, name: 'All'},
            ]}/>
            {postError &&
                <h1 style={{color: 'red', justifyContent: 'center', textAlign: 'center'}}>Error: {postError}</h1>}
            <PostList remove={removePost} posts={sortedAndSearchedPosts} title="List posts"/>
            {isPostLoading
                && <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}><DefLoader/></div>}
            <div ref={lastElement} style={{height:'20px', background:'gray'}} />
            <Pagination changePage={changePage} currentPage={page} pagesArray={totalPagesArray}/>

        </div>
    );
}

export default Posts;
