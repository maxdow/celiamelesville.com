import React, { Component } from "react"
import ReactDOM from "react-dom"
import { connect } from "react-redux"
import { Link } from "react-router"

import { totalPanier, createMarkup } from "./helpers"
import localesBoutique from "./locales"
import "./panier.css"

const BoutonPaypal = function({ panier, prixProduits, port, lang }) {
  const textpanier = panier.reduce((acc, item) => {
    acc +=
      (acc !== "" ? " + " : "") +
      (item.quantite > 1 ? `( ${item.quantite} x ) ` : "") +
      item.nom[lang]
    return acc
  }, "")

  const urlImg =
    lang === "fr"
      ? "https://www.paypalobjects.com/fr_FR/FR/i/btn/btn_paynowCC_LG.gif"
      : "https://www.paypalobjects.com/en_US/i/btn/btn_paynowCC_LG.gif"
  return (
    <form
      method="post"
      action="https://www.paypal.com/cgi-bin/webscr"
      className="paypal-button"
      target="_top"
    >
      <div className="hide" id="errorBox" />
      <input type="hidden" name="button" value="buynow" />
      <input type="hidden" name="cmd" value="_xclick" />
      <input
        TYPE="hidden"
        NAME="return"
        value="https://celiamelesville.com/thanks"
      />
      <input type="hidden" name="currency_code" value="EUR" />
      <input type="hidden" name="no_shipping" value="2" />
      <input type="hidden" name="shipping" value={port} />
      <input type="hidden" name="item_name" value={textpanier} />
      <input type="hidden" name="amount" value={prixProduits} />
      <input type="hidden" name="business" value="UCMJZ44UUSRCY" />
      <input type="hidden" name="bn" value="JavaScriptButton_buynow" />
      <input type="hidden" name="env" value="www" />
      <input
        type="image"
        src={urlImg}
        name="submit"
        alt="PayPal, le réflexe sécurité pour payer en ligne"
      />
    </form>
  )
}

const FraisPort = function({ onChoixPort, portType, port, locales }) {
  return (
    <div className="frais-port">
      <h3>{locales.port + " " + locales.destination}</h3>
      <div className="frais-port-block">
        <label>
          <input
            type="radio"
            onChange={onChoixPort}
            checked={portType == "fr"}
            value="fr"
            name="destination"
          />
          France (Métropolitaine)
        </label>
        <label>
          <input
            type="radio"
            onChange={onChoixPort}
            checked={portType == "eu"}
            value="eu"
            name="destination"
          />
          Europe
        </label>
        <label>
          <input
            type="radio"
            onChange={onChoixPort}
            checked={portType == "ww"}
            value="ww"
            name="destination"
          />
          {locales.autre}
        </label>
      </div>
      <div className="bigcart--total">
        Total {locales.fraisdeport} : {port.toFixed(2)}€
      </div>
    </div>
  )
}

class TotalAchat extends Component {
  constructor(props) {
    super(props)
    this.state = {
      CGVValid: false
    }
  }
  handleValidState(e) {
    this.setState({ CGVValid: e.target.checked })
  }
  render() {
    const { port, prixProduits, locales } = this.props
    return (
      <div className="total-achat">
        <h3>Total</h3>
        <div className="bigcart--total total">
          {(prixProduits + port).toFixed(2)}€
        </div>
        <h2>{locales.CGVtitle}</h2>
        <div
          className="cgv"
          dangerouslySetInnerHTML={createMarkup(locales.CGV)}
        />

        <label style={{ fontSize: "2em" }}>
          {locales.accept}
          <input type="checkbox" onChange={this.handleValidState.bind(this)} />
        </label>
        {this.state.CGVValid ? <BoutonPaypal {...this.props} /> : ""}
      </div>
    )
  }
}

const Tableau = function({ panier, action, total, lang, locales }) {
  const onChangeQty = function(item, event) {
    console.log(item, event, event.target.value)
    if (item.quantite > parseInt(event.target.value, 10)) {
      action.onRemove(item)
    } else {
      action.onAdd(item)
    }
  }

  return (
    <table className="bigcart-table">
      <thead>
        <tr>
          <th className="bigcart--nom">{locales.produit}</th>
          <th className="bigcart--prix">{locales.prix}</th>
          <th className="bigcart--q">{locales.qty}</th>
          <th className="bigcart--total">Total</th>
        </tr>
      </thead>
      <tbody>
        {panier.map((item, i) => (
          <tr className="bigcart-table--produit" key={i}>
            <td className="bigcart--nom">
              {
                <img
                  className="bigcart--image"
                  src={"/images/boutique/" + item.images[0]}
                  alt={item.nom[lang]}
                />
              }
              <p dangerouslySetInnerHTML={createMarkup(item.nom[lang])} />
            </td>

            <td className="bigcart--prix">{item.prix.toFixed(2)}€</td>
            <td className="bigcart--q">
              <button
                className="bigcart--button"
                onClick={action.onRemove.bind(this, item)}
              >
                -
              </button>

              <input
                type="number"
                value={item.quantite}
                min="0"
                onChange={onChangeQty.bind(this, item)}
              />
              <button
                className="bigcart--button"
                onClick={action.onAdd.bind(this, item)}
              >
                +
              </button>
            </td>
            <td className="bigcart--total">
              {(item.quantite * item.prix).toFixed(2)}€
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td />
          <td />
          <td />
          <td className="bigcart--total">Total : {total.toFixed(2)}€</td>
        </tr>
      </tfoot>
    </table>
  )
}

class BigCart extends Component {
  constructor(props) {
    super(props)
    this.state = { portType: "fr" }
  }
  handleChoixPort(event) {
    this.setState({
      portType: event.target.value
    })
  }
  handleClearCart() {
    this.props.onClear()
  }

  render() {
    const { panier, onAdd, onRemove, onDelete, locales, lang } = this.props
    const total = totalPanier(panier, this.state.portType)

    return (
      <div className="bigcart">
        <h2>{locales.monpanier}</h2>
        <Tableau
          action={{ onAdd, onRemove, onDelete }}
          panier={panier}
          total={total.totalPrix}
          lang={lang}
          locales={locales}
        />
        <div style={{ display: "flex" }}>
          <Link to="/">{this.props.locales.continuer}</Link>
          <button
            style={{ marginLeft: "auto" }}
            className="button"
            onClick={this.handleClearCart.bind(this)}
          >
            {this.props.locales.vider}
          </button>
        </div>
        <FraisPort
          portType={this.state.portType}
          onChoixPort={this.handleChoixPort.bind(this)}
          port={total.fraisPort}
          locales={locales}
        />
        <TotalAchat
          port={total.fraisPort}
          prixProduits={total.totalPrix}
          panier={panier}
          lang={lang}
          locales={locales}
        />
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onAdd: item =>
      dispatch({
        type: "ADD",
        item
      }),
    onRemove: item =>
      dispatch({
        type: "REMOVE",
        item
      }),
    onDelete: item =>
      dispatch({
        type: "DELETE",
        item
      }),
    onClear: item =>
      dispatch({
        type: "CLEAR"
      })
  }
}

function mapStateToProps({ lang, panier }) {
  return {
    locales: localesBoutique[lang],
    panier,
    lang
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BigCart)
