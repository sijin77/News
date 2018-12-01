import React, { Component } from 'react'
import {articles} from './fixtures'
import Article from './Article';
export default function ArticleList(){
    const articleElements=articles.map((article)=><li key = {article.id}><Article article = {article}/></li>)
    return(
        <ul>{articleElements}</ul>
    )
}