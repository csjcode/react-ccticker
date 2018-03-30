import React from 'react';
import './NewsDataMap.css';
// import PropTypes from 'prop-types';

const NewsDataMap = (props) => {
	return props.data.articles.map((article,i)=>{
	  // console.log(article)
	  if(i<props.limit){
			return( 
					<div className="NewsDataMap--block">
						<a href={article.url}><img src={article.urlToImage} alt="image" /></a>
						<h3><a href={article.url}>{article.title}</a></h3>
						<p>{article.description}<br />(source: <i>{article.source.name}</i>) ... {article.publishedAt}</p>
					</div>
			);
	  }
	});
}

export default NewsDataMap;

