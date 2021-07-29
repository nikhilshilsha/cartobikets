import * as userApis from '../../services/user';
import * as userActionTypes from '../actionTypes/user';

export const registerUser = params => async dispatch => {
  const resp = await userApis.registerUser(params);
  dispatch({
    type: userActionTypes.RegisterUser,
    payload: resp.data,
  });
  return resp.data;
};
export const LoginUser = params => async dispatch => {
  const resp = await userApis.LoginUser(params);
  dispatch({
    type: userActionTypes.LoginUser,
    payload: resp.data,
  });
  return resp.data;
};
