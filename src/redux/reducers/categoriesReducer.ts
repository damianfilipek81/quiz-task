import {
  CategoriesDispatchTypes,
  CATEGORIES_FAIL,
  CATEGORIES_LOADING,
  CATEGORIES_SUCCESS,
} from "../actions/categoriesActionTypes";

interface InitialState {
  data: object[];
  loading: boolean;
}

const initialState: InitialState = {
  data: [],
  loading: false,
};

const categoriesReducer = (
  state: object = initialState,
  action: CategoriesDispatchTypes
) => {
  switch (action.type) {
    case CATEGORIES_FAIL:
      return {
        data: [],
        loading: false,
      };
    case CATEGORIES_LOADING: {
      return {
        data: [],
        loading: true,
      };
    }
    case CATEGORIES_SUCCESS: {
      return {
        data: action.payload,
        loading: false,
      };
    }
    default: 
    return state
  }
};

export default categoriesReducer;
