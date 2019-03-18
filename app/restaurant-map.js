import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GoogleMap from 'google-map-react';

import mapStyle from './map-style.json';

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

const RestaurantMap = ({ lat, lng }) => (
  <GoogleMap
    bootstrapURLKeys={{ key: process.env.GOOGLE_API_KEY }}
    center={[lat, lng]}
    zoom={14}
    options={{ styles: mapStyle }}
  >
    <MapIndicator lat={lat} lng={lng} />
  </GoogleMap>
);

RestaurantMap.propTypes = {
  lat: PropTypes.number,
  lng: PropTypes.number,
};

export default RestaurantMap;
