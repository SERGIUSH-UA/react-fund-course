import React from 'react';
import classes from "./DefModal.module.css";

const DefModal = ({children, visible, setVisible}) => {

    const rootClasses = [classes.DefModal];

    if(visible === true){
        rootClasses.push(classes.active);

    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={classes.DefModalContent} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default DefModal;
