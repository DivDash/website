import React, { useState, useCallback, Fragment } from 'react';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
// import { Modal } from '@redq/reuse-modal';
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
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import img1 from "../../../common/src/assets/image/TelicSolutions picture/Images Backup/clients/1.png";
import img2 from "../../../common/src/assets/image/TelicSolutions picture/Images Backup/clients/2.png";
import img3 from "../../../common/src/assets/image/TelicSolutions picture/Images Backup/clients/3.png";
import img4 from "../../../common/src/assets/image/TelicSolutions picture/Images Backup/clients/4.png";
import img5 from "../../../common/src/assets/image/TelicSolutions picture/Images Backup/clients/5.jpg";
import img6 from "../../../common/src/assets/image/TelicSolutions picture/Images Backup/clients/6.jpg";
import img7 from "../../../common/src/assets/image/TelicSolutions picture/Images Backup/clients/7.png";
import img8 from "../../../common/src/assets/image/TelicSolutions picture/Images Backup/clients/8.png";
import img9 from "../../../common/src/assets/image/TelicSolutions picture/Images Backup/clients/9.png";
import img10 from "../../../common/src/assets/image/TelicSolutions picture/Images Backup/clients/10.jpg";
import img11 from "../../../common/src/assets/image/TelicSolutions picture/Images Backup/clients/11.png";
import img12 from "../../../common/src/assets/image/TelicSolutions picture/Images Backup/clients/12.png";
import img13 from "../../../common/src/assets/image/TelicSolutions picture/Images Backup/clients/13.png";
import img14 from "../../../common/src/assets/image/TelicSolutions picture/Images Backup/clients/14.png";
import img15 from "../../../common/src/assets/image/TelicSolutions picture/Images Backup/clients/15.png";
import img16 from "../../../common/src/assets/image/TelicSolutions picture/Images Backup/clients/16.jpg";
import img17 from "../../../common/src/assets/image/TelicSolutions picture/Images Backup/clients/17.png";







const photos = [
  {
    src: img1,
    width: 4,
    height: 3
  },
  {
    src: img2,
    width: 1,
    height: 1
  },
  {
    src: img4,
    width: 3,
    height: 4
  },
  {
    src: img5,
    width: 3,
    height: 4
  },
  {
    src: img6,
    width: 3,
    height: 4
  },
  {
    src: img7,
    width: 4,
    height: 3
  },
  {
    src: img8,
    width: 3,
    height: 4
  },
  {
    src: img9,
    width: 4,
    height: 3
  },
  {
    src: img10,
    width: 4,
    height: 3
  },
  {
    src: img11,
    width: 3,
    height: 4
  },
  {
    src: img12,
    width: 4,
    height: 3
  },
  {
    src: img13,
    width: 4,
    height: 3
  },
  {
    src: img14,
    width: 3,
    height: 4
  },
  {
    src: img15,
    width: 4,
    height: 3
  },
  {
    src: img16,
    width: 4,
    height: 3
  },
  {
    src: img17,
    width: 4,
    height: 3
  },
  {
    src: img3,
    width: 4,
    height: 3
  }
];












export default () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

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
          <div>
            <Gallery photos={photos} onClick={openLightbox} />
            <ModalGateway>
              {viewerIsOpen ? (
                <Modal onClose={closeLightbox}>
                  <Carousel
                    currentIndex={currentImage}
                    views={photos.map(x => ({
                      ...x,
                      srcset: x.srcSet,
                      caption: x.title
                    }))}
                  />
                </Modal>
              ) : null}
            </ModalGateway>
          </div>
          <Footer />
        </AgencyWrapper>
        {/* End of agency wrapper section */}
      </Fragment>
    </ThemeProvider>
  );
};
