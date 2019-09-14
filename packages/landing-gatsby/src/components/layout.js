import React, { Fragment } from 'react';
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
import 'bootstrap/dist/css/bootstrap.css';
import '@redq/reuse-modal/es/index.css';
import SEO from '../components/seo';
import './base.css';

const Layout = ({ children }) => (
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
        {children}
        <Footer />
      </AgencyWrapper>
      {/* End of agency wrapper section */}
    </Fragment>
  </ThemeProvider>
);

export default Layout;
