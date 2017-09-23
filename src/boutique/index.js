import React from "react"
import ReactDOM from "react-dom"
//import { Router, Route, IndexRoute, browserHistory} from "react-router";
import { createStore } from "redux"
import { Provider } from "react-redux"

import { AppContainer } from "react-hot-loader"

import rootReducer from "./reducer"

import Boutique from "./app"

const store = createStore(rootReducer)
const container = document.getElementById("boutique-container")

if (container) {
  if (process.env.NODE_ENV === "production") {
    if (window.Raven) {
      window.Raven.config("https://ec4ac1e9c76b4352b0d90e51db6afb27@sentry.io/151911").install()
    }

    ReactDOM.render(
      <Provider store={store}>
        <Boutique />
      </Provider>,
      container
    )
  } else {
    ReactDOM.render(
      <Provider store={store}>
        <Boutique />
      </Provider>,
      container
    )
    if (module.hot) {
      module.hot.accept("./app", () => {
        const NextApp = require("./app").default
        ReactDOM.render(
          <AppContainer>
            <Provider store={store}>
              <NextApp />
            </Provider>
          </AppContainer>,
          container
        )
      })
    }
  }
}
const load = document.getElementsByClassName("cs-loader")[0]
if (load) {
  load.style.display = "none"
}
