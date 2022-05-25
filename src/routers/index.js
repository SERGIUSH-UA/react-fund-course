import Posts from "../pages/Posts";
import PostPage from "../pages/PostPage";
import About from "../pages/About";
import React from "react";
import Login from "../pages/Login";
import Exit from "../pages/Exit";

export const privateRoutes = [{to: "/", element: <Posts />, meta: 'exact'},
    {to: "/posts/:id", element: <PostPage />, meta: 'exact'},
    {to: "/exit", element: <Exit />, meta: ''},
    {to: "/about", element: <About />, meta: ''}];

export const publicRoutes = [
    {to: "/login", element: <Login />, meta: ''},
    {to: "/about", element: <About />, meta: ''}];