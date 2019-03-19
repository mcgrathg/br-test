import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/pro-solid-svg-icons';
import { faHeart as faEmptyHeart } from '@fortawesome/pro-light-svg-icons';

import { COLUMN_WIDTH } from '../constants';
import TileBackground from '../assets/images/Cuts/cellGradientBackground@2x.png';

import RestaurantDetailsWrapper from './wrapper-restaurant-details';

const HeartButton = styled.button`
  font-size: 32px;
  text-shadow: 2px 2px 3px black;
  align-self: flex-end;
  color: white;
  &.active {
    color: red;
  }
  padding: 7px;
  margin: 7px;
  background-color: transparent;
  border: 0;
  transition: all 0.2s;

  &:hover {
    cursor: pointer;
    color: red;
    transform: scale(1.2);
  }

  svg {
    filter: drop-shadow(1px 1px 0.5mm red);
  }
  &.active svg {
    filter: drop-shadow(0px 0px 5px white);
  }
`;

const RestaurantHighlight = styled.div`
  background: ${props => `url(${props.backgroundImageURL})`};
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 180px;
  display: flex;
  flex-direction: column;
`;

const TextWithBackground = styled.div`
  background-image: url(${TileBackground});
  background-repeat: repeat-x;
  height: 100%;
  width: 100%;
  display: flex;
  align-content: flex-end;
  padding: 6px 12px;
  flex-wrap: wrap;
  flex: 1;

  background-size: contain;
  @media (max-width: ${COLUMN_WIDTH}px) {
    background-size: cover;
  }

  &:hover {
    cursor: pointer;
  }

  h2 {
    font-family: 'AvenirNext-DemiBold', sans-serif;
    font-size: 16px;
    color: white;
    margin: 0 0 6px 0;
    flex-basis: 100%;
  }

  h3 {
    font-family: 'Avenir Next', sans-serif;
    font-size: 12px;
    color: white;
    flex-basis: 100%;
    margin: 0;
    font-weight: 400;
  }
`;

const RestaurantTile = ({
  name,
  category,
  backgroundImageURL,
  onLoveButtonClicked,
  isLoved,
  ...rest
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section>
      <RestaurantHighlight backgroundImageURL={backgroundImageURL}>
        <HeartButton
          onClick={onLoveButtonClicked}
          className={`${isLoved ? 'active' : ''}`}
          aria-pressed={isLoved ? 'true' : 'false'}
          title={
            isLoved
              ? 'Remove from your Loved Restaurants Group'
              : 'Love this Restaurant!'
          }
        >
          <FontAwesomeIcon icon={isLoved ? faHeart : faEmptyHeart} />
        </HeartButton>
        <TextWithBackground onClick={() => setIsExpanded(!isExpanded)}>
          <h2>{name}</h2>
          <h3>{category}</h3>
        </TextWithBackground>
      </RestaurantHighlight>
      <RestaurantDetailsWrapper isExpanded={isExpanded} {...rest} />
    </section>
  );
};

RestaurantTile.propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  backgroundImageURL: PropTypes.string.isRequired,
  onLoveButtonClicked: PropTypes.func.isRequired,
  isLoved: PropTypes.bool.isRequired,
};

export default RestaurantTile;
