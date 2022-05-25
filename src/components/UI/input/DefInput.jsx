import React from 'react';
import classes from "./DefInput.module.css";

const DefInput = ({children, ...props}) => {
    return (
        <input  {...props} className={classes.defIpt}>
            {children}
        </input>
    );
}

export default DefInput;
