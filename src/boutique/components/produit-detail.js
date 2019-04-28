import React, { Component } from "react"
import { connect } from "react-redux"

import produits from "../produits"
import { Link } from "react-router"
import { DetailsProduitLili } from "./produit-details-lili"
import Lightbox from "react-image-lightbox"

function createMarkup(markup) {
  return { __html: markup }
}
const IMG_ROOT_URL = "/images/boutique/"
/**
 * Retoure le produit associé au lien
 */
const getProduit = lien => produits.find(produit => produit.lien === lien)

class ListImages extends Component {
  // componentDidMount() {
  //   if (window.slightBox) {
  //     window.slightBox.make()
  //   }
  // }
  constructor(props) {
    super(props)

    this.state = {
      photoIndex: 0,
      isOpen: false
    }
  }
  handleClick(imageIndex, e) {
    e.preventDefault()
    this.setState({
      isOpen: true,
      photoIndex: imageIndex
    })
  }
  render() {
    const { images, nom, onImageSelect, lang } = this.props
    const { photoIndex, isOpen } = this.state
    return (
      <div style={{ display: "flex" }}>
        {images.length > 1 ? (
          <div className="product-detail--images slightbox-container">
            <h4>Galerie ( cliquer pour zoomer )</h4>
            {images.map((image, i) => (
              <a
                href={IMG_ROOT_URL + image}
                key={i}
                onClick={this.handleClick.bind(this, i)}
              >
                <img
                  src={IMG_ROOT_URL + image}
                  alt={nom[lang]}
                  onTouchStart={onImageSelect.bind(this, i)}
                  onMouseOver={onImageSelect.bind(this, i)}
                  draggable="false"
                />
              </a>
            ))}
          </div>
        ) : null}
        {isOpen && (
          <Lightbox
            mainSrc={IMG_ROOT_URL + images[photoIndex]}
            nextSrc={IMG_ROOT_URL + images[(photoIndex + 1) % images.length]}
            prevSrc={
              IMG_ROOT_URL +
              images[(photoIndex + images.length - 1) % images.length]
            }
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length
              })
            }
          />
        )}
      </div>
    )
  }
}

const ImagesProduit = ({ imageIndex, images, nom, lang }) => (
  <div className="product-detail--image">
    <div className="product-img-container">
      <a href={IMG_ROOT_URL + images[imageIndex]}>
        <img
          src={IMG_ROOT_URL + images[imageIndex]}
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
          {produit.lien === "lili-black_lili-white_tarots" ? (
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
