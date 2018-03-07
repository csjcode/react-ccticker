import React from 'react';
import './NewsDataView.css';
import NewsDataMap from '../../common/NewsDataMap/NewsDataMap';

const NewsDataView = (props) => (
	<table class="NewsDataView--block">
	  <NewsDataMap data={props.data} query={props.query} limit={props.limit}/>
	</table>
);

export default NewsDataView;