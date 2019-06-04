// Action creator
import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  console.log('about to fetch posts');
  await dispatch(fetchPosts());
  const userIds = _.uniq(_.map(getState().posts, 'userId'));
  userIds.forEach(id => dispatch(fetchUser(id)));

  console.log(userIds);
}

export const fetchPosts = () => async (dispatch) => {
    const response = await jsonPlaceholder.get('/posts');
    dispatch ({
      type:'FETCH_POSTS',
      payload: response.data
    });
  };

export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({
    type: 'FETCH_USER',
    payload: response.data
  });
};

//memoized solution:
// const _fetchUser = _.memoize(async (id,dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);
//   dispatch({
//     type: 'FETCH_USER',
//     payload: response.data
//   });
// });

// Create a named export. Export many different functions from a single file
