import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import TileBackground from '../assets/images/Cuts/cellGradientBackground@2x.png';

const StyledRestaurantTile = styled.div`
  background-image: ${props => `url(${props.backgroundImageURL})`};
  background-size: cover;
  background-position: center;
  max-width: 100%;
  width: 320px;
  height: 180px;
`;

const TextWithBackground = styled.div`
  background-image: url(${TileBackground});
  background-repeat: repeat-x;
  height: 100%;
  width: 100%;
  background-size: cover;
  display: flex;
  align-content: flex-end;
  padding: 6px 12px;
  flex-wrap: wrap;

  h2 {
    font-family: 'AvenirNext-DemiBold', sans-serif;
    color: white;
    margin: 0 0 6px 0;
    flex-basis: 100%;
  }

  h3 {
    font-family: 'Avenir Next', sans-serif;
    color: white;
    flex-basis: 100%;
    margin: 0;
    font-weight: 400;
  }
`;

const RestaurantTile = props => (
  <StyledRestaurantTile {...props}>
    <TextWithBackground>
      <h2>{props.name}</h2>
      <h3>{props.category}</h3>
    </TextWithBackground>
  </StyledRestaurantTile>
);

RestaurantTile.propTypes = {
  backgroundImageURL: PropTypes.string.isRequired,
};

export default RestaurantTile;
