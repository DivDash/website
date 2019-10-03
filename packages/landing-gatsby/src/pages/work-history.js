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

import img1 from '../../../common/src/assets/image/TelicSolutions picture/Images Backup/clients/1.png';
import img2 from '../../../common/src/assets/image/TelicSolutions picture/Images Backup/clients/2.png';
import img3 from '../../../common/src/assets/image/TelicSolutions picture/Images Backup/clients/3.png';
import img4 from '../../../common/src/assets/image/TelicSolutions picture/Images Backup/clients/4.png';
import img5 from '../../../common/src/assets/image/TelicSolutions picture/Images Backup/clients/5.jpg';
import img6 from '../../../common/src/assets/image/TelicSolutions picture/Images Backup/clients/6.jpg';
import img7 from '../../../common/src/assets/image/TelicSolutions picture/Images Backup/clients/7.jpg';
import img8 from '../../../common/src/assets/image/TelicSolutions picture/Images Backup/clients/8.png';
import img9 from '../../../common/src/assets/image/TelicSolutions picture/Images Backup/clients/9.png';
import img10 from '../../../common/src/assets/image/TelicSolutions picture/Images Backup/clients/10.jpg';
import img11 from '../../../common/src/assets/image/TelicSolutions picture/Images Backup/clients/11.png';
import img12 from '../../../common/src/assets/image/TelicSolutions picture/Images Backup/clients/12.png';
import img13 from '../../../common/src/assets/image/TelicSolutions picture/Images Backup/clients/13.png';

import T1 from '../../../common/src/assets/image/TelicSolutions picture/Images Backup/clients/T1.png';
import T2 from '../../../common/src/assets/image/TelicSolutions picture/Images Backup/clients/T2.png';
import T3 from '../../../common/src/assets/image/TelicSolutions picture/Images Backup/clients/T3.png';
import T4 from '../../../common/src/assets/image/TelicSolutions picture/Images Backup/clients/T4.png';
import T5 from '../../../common/src/assets/image/TelicSolutions picture/Images Backup/clients/T5.png';
import T6 from '../../../common/src/assets/image/TelicSolutions picture/Images Backup/clients/T6.png';
import T7 from '../../../common/src/assets/image/TelicSolutions picture/Images Backup/clients/T7.png';
import T8 from '../../../common/src/assets/image/TelicSolutions picture/Images Backup/clients/T8.png';
import T9 from '../../../common/src/assets/image/TelicSolutions picture/Images Backup/clients/T9.png';
import T10 from '../../../common/src/assets/image/TelicSolutions picture/Images Backup/clients/T10.png';
import T11 from '../../../common/src/assets/image/TelicSolutions picture/Images Backup/clients/T11.png';
import T12 from '../../../common/src/assets/image/TelicSolutions picture/Images Backup/clients/T12.png';
import T13 from '../../../common/src/assets/image/TelicSolutions picture/Images Backup/clients/T13.png';

const photos = [
  {
    src: img1,
    thumbnail: T1,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
  },
  {
    src: img2,
    thumbnail: T2,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
  },
  {
    src: img3,
    thumbnail: T3,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
  },
  {
    src: img4,
    thumbnail: T4,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
  },
  {
    src: img5,
    thumbnail: T5,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
  },
  {
    src: img6,
    thumbnail: T6,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
  },
  {
    src: img7,
    thumbnail: T7,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
  },
  {
    src: img8,
    thumbnail: T8,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
  },
  {
    src: img9,
    thumbnail: T9,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
  },
  {
    src: img10,
    thumbnail: T10,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
  },
  {
    src: img11,
    thumbnail: T11,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
  },
  {
    src: img12,
    thumbnail: T12,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
  },
  {
    src: img13,
    thumbnail: T13,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
  },
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
            <h1 style={{textAlign: "center"}}>Work History</h1>
            <Gallery images={photos} />
          </div>
        </AgencyWrapper>
        <Footer />
        {/* End of agency wrapper section */}
      </Fragment>
    </ThemeProvider>
  );
};

export default WorkHistory;
