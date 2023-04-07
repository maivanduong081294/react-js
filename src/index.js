import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import GlobalStyles from "./components/GlobalStyles";
import App from "./App";
import { store } from "./helpers";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <GlobalStyles>
                <App />
            </GlobalStyles>
        </Provider>
    </React.StrictMode>
);
