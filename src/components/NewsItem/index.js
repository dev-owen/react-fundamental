import React from 'react';
import {NewsItemWrapper} from './style.js';

const NewsItem = (props) => {
  return (
    <NewsItemWrapper>
      <h1>{props.title}</h1>
      <div className="content">
        <h3>{props.description}</h3>
        <img className="image" src={props.urlToImage} alt=""/>
      </div>
    </NewsItemWrapper>
  );
};

export default NewsItem;
