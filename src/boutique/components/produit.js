import React from "react"
import { Link } from "react-router"

function createMarkup(markup) {
  return { __html: markup }
}

const Produit = ({ nom, images, prix, lien, lang }) => {
  nom = nom[lang]
  return (
    <figure className="boutique-item">
      <Link to={"/shop/produit/" + lien}>
        <img src={"/images/boutique/" + images[0]} alt={nom} />

        <figcaption className="boutique-item-description">
          <h2 className="boutique-item-titre">{nom}</h2>
          <p className="boutique-item-prix">{prix.toFixed(2) + "€"}</p>
        </figcaption>
      </Link>
    </figure>
  )
}

const Item = ({ produit, lang, onClick }) => {
  const nom = produit.nom[lang]
  return (
    <Link to="/cart">
      <figure
        style={{ minWidth: 150, height: 150, display: "inline-block" }}
        className="boutique-item"
        onClick={() => {
          onClick(produit)
        }}
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

class DetailsProduitPack extends React.Component {
  render() {
    const { onAdd, lang } = this.props
    return (
      <div className="product-detail--container">
        <h2>{this.props.name}</h2>
        {/* <div className="product-detail--prix">{prix.toFixed(2)} €</div> */}
        <div
          className="product-detail--description"
          dangerouslySetInnerHTML={createMarkup(
            lang === "fr" ? this.props.descriptionFr : this.props.descriptionEn
          )}
        />
        <h3>
          {lang === "fr" ? "Choisissez votre produit" : "Choose your product"}
        </h3>
        {/* <div className="product-detail--disclaimer">
          {lang === "fr" ? "Ceci est une pré-commande" : "This is a preorder"}
        </div> */}

        {this.props.produits.map((produit, i) => (
          <Item key={i} produit={produit} lang={lang} onClick={onAdd} />
        ))}
      </div>
    )
  }
}

export default Produit
