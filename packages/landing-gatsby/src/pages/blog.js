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
import '@redq/reuse-modal/es/index.css';
import '../pages/blog.css';
import SEO from '../components/seo';


const Blog = () => {
    return (


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

            <div id="content">
              <h2>Introduction</h2>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse a tortor. Pellentesque sollicitudin, ante nec posuere tempus, arcu lectus vehicula mi, ac rhoncus lorem turpis sed sapien. Pellentesque egestas. Ut eros massa, dignissim at, auctor vitae, consectetuer ut, felis. Ut tincidunt sem in ipsum. </p>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse a tortor. Pellentesque <a href="#">sollicitudin</a>, ante nec posuere tempus, arcu lectus vehicula mi, ac rhoncus lorem turpis sed sapien. Pellentesque egestas. Ut eros massa, dignissim at, auctor vitae, consectetuer ut, felis. Ut tincidunt sem in ipsum. </p>
              <p><img class="imgleft" src="images/image02.jpg" alt="" />Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse a tortor. Pellentesque sollicitudin, ante nec posuere tempus, arcu lectus vehicula mi, ac rhoncus lorem turpis sed sapien. Pellentesque <a href="#">egestas</a>. Ut eros massa, dignissim at, auctor vitae, consectetuer ut, felis. Ut tincidunt sem in ipsum. </p>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse a tortor. Pellentesque sollicitudin, ante nec posuere tempus, arcu lectus vehicula mi, ac rhoncus lorem turpis sed sapien. Pellentesque egestas. Ut eros massa, dignissim at, auctor vitae, consectetuer ut, felis. Ut tincidunt sem in ipsum. </p>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse a tortor. Pellentesque sollicitudin, ante nec posuere tempus, arcu lectus vehicula mi, ac rhoncus lorem turpis sed sapien. Pellentesque egestas. Ut eros massa, dignissim at, auctor vitae, consectetuer ut, felis. Ut tincidunt sem in ipsum. </p>
              <div class="intro">
                <h3>Article One</h3>
                <p class="update"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer imperdiet, eros et cursus pharetra, nulla ante fermentum magna, eget rutrum mi urna in purus.</p>
              </div>
              <div class="intro2">
                <h3>Article Two</h3>
                <p class="update"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer imperdiet, eros et cursus pharetra, nulla ante fermentum magna, eget rutrum mi urna in purus. </p>
              </div>
              <div class="intro3">
                <h4>News &amp; Updates</h4>
                <p class="update"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer imperdiet, eros et cursus pharetra, nulla ante fermentum magna, eget rutrum mi urna in purus.</p>
              </div>
            </div>

            <Footer />
            </AgencyWrapper>
            {/* End of agency wrapper section */}
            </Fragment>
            </ThemeProvider>




    //     <ThemeProvider theme={agencyTheme}>
    //     <Fragment>
    //       <SEO title="Agency" />
    //       <Modal />
    //       <ResetCSS />
    //       <GlobalStyle />
    //       {/* End of agency head section */}
    //       {/* Start agency wrapper section */}
    //       <AgencyWrapper>
    //         <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
    //           <DrawerProvider>
    //             <Navbar />
    //           </DrawerProvider>
    //         </Sticky>
    //         <div className="hello-world" style={{marginTop: "200px"}}>
    //         <h1>Hello World</h1>
    //     </div>
    //         <Footer />
    //       </AgencyWrapper>
    //       {/* End of agency wrapper section */}
    //     </Fragment>
    //   </ThemeProvider>
         )
}

export default Blog;
