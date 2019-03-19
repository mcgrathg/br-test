import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100%;
  color: ${props => props.color};
  background-color: ${props => props.backgroundColor};
`;

const Details = styled.div`
  padding: 6px;

  .group {
    margin-bottom: 6px;
  }
`;

const MapWrapper = styled.div`
  padding: 5px;
  height: 180px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e8e8e8;
`;

const Map = React.lazy(() =>
  import(/* webpackChunkName: "restaurant-map" */ './restaurant-map.js'),
);
const SocialLinks = React.lazy(() =>
  import(/* webpackChunkName: "restaurant-social-links" */ './restaurant-social-links'),
);

const RestaurantDetails = ({ backgroundColor, color, contact, location }) => {
  const { formattedPhone, phone } = contact || {};
  const { formattedAddress = [] } = location || {};

  return (
    <Wrapper backgroundColor={backgroundColor} color={color}>
      <MapWrapper>
        <React.Suspense fallback={<div>Loading Map...</div>}>
          <Map {...location} />
        </React.Suspense>
      </MapWrapper>

      <Details>
        <div itemScope itemType="http://schema.org/LocalBusiness">
          {formattedAddress && formattedAddress.length > 0 && (
            <div className="group" itemProp="address">
              {formattedAddress.map(addr => (
                <div key={addr}>{addr}</div>
              ))}
            </div>
          )}

          {!!phone && (
            <div className="group" itemProp="telephone">
              <a href={`tel:${phone}`}>{formattedPhone}</a>
            </div>
          )}
        </div>

        <React.Suspense fallback={<div>Loading Social Links...</div>}>
          <SocialLinks {...contact} />
        </React.Suspense>
      </Details>
    </Wrapper>
  );
};

RestaurantDetails.propTypes = {
  contact: PropTypes.shape({
    formattedPhone: PropTypes.string,
    phone: PropTypes.string,
  }),
  location: PropTypes.shape({
    formattedAddress: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default RestaurantDetails;
