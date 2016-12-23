import React, {Component} from "react";
import { connect } from "react-redux";

import produits from "../produits";
import { Link } from "react-router";



function createMarkup(markup) { return {__html: markup} }

/**
 * Retoure le produit associé au lien
 */
const getProduit = (lien) => produits.find(produit => produit.lien===lien)


const ImagesProduit = ({imageIndex,images,nom,onImageSelect,lang}) => (

  <div className="product-detail--image">
          <div className="product-img-container">
            <a href={"/images/boutique/"+images[imageIndex]}><img src={"/images/boutique/"+images[imageIndex]} alt={nom[lang]} draggable="false"/></a>
          </div>

          {images.length > 1 ? <div className="product-detail--images">
            {images.map((image,i) => <img key={i}
              src={"/images/boutique/"+image}
              alt={nom[lang]}
              onTouchStart={onImageSelect.bind(this,i)}
              onMouseOver={onImageSelect.bind(this,i)}
              draggable="false"
              />)}
          </div> : null }
      </div>
)


const DetailsProduit = ({nom,prix,description,onAdd, lang}) => (
   <div className="product-detail--container">
      <h2 dangerouslySetInnerHTML={createMarkup(nom[lang])}></h2>
      <div className="product-detail--prix" >{prix.toFixed(2)} €</div>
      <div className="product-detail--description" dangerouslySetInnerHTML={createMarkup(description[lang])}></div>

      <Link to="/cart" className="buy-button" onClick={onAdd}>{lang === "fr" ? "Ajouter au panier" :"Add to basket"}</Link>
      <Link to="/">{lang === "fr" ? "Retour à la boutique" : "Back to the shop"}</Link>
  </div>
)


class Product extends Component {
  constructor(props){
    super(props);
    this.state = {
      imageIndex : 0
    };
  }
  selectionImage(index){
    this.setState({
      imageIndex : index
    });
  }
  render(){
    const produit = getProduit(this.props.params.name);
    return (
      <div className="product-detail">
        <ImagesProduit onImageSelect={this.selectionImage.bind(this)} imageIndex={this.state.imageIndex} {...produit} />
        <DetailsProduit onAdd={this.props.onAdd.bind(this,produit)} {...produit} lang={this.props.lang} />
      </div>
    )
  }
}



function mapDispatchToProps(dispatch) {
  return {
    onAdd: (item) => dispatch({
      type : "ADD",
      item
    })
  };
}

export default connect(
  ({lang}) => ({lang}),
  mapDispatchToProps
)(Product);

