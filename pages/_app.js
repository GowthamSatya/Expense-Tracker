import "../styles/globals.css";
import store from "../app/store";
import { wrapper } from "../app/store";
import { Provider } from "react-redux";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
