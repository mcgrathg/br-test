import React from 'react';
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';

import RestaurantDetails from './restaurant-details';

const WrapperRestaurantDetails = ({ isExpanded, contact, ...rest }) => {
  const animationProps = useSpring({
    opacity: isExpanded ? 1 : 0,
    height: isExpanded ? 322 - (!!contact ? 0 : 62) : 0,
  });

  return (
    <animated.div style={animationProps}>
      {isExpanded && <RestaurantDetails contact={contact} {...rest} />}
    </animated.div>
  );
};

WrapperRestaurantDetails.propTypes = {
  isExpanded: PropTypes.bool.isRequired,
  contact: PropTypes.object,
};

export default WrapperRestaurantDetails;
