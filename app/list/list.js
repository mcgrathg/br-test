import React from 'react';

import useDataApi from '../hooks/use-data-api';

const List = () => {
  const { data, isLoading, isError } = useDataApi(
    'http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/restaurants.json',
    { restaurants: [] },
  );

  return (
    <>
      {isError && <div>Something went wrong ...</div>}

      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        data.restaurants.map(item => (
          <pre key={item.name}>
            <code>{JSON.stringify(item, null, 2)}</code>
          </pre>
        ))
      )}
    </>
  );
};

export default List;
