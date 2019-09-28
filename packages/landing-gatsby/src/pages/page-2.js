import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

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
import Navbar from 'common/src/containers/Agency/Navbar';
import Footer from 'common/src/containers/Agency/Footer';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import '@redq/reuse-modal/es/index.css';

export default () => {
  return (
    <ThemeProvider theme={agencyTheme}>
      <Fragment>
        <SEO title="Telic Solutions" />
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
          <Layout>
            <SEO title="Page two" />
            <br />
            <br />
            <br />
            <h1>Hi from the second page</h1>
            <p>Welcome to page 2</p>
            <Link to="/">Go back to the homepage</Link>
          </Layout>
          <Footer />
        </AgencyWrapper>
        {/* End of agency wrapper section */}
      </Fragment>
    </ThemeProvider>
  );
};
