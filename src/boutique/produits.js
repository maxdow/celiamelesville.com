const produits = [{
  nom: {
    fr: "L'oracle des reflets",
    en: "L'oracle des reflets"
  },
  lien: "deck",
  cat: {
    fr: "Les Jeux",
    en: "The Decks"
  },
  prix: 35,
  poids: 300,
  images: ["jeu/boite.jpg","jeu/1.jpg","jeu/2.jpg","jeu/3.jpg","jeu/4.jpg","jeu/5.jpg","jeu/6.jpg","jeu/7.jpg","jeu/8.jpg"],
  description: {
    fr : `Un jeu de 57 cartes créé et illustré par Célia Melesville, accompagné d'un livret qui vous aidera dans vos débuts avec l'oracle.</br>
    <p>Finitions : vernis mat , les cartes sont dorées sur la tranche. Boitier rigide.</p>`,
    en : `A set of 57 cards created and illustrated by Celia Melesville, accompanied by a booklet that will help you get started with Oracle. </ Br>
    <P> Finishes: matt varnish, the cards are golden on the edge. rigid case.`
  }
}, {
  nom: {
    fr: "L'oracle des reflets <small>[numéroté signé] + marque page</small>",
    en: "L'oracle des reflets <small>[signed and numbered] + bookmark</small>"
  },
  lien: "jeu-limite",
  cat: {
    fr: "Les Jeux",
    en: "The Decks"
  },
  prix: 37,
  poids: 300,
  images: ["jeu/boite.jpg","jeu/1.jpg","jeu/2.jpg","jeu/3.jpg","jeu/4.jpg","jeu/5.jpg","jeu/6.jpg","jeu/7.jpg","jeu/8.jpg"],
  description: {
    fr : `Un jeu de 57 cartes créé et illustré par Célia Melesville, accompagné d'un livret qui vous aidera dans vos débuts avec l'oracle.
    <p>Finitions : vernis mat , les cartes sont dorées sur la tranche. Boitier rigide.</p>
    <p>Cette <strong> édition speciale contient un jeu numéroté et signé</strong> ainsi qu'un marque page</p>`,
    en : `A set of 57 cards created and illustrated by Celia Melesville, accompanied by a booklet that will help you get started with Oracle. </ Br>
    <p> Finishes: matt varnish, the cards are golden on the edge. rigid case.
    <p>This <strong> special edition includes a numbered and signed deck</strong> along with a bookmark</p>`
  }
},{
  nom: {
    fr: "Tanis Lenormand",
    en: "Tanis Lenormand"
  },
  lien: "tanis",
  cat: {
    fr: "Les Jeux",
    en: "The Decks"
  },
  prix: 32,
  poids: 120,
  images: ["tanis/tanis.png"],
  description: {
    fr : `Preorder`,
    en : `Preorder`
  }
},{
  nom: {
    fr: "Marque Page",
    en: "Bookmark"
  },
  lien: "marque-page-oracle",
  cat: {
    fr: "Marque page",
    en: "Bookmark"
  },
  prix: 2,
  poids: 5,
  images: ["marquepage/marque-page.jpg", "marquepage/marque-page-recto.jpg", "marquepage/marque-page-verso.jpg"],
  description: {
    fr : `Un marque page de qualité aux couleurs de l'oracle.
    <p>Taille : 5.5cm*20cm</p>
    <p>Finition : vernis mat</p>`,
    en : `Un marque page de qualité aux couleurs de l'oracle.
    <p>Taille : 5.5cm*20cm</p>
    <p>Finition : vernis mat</p>`
  }
}, {
  nom: {
    fr: "Pack 6 cartes postales + 1 marque page",
    en: "6 cards + 1 bookmark"
  },
  lien: "pack6-marque-page",
  cat: {
    fr: "Les Packs",
    en: "Packs"
  },
  prix: 15,
  poids: 39,
  images: ["pack6/pack6.jpg", "pack6/construction.jpg", "pack6/ralentissement.jpg", "pack6/renard.jpg", "pack6/dualite.jpg",
    "pack6/dispersion.jpg"
  ],
  description: {
    fr : "Pack de 6 cartes postales accompagné un marque page",
    en :"6 postal cards pack with a Bookmark "
  }
}, {
  nom: {
    fr : "Pack Saisons",
    en : "Seasons Pack"
  },
  lien: "pack-saison",
  cat: {
    fr: "Les Packs",
    en: "Packs"
  },
  prix: 10,
  poids: 24,
  images: ["packsaison/saison.jpg",
    "packsaison/automne.jpg", "packsaison/ete.jpg", "packsaison/hiver.jpg", "packsaison/printemps.jpg"
  ]
}, {
  nom: {
    fr : "Carte Postale - La Chouette",
    en : "Post card - The Owl "
  },
  lien: "carte-chouette",
  cat: {
    fr: "Cartes Postales",
    en: "Post cards"
  },
  prix: 2.50,
  poids: 5,
  images: ["/cartepostale/chouette.jpg"]
}, {
  nom: {
    fr : "Carte Postale - La Construction",
    en : "Post card - The Contruction"
  },
  lien: "carte-construction",
  cat: {
    fr: "Cartes Postales",
    en: "Post cards"
  },
  prix: 2.50,
  poids: 5,
  images: ["/cartepostale/construction.jpg"]
}, {
  nom: {
    fr : "Carte Postale - Dispersion",
    en : "Post card - Dispersion"
  },
  lien: "carte-dispersion",
  cat: {
    fr: "Cartes Postales",
    en: "Post cards"
  },
  prix: 2.50,
  poids: 5,
  images: ["/cartepostale/dispersion.jpg"]
}, {
  nom: {
    fr : "Carte Postale - Dualité",
    en :"Post card - Duality"
  },
  lien: "carte-dualite",
  cat: {
    fr: "Cartes Postales",
    en: "Post cards"
  },
  prix: 2.50,
  poids: 5,
  images: ["/cartepostale/dualite.jpg"]
}, {
  nom: {
    fr : "Carte Postale - Ralentissement",
    en :"Post card - Slow-down"
  },
  lien: "carte-ralentissement",
  cat: {
    fr: "Cartes Postales",
    en: "Post cards"
  },
  prix: 2.50,
  poids: 5,
  images: ["/cartepostale/ralentissement.jpg"]
}, {
  nom: {
    fr : "Carte Postale - Renard",
    en :"Post card - Fox"
  },
  lien: "carte-renard",
  cat: {
    fr: "Cartes Postales",
    en: "Post cards"
  },
  prix: 2.50,
  poids: 5,
  images: ["/cartepostale/renard.jpg"]
}, {
  nom: {
    fr : "Carte Postale - Hiver",
    en :"Post card - Winter"
  },
  lien: "carte-hiver",
  cat: {
    fr: "Cartes Postales",
    en: "Post cards"
  },
  prix: 2.50,
  poids: 5,
  images: ["/cartepostale/hiver.jpg"]
}];


export default produits.map((produit, i) => ({...produit, id: i}))
