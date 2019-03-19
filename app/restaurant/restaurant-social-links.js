import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { SocialIcon } from 'react-social-icons';

const SocialLinks = styled.div`
  div {
    width: 60px;
  }
  a {
    transition: transform 0.2s;
    &:hover {
      transform: scale(1.2);
    }
  }
`;

const InlineDiv = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

const RestaurantSocialLinks = ({ facebook, twitter }) =>
  !!facebook || !!twitter ? (
    <SocialLinks className="group">
      {!!facebook && (
        <InlineDiv>
          <SocialIcon
            url={`https://www.facebook.com/profile.php?id=${facebook}`}
            target="_blank"
            title="Facebook"
          />
        </InlineDiv>
      )}

      {!!twitter && (
        <InlineDiv>
          <SocialIcon
            url={`https://twitter.com/${twitter}`}
            target="_blank"
            title="Twitter"
          />
        </InlineDiv>
      )}
    </SocialLinks>
  ) : null;

RestaurantSocialLinks.propTypes = {
  twitter: PropTypes.string,
  facebook: PropTypes.string,
};

export default RestaurantSocialLinks;
