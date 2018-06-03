import React, { Component } from "react"
import { connect } from "react-redux"

import produits from "../produits"
import { Link } from "react-router"
import { DetailsProduitLili } from "./produit-details-lili"

function createMarkup(markup) {
  return { __html: markup }
}

if (!Array.prototype.find) {
  Object.defineProperty(Array.prototype, "find", {
    value: function(predicate) {
      // 1. Let O be ? ToObject(this value).
      if (this == null) {
        throw new TypeError('"this" is null or not defined')
      }

      var o = Object(this)

      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length >>> 0

      // 3. If IsCallable(predicate) is false, throw a TypeError exception.
      if (typeof predicate !== "function") {
        throw new TypeError("predicate must be a function")
      }

      // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
      var thisArg = arguments[1]

      // 5. Let k be 0.
      var k = 0

      // 6. Repeat, while k < len
      while (k < len) {
        // a. Let Pk be ! ToString(k).
        // b. Let kValue be ? Get(O, Pk).
        // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
        // d. If testResult is true, return kValue.
        var kValue = o[k]
        if (predicate.call(thisArg, kValue, k, o)) {
          return kValue
        }
        // e. Increase k by 1.
        k++
      }

      // 7. Return undefined.
      return undefined
    }
  })
}

/**
 * Retoure le produit associé au lien
 */
const getProduit = lien => produits.find(produit => produit.lien === lien)

class ListImages extends Component {
  componentDidMount() {
    if (window.slightBox) {
      window.slightBox.make()
    }
  }
  render() {
    const { images, nom, onImageSelect, lang } = this.props
    return (
      <div style={{ display: "flex" }}>
        {images.length > 1 ? (
          <div className="product-detail--images slightbox-container">
            {images.map((image, i) => (
              <a href={"/images/boutique/" + image} key={i}>
                <img
                  src={"/images/boutique/" + image}
                  alt={nom[lang]}
                  onTouchStart={onImageSelect.bind(this, i)}
                  onMouseOver={onImageSelect.bind(this, i)}
                  draggable="false"
                />
              </a>
            ))}
          </div>
        ) : null}
      </div>
    )
  }
}

const ImagesProduit = ({ imageIndex, images, nom, lang }) => (
  <div className="product-detail--image">
    <div className="product-img-container">
      <a href={"/images/boutique/" + images[imageIndex]}>
        <img
          src={"/images/boutique/" + images[imageIndex]}
          alt={nom[lang]}
          draggable="false"
        />
      </a>
    </div>
  </div>
)

const DetailsProduit = ({ nom, prix, description, onAdd, lang, soldout }) => (
  <div className="product-detail--container">
    <h2 dangerouslySetInnerHTML={createMarkup(nom[lang])} />
    <div className="product-detail--prix">{prix.toFixed(2)} €</div>
    <div
      className="product-detail--description"
      dangerouslySetInnerHTML={createMarkup(
        description ? description[lang] : nom[lang]
      )}
    />
    {soldout ? (
      <h3>SOLD OUT</h3>
    ) : (
      <Link to="/cart" className="buy-button" onClick={onAdd}>
        {lang === "fr" ? "Ajouter au panier" : "Add to basket"}
      </Link>
    )}
  </div>
)

class Product extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imageIndex: 0
    }
  }
  selectionImage(index) {
    this.setState({
      imageIndex: index
    })
  }
  render() {
    const produit = getProduit(this.props.params.name)
    return (
      <div className="product-detail">
        <div style={{ display: "flex" }}>
          <ImagesProduit imageIndex={this.state.imageIndex} {...produit} />
          {produit.lien === "jeu-lili" ? (
            <DetailsProduitLili
              onAdd={this.props.onAdd}
              lang={this.props.lang}
            />
          ) : (
            <DetailsProduit
              onAdd={this.props.onAdd.bind(this, produit)}
              {...produit}
              lang={this.props.lang}
            />
          )}
        </div>
        <ListImages
          {...produit}
          onImageSelect={this.selectionImage.bind(this)}
        />
        <Link to="/" style={{ textAlign: "right" }}>
          {this.props.lang === "fr"
            ? "Retour à la boutique"
            : "Back to the shop"}
        </Link>
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
      })
  }
}

export default connect(({ lang }) => ({ lang }), mapDispatchToProps)(Product)
