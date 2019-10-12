import get from 'lodash/get';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import ReactMarkdown from "react-markdown"
import React, { Fragment } from 'react';
import Sticky from 'react-stickynode';
import { Modal } from '@redq/reuse-modal';
import { ThemeProvider } from 'styled-components';
import { agencyTheme } from 'common/src/theme/agency';
import { ResetCSS } from 'common/src/assets/css/style';
import {
  GlobalStyle,
  AgencyWrapper,
} from 'common/src/containers/Agency/agency.style';
import Navbar from 'common/src/containers/Agency/Blog/Navbar';
import Footer from 'common/src/containers/Agency/Footer';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import '@redq/reuse-modal/es/index.css';
import SEO from '../components/seo';
import '../components/layout.css';
import '../components/base.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

class indexPage extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const posts = get(this, 'props.data.allContentfulBlogPost.edges');
    return (
      <ThemeProvider theme={agencyTheme}>
        <Fragment>
          <SEO title="Blog Page" />
          <Modal />
          <ResetCSS />
          <GlobalStyle />
          <AgencyWrapper>
            <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
              <DrawerProvider>
                <Navbar />
              </DrawerProvider>
            </Sticky>
            <Layout>
              <br />
              <br />
              <br />
              <Helmet title={siteTitle} />
              <div className="indexpage">
                <div className="right-section blog-post">
                  <div className="container">
                    <div className="row">
                      <div className="blog-posts-wrapper">
                        {posts.map(({ node }) => {
                          return (
                            <article className="blog-listing" key={node.slug}>
                              <div className="entry-meta-content">
                                <h2 className="entry-title">
                                  <Link to={`blog/${node.slug}`}>
                                    {node.title}
                                  </Link>
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
                                  <ReactMarkdown >
                                    {node.summary}
                                  </ReactMarkdown>
                                <Link
                                  to={`blog/${node.slug}`}
                                  className="entry-read-more"
                                >
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
            <Footer />
          </AgencyWrapper>
        </Fragment>
      </ThemeProvider>
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
          summary
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
