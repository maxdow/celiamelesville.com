import React from "react"

import { connect } from "react-redux"

const changeLang = lang => ({
  type: "LANG",
  lang
})

const styleSelect = {
  fontWeight: "bold",
  cursor: "pointer"
}
const styleA = {
  cursor: "pointer"
}
const styleI18 = {
  textAlign: "center",
  fontSize: "1.2em"
}

const I18nComponent = ({ lang, dispatch }) => (
  <div style={styleI18}>
    <a
      onClick={() => dispatch(changeLang("fr"))}
      style={lang === "fr" ? styleSelect : styleA}
    >
      {" "}
      Fr{" "}
    </a>{" "}
    /
    <a
      onClick={() => dispatch(changeLang("en"))}
      style={lang === "en" ? styleSelect : styleA}
    >
      {" "}
      En
    </a>
  </div>
)

export default connect(({ lang }) => ({ lang }))(I18nComponent)
