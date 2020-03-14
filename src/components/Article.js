import React from 'react';

const Article = (props) => {
    const months = ['Jan', 'February', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let date = new Date(props.publishDate);
    return (
        <article className="border p1 pl2 pr2 pb3 m1">
            <h2 className="h3">{props.source}</h2>
            <img src={props.image} alt={props.title}/>
            <a className="h3" href={props.url}>{props.title}</a>
            <p>{`${months[date.getMonth() - 1]} ${date.getDay()}, ${date.getFullYear()}`}</p>
        </article>
    )
};

export default Article;