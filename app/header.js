import React from 'react';
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

const MapIcon = styled.img`
  position: absolute;
  right: 10px;
  height: 32px;
`;

const Header = () => (
  <Wrapper>
    <h1>Lunch Tyme</h1>
    <MapIcon src={MapIconSrc} />
  </Wrapper>
);

export default Header;
