import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GoogleMap from 'google-map-react';
import { SocialIcon } from 'react-social-icons';

const Wrapper = styled.div`
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
  height: 180px;
  width: 100%;
`;

const MapIndicator = styled.span`
  height: 15px;
  width: 15px;
  background-color: #e91607;
  border-radius: 50%;
  display: inline-block;
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

const RestaurantDetails = props => {
  const { formattedPhone, phone, twitter, facebook } = props.contact || {};
  const { lat, lng, formattedAddress = [] } = props.location;

  return (
    <>
      <Wrapper>
        <GoogleMap
          bootstrapURLKeys={{ key: process.env.GOOGLE_API_KEY }}
          center={[lat, lng]}
          zoom={14}
          options={{ styles: cleanCutStyle }}
        >
          <MapIndicator lat={lat} lng={lng} />
        </GoogleMap>
      </Wrapper>
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

        <pre>
          <code>{JSON.stringify(props, null, 2)}</code>
        </pre>
      </Details>
    </>
  );
};

const cleanCutStyle = [
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      {
        lightness: 100,
      },
      {
        visibility: 'simplified',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        visibility: 'on',
      },
      {
        color: '#C6E2FF',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#C5E3BF',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#D1D1B8',
      },
    ],
  },
];

RestaurantDetails.propTypes = {};

export default RestaurantDetails;
