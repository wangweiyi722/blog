// Action creator
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => async (dispatch) => {
    const response = await jsonPlaceholder.get('/posts');
    dispatch ({
      type:'FETCH_POSTS',
      payload: response.data
    });
  };

// Create a named export. Export many different functions from a single file
