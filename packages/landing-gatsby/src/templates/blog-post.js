import React, { Component } from 'react';
import get from 'lodash/get';
import Template from '../components/layout';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

class BlogPostTemplate extends Component {
  render() {
    const post = get(this, 'props.data.contentfulBlogPost');
    const { title, body, image, tags } = post;
    return (
      <Template>
        <Helmet title={`${title}`} />
        <div className="inner-blog-post">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="entry-media">
                  <Img fluid={image[0].fluid} backgroundColor={'#f4f8fb'} />
                </div>
                <h1 className="section-headline"> {title} </h1>
                <p> {tags} </p>
                <div
                  dangerouslySetInnerHTML={{
                    __html: body.body,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </Template>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      slug
      body {
        body
      }
      image {
        file {
          url
        }
        fluid {
          base64
          tracedSVG
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
      }
      tags
    }
  }
`;
