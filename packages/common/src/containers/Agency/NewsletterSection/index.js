import React from 'react';
import PropTypes from 'prop-types';
import Box from 'reusecore/src/elements/Box';
import Heading from 'reusecore/src/elements/Heading';
import Input from 'reusecore/src/elements/Input';
import Text from 'reusecore/src/elements/Text';
import Button from 'reusecore/src/elements/Button';
import Container from '../../../components/UI/Container';
import NewsletterSectionWrapper from './newsletterSection.style';

const INITIAL_STATE = {
  email: '',
  message: '',
  website: '',
  success: '',
  error: '',
};

function ValidateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  return false;
}

class NewsletterSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onChangeEmail = e => {
    this.setState({
      email: e,
    });
  };

  onChangeSite = e => {
    this.setState({
      website: e,
    });
  };

  onChangeMessage = e => {
    this.setState({
      message: e,
    });
  };

  setError = msg => {
    this.setState(
      {
        error: msg,
      },
      () => {
        setTimeout(() => {
          this.setState({
            error: '',
          });
        }, 2000);
      }
    );
  };

  setSuccess = msg => {
    this.setState(
      {
        success: msg,
      },
      () => {
        setTimeout(() => {
          this.setState({
            success: '',
          });
        }, 2000);
      }
    );
  };

  onSubmit = e => {
    const { email, message } = this.state;
    let validEmail = ValidateEmail(email);
    if (email === '') {
      this.setError('Please enter email address');
    } else if (!validEmail) {
      this.setError('Please enter valid email address');
    } else if (message === '') {
      this.setError('Please enter message');
    } else {
      console.log(this.state);
      fetch('https://telicsolutions.com/api.php', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'same-origin', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // no-referrer, *client
        body: JSON.stringify({
          message: this.state.message,
          email: this.state.email,
        }), // body data type must match "Content-Type" header
      }).then(res => {
        res.json().then(res => {
          console.log(res);
        });

        this.onChangeEmail('');
        this.onChangeMessage('');
        this.onChangeSite('');
        this.setSuccess('Thankyou for contacting us.');
      });
    }
  };

  render() {
    return (
      <NewsletterSectionWrapper id="newsletterSection">
        <Container>
          <Box {...this.props.sectionHeader}>
            <Heading content="Contact Us" {...this.props.sectionTitle} />
            <br />
            {/* <Heading content={<a href="mailto:contact@telicsolutions.com">contact@telicsolutions.com</a>} {...sectionTitle} /> */}
          </Box>
          <Box>
            {/* <NewsletterForm> */}
            <div className="contact-form-input">
              <div className="input-field-wrapper">
                <Input
                  inputType="email"
                  value={String(this.state.email)}
                  onChange={e => this.onChangeEmail(e)}
                  isMaterial={false}
                  placeholder="Email Address"
                />
              </div>
              {/* <div className="input-field-wrapper">
                <Input
                  inputType="text"
                  value={String(this.state.website)}
                  onChange={(e) => this.onChangeSite(e)}
                  isMaterial={false}
                  placeholder="Enter Website"
                />
              </div> */}
              <div className="input-field-wrapper">
                <Input
                  inputType="textarea"
                  value={String(this.state.message)}
                  onChange={e => this.onChangeMessage(e)}
                  isMaterial={false}
                  placeholder="Enter Message"
                />
              </div>
              <div className="button-wrapper">
                <Button
                  onClick={this.onSubmit}
                  type="button"
                  title="SEND MESSAGE"
                  {...this.props.btnStyle}
                />
              </div>
              <Text content={this.state.error || this.state.success} />
            </div>
            {/* </NewsletterForm> */}
          </Box>
        </Container>
      </NewsletterSectionWrapper>
    );
  }
}

// NewsletterSection style props
NewsletterSection.propTypes = {
  sectionHeader: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
};

// NewsletterSection default style
NewsletterSection.defaultProps = {
  // section header default style
  sectionHeader: {
    mb: '56px',
  },
  // section title default style
  sectionTitle: {
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0',
  },
  // button default style
  btnStyle: {
    minWidth: '152px',
    minHeight: '45px',
    fontSize: '14px',
    fontWeight: '500',
  },
};

export default NewsletterSection;
