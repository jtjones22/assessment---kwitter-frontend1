<<<<<<< HEAD
import { POSTMESAGE } from "../../actionTypes";
=======
import { POSTMESSAGE } from "../../actionTypes";
>>>>>>> a23a65a81d19a0bfc356d1aa54eda5e1691d919e
import { withAsyncReducer } from "../../HORs";

const initialState = {
  result: null,
  loading: false,
  error: null
};

const postMessage = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

<<<<<<< HEAD
export default withAsyncReducer(POSTMESAGE, postMessage);
=======
export default withAsyncReducer(POSTMESSAGE, postMessage);
>>>>>>> a23a65a81d19a0bfc356d1aa54eda5e1691d919e
