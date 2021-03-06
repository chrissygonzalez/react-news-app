import React, { Component } from 'react';
import Article from './Article';
import TitleFilter from './TitleFilter';
import SourceFilter from './SourceFilter';

class ArticleList extends Component {
    state = { 
        articles: [],
        filteredArticles: [],
        titleFilter: '',
        sources: [],
        selectedSource: ''
    };

    getNews = () => {
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
            let sources = data.articles.map(article => article.source.name);
            let uniqueSources = sources.filter((val, index, self) => self.indexOf(val) === index);

            this.setState({
                articles: data.articles,
                filteredArticles: data.articles,
                sources: uniqueSources,
            });
        })
    };

    handleInputChange = (text) => {
        this.setState({
            titleFilter: text.toLowerCase()
        });
        this.filterArticles(text, this.state.selectedSource);
    }

    handleSelectChange = (val) => {
        this.setState({
            selectedSource: val
        });
        this.filterArticles(this.state.titleFilter, val);
    }

    filterArticles = (text, source) => {
        let filteredArticles = this.state.articles.filter(article => {
            return article.title.toLowerCase().includes(text.toLowerCase()) && article.source.name.includes(source);
        });
        this.setState({
            filteredArticles: filteredArticles
        });
    }

    componentDidMount() {
        this.getNews();
    };

    render() {
        return (
            <>
                <div className="m2 flex">
                    <TitleFilter onChange={this.handleInputChange} value={this.state.titleFilter}/>
                    <SourceFilter sources={this.state.sources} onChange={this.handleSelectChange} value={this.state.selectedSource} />
                </div>
                <div className="flex flex-wrap">
                    {this.state.filteredArticles.map((article, index) => {
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