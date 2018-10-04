import { axiosInstance } from "./configured_axios";
import { FETCH_INFO } from "./action_types";

export function fetchInfo(num) {
  //return dispatch =>
  //  axiosInstance.get(`/about_us/${name}`).then(response => {
  //    dispatch({ type: FETCH_ABOUT_US, payload: response });
  //  });
  console.log(num.data)
  return { type: FETCH_INFO, payload: {data : num.data +1} }
}
