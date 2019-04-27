const produits = [
  {
    nom: {
      fr: "L'oracle des reflets 2eme édition [Pre commande]",
      en: "L'oracle des reflets 2nd edition [Pre order]"
    },
    lien: "oracle-des-reflets",
    cat: {
      fr: "Les Jeux",
      en: "The Decks"
    },
    prix: 40,
    poids: 350,
    images: [
      "jeu/boite.jpg",
      "jeu/1.jpg",
      "jeu/2.jpg",
      "jeu/3.jpg",
      "jeu/6.jpg",
      "jeu/7.jpg",
      "jeu/8.jpg"
    ],
    description: {
      fr: `<p style="font-size:1.2em">Le jeu est <strong>bilingue</strong> ( Français / Anglais )</p>
      <p style="font-size:1.2em;color:red">Livraison prévue pour juillet 2019</p>
      <p style="font-size:1.2em">Ceci est une <strong>pré commande</strong> pour la 2eme édition de l'oracle des reflets</p>
      <p>Un jeu de 57 cartes créé et illustré par Célia Melesville, accompagné d'un livret qui vous aidera dans vos débuts avec l'oracle.</p>
    `,
      en: `<p style="font-size:1.2em">This deck is <strong>bilingual</strong> ( French / English )</p>
      <p style="font-size:1.2em">This is a <strong>pre order</strong> for the 2nd edition of "l'oracle des reflets"</p>
      <p style="font-size:1.2em;color:red">Shipping estimated for july 2019</p>
      <p>A set of 57 cards created and illustrated by Celia Melesville, accompanied by a booklet that will help you get started with Oracle. </p>
    `
    }
  },
  {
    nom: {
      fr: "Lili Black & Lili White Tarots",
      en: "Lili Black & Lili White Tarots"
    },
    lien: "lili-black_lili-white_tarots",
    cat: {
      fr: "Les Jeux",
      en: "The Decks"
    },
    prix: 56,

    images: [
      "lili/boites.jpg",
      "lili/0.jpg",
      "lili/1.jpg",
      "lili/2.jpg",
      "lili/3.jpg",
      "lili/5.jpg",
      "lili/6.jpg"
    ]
  },
  {
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
    images: [
      "tanis/tanis.jpg",
      "tanis/0.jpg",
      "tanis/1.jpg",
      "tanis/2.jpg",
      "tanis/3.jpg",
      "tanis/4.jpg"
    ],
    description: {
      fr: `<p style="font-size:1.2em">Le jeu est <strong>bilingue</strong> ( Français / Anglais )</p>
      Ce jeu est constitué de 40 cartes et d'un petit livre pour vous aider dans l'interprétation de vos tirages`,
      en: `<p style="font-size:1.2em">This deck is <strong>bilingual</strong> ( French / English )</p>
      This deck includes 40 cards and a book to help you interpret your spreads.`
    }
  },

  {
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
    images: [
      "marquepage/marque-page.jpg",
      "marquepage/marque-page-recto.jpg",
      "marquepage/marque-page-verso.jpg"
    ],
    description: {
      fr: `Un marque page de qualité aux couleurs de l'oracle.
    <p>Taille : 5.5cm*20cm</p>
    <p>Finition : vernis mat</p>`,
      en: `A beautiful bookmark inspired by the Oracle des reflets Deck`
    }
  },
  {
    nom: {
      fr: "Marque Page Tanis",
      en: "Tanis's Bookmark"
    },
    lien: "marque-page-tanis",
    cat: {
      fr: "Marque page",
      en: "Bookmark"
    },
    prix: 2,
    poids: 5,
    images: ["marquepage/tanis.jpg"],
    description: {
      fr: `Un marque page de qualité aux couleurs du Tanis lenormand.
    <p>Taille : 5.5cm*20cm</p>
    <p>Finition : vernis mat</p>`,
      en: `A beautiful bookmark inspired by the Tanis Lenormand Deck.
    `
    }
  },
  {
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
    images: [
      "pack6/pack6.jpg",
      "pack6/construction.jpg",
      "pack6/ralentissement.jpg",
      "pack6/renard.jpg",
      "pack6/dualite.jpg",
      "pack6/dispersion.jpg"
    ],
    description: {
      fr: "Pack de 6 cartes postales accompagné un marque page",
      en: "6 postal cards pack with a Bookmark "
    }
  },
  {
    nom: {
      fr: "Pack Saisons",
      en: "Seasons Pack"
    },
    lien: "pack-saison",
    cat: {
      fr: "Les Packs",
      en: "Packs"
    },
    prix: 10,
    poids: 24,
    images: [
      "packsaison/saison.jpg",
      "packsaison/automne.jpg",
      "packsaison/ete.jpg",
      "packsaison/hiver.jpg",
      "packsaison/printemps.jpg"
    ]
  },

  {
    nom: {
      fr: "Carte Postale - Coeur",
      en: "Post card - Heart "
    },
    lien: "carte-coeur",
    cat: {
      fr: "Cartes Postales",
      en: "Post cards"
    },
    prix: 2.5,
    poids: 5,
    images: ["/cartepostale/tanis_coeur.jpg"]
  },
  {
    nom: {
      fr: "Carte Postale - Renard Tanis",
      en: "Post card - Tanis Fox "
    },
    lien: "carte-tanis-renard",
    cat: {
      fr: "Cartes Postales",
      en: "Post cards"
    },
    prix: 2.5,
    poids: 5,
    images: ["/cartepostale/tanis_renard.jpg"]
  },
  {
    nom: {
      fr: "Carte Postale - Trèfle",
      en: "Post card - Clover "
    },
    lien: "carte-trefle",
    cat: {
      fr: "Cartes Postales",
      en: "Post cards"
    },
    prix: 2.5,
    poids: 5,
    images: ["/cartepostale/tanis_trefle.jpg"]
  },
  {
    nom: {
      fr: "Carte Postale - La Chouette",
      en: "Post card - The Owl "
    },
    lien: "carte-chouette",
    cat: {
      fr: "Cartes Postales",
      en: "Post cards"
    },
    prix: 2.5,
    poids: 5,
    images: ["/cartepostale/chouette.jpg"]
  },
  {
    nom: {
      fr: "Carte Postale - La Construction",
      en: "Post card - The Contruction"
    },
    lien: "carte-construction",
    cat: {
      fr: "Cartes Postales",
      en: "Post cards"
    },
    prix: 2.5,
    poids: 5,
    images: ["/cartepostale/construction.jpg"]
  },
  {
    nom: {
      fr: "Carte Postale - Dispersion",
      en: "Post card - Dispersion"
    },
    lien: "carte-dispersion",
    cat: {
      fr: "Cartes Postales",
      en: "Post cards"
    },
    prix: 2.5,
    poids: 5,
    images: ["/cartepostale/dispersion.jpg"]
  },
  {
    nom: {
      fr: "Carte Postale - Dualité",
      en: "Post card - Duality"
    },
    lien: "carte-dualite",
    cat: {
      fr: "Cartes Postales",
      en: "Post cards"
    },
    prix: 2.5,
    poids: 5,
    images: ["/cartepostale/dualite.jpg"]
  },
  {
    nom: {
      fr: "Carte Postale - Ralentissement",
      en: "Post card - Slow-down"
    },
    lien: "carte-ralentissement",
    cat: {
      fr: "Cartes Postales",
      en: "Post cards"
    },
    prix: 2.5,
    poids: 5,
    images: ["/cartepostale/ralentissement.jpg"]
  },
  {
    nom: {
      fr: "Carte Postale - Renard Oracle",
      en: "Post card - Fox Oracle"
    },
    lien: "carte-renard",
    cat: {
      fr: "Cartes Postales",
      en: "Post cards"
    },
    prix: 2.5,
    poids: 5,
    images: ["/cartepostale/renard.jpg"]
  },
  {
    nom: {
      fr: "Carte Postale - Hiver",
      en: "Post card - Winter"
    },
    lien: "carte-hiver",
    cat: {
      fr: "Cartes Postales",
      en: "Post cards"
    },
    prix: 2.5,
    poids: 5,
    images: ["/cartepostale/hiver.jpg"]
  }
]

export default produits.map((produit, i) => ({ ...produit, id: i }))
