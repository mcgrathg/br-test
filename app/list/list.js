import React from 'react';
import styled from 'styled-components';

import useDataApi from '../hooks/use-data-api';

import RestaurantTile from './restaurant-tile';

const Columns = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100vw;
  justify-content: center;
`;

const Column = styled.div`
  max-width: 100%;
  width: 320px;
`;

const List = () => {
  const { data, isLoading, isError } = useDataApi(
    'http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/restaurants.json',
    { restaurants: [] },
  );

  const column0 = [];
  const column1 = [];

  data.restaurants.map((item, idx) => {
    const tile = <RestaurantTile key={item.name} {...item} />;
    if (idx % 2) {
      column1.push(tile);
    } else {
      column0.push(tile);
    }
  });

  return (
    <>
      {isError && <div>Something went wrong ...</div>}

      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <Columns>
          <Column>{column0}</Column>
          <Column>{column1}</Column>
        </Columns>
      )}
    </>
  );
};

export default List;
