import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100%;
  color: ${props => props.color};
  background-color: ${props => props.backgroundColor};
  display: flex;
  flex-direction: column;
  > * {
    flex: 1;
  }
`;

const Details = styled.div`
  padding: 6px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  font-family: 'Avenir Next', sans-serif;
  color: #2a2a2a;

  > * {
    flex: 1 100%;
  }
`;

const MapWrapper = styled.div`
  padding: 5px;
  flex: 0 180px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e8e8e8;
`;

const Map = React.lazy(() =>
  import(/* webpackChunkName: "restaurant-map" */ './restaurant-map.js'),
);
const RestaurantSocialLinks = React.lazy(() =>
  import(/* webpackChunkName: "restaurant-social-links" */ './restaurant-social-links'),
);

const RestaurantDetails = ({ backgroundColor, color, contact, location }) => {
  const { formattedAddress = [] } = location || {};

  return (
    <Wrapper backgroundColor={backgroundColor} color={color}>
      <MapWrapper>
        <React.Suspense fallback={<div>Loading Map...</div>}>
          <Map {...location} />
        </React.Suspense>
      </MapWrapper>

      <div itemScope itemType="http://schema.org/LocalBusiness">
        <Details>
          {formattedAddress && formattedAddress.length > 0 && (
            <div className="group" itemProp="address">
              {formattedAddress.map(addr => (
                <div key={addr}>{addr}</div>
              ))}
            </div>
          )}

          <React.Suspense fallback={<div>Loading Social Links...</div>}>
            <RestaurantSocialLinks {...contact} />
          </React.Suspense>
        </Details>
      </div>
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
