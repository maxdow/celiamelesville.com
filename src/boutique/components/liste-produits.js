import React, { Component } from "react";
import { Link } from "react-router";
import { connect} from "react-redux";

//import Produit from "./produit"

import produits from "../produits";


function createMarkup(markup) {
  return {__html: markup};
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

const getCategories = (produits,langue) => {

    return produits.reduce((acc,item) => {
      if(!acc[item.cat[langue]]) {
        acc[item.cat[langue]] = []
      }
      acc[item.cat[langue]].push(item)
      return acc
    },{});
}

const Produit = ({nom, images, prix,lien,lang}) => {
  nom = nom[lang];
  return (
  <figure className="boutique-item">
    <Link to={"/produit/"+lien}>
      <img src={"/images/boutique/"+images[0]} alt={nom}/>

      <figcaption className="boutique-item-description">
        <p className="boutique-item-titre" dangerouslySetInnerHTML={createMarkup(nom)}></p>
        <p className="boutique-item-prix">{prix.toFixed(2) + "€"}</p>
      </figcaption>
    </Link>
  </figure>
  )
}



const ProductListComponent = ({categories,lang}) => (

  <div className="boutique">
          {[...categories.keys()].map(function(categorie){
            return <div key={categorie}>
              <h2>{categorie}</h2>
              <div className="boutique-categorie">{
                categories[categorie].map((dataProduit,i) => <Produit lang={lang} {...dataProduit} key={i}/>)
              }</div>
              </div>;
          })}

  </div>

)


export default connect(({lang})=>({
  lang,
  categories : getCategories(produits,lang)
}))(ProductListComponent);
