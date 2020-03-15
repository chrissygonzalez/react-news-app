import React from 'react';

const SourceFilter = (props) => {
    return(
        <form>
            <label>
                Only show articles from
                <select>
                    {props.sources.map(source => <option value="source"> {source} </option>)}
                </select>
            </label>
        </form>
    );
};

export default SourceFilter;