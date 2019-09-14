import React from 'react';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

class indexPage extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const posts = get(this, 'props.data.allContentfulBlogPost.edges');
    console.log(posts);

    return (
      <Layout>
        <Helmet title={siteTitle} />
        <div className="indexpage">
          <div className="right-section blog-post">
            <div className="container">
              <div className="row">
                <div className="col-md-10 offset-md-1">
                  {posts.map(({ node }) => {
                    return (
                      <article className="blog-listing" key={node.slug}>
                        <div className="entry-meta-content">
                          <h2 className="entry-title">
                            <Link to={node.slug}>{node.title}</Link>
                          </h2>
                          <span className="entry-meta">
                            <Link to="/about" className="authorname">
                              {node.author}
                            </Link>
                          </span>
                        </div>
                        <div className="entry-media">
                          <Img
                            fluid={node.image[0].fluid}
                            backgroundColor={'#f4f8fb'}
                          />
                        </div>
                        <div className="entry-content-bottom">
                          <p className="entry-content">{node.body.body}</p>
                          <Link
                            to={`blog/${node.slug}`}
                            className="entry-read-more"
                          >
                            <span />
                            Read More
                          </Link>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default indexPage;

export const pageQuery = graphql`
  {
    allContentfulBlogPost {
      edges {
        node {
          slug
          title
          body {
            body
          }
          image {
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
            file {
              url
            }
          }
        }
      }
    }
  }
`;
