import React, {useContext} from 'react';
import DefInput from "../components/UI/input/DefInput";
import DefButton from "../components/UI/button/DefButton";
import {AuthContext} from "../context";

const Login = () => {
    const {setIsAuth} = useContext(AuthContext);

    const login = (e) => {
      e.preventDefault();
      setIsAuth(true);
      localStorage.setItem('auth', 'true');
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={e => login(e)}>
                <DefInput type="text" placeholder="Enter login"/>
                <DefInput type="password" placeholder="Enter password"/>
                <DefButton >Enter</DefButton>
            </form>
        </div>
    );
};

export default Login;
