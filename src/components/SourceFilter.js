import React from 'react';

const SourceFilter = (props) => {
    return(
        <form>
            <label>
                Only show articles from
                <select value={props.value} onChange={(e) => props.onChange(e.target.value)}>
                    <option value="">All sources</option>
                    {props.sources.map((source, index) => <option value={source} key={index}> {source} </option>)}
                </select>
            </label>
        </form>
    );
};

export default SourceFilter;