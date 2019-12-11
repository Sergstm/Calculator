import React from 'react';

export const SelectField = ({name, func}) => {
    return (
        <div className="input-group">
            <div className="input-group-prepend">
                <span className="input-group-text">Select Operation</span>
            </div>
            <select className="custom-select" name={name} onChange={func}>
                <option value="sum">+ (sum)</option>
                <option value="div">/ (divide)</option>
                <option value="rem">% (remainder of a division)</option>
                <option value="high">HPN (highest prime number)</option>
            </select><br/>
        </div>
    )
};
