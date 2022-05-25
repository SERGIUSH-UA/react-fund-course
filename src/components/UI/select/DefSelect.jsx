import React from 'react';
import classes from './DefSelect.module.css'

const DefSelect = ({children, options, onChange, defaultValue, ...props}) => {
    return (
        <select className={classes.defSlct} {...props} onChange={e => onChange(e.target.value)}>
            <option disabled value="">{defaultValue}</option>
            {options.map(opt =>
                <option key={opt.value} value={opt.value}>{opt.name}</option>
            )}
        </select>
    );
};

export default DefSelect;
