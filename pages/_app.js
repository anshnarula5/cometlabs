import { Container } from "@mui/material";
import { Provider } from "react-redux";
import store from "../store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store = {store}>
        <Container>
          <Component {...pageProps} />
        </Container>
    </Provider>
  );
}

export default MyApp;
