import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GoogleMap from 'google-map-react';
import { SocialIcon } from 'react-social-icons';

import mapStyle from './map-style.json';

const Wrapper = styled.div`
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
  height: 100%;

  a {
    color: ${props => props.color};
  }
`;

const MapWrapper = styled.div`
  padding: 5px;
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
  height: 180px;
  width: 100%;
`;

const MapIndicator = styled.span`
  height: 25px;
  width: 25px;
  background-color: rgba(233, 22, 7, 1);
  border-radius: 50%;
  display: inline-block;

  padding: 3px;
  border: solid 2px rgba(233, 22, 7, 0.5);
  background-clip: content-box;
`;

const Details = styled.div`
  padding: 6px;

  .group {
    margin-bottom: 6px;
  }
`;

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

const RestaurantDetails = ({
  contact,
  location,
  backgroundColor,
  color,
  alternativeColor,
}) => {
  const { formattedPhone, phone, twitter, facebook } = contact || {};
  const { lat, lng, formattedAddress = [] } = location || {};

  return (
    <Wrapper
      backgroundColor={backgroundColor}
      color={color}
      alternativeColor={alternativeColor}
    >
      <MapWrapper>
        <GoogleMap
          bootstrapURLKeys={{ key: process.env.GOOGLE_API_KEY }}
          center={[lat, lng]}
          zoom={14}
          options={{ styles: mapStyle }}
        >
          <MapIndicator lat={lat} lng={lng} />
        </GoogleMap>
      </MapWrapper>
      <Details>
        <div itemScope itemType="http://schema.org/LocalBusiness">
          <div className="group" itemProp="address">
            {formattedAddress.map(addr => (
              <div key={addr}>{addr}</div>
            ))}
          </div>
          {!!phone && (
            <div className="group" itemProp="telephone">
              <a href={`tel:${phone}`}>{formattedPhone}</a>
            </div>
          )}
        </div>

        {(!!facebook || !!twitter) && (
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
        )}
      </Details>
    </Wrapper>
  );
};

RestaurantDetails.propTypes = {
  contact: PropTypes.shape({
    formattedPhone: PropTypes.string,
    phone: PropTypes.string,
    twitter: PropTypes.string,
    facebook: PropTypes.string,
  }),
  location: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
    formattedAddress: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default RestaurantDetails;