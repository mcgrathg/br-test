import React from 'react';
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';

import RestaurantDetails from './restaurant-details';

const AnimatedRestaurantDetails = ({ isExpanded, ...rest }) => {
  const animationProps = useSpring({
    opacity: isExpanded ? 1 : 0,
    height: isExpanded ? 350 : 0,
  });

  return (
    <animated.div style={animationProps}>
      {isExpanded && <RestaurantDetails {...rest} />}
    </animated.div>
  );
};

AnimatedRestaurantDetails.propTypes = {
  isExpanded: PropTypes.bool.isRequired,
};

export default AnimatedRestaurantDetails;
