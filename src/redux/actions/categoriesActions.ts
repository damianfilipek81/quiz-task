import axios from "axios";
import { Dispatch } from "redux";
import { CategoriesDispatchTypes, CATEGORIES_FAIL, CATEGORIES_LOADING, CATEGORIES_SUCCESS } from "./categoriesActionTypes";

export const getCategories = () => async (dispatch: Dispatch<CategoriesDispatchTypes>) => {
  try {
    dispatch({
      type: CATEGORIES_LOADING,
    });

    const res = await axios.get('https://opentdb.com/api_category.php')
    dispatch({
      type: CATEGORIES_SUCCESS,
      payload: res.data.trivia_categories
    })
  
  } catch (error) {
    dispatch({
      type: CATEGORIES_FAIL
    })
  }
};