import React, {useContext} from 'react';
import {Link, useLocation} from "react-router-dom";
import {privateLinksNavBar, publicLinksNavBar} from "../../../lists/linksNavbar";
import {AuthContext} from "../../../context";

const DefNavbar = () => {
    const {isAuth} = useContext(AuthContext);
    const location = useLocation();
    const links = isAuth ? privateLinksNavBar : publicLinksNavBar;

    return (
        <div className="navbar">
            <div className="navbar__links">
                {links.map((link, index) =>
                    <Link className={
                        location.pathname !== link.to
                            ? "navbar__link"
                            : "navbar__link link__active" }
                          key={index + 1} to={link.to}>{link.body}
                    </Link>)}
            </div>
        </div>
    );
};

export default DefNavbar;
