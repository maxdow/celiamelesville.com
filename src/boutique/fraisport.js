const poidsEnvoie = [
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

const portLili = {
  g500: {
    fr: 6.5,
    eu: 6.5,
    ww: 6.5
  },
  g1000: {
    fr: 8,
    eu: 6.5,
    ww: 6.5
  }
}

export function calculFraisPort(poids, typePort, lilipresent) {
  if (lilipresent) {
    return poids > 500 ? portLili.g500[typePort] : portLili.g1000[typePort]
  } else {
    for (var i = 0; i < 7; i++) {
      if (poids < limitePoids[i]) {
        break
      }
    }
    return poidsEnvoie[i][typePort]
  }
}
