import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../routers";
import {AuthContext} from "../context";

const AppRouter = () => {
    const {isAuth} = useContext(AuthContext);
    let defPath = isAuth ? "/" : "/login";
    const routes = isAuth ? privateRoutes : publicRoutes;

    return (
        <Routes>
            {routes.map((rout, index) =>
                <Route key={index + 1} {...rout.meta} path={rout.to} element={rout.element}/>)}
            <Route path="*" element={<Navigate to={defPath} />}/>
        </Routes>
    );
};

export default AppRouter;
