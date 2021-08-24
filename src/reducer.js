export const initialState = {
  count: 0,
  value: '',
};

export const indexReducer = (state, action) => {
  switch (action.type) {
    case 'INCREASE': {
      return {
        ...state,
        count: state.count + 1,
      };
    }
    case 'DECREASE': {
      return {
        ...state,
        count: state.count - 1,
      };
    }
    case 'INPUT': {
      return {
        ...state,
        value: action.value,
      };
    }
  }
};
