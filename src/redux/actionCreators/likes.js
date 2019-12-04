import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import { ADDLIKE, REMOVELIKE } from "../actionTypes";

const url = domain + "/likes";

export const addLike = messageId => (dispatch, getState) => {
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