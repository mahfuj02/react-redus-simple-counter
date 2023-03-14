import { DECREAMENT, INCREAMENT, RESET } from "../constants/CounterConstant";

const initialCount = {
  count: 0,
};

const counterReducer = (state = initialCount, action) => {
  switch (action.type) {
    case INCREAMENT:
      return {
        ...state,
        count: state.count + 1,
      };

    case DECREAMENT:
      return {
        ...state,
        count: state.count - 1,
      };

    case RESET:
      return {
        ...state,
        count: 0,
      };

    default:
      return state;
  }
};

export default counterReducer;