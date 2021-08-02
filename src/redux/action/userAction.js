import * as userApis from '../../services/user';
import * as userActionTypes from '../actionTypes/user';

export const registerUser = params => async dispatch => {
  const resp = await userApis.registerUser(params);
  dispatch({
    type: userActionTypes.RegisterUser,
    payload: resp,
  });
  return resp;
};
export const LoginUser = params => async dispatch => {
  try {
    const resp = await userApis.LoginUser(params);
    dispatch({
      type: userActionTypes.LoginUser,
      payload: resp,
    });
    return resp;
  } catch {}
};
export const forgetPassowrd = params => async dispatch => {
  try {
    const resp = await userApis.ForgetPassowrd(params);
    dispatch({
      type: userActionTypes.ForgetPassowrd,
      payload: resp,
    });
    return resp;
  } catch {}
};
