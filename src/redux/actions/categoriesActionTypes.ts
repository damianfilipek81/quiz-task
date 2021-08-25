export const CATEGORIES_LOADING = "CATEGORIES_LOADING";
export const CATEGORIES_FAIL = "CATEGORIES_FAIL";
export const CATEGORIES_SUCCESS = "CATEGORIES_SUCCESS";

export interface CategoriesLoading {
  type: typeof CATEGORIES_LOADING;
}

export interface CategoriesFail {
  type: typeof CATEGORIES_FAIL;
}

export interface CategoriesSuccess {
  type: typeof CATEGORIES_SUCCESS;
  payload: object[];
}

export type CategoriesDispatchTypes =
  | CategoriesLoading
  | CategoriesFail
  | CategoriesSuccess;
