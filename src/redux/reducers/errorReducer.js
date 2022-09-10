const initialState = {
  hasError: false,
}

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ERROR':
      return { ...state, hasError: action.payload };
    default:
      return state;

  }
}

export default errorReducer;