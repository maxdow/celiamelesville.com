const portStandard = [
  {
    fr: 4,
    eu: 4,
    ww: 4
  },
  {
    fr: 4,
    eu: 4,
    ww: 4
  },
  {
    fr: 4,
    eu: 4,
    ww: 4
  },
  {
    fr: 5.5,
    eu: 10.0,
    ww: 12.0
  },
  {
    fr: 5.5,
    eu: 13.5,
    ww: 15.5
  },
  {
    fr: 7.0,
    eu: 15.0,
    ww: 23.5
  },
  {
    fr: 8.0,
    eu: 16.5,
    ww: 23.5
  }
]

const limitePoidsStandard = [20, 50, 100, 250, 500, 1000, 2000]
const limitePoidsCollisimo = [500, 750, 1000, 2000, 5000, 10000, 50000]

const portCollisimo = [
  {
    fr: 6.5,
    eu: 12.5,
    ww: 15
  },
  {
    fr: 6.5,
    eu: 14,
    ww: 17.5
  },
  {
    fr: 8,
    eu: 16.5,
    ww: 18.5
  },
  {
    fr: 9,
    eu: 19.5,
    ww: 27
  },
  {
    fr: 15.5,
    eu: 25,
    ww: 61
  },
  {
    fr: 22,
    eu: 40.5,
    ww: 115
  },
  {
    fr: 31.5,
    eu: 67,
    ww: 184
  }
]

export function calculFraisPort({ poids, typePort, isColissimo }) {
  const typeLimite = isColissimo ? limitePoidsCollisimo : limitePoidsStandard
  const listePrix = isColissimo ? portCollisimo : portStandard
  //on force un poids de 1000 pour calculer les frais de ports Fr car il n'existe pas un seuil à 750
  if (isColissimo && poids > 500 && poids < 1000) {
    poids = 900
  }

  for (var i = 0; i < typeLimite.length - 1; i++) {
    if (poids < typeLimite[i]) {
      break
    }
  }
  // console.log({ poids, typeLimite, listePrix, i })
  return listePrix[i][typePort]
}
