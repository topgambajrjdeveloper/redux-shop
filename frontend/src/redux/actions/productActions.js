import {
  PRODUCT_LIST_REDUQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REDUQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
} from "../constants/productConstants";
import axios from "axios";

const listProducts = () => async (dispatch) => {
  try {
      dispatch({ type: PRODUCT_LIST_REDUQUEST });
      const { data } = await axios.get("/api/v1/products");
      dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
      dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
  }
};


export { listProducts };