import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import logo from '../images/logo.svg';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  background: #524763;
  margin-bottom: 0;
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1rem;
  img {
    margin-bottom: 0;
  }
`;

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <img
            style={{
              width: '100px',
            }}
            src={logo}
            alt="Level Up Tuts logo"
          />
        </Link>
      </h1>
    </HeaderContainer>
  </HeaderWrapper>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
