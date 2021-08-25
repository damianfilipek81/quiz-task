import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Homepage from "./components/view/Homepage/Homepage";
import { RootStore } from "./redux/store";
import { getCategories } from "./redux/actions/categoriesActions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, []);
  const categoriesState = useSelector(
    (state: RootStore) => state.categories.data);
  console.log(categoriesState);

  return <div></div>;
}

export default App;
