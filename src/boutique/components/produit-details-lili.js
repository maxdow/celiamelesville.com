import React, { Component } from "react"
import { Link } from "react-router"

function createMarkup(markup) {
  return { __html: markup }
}

const descriptionFr = `
<ul style="list-style:none">
            <li>
              Cartes 350g
            </li>
            <li>
              Vernis mat
            </li>
            <li>
              Boitier rigide avec dorure
            </li>
            <li>
              Livre couleur 92 pages (minimum) . Format 13.7cm x 17cm
            </li>
          </ul>
          <p>⚠️Le livre est actuellement en cours d'écriture. Exclusivement en Français. Quantité limité à 1000 exemplaires
          </p>`
const descriptionEn = `
          <ul style="list-style:none">
            <li>
              Cards 350g
            </li>
            <li>
              Mat Varnish
            </li>
            <li>
              Hard case with gilding
            </li>
            <li>
              Color book 92 pages (minimum). Size 13.7cm x 17cm
            </li>
          </ul>
          <p>⚠️The book is currently being written. Exclusively in French. Quantity limited to 1000 copies
          </p>`

const produits = [
  {
    nom: {
      fr: "Tarot Lili White",
      en: "Lili White Tarot"
    },
    images: ["lili/liliw.jpg"],
    prix: 56,
    poids: 330
  },
  {
    nom: {
      fr: "Tarot Lili Black",
      en: "Lili Black Tarot"
    },
    images: ["lili/lilib.jpg"],
    prix: 56,
    poids: 330
  },
  {
    nom: {
      fr: "Tarots Lili Black & Lili White",
      en: "Lili Black & Lili White Decks"
    },
    images: ["lili/2decks.jpg"],
    prix: 105,
    poids: 660
  },
  {
    nom: {
      fr: "Livre seul",
      en: "Book Only"
    },
    images: ["lili/book.jpg"],
    prix: 12,
    poids: 210
  },

  {
    nom: {
      fr: "Livre + 1 Deck Lili Black",
      en: "Book + 1 Deck Lili Black"
    },
    images: ["lili/bbook.jpg"],
    prix: 65,
    poids: 560
  },
  {
    nom: {
      fr: "Livre + 1 Deck Lili White",
      en: "Book + 1 Deck Lili White"
    },
    images: ["lili/wbook.jpg"],
    prix: 65,
    poids: 560
  },
  {
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
        <h2>Lili Black & Lili White Tarots</h2>
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
        {produits.map((produit, i) => (
          <Item key={i} produit={produit} lang={lang} onClick={onAdd} />
        ))}
      </div>
    )
  }
}
