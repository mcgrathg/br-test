import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MapIconSrc = './assets/images/Cuts/icon_map@2x.png';

const Wrapper = styled.div`
  background-color: #43e895;
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    font-family: 'AvenirNext-DemiBold', sans-serif;
    font-size: 17px;
    color: white;
  }
`;

const LovedButton = styled.button`
  position: absolute;
  right: 3px;
  font-size: 46px;
  background-color: transparent;
  border: 0;
  color: white;
  transition: all 0.2s;

  &:hover {
    cursor: pointer;
    color: red;
    transform: scale(1.2);
  }
`;

const MapIcon = styled.img`
  position: absolute;
  right: 68px;
  height: 32px;
`;

const Header = ({ isLoveFiltered, toggleLoveFilter }) => {
  const lovedStr = isLoveFiltered ? '❤' : '♡';
  return (
    <Wrapper>
      <h1>Lunch Tyme</h1>
      <LovedButton
        title="Limit to your Loved restaurants"
        className={`${isLoveFiltered ? 'active' : ''}`}
        onClick={() => toggleLoveFilter(!isLoveFiltered)}
      >
        {lovedStr}
      </LovedButton>
      <MapIcon src={MapIconSrc} />
    </Wrapper>
  );
};

Header.propTypes = {
  isLoveFiltered: PropTypes.bool,
  toggleLoveFilter: PropTypes.func,
};

export default Header;
