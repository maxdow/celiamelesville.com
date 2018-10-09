import React, { Component } from "react"
import { connect } from "react-redux"

import produits from "../produits"
import { Link } from "react-router"
import { DetailsProduitLili } from "./produit-details-lili"

function createMarkup(markup) {
  return { __html: markup }
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
    //Cas si lien vers un produit qui n'existe pas
    if (produit === undefined) {
      window.location = "/boutique"
    }
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
    onAdd: item => {
      return dispatch({
        type: "ADD",
        item
      })
    }
  }
}

export default connect(
  ({ lang }) => ({ lang }),
  mapDispatchToProps
)(Product)
