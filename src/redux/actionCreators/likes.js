import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import { ADDLIKE, REMOVELIKE } from "../actionTypes";
import { getGlobalMessages, getUserMessages } from "./messages";

const url = domain + "/likes";

export const _addLike = messageId => (dispatch, getState) => {
  dispatch({
    type: ADDLIKE.START
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
        type: ADDLIKE.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(dispatch({ type: ADDLIKE.FAIL, payload: err }));
    });
};

export const addLike = (messageId, username) => (dispatch, getState) => {
  const username = getState().auth.login.result.username;

  return dispatch(_addLike(messageId)).then(() => {
    if (getState().router.location.pathname === "/messagefeed") {
      dispatch(getGlobalMessages());
    } else {
      dispatch(getUserMessages(username));
    }
  });
};


export const removeLike = likeId => (dispatch, getState) => {
    dispatch({
      type: REMOVELIKE.START
    });

    const token = getState().auth.login.result.token;
  
    return fetch(url + "/" + likeId, {
        method: "DELETE",
        headers: { Authorization: "Bearer " + token, ...jsonHeaders }
      })
        .then(handleJsonResponse)
        .then(result => {
          return dispatch({
            type: REMOVELIKE.SUCCESS,
            payload: result
          });
        })
        .catch(err => {
          return Promise.reject(
            dispatch({ type: REMOVELIKE.FAIL, payload: err.message })
          );
        });
    };