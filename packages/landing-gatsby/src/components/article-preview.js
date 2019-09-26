import React from 'react';
import Link from 'gatsby-link';
import './layout.css';
import './base.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default ({ article }) => (
  <div className="articles">
    <img alt="" src={article.heroImage.file.url} />
    <h3 className="article-title">
      <Link to={`blog/${article.slug}`}>{article.title}</Link>
    </h3>
    <p
      dangerouslySetInnerHTML={{
        __html: article.body.childMarkdownRemark.html,
      }}
    />
  </div>
);
