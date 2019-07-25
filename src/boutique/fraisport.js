const portStandard = [
  {
    fr: 0.9,
    eu: 1.2,
    ww: 1.5
  },
  {
    fr: 1.4,
    eu: 1.8,
    ww: 2.5
  },
  {
    fr: 2.1,
    eu: 2.4,
    ww: 3.1
  },
  {
    fr: 5.0,
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

const limitePoids = [20, 50, 100, 250, 500, 1000, 2000]
const limitePoidsLili = [500, 750, 1000, 2000, 5000, 10000, 50000]

const portLili = [
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

export function calculFraisPort({ poids, typePort, tarifLili }) {
  const typeLimite = tarifLili ? limitePoidsLili : limitePoids
  const listePrix = tarifLili ? portLili : portStandard
  //on force un poids de 1000 pour calculer les frais de ports Fr car il n'existe pas un seuil à 750
  if (tarifLili && poids > 500 && poids < 1000) {
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
