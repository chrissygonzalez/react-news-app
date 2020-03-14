import React, { Component } from 'react';
import Article from './Article';
import TitleFilter from './TitleFilter';
import SourceFilter from './SourceFilter';

class ArticleList extends Component {
    state = { 
        articles: [],
        titleFilter: ''
    };

    getNews() {
        let url = 'http://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=b73f9bef4534497e9cf7d95fb6e945ed';
        let req = new Request(url);

        fetch(req)
        .then(res => {
            if(!res.ok){
                throw new Error(`status: ${res.status}`);
            }
            return res;
        }).then(res => res.json())
        .then(data => {
            console.log(data.articles);
            this.setState({
                articles: data.articles
            });
        })
    };

    handleChange = (text) => {
        this.setState({
            titleFilter: text
        });
        this.filterByTitle();
    }

    filterByTitle = () => {
        let filteredArticles = this.state.articles.filter(article => {
            return article.title.includes(this.state.titleFilter);
        });
        this.setState({
            articles: filteredArticles
        });
    }

    componentDidMount() {
        this.getNews();
    };

    render() {
        return (
            <>
                <div className="m2">
                    <TitleFilter onChange={this.handleChange} />
                    <SourceFilter />
                </div>
                <div className="flex flex-wrap">
                    {this.state.articles.map((article, index) => {
                        return <Article key={index} 
                                        title={article.title} 
                                        url={article.url}
                                        image={article.urlToImage}
                                        source={article.source.name}
                                        publishDate={article.publishedAt} />
                    })}
                </div>
            </>
        )
    };
};

export default ArticleList;