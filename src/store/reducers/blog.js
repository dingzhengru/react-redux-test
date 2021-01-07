const initialState = { postList: [] };

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'blog/setPostList': {
      return {
        ...state,
        postList: action.data,
      };
    }
    default: {
      return state;
    }
  }
}

export default counterReducer;
