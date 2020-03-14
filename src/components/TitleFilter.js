import React from 'react';

const TitleFilter = (props) => {
    let handleChange = () => {
        console.log('handling change');
    }

    return (
        <input type="text" className="mr2" placeholder="Filter title by keyword" onChange={handleChange} />
    )
};

export default TitleFilter;