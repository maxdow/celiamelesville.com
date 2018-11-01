import React, { Component } from "react"
import { Link } from "react-router"

function createMarkup(markup) {
  return { __html: markup }
}

const descriptionFr = `
            <h3>Deux jeux de 78 cartes</h3>
            <p>Cartes 350g</p>
            <p>Vernis mat</p>
            <p>Boitier rigide avec dorure</p>
            <p>
              <strong>Livraison estimée : septembre 2018</strong>
            </p>

            <h3>Un Livre (vendu séparément)</h3>

            <p>⚠️Actuellement en cours d'écriture.</p>
            <p>Livre couleur de 92 pages (minimum) . Format 13.7cm x 17cm</p>
            <p>Exclusivement en Français. Quantité limité à 1000 exemplaires</p>
`
const descriptionEn = `
            <h3>Two decks of 78 cards</h3>
            <p>Cards 350g</p>
            <p>Mat Varnish</p>
            <p>Hard case with gilding</p>
            <p>
              <strong>Estimated delivery: September 2018</strong>
            </p>

            <h3>A Book (sold separately)</h3>

            <p>⚠️Currently being written.</p>
            <p>Color book of 92 pages (minimum). Size 13.7cm x 17cm</p>
            <p>Exclusively in French. Quantity limited to 1000 copies</p>`

const produits = [
  {
    lien: "liliw",
    nom: {
      fr: "Tarot Lili White",
      en: "Lili White Tarot"
    },
    images: ["lili/liliw.jpg"],
    prix: 56,
    poids: 330
  },
  {
    lien: "lilib",

    nom: {
      fr: "Tarot Lili Black",
      en: "Lili Black Tarot"
    },
    images: ["lili/lilib.jpg"],
    prix: 56,
    poids: 330
  },
  {
    lien: "liliwb",
    nom: {
      fr: "Tarots Lili Black & Lili White",
      en: "Lili Black & Lili White Decks"
    },
    images: ["lili/2decks.jpg"],
    prix: 105,
    poids: 660
  },
  {
    lien: "lilibook",

    nom: {
      fr: "Livre seul",
      en: "Book Only"
    },
    images: ["lili/book.jpg"],
    prix: 12,
    poids: 210
  },

  {
    lien: "lilibookb",

    nom: {
      fr: "Livre + 1 Deck Lili Black",
      en: "Book + 1 Deck Lili Black"
    },
    images: ["lili/bbook.jpg"],
    prix: 65,
    poids: 560
  },
  {
    lien: "lilibookw",

    nom: {
      fr: "Livre + 1 Deck Lili White",
      en: "Book + 1 Deck Lili White"
    },
    images: ["lili/wbook.jpg"],
    prix: 65,
    poids: 560
  },
  {
    lien: "lilibookwb",

    nom: {
      fr: "Livre + Tarots Lili Black & Lili White",
      en: "Book + Lili Black & Lili White Decks"
    },
    images: ["lili/2decksbook.jpg"],
    prix: 115,
    poids: 860
  }
]

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

export class DetailsProduitLili extends Component {
  render() {
    const { onAdd, lang } = this.props
    return (
      <div className="product-detail--container">
        <h2>Tarots Lili Black & Lili White</h2>
        {/* <div className="product-detail--prix">{prix.toFixed(2)} €</div> */}
        <div
          className="product-detail--description"
          dangerouslySetInnerHTML={createMarkup(
            lang === "fr" ? descriptionFr : descriptionEn
          )}
        />
        <h3>
          {lang === "fr" ? "Choisissez votre produit" : "Choose your product"}
        </h3>
        {/* <div className="product-detail--disclaimer">
          {lang === "fr" ? "Ceci est une pré-commande" : "This is a preorder"}
        </div> */}

        {produits.map((produit, i) => (
          <Item key={i} produit={produit} lang={lang} onClick={onAdd} />
        ))}
      </div>
    )
  }
}
