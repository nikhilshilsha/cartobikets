import * as userAction from '../actionTypes/user';

export default (state = {}, action) => {
  switch (action.type) {
    case userAction.RegisterUser:
      return {
        ...state,
      };
  }
};
