import React from 'react';

const TitleFilter = (props) => {
    return (
        <input type="text" className="mr2" placeholder="Filter title by keyword" onChange={e => props.onChange(e.target.value) } />
    )
};

export default TitleFilter;