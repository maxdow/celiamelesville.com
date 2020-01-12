import React, { Component } from "react"
import { connect } from "react-redux"

import produits from "../produits"
import { Link } from "react-router"
// import { DetailsProduitLili } from "./produit-details-lili"
import Lightbox from "react-image-lightbox"
import { addProduct } from "../reducer"

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

const ItemSubProductComponent = ({ produit, lang, dispatch }) => {
  const nom = produit.nom[lang]
  return (
    <Link to="/cart">
      <figure
        style={{ minWidth: 150, height: 150, display: "inline-block" }}
        className="boutique-item"
        onClick={() => dispatch(addProduct(produit))}
      >
        <img src={"/images/boutique/" + produit.images[0]} alt={nom} />

        <figcaption className="boutique-item-description">
          <p
            className="boutique-item-titre"
            dangerouslySetInnerHTML={createMarkup(nom)}
          />
          <p className="boutique-item-prix">{produit.prix.toFixed(2) + "€"}</p>
        </figcaption>
      </figure>
    </Link>
  )
}

const ItemSubProduct = connect(({ lang }) => ({ lang }))(
  ItemSubProductComponent
)

const DetailsProduit = ({
  nom,
  prix,
  description,
  onAdd,
  lang,
  soldout,
  subproducts
}) => (
  <div className="product-detail--container">
    <h2 dangerouslySetInnerHTML={createMarkup(nom[lang])} />
    {prix && <div className="product-detail--prix">{prix.toFixed(2)} €</div>}

    <div
      className="product-detail--description"
      dangerouslySetInnerHTML={createMarkup(
        description ? description[lang] : nom[lang]
      )}
    />
    {subproducts && (
      <h3>
        {lang === "fr" ? "Choisissez votre produit" : "Choose your product"}
      </h3>
    )}
    {soldout ? (
      <h3>SOLD OUT</h3>
    ) : subproducts ? (
      subproducts.map((produit, i) => (
        <ItemSubProduct key={i} produit={produit} lang={lang} />
      ))
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
    const { dispatch, lang } = this.props

    return (
      <div className="product-detail">
        <div style={{ display: "flex" }}>
          <ImagesProduit imageIndex={this.state.imageIndex} {...produit} />

          <DetailsProduit
            onAdd={() => dispatch(addProduct(produit))}
            {...produit}
            lang={lang}
          />
        </div>
        <ListImages
          {...produit}
          onImageSelect={this.selectionImage.bind(this)}
        />
        <Link to="/" style={{ textAlign: "right" }}>
          {lang === "fr" ? "Retour à la boutique" : "Back to the shop"}
        </Link>
      </div>
    )
  }
}

export default connect(({ lang }) => ({ lang }))(Product)
