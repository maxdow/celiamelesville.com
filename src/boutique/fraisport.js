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
    fr : 5.00,
    eu : 10.00,
    ww : 12.0
  },
  {
    fr : 5.50,
    eu : 13.50,
    ww : 15.50
  },
  {
    fr : 7.00,
    eu : 15.00,
    ww : 23.50
  },
  {
    fr : 8.00,
    eu : 16.50,
    ww : 23.50
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