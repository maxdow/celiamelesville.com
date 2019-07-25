import React, { Component } from "react"
import { Link } from "react-router"
import { connect } from "react-redux"

//import Produit from "./produit"

import produits from "../produits"

function createMarkup(markup) {
  return { __html: markup }
}

/*
const getCategories = (produits,langue) => {

    const categories = new Map(produits.map(function(item) {
      return [item.cat[langue],[]];
    }));

    produits.forEach((item) => {
      const cat = categories.get(item.cat[langue]);
      cat.push(item);
      categories.set(item.cat[langue],cat);
    });
    return categories ;
}*/

const getCategories = (produits, langue) => {
  return produits.reduce((acc, item) => {
    if (!acc[item.cat[langue]]) {
      acc[item.cat[langue]] = []
    }
    acc[item.cat[langue]].push(item)
    return acc
  }, {})
}
const styleSoldOut = {
  color: "red",
  fontSize: "1.2em",
  fontWeight: 600
}

const SoldOut = ({ msg }) => (
  <div style={styleSoldOut}>
    <div>SOLD OUT</div>
    {msg ? <div>{msg}</div> : null}
  </div>
)

const Produit = ({ nom, images, prix, lien, lang, soldout, soldoutmsg }) => {
  nom = typeof nom === "object" ? nom[lang] : nom

  const content = (
    <React.Fragment>
      <img src={"/images/boutique/" + images[0]} alt={nom} />

      <figcaption className="boutique-item-description">
        <p
          className="boutique-item-titre"
          dangerouslySetInnerHTML={createMarkup(nom)}
        />
        {soldout ? <SoldOut msg={soldoutmsg} /> : null}
        {!soldout && prix ? (
          <p className="boutique-item-prix">{prix.toFixed(2) + "€"}</p>
        ) : null}
      </figcaption>
    </React.Fragment>
  )
  return (
    <figure className={"boutique-item " + (soldout ? "soldout-grey" : "")}>
      {lien.indexOf("http") === -1 ? (
        <Link to={"produit/" + lien}>{content}</Link>
      ) : (
        <a href={lien}>{content}</a>
      )}
    </figure>
  )
}
// const styleCart = {}
const ProductListComponent = ({ categories, lang }) => (
  <div style={{ position: "relative" }}>
    <Link
      style={{ right: 0, position: "absolute", fontSize: "1.2em" }}
      to="/cart"
    >
      🛒
      {lang === "fr" ? "Mon panier" : "My Cart"}
    </Link>
    <div className="boutique">
      {Object.keys(categories).map((categorie, index) => (
        <div key={categorie}>
          <h2>{categorie}</h2>
          <div
            className={
              "boutique-categorie" + (index === 0 ? " boutique-highlight" : "")
            }
          >
            {categories[categorie].map((dataProduit, i) => (
              <Produit lang={lang} {...dataProduit} key={i} />
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
)

export default connect(({ lang }) => ({
  lang,
  categories: getCategories(produits, lang)
}))(ProductListComponent)
