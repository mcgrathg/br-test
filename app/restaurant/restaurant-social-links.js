import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { SocialIcon } from 'react-social-icons';

const Phone = styled.a`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  padding: 8px;
  background: #f56c63;
  color: white;
  text-decoration: none;
  font: 30px 'Avenir Next', sans-serif;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

const SocialLinks = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-around;

  div {
    width: 60px;
    height: 50px;
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

const RestaurantSocialLinks = ({
  facebook,
  twitter,
  formattedPhone,
  phone = formattedPhone,
}) =>
  !!facebook || !!twitter || !!phone ? (
    <SocialLinks className="group">
      {!!phone && (
        <InlineDiv itemProp="telephone">
          <Phone href={`tel:${phone}`} title="Phone">
            {String.fromCharCode(9742)}
          </Phone>
        </InlineDiv>
      )}

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
  phone: PropTypes.string,
  formattedPhone: PropTypes.string,
};

export default RestaurantSocialLinks;
