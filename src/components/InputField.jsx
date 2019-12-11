import React from 'react';

export const InputField = ({title, name, func}) => {
    return (
        <div className="input-group">
            <div className="input-group-prepend">
                <span className="input-group-text">{title}</span>
            </div>
            <input type="number" name={name} onChange={func}/>
        </div>
    )
};
