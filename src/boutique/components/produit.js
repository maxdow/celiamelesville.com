import React from "react";

const Produit = ({nom, images, prix,lien,lang}) => {
  nom = nom[lang];
  return <figure className="boutique-item">
  <Link to={"/shop/produit/"+lien}>
    <img src={"/images/boutique/"+images[0]} alt={nom}/>

    <figcaption className="boutique-item-description">
      <h2 className="boutique-item-titre">{nom}</h2>
      <p className="boutique-item-prix">{prix.toFixed(2) + "€"}</p>
    </figcaption>
  </Link>
  </figure>;
};

export default Produit