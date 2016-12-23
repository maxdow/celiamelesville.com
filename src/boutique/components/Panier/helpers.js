import {calculFraisPort} from "../../fraisport"

export function totalPanier(panier, typePort){
  const tmp = panier.reduce(function(acc,item){
    acc.totalPrix = acc.totalPrix + (item.quantite*item.prix) ;
    acc.totalPoids = acc.totalPoids + (item.quantite*item.poids);
    return acc;
  },{
    totalPrix :0,
    totalPoids:0
  });
  return {
    totalPrix : tmp.totalPrix,
    fraisPort : calculFraisPort(tmp.totalPoids,typePort)
  };
}
export function createMarkup(markup) {
  return {__html: markup};
}
