import React from 'react';
import styled from 'styled-components';

import useDataApi from './hooks/use-data-api';
import RestaurantTile from './restaurant/restaurant-tile';
import { COLUMN_WIDTH } from './constants';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Columns = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100vw;
  justify-content: center;
  max-width: 900px;
`;

const Column = styled.div`
  max-width: 100%;
  flex: 1 0 ${COLUMN_WIDTH}px;
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
    <Wrapper>
      {isError && <div>Something went wrong ...</div>}

      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <Columns>
          <Column>{column0}</Column>
          <Column>{column1}</Column>
        </Columns>
      )}
    </Wrapper>
  );
};

export default List;
