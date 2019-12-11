import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import {
  GETUSER,
  POSTUSER,
  DELETEUSER,
  PATCHUSER,
  PUTPICTURE
} from "../actionTypes";
import { login, logout } from "./auth";
import { push } from 'connected-react-router'

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
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(dispatch({ type: DELETEUSER.FAIL, payload: err }));
    });
};

export const deleteUser = userData => dispatch => {
  return dispatch(_deleteUser(userData)).then(() => dispatch(logout()));
};

export const _patchUser = userData => (dispatch, getState) => {
  dispatch({
    type: PATCHUSER.START
  });

  const { username, token } = getState().auth.login.result;

  return fetch(url + "/" + username, {
    method: "PATCH",
    headers: { Authorization: "Bearer " + token, ...jsonHeaders },
    body: JSON.stringify(userData)
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: PATCHUSER.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(dispatch({ type: PATCHUSER.FAIL, payload: err }));
    });
};

export const patchUser = userData => (dispatch, getState) => {
  return dispatch(_patchUser(userData)).then(() => {
    const username = getState().auth.login.result.username
    return dispatch(push(`/profile/${username}`));
  });
};

const _putPicture = formTag => (dispatch, getState) => {
  dispatch({
    type: PUTPICTURE.START
  });

  const { username, token } = getState().auth.login.result;

  return fetch(`${url}/${username}/picture`, {
    method: "PUT",
    headers: {
      Authorization: "Bearer " + token,
      Accept: "multipart/form-data"
    },
    body: new FormData(formTag)
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: PUTPICTURE.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(dispatch({ type: PUTPICTURE.FAIL, payload: err }));
    });
};

export const putPicture = pictureData => (dispatch, getState) => {
  return dispatch(_putPicture(pictureData)).then(() => {
    const username = getState().auth.login.result.username
    return dispatch(push(`/profile/${username}`))
  })
}