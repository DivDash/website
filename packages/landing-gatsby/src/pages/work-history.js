import React, { Fragment } from 'react';
import Sticky from 'react-stickynode';
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


import SEO from '../components/seo';
import Gallery from 'react-grid-gallery';

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
    thumbnail: img1,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
  },
  {
    src: img2,
    thumbnail: img2,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
  },
  {
    src: img4,
    thumbnail: img4,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
  },
  {
    src: img5,
    thumbnail: img5,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
  },
  {
    src: img6,
    thumbnail: img6,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
  },
  {
    src: img7,
    thumbnail: img7,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
  },
  {
    src: img8,
    thumbnail: img8,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
  },
  {
    src: img9,
    thumbnail: img9,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
  },
  {
    src: img10,
    thumbnail: img10,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
  },
  {
    src: img11,
    thumbnail: img11,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
  },
  {
    src: img12,
    thumbnail: img12,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
  },
  {
    src: img13,
    thumbnail: img13,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
  },
  {
    src: img14,
    thumbnail: img14,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
  },
  {
    src: img15,
    thumbnail: img15,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
  },
  {
    src: img16,
    thumbnail: img16,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
  },
  {
    src: img17,
    thumbnail: img17,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
  },
  {
    src: img3,
    thumbnail: img3,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
  }
];



// const IMAGES =
// [{
//         src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
//         thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
//         thumbnailWidth: 320,
//         thumbnailHeight: 174,
// },
// {
//         src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
//         thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
//         thumbnailWidth: 320,
//         thumbnailHeight: 212,
// },

// {
//         src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
//         thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
//         thumbnailWidth: 320,
//         thumbnailHeight: 212
// }]



const WorkHistory = () => {
  return (
    <ThemeProvider theme={agencyTheme}>
      <Fragment>
        <SEO title="Telic Solutions" />
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
          <div className="galler-container">
            <Gallery images={photos} />
          </div>
        </AgencyWrapper>
        {/* End of agency wrapper section */}
      </Fragment>
    </ThemeProvider>
  );
};


export default WorkHistory