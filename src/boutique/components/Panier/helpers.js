import { calculFraisPort } from "../../fraisport"

const isColissimo = (panier = []) =>
  panier.some(
    produit =>
      produit.nom.fr.includes("Lili") || produit.nom.fr.includes("Sweet")
  )

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
    fraisPort: calculFraisPort({
      poids: tmp.totalPoids,
      typePort: typePort,
      isColissimo: isColissimo(panier)
    })
  }
}
export function createMarkup(markup) {
  return { __html: markup }
}
