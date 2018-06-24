import { calculFraisPort } from "../../fraisport"

const liliPresent = (panier = []) =>
  panier.some(produit => produit.nom.fr.includes("Lili"))

export function totalPanier(panier = [], typePort) {
  const tmp = panier.reduce(
    function(acc, item) {
      acc.totalPrix = acc.totalPrix + item.quantite * item.prix
      acc.totalPoids = acc.totalPoids + item.quantite * item.poids

      return acc
    },
    {
      totalPrix: 0,
      totalPoids: 0
    }
  )
  return {
    totalPrix: tmp.totalPrix,
    fraisPort: calculFraisPort(tmp.totalPoids, typePort, liliPresent(panier))
  }
}
export function createMarkup(markup) {
  return { __html: markup }
}
