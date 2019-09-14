import React from 'react';
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
import BannerSection from 'common/src/containers/Agency/BannerSection';
import FeatureSection from 'common/src/containers/Agency/FeatureSection';
import AboutUsSection from 'common/src/containers/Agency/AboutUsSection';
import WorkHistory from 'common/src/containers/Agency/WorkHistory';
import BlogSection from 'common/src/containers/Agency/BlogSection';
import TestimonialSection from 'common/src/containers/Agency/TestimonialSection';
import TeamSection from 'common/src/containers/Agency/TeamSection';
import VideoSection from 'common/src/containers/Agency/VideoSection';
import FaqSection from 'common/src/containers/Agency/FaqSection';
import NewsletterSection from 'common/src/containers/Agency/NewsletterSection';
import QualitySection from 'common/src/containers/Agency/QualitySection';
import Footer from 'common/src/containers/Agency/Footer';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import '@redq/reuse-modal/es/index.css';
import SEO from '../components/seo';

import 'bootstrap/dist/css/bootstrap.css';
import './base.css';

const Template = ({ children }) => (
  // <StaticQuery
  //   query={graphql`
  //     query SiteTitleQuery {
  //       site {
  //         siteMetadata {
  //           title
  //           description
  //         }
  //       }
  //     }
  //   `}
  //   render={data => (
  //     <>
  //       <Helmet
  //         title={data.site.siteMetadata.title}
  //         meta={[
  //           {
  //             name: "description",
  //             content: data.site.siteMetadata.description,
  //           },
  //           { name: "keywords", content: "sample, something" },
  //         ]}
  //       >
  //         <html lang="en" />
  //       </Helmet>
  //       <Header />
  //       {children}
  //       <Footer />
  //     </>
  //   )}
  // />
  <>
    <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
      <DrawerProvider>
        <Navbar />
      </DrawerProvider>
    </Sticky>
    {children}
    <Footer />
  </>
);

export default Template;
