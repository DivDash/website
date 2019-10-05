import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Logo from 'reusecore/src/elements/UI/Logo';
import Container from '../../../components/UI/Container';
import FooterWrapper, { List, ListItem } from './footer.style';

import LogoImage from '../../../assets/image/agency/logo.png';

import data from '../../../data/Agency';

const Footer = ({ row, col, titleStyle, logoStyle, textStyle }) => {
  return (
    <FooterWrapper id="footerSection">
      <Container>
        <Box className="row" {...row}>
          <Box {...col} className="col">
            <Logo
              href="#"
              logoSrc={LogoImage}
              title="Agency"
              logoStyle={logoStyle}
            />
            <Heading content="Telic Solutions" {...titleStyle} />
            <Text
              content={
                <p>
                  Telic Solutions is a software house based in Pakistan. We are
                  a young IT company and we want to focus on the ideas popping
                  up in our markets.
                </p>
              }
              {...textStyle}
            />
          </Box>
          {/* End of footer logo column */}
          <Box className="col" {...col}>
            <Heading content="About Us" {...titleStyle} />
            <List>
              {data.menuItems.map(item => (
                <ListItem key={`list__item-${item.id}`}>
                  <Link href={item.url}>
                    <a className="ListItem">{item.text}</a>
                  </Link>
                </ListItem>
              ))}
            </List>
          </Box>
          {/* End of footer List column */}
          <Box className="col" {...col}>
            <Heading content="Contact Us" />
            <Text content="Phone:" {...titleStyle} />
            <Text
              content={<a href="tel:+92-321-9259476">+92-321-9259476</a>}
              {...textStyle}
            />
            <Text
              content={<a href="tel:+1 (734) 474-0243">+1 (734) 474-0243</a>}
              {...textStyle}
            />
            <Text content="Address:" {...textStyle} />
            <Text
              content={
                <p>
                  11-Haider Plaza, 3rd Floor, Rashid Minhas Road,
                  Gulshan-e-Iqbal-5, Karachi.
                </p>
              }
              {...textStyle}
            />
          </Box>
          {/* End of footer List column */}
        </Box>
      </Container>
    </FooterWrapper>
  );
};

// Footer style props
Footer.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  titleStyle: PropTypes.object,
  textStyle: PropTypes.object,
  logoStyle: PropTypes.object
};

// Footer default style
Footer.defaultProps = {
  // Footer row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-4px',
    mr: '-4px'
  },
  // Footer col default style
  col: {
    width: ['100%', '33%', '33%', '33%'],
    pl: '15px',
    pr: '15px',
    mb: '30px'
  },
  // widget title default style
  titleStyle: {
    color: '#343d48',
    fontSize: '16px',
    fontWeight: '700'
  },
  // Default logo size
  logoStyle: {
    width: '128px',
    mb: '15px'
  },
  // widget text default style
  textStyle: {
    color: '#0f2137',
    fontSize: '16px',
    mb: '10px'
  }
};

export default Footer;
