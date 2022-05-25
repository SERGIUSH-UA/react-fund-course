import React, {useContext, useEffect} from 'react';
import {Navigate} from "react-router-dom";
import {AuthContext} from "../context";

const Exit = () => {
    const {setIsAuth} = useContext(AuthContext);

    useEffect(() => {
        setIsAuth(false);
        localStorage.removeItem('auth');
    }, []);

    return (
        <div>
            <Navigate to="/" />
        </div>
    );
};

export default Exit;
