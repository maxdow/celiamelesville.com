const defaultState = {
  panier : [],
  lang : navigator.language === "fr" ? "fr" : "en"
};


export default function rootReducer(state = defaultState, action) {
  var {panier,lang} = state;

  switch (action.type) {

  case "ADD":
    if(panier.findIndex((item)=>item.lien===action.item.lien) === -1) {
      action.item.quantite = 0 ;
      panier.push(action.item);
    }

    panier = panier.reduce(function(acc,item){

      if(item.lien === action.item.lien) {
        item.quantite = item.quantite+1;
      }
      acc.push(item);

      return acc;
    },[]);

    break;

  case "REMOVE":
    panier = panier.reduce(function(acc,item){

      if(item.lien === action.item.lien) {
        item.quantite = item.quantite-1;
      }

      if(item.quantite>0){
        acc.push(item);
      }

      return acc;
    },[]);

    break;

  case "DELETE":
    panier = panier.filter((item)=>item.lien!==action.item.lien);
    break;

  case "LANG" :
    lang = action.lang ;
    break;

  }

  return {
    panier,
    lang
  };
}