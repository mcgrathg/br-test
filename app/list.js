import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styled from 'styled-components';

import useDataApi from './hooks/use-data-api';
import { COLUMN_WIDTH } from './constants';

const RestaurantTile = React.lazy(() =>
  import(/* webpackChunkName: "restaurant-tile" */ './restaurant/restaurant-tile'),
);

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

const List = ({ isLoveFiltered }) => {
  const { data, isLoading, isError } = useDataApi(
    'http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/restaurants.json',
    { restaurants: [] },
  );

  const [loved, setLoved] = useState([]);

  const toggleLoved = name => {
    if (loved.includes(name)) {
      setLoved(loved.filter(str => str !== name));
    } else {
      setLoved([...loved, name]);
    }
  };

  const column0 = [];
  const column1 = [];

  data.restaurants
    // only include loved restaurants if the love toggle is on
    .filter(item => !isLoveFiltered || loved.includes(item.name))
    .map((item, idx) => {
      const tile = (
        <RestaurantTile
          key={item.name}
          onLoveButtonClicked={() => toggleLoved(item.name)}
          isLoved={loved.includes(item.name)}
          {...item}
        />
      );

      // split into 2 columns for rendering purposes
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
        <div>Loading Restaurants...</div>
      ) : column0.length || column1.length ? (
        <Columns>
          <React.Suspense fallback={<div>Loading Restaurants...</div>}>
            <Column>{column0}</Column>
            <Column>{column1}</Column>
          </React.Suspense>
        </Columns>
      ) : (
        isLoveFiltered && <h2>Try Turning Off Your Love Filter</h2>
      )}
    </Wrapper>
  );
};

List.propTypes = {
  isLoveFiltered: PropTypes.bool,
};

export default List;
