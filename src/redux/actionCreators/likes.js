import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import { POSTLIKE, DELETELIKE } from "../actionTypes";
import { getGlobalMessages, getUserMessages } from "./messages";

const url = domain + "/likes";

export const _postLike = messageId => (dispatch, getState) => {
  dispatch({
    type: POSTLIKE.START
  });

  const token = getState().auth.login.result.token;

  return fetch(url, {
    method: "POST",
    headers: { Authorization: "Bearer " + token, ...jsonHeaders },
    body: JSON.stringify(messageId)
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: POSTLIKE.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(dispatch({ type: POSTLIKE.FAIL, payload: err }));
    });
};

export const postLike = (messageId, username) => (dispatch, getState) => {
  const username = getState().auth.login.result.username;

  return dispatch(_postLike(messageId)).then(() => {
    if (getState().router.location.pathname === "/messagefeed") {
      dispatch(getGlobalMessages());
    } else {
      dispatch(getUserMessages(username));
    }
  });
};


export const _deleteLike = likeId => (dispatch, getState) => {
    dispatch({
      type: DELETELIKE.START
    });

    const token = getState().auth.login.result.token;
  
    return fetch(url + "/" + likeId, {
        method: "DELETE",
        headers: { Authorization: "Bearer " + token, ...jsonHeaders }
      })
        .then(handleJsonResponse)
        .then(result => {
          return dispatch({
            type: DELETELIKE.SUCCESS,
            payload: result
          });
        })
        .catch(err => {
          return Promise.reject(
            dispatch({ type: DELETELIKE.FAIL, payload: err.message })
          );
        });
    };

export const deleteLike = likeId => (dispatch, getState) => {
  return dispatch(_deleteLike(likeId))
    .then(() => {
      const username = getState().auth.login.result.username;
      const pathname = getState().router.login.result.pathname;
        if (pathname === "/messagefeed") {
          return dispatch(getGlobalMessages());
        }
          return dispatch(getGlobalMessages(username));
      });
    };
