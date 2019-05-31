export default (state=[],action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      //payload is the response returned from the API
      return action.payload;
    default:
      return state;
  }
}
