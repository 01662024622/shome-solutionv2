import * as actionTypes from './types';
import * as authService from '@/auth';

import history from '@/utils/history';

export const login =
  ({ loginData }) =>
  async (dispatch) => {
    dispatch({
      type: actionTypes.LOADING_REQUEST,
      payload: { loading: true },
    });
    const data = await authService.login({ loginData });

    if (data.errorCode === 0) {
      window.localStorage.setItem('isLoggedIn', true);
      window.localStorage.setItem('auth', JSON.stringify({id:data.data.userID,isLoggedIn:true}));
      window.localStorage.setItem('token', JSON.stringify(data.data.loginToken));
      dispatch({
        type: actionTypes.LOGIN_SUCCESS,
        payload: JSON.stringify({id:data.data.userID,isLoggedIn:true}),
      });
      history.push('/');
    } else {
      dispatch({
        type: actionTypes.FAILED_REQUEST,
        payload: data,
      });

    }
  };

export const logout = () => async (dispatch) => {
  authService.logout();
  dispatch({
    type: actionTypes.LOGOUT_SUCCESS,
  });
  history.push('/login');
};
