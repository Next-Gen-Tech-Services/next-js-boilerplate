"use client";

import { Provider } from "react-redux";
import {store} from "../redux/redux-store/store";

const StoreProvider = ({ children }) => {

  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
