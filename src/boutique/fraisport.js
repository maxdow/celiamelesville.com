const poidsEnvoie = [
  {
    fr : 0.90,
    eu : 1.20,
    ww : 1.50
  },
  {
    fr : 1.40,
    eu : 1.80,
    ww : 2.50
  },
  {
    fr : 2.10,
    eu : 2.40,
    ww : 3.10
  },
  {
    fr : 3.70,
    eu : 8.80,
    ww : 11.10
  },
  {
    fr : 5.00,
    eu : 13.00,
    ww : 15.00
  },
  {
    fr : 6.30,
    eu : 14.30,
    ww : 23.20
  },
  {
    fr : 7.90,
    eu : 16.50,
    ww : 23.20
  }
];

const limitePoids = [20,50,100,250,500,1000,2000];

export function calculFraisPort(poids,typePort){
  for(var i = 0 ; i<7 ; i++) {
    if(poids<limitePoids[i]){
      break;
    }
  }
  return poidsEnvoie[i][typePort];
}