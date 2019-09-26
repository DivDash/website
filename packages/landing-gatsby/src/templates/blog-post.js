import React, { Component, Fragment } from 'react';
import get from 'lodash/get';
import Template from '../components/layout';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { Modal } from '@redq/reuse-modal';
import { agencyTheme } from 'common/src/theme/agency';
import { ResetCSS } from 'common/src/assets/css/style';
import {
  GlobalStyle,
  AgencyWrapper,
} from 'common/src/containers/Agency/agency.style';
import Navbar from 'common/src/containers/Agency/Navbar';
import Footer from 'common/src/containers/Agency/Footer';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import '@redq/reuse-modal/es/index.css';
import SEO from '../components/seo';
// import '../components/layout.css';
import '../components/base.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

class BlogPostTemplate extends Component {
  render() {
    const post = get(this, 'props.data.contentfulBlogPost');
    const { title, body, image, tags } = post;
    return (
      <Template>
        <ThemeProvider theme={agencyTheme}>
          <Fragment>
            <SEO title="Agency" />
            <Modal />
            <ResetCSS />
            <GlobalStyle />
            {/* End of agency head section */}
            {/* Start agency wrapper section */}
            <AgencyWrapper>
              <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
                <DrawerProvider>
                  <Navbar />
                </DrawerProvider>
              </Sticky>
              <Helmet title={`${title}`} />
              <div className="inner-blog-post">
                <div className="container">
                  <div className="row">
                    <div className="blog-post-body">
                      <div className="entry-media">
                        <Img fluid={image[0].fluid} backgroundColor={'#f4f8fb'} />
                      </div>
                      <div className="blog-article-body">
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
              </div>
              <Footer />
            </AgencyWrapper>
            {/* End of agency wrapper section */}
          </Fragment>
        </ThemeProvider>
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
