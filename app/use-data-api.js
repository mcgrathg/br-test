import { useState, useEffect, useReducer } from 'react';
import axios from 'axios';

const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case 'FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      throw new Error();
  }
};

const useDataApi = (initialUrl, initialData) => {
  const [url, setUrl] = useState(initialUrl);

  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: initialData,
  });

  useEffect(() => {
    const { CancelToken } = axios;
    const source = CancelToken.source();
    axios(url, { cancelToken: source.token })
      .then(result => {
        dispatch({
          type: 'FETCH_SUCCESS',
          payload: result.data,
        });
      })
      .catch(error => {
        if (!axios.isCancel(error)) {
          dispatch({ type: 'FETCH_FAILURE' });
        }
      });

    return () => {
      source.cancel();
    };
  }, [url]);

  return { ...state, setUrl };
};

export default useDataApi;
