import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export default class News extends Component {
    static defaultProps = {
        country : 'in',
        pagesize : 6,
        category : 'general'
    }
    static propsTyes = {
        country :  PropTypes.string,
        pagesize : PropTypes.number,
        category : PropTypes.string
    }
    constructor() {
        super();
        this.state = {
            articles:[],
            loading: false,
            page:1
        }

    }
    async componentDidMount(){
        let url =` https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ead4a996204f41af9147744b4012e9ab&page=1&pagesize=${this.props.pagesize}`
        this.setState({loading:true})
        let data = await fetch(url)
        let parseddata = await data.json();
        this.setState({loading:false})
        this.setState({articles: parseddata.articles})

    }
    prevHandler=async()=>{
        console.log("previous button clicked");
        let url =` https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ead4a996204f41af9147744b4012e9ab&page=${this.state.page-1}&pagesize=${this.props.pagesize}`
        this.setState({loading:true})
        let data =await fetch(url)
        let parseddata = await data.json();
        this.setState({loading:false})
        this.setState({page:this.state.page-1,
                     articles:parseddata.articles})
    }
    nextHandler=async()=>{
        console.log("next button clicked");
        let url =` https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ead4a996204f41af9147744b4012e9ab&page=${this.state.page+1}&pagesize=${this.props.pagesize}`
        this.setState({loading:true})
        let data =await fetch(url)
        let parseddata = await data.json();
        this.setState({loading:false})
        this.setState({page:this.state.page+1,
                     articles:parseddata.articles})
    }
    render() {
        return (
            <div className='container' style={{marginTop:'60px'}}>
                <h1 className='row justify-content-center'>{this.props.category==='general'?"Top Headlines":`Top ${this.props.category} Headlines`}</h1>
                {this.state.loading && <Spinner/>}
                {!this.state.loading && <div className='row mx-auto'>
                    {this.state.articles.map((element) => {
                     return   <div className='col-md-4' key={element.url} >
                        <NewsItem source={element.source.name } author={element.author} date={element.publishedAt} newsUrl={element.url} title={element.title?element.title.slice(0,45)+"...":""} description={element.description?element.description.slice(0,88)+"......":""} imageUrl={element.urlToImage?element.urlToImage:""}></NewsItem>
                        </div>
                    })}
                   

                </div>}
                <div className='container d-flex justify-content-between'>
                <button disabled={this.state.page===1} type="button" class="btn btn-dark" onClick={this.prevHandler}>Previous</button>
                <button type="button" class="btn btn-dark" onClick={this.nextHandler}>Next</button>
                </div>

            </div>
        )
    }
}
