import React from 'react';
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';
import ImagePalette from 'react-image-palette';

import RestaurantDetails from './restaurant-details';

const WrapperRestaurantDetails = ({
  isExpanded,
  backgroundImageURL,
  ...rest
}) => {
  const animationProps = useSpring({
    opacity: isExpanded ? 1 : 0,
    height: isExpanded ? 350 : 0,
  });

  return (
    <animated.div style={animationProps}>
      <ImagePalette crossOrigin image={backgroundImageURL}>
        {({ backgroundColor, color }) =>
          isExpanded && (
            <RestaurantDetails
              backgroundColor={backgroundColor}
              color={color}
              {...rest}
            />
          )
        }
      </ImagePalette>
    </animated.div>
  );
};

WrapperRestaurantDetails.propTypes = {
  isExpanded: PropTypes.bool.isRequired,
};

export default WrapperRestaurantDetails;
