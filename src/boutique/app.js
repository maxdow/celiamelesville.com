import React from "react"
import { Router, Route, hashHistory } from "react-router"

import ListeProduits from "./components/liste-produits"
import ProduitDetail from "./components/produit-detail"
import Panier from "./components/Panier/"
import I18n from "./components/i18n"
import "./boutique.css"

const Boutique = () => (
  <Router history={hashHistory}>
    <Route path="/" component={ListeProduits} />
    <Route path="/produit/:name" component={ProduitDetail} />
    <Route path="/cart" component={Panier} />
  </Router>
)

const App = ({ lang }) => (
  <div style={{ position: "relative" }}>
    <I18n />
    <Boutique />
  </div>
)

export default App
