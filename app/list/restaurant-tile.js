import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import TileBackground from '../assets/images/Cuts/cellGradientBackground@2x.png';

import AnimatedRestaurantDetails from './animated-restaurant-details';

const RestaurantHighlight = styled.div`
  background-image: ${props => `url(${props.backgroundImageURL})`};
  background-size: cover;
  background-position: center;
  width: 100%;
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

  &:hover {
    cursor: pointer;
  }

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

const RestaurantTile = ({ name, category, backgroundImageURL, ...rest }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <RestaurantHighlight
        backgroundImageURL={backgroundImageURL}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <TextWithBackground>
          <h2>{name}</h2>
          <h3>{category}</h3>
        </TextWithBackground>
      </RestaurantHighlight>
      {<AnimatedRestaurantDetails isExpanded={isExpanded} {...rest} />}
    </>
  );
};

RestaurantTile.propTypes = {
  backgroundImageURL: PropTypes.string.isRequired,
};

export default RestaurantTile;
