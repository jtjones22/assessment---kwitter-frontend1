import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import { GETUSER, POSTUSER, DELETEUSER } from "../actionTypes";
import { login, logout } from "./auth";

const url = domain + "/users";

export const getUser = username => dispatch => {
  dispatch({
    type: GETUSER.START
  });

  return fetch(url + "/" + username, {
    method: "GET",
    headers: jsonHeaders
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: GETUSER.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(dispatch({ type: GETUSER.FAIL, payload: err }));
    });
};

const _postUser = userData => dispatch => {
  dispatch({
    type: POSTUSER.START
  });

  return fetch(url, {
    method: "POST",
    headers: jsonHeaders,
    body: JSON.stringify(userData)
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: POSTUSER.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(dispatch({ type: POSTUSER.FAIL, payload: err }));
    });
};

export const postUser = userData => dispatch => {
  return dispatch(_postUser(userData)).then(() =>
    dispatch(
      login({
        username: userData.username,
        password: userData.password
      })
    )
  );
};

export const _deleteUser = username => (dispatch, getState) => {
  dispatch({
    type: DELETEUSER.START
  });

  const token = getState().auth.login.result.token;


  return fetch(url + "/" + username, {
    method: "DELETE",
    headers: { Authorization: "Bearer " + token, ...jsonHeaders }
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: DELETEUSER.SUCCESS,
        payload: result,
      });
    })
    .catch(err => {
      return Promise.reject(dispatch({ type: DELETEUSER.FAIL, payload: err }));
    });
};

export const deleteUser = userData => dispatch => {
  return dispatch(_deleteUser(userData)).then(() =>
    dispatch(
      logout()
    )
  );
};