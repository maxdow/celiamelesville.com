const produits = [
  {
    nom: {
      fr: "L'oracle des reflets 2eme édition",
      en: "L'oracle des reflets 2nd edition",
    },
    lien: "oracle-des-reflets",
    cat: {
      fr: "Les Jeux",
      en: "The Decks",
    },
    prix: 40,
    poids: 350,
    images: [
      "jeu/boite.jpg",
      "oraclereflets/0.jpg",
      "oraclereflets/1.jpg",
      "oraclereflets/2.jpg",
    ],
    description: {
      fr: `<p style="font-size:1.2em">Le jeu est <strong>bilingue</strong> ( Français / Anglais )</p>
      <p>Un jeu de 57 cartes créé et illustré par Célia Melesville, accompagné d'un livret qui vous aidera dans vos débuts avec l'oracle.</p>
    `,
      en: `<p style="font-size:1.2em">This deck is <strong>bilingual</strong> ( French / English )</p>
      <p>A set of 57 cards created and illustrated by Celia Melesville, accompanied by a booklet that will help you get started with Oracle. </p>
    `,
    },
  },
  {
    nom: {
      fr: "Lili Black & Lili White Tarots",
      en: "Lili Black & Lili White Tarots",
    },
    lien: "lili-black_lili-white_tarots",
    cat: {
      fr: "Les Jeux",
      en: "The Decks",
    },
    prix: 56,
    subproducts: [
      {
        lien: "liliw",
        soldout: true,
        nom: {
          fr: "Tarot Lili White - Réédition prévue fin 2020",
          en: "Lili White Tarot - 2nd edition scheduled end of 2020",
        },
        images: ["lili/liliw.jpg"],
        prix: 56,
        poids: 330,
      },
      {
        lien: "lilib",

        nom: {
          fr: "Tarot Lili Black",
          en: "Lili Black Tarot",
        },
        images: ["lili/lilib.jpg"],
        prix: 56,
        poids: 330,
      },
      // {
      //   lien: "liliwb",
      //   nom: {
      //     fr: "Tarots Lili Black & Lili White",
      //     en: "Lili Black & Lili White Decks",
      //   },
      //   images: ["lili/2decks.jpg"],
      //   prix: 105,
      //   poids: 660,
      // },
      {
        lien: "lilibook",

        nom: {
          fr: "Livre seul",
          en: "Book Only",
        },
        images: ["lili/book.jpg"],
        prix: 12,
        poids: 210,
      },

      {
        lien: "lilibookb",

        nom: {
          fr: "Livre + 1 Deck Lili Black",
          en: "Book + 1 Deck Lili Black",
        },
        images: ["lili/bbook.jpg"],
        prix: 65,
        poids: 560,
      },
      // {
      //   lien: "lilibookw",

      //   nom: {
      //     fr: "Livre + 1 Deck Lili White",
      //     en: "Book + 1 Deck Lili White",
      //   },
      //   images: ["lili/wbook.jpg"],
      //   prix: 65,
      //   poids: 560,
      // },
      // {
      //   lien: "lilibookwb",

      //   nom: {
      //     fr: "Livre + Tarots Lili Black & Lili White",
      //     en: "Book + Lili Black & Lili White Decks",
      //   },
      //   images: ["lili/2decksbook.jpg"],
      //   prix: 115,
      //   poids: 860,
      // },
    ],
    images: [
      "lili/boites.jpg",
      "lili/gallery/0.jpg",
      "lili/gallery/1.jpg",
      "lili/gallery/2.jpg",
      "lili/gallery/3.jpg",
      "lili/gallery/4.jpg",
      "lili/gallery/5.jpg",
      "lili/gallery/6.jpg",
      "lili/gallery/7.jpg",
      "lili/gallery/8.jpg",
      "lili/gallery/9.jpg",
      "lili/gallery/10.jpg",
      "lili/gallery/11.jpg",
      "lili/gallery/12.jpg",
      "lili/gallery/13.jpg",
      "lili/gallery/14.jpg",
      "lili/gallery/15.jpg",
      "lili/gallery/16.jpg",
      "lili/gallery/17.jpg",
      "lili/gallery/18.jpg",
    ],
  },

  {
    nom: {
      fr: "Sweet Ladies",
      en: "Sweet Ladies",
    },
    lien: "sweet_ladies",
    cat: {
      fr: "Les Jeux",
      en: "The Decks",
    },
    prix: 38,
    poids: 250,
    description: {
      fr: `
      <p style="font-size:1.2em">Le jeu est <strong>bilingue</strong> ( Français / Anglais )</p>
      <p>Le Sweet Ladies est un coffret contenant un livret et 50 cartes. Les cartes sont des reproductions de vielles peintures.</p>
      <p>Le livret (bilingue) comprend 80 pages qui expliquent comment utiliser les cartes et travailler avec aussi bien en développement personnel, tirage psychologique et relationnel ou divination.</p>
      <p style="margin-top:1em;font-size:1.2em;color:#d27acb;">Une partie des bénéfices de ce jeu sera reversée à une oeuvre caritative pour le droit des femmes.</p>
    `,
      en: `
      <p style="font-size:1.2em">This deck is <strong>bilingual</strong> ( French / English )</p>
      <p>The Sweet Ladies is a box containing a booklet and 50 cards. Cards are reproductions of old paintings</p>
      <p>The booklet (bilingual) includes 80 pages that explain how to use the cards and how to work with them. The readings you can do with includes personal development, psychological reading, relational reading or divination.</p>
      <p style="margin-top:1em;font-size:1.2em;color:#d27acb;">Part of the profits from this deck will be donated to a charity for women's rights.</p>
    `,
    },
    images: [
      "sweetladies/oracle-sweet-ladies.jpg",
      "sweetladies/2 (Grand).jpg",
      "sweetladies/3 (Grand).jpg",
      "sweetladies/5 (Grand).jpg",
      "sweetladies/6 (Grand).jpg",
      "sweetladies/7 (Grand).jpg",
      "sweetladies/8 (Grand).jpg",
      "sweetladies/10 (Grand).jpg",
      "sweetladies/14 (Grand).jpg",
      "sweetladies/16 (Grand).jpg",
      "sweetladies/18 (Grand).jpg",
      "sweetladies/20 (Grand).jpg",
      "sweetladies/21 (Grand).jpg",
      "sweetladies/23 (Grand).jpg",
      "sweetladies/25 (Grand).jpg",
      "sweetladies/27 (Grand).jpg",
      "sweetladies/28 (Grand).jpg",
      "sweetladies/31 (Grand).jpg",
    ],
  },
  {
    nom: {
      fr: "Tanis Lenormand",
      en: "Tanis Lenormand",
    },
    lien: "tanis",
    cat: {
      fr: "Les Jeux",
      en: "The Decks",
    },

    prix: 32,
    poids: 180,
    images: [
      "tanis/tanis0.jpg",
      "tanis/tanis1.jpg",
      "tanis/tanis3.jpg",
      "tanis/tanis4.jpg",
      "tanis/tanis5.jpg",
      "tanis/tanis_pochon.jpg",
      "pochons/tanis/pochon-tanis.jpg",
    ],
    description: {
      fr: `<strong>Le coffret est bilingue ( Français / Anglais )</strong>

<p>Ce jeu est un Lenormand</p>

<p>Le coffret se compose de 40 cartes et d'un livret pour vous aider dans l'interprétation de vos tirages.</p>
<p>La boite en fer vous permet d'emmener votre jeu partout avec vous en toute sécurité.</p>
<p>Les cartes sont de tailles poker et vous retrouverez l'ajout de deux cartes, une femme et un homme (de plus que traditionnellement),
qui vous permettront d'élargir vos tirages.</p>`,
      en: `<p style="font-size:1.2em">This deck is <strong>bilingual</strong> ( French / English )</p>`,
    },
    subproducts: [
      {
        lien: "tanis_seul",

        nom: {
          fr: "Tanis",
          en: "Tanis",
        },
        images: ["tanis/tanis0.jpg"],
        prix: 32,
        poids: 180,
      },
      {
        lien: "tanispack",

        nom: {
          fr: "Tanis & Pochon",
          en: "Tanis & Pochon",
        },
        images: ["tanis/tanis_pochon.jpg"],
        prix: 50,
        poids: 207,
      },
    ],
  },

  {
    nom: {
      fr: "Reflet De Lune Lenormand",
      en: "Reflet De Lune Lenormand",
    },
    lien: "reflet_de_lune",
    cat: {
      fr: "Les Jeux",
      en: "The Decks",
    },
    prix: 32,
    description: {
      fr: `
      <p style="font-size:1.2em">Le jeu est <strong>bilingue</strong> ( Français / Anglais )</p>
<p><strong>Ce jeu est un Lenormand.</strong><br><br>Le coffret se&nbsp;compose&nbsp;de <strong>40 cartes.</strong></p>
<p>La <strong>boite en fer</strong> vous permet d'emmener votre jeu partout avec vous en toute sécurité.</p>
<p>Les cartes sont de taille poker et vous retrouverez l'<strong>ajout de deux cartes&nbsp;</strong>de plus que traditionnellement : une femme et un homme&nbsp; qui vous permettront d'élargir vos tirages.</p>
    `,
      en: ``,
    },
    images: [
      "reflet-de-lune/reflet_de_lune_lenormand.jpg",
      "reflet-de-lune/0.jpg",
      "reflet-de-lune/1.jpg",
      "reflet-de-lune/reflet_de_lune_pack.jpg",
      "pochons/reflet-de-lune/0.jpg",
    ],
    subproducts: [
      {
        lien: "reflet_lune_seul",

        nom: {
          fr: "Reflet De Lune Lenormand",
          en: "Reflet De Lune Lenormand",
        },
        images: ["reflet-de-lune/reflet_de_lune_lenormand.jpg"],
        prix: 32,
        poids: 180,
      },
      {
        lien: "reflet_lune_pack",

        nom: {
          fr: "Reflet De Lune & Pochon",
          en: "Reflet De Lune & Pochon",
        },
        images: ["reflet-de-lune/reflet_de_lune_pack.jpg"],
        prix: 50,
        poids: 200,
      },
    ],
  },
  {
    nom: {
      fr: "Journal de Tirage",
      en: "Journal de Tirage",
    },
    lien: "journal_tirage",
    cat: {
      fr: "Papeterie",
      en: "Papeterie",
    },
    prix: 30,
    images: [
      "journal/bleu.jpg",
      "journal/journal1.jpg",
      "journal/journal2.jpg",
      "journal/journal3.jpg",
      "journal/journal4.jpg",
      "journal/journal5.jpg",
      "journal/journal6.jpg",
    ],
    subproducts: [
      {
        lien: "journal_noir",

        nom: {
          fr: "Journal Noir",
          en: "Journal Noir",
        },
        images: ["journal/journal0.jpg"],
        prix: 30,
        poids: 350,
      },
      {
        lien: "journal_bleu",

        nom: {
          fr: "Journal Bleu",
          en: "Journal Bleu",
        },
        images: ["journal/bleu.jpg"],
        prix: 30,
        poids: 350,
      },
      {
        lien: "journal_marron",

        nom: {
          fr: "Journal Marron",
          en: "Journal Marron",
        },
        images: ["journal/marron.jpg"],
        prix: 30,
        poids: 350,
      },
      {
        lien: "journal_violet",

        nom: {
          fr: "Journal Violet",
          en: "Journal Violet",
        },
        images: ["journal/violet.jpg"],
        prix: 30,
        poids: 350,
      },
    ],
    description: {
      fr: `<p><strong style="font-size:1.5em">En Français uniquement</strong></p>
<p></p>
<p><strong>Ce journal&nbsp;est votre compagnon idéal pour noter les tirages que vous réalisez.</strong></p>
<p>Pensé pour vous aider au mieux dans votre pratique, il vous aidera dans l'interprétation de vos tirages et vous aidera à suivre votre évolution.</p>
<p>Entièrement en couleur il&nbsp;est&nbsp;agréable à remplir et sa taille est idéal pour l'emporter partout avec vous.</p>
<p><br>Vous y retrouverez une première partie consacrée aux notions sur les tirages, des astuces, des exemples de tirages...</p>
<p>Puis&nbsp;une partie pour noter vos tirages à une carte&nbsp;et&nbsp;une&nbsp;autre&nbsp;consacrée aux tirages&nbsp;à&nbsp;plusieurs cartes.</p>
<p>Deux signets&nbsp;font&nbsp;office de marques pages.</p>
<p></p>
<p><strong>Caractéristiques :</strong></p>
<p>Couverture rigide : marron, bleu, violet, gris avec gravures or et incrustations</p>
<p>Format A5</p>
<p>230 pages</p>
<p>Entièrement en couleur</p>
<p>Langue : Français</p>
<p><strong>Quantités très limités !</strong></p>
`,
      en: `<p><strong>En Français uniquement</strong></p>

<p></p>
<p><strong>Ce journal&nbsp;est votre compagnon idéal pour noter les tirages que vous réalisez.</strong></p>
<p>Pensé pour vous aider au mieux dans votre pratique, il vous aidera dans l'interprétation de vos tirages et vous aidera à suivre votre évolution.</p>
<p>Entièrement en couleur il&nbsp;est&nbsp;agréable à remplir et sa taille est idéal pour l'emporter partout avec vous.</p>
<p><br>Vous y retrouverez une première partie consacrée aux notions sur les tirages, des astuces, des exemples de tirages...</p>
<p>Puis&nbsp;une partie pour noter vos tirages à une carte&nbsp;et&nbsp;une&nbsp;autre&nbsp;consacrée aux tirages&nbsp;à&nbsp;plusieurs cartes.</p>
<p>Deux signets&nbsp;font&nbsp;office de marques pages.</p>
<p></p>
<p><strong>Caractéristiques :</strong></p>
<p>Couverture rigide : marron, bleu, violet, gris avec gravures or et incrustations</p>
<p>Format A5</p>
<p>230 pages</p>
<p>Entièrement en couleur</p>
<p>Langue : Français</p>
<p><strong>Quantités très limités !</strong></p>

`,
    },
  },
  {
    nom: {
      fr: "Pochon Tanis",
      en: "Pochon Tanis",
    },
    lien: "pochon-tanis",
    cat: {
      fr: "Pochons",
      en: "Pochons",
    },
    prix: 20,
    poids: 26,
    images: [
      "pochons/tanis/pochon-tanis.jpg",
      "pochons/tanis/0.jpg",
      "pochons/tanis/1.jpg",
    ],
    description: {
      fr: `<p>Ce pochon convient aux jeux de taille oracle ou tarot.</p>
<p>Il habillera et protégera vos jeux.</p>
<p>En satin vert avec des motifs fleurs sur l’extérieur, il est doublé d'un satin doré à l'intérieur.<br><br></p>
<p>Quatre cordons ferment le pochon:</p>
<p>Deux dorés avec une perle en verre et un pompon au bout</p>
<p>et deux vert avec une breloque trèfle au bout.</p>
<p><br>Une jolie breloque trèfle dorée est cousue en bas sur le devant du pochon.</p>
<p></p>
<p>Dimensions :&nbsp;</p>
<p>14 cm par 20 cm</p>`,
      en: `<p>Ce pochon convient aux jeux de taille oracle ou tarot.</p>
<p>Il habillera et protégera vos jeux.</p>
<p>En satin vert avec des motifs fleurs sur l’extérieur, il est doublé d'un satin doré à l'intérieur.<br><br></p>
<p>Quatre cordons ferment le pochon:</p>
<p>Deux dorés avec une perle en verre et un pompon au bout</p>
<p>et deux vert avec une breloque trèfle au bout.</p>
<p><br>Une jolie breloque trèfle dorée est cousue en bas sur le devant du pochon.</p>
<p></p>
<p>Dimensions :&nbsp;</p>
<p>14 cm par 20 cm</p>`,
    },
  },
  {
    nom: {
      fr: "Pochon Reflet de Lune Lenormand",
      en: "Pochon Reflet de Lune Lenormand",
    },
    lien: "pochon-reflet-de-lune",
    cat: {
      fr: "Pochons",
      en: "Pochons",
    },
    prix: 20,
    poids: 26,
    images: [
      "pochons/reflet-de-lune/0.jpg",
      "pochons/reflet-de-lune/1.jpg",
      "pochons/reflet-de-lune/2.jpg",
      "pochons/reflet-de-lune/3.jpg",
    ],
    description: {
      fr: `<p>Ce pochon pour un jeu de taille poker (comme les Lenormand) habillera et protégera vos jeux.</p>
<p>En satin noir avec des étoiles dorées sur l’extérieur, il est doublé d'un satin cuivré à l'intérieur.<br><br></p>
<p>Quatre cordons ferment le pochon:</p>
<p>Deux cuivrés avec une perle en verre et un pompon au bout et deux noirs avec une breloque lune au bout.</p>
<p><br>Une jolie lune est cousue sur le devant.</p>
<p></p>
<p>Dimensions :&nbsp;</p>
<p>10 cm par 17 cm</p>`,
      en: `<p>Ce pochon pour un jeu de taille poker (comme les Lenormand) habillera et protégera vos jeux.</p>
<p>En satin noir avec des étoiles dorées sur l’extérieur, il est doublé d'un satin cuivré à l'intérieur.<br><br></p>
<p>Quatre cordons ferment le pochon:</p>
<p>Deux cuivrés avec une perle en verre et un pompon au bout et deux noirs avec une breloque lune au bout.</p>
<p><br>Une jolie lune est cousue sur le devant.</p>
<p></p>
<p>Dimensions :&nbsp;</p>
<p>10 cm par 17 cm</p>`,
    },
  },
  {
    nom: {
      fr: "Marque Page",
      en: "Bookmark",
    },
    lien: "marque-page-oracle",
    cat: {
      fr: "Marque page",
      en: "Bookmark",
    },
    prix: 2,
    poids: 5,
    images: [
      "marquepage/marque-page.jpg",
      "marquepage/marque-page-recto.jpg",
      "marquepage/marque-page-verso.jpg",
    ],
    description: {
      fr: `Un marque page de qualité aux couleurs de l'oracle.
    <p>Taille : 5.5cm*20cm</p>
    <p>Finition : vernis mat</p>`,
      en: `A beautiful bookmark inspired by the Oracle des reflets Deck`,
    },
  },
  {
    nom: {
      fr: "Marque Page Tanis",
      en: "Tanis's Bookmark",
    },
    lien: "marque-page-tanis",
    cat: {
      fr: "Marque page",
      en: "Bookmark",
    },
    prix: 2,
    poids: 5,
    images: ["marquepage/tanis.jpg"],
    description: {
      fr: `Un marque page de qualité aux couleurs du Tanis lenormand.
    <p>Taille : 5.5cm*20cm</p>
    <p>Finition : vernis mat</p>`,
      en: `A beautiful bookmark inspired by the Tanis Lenormand Deck.
    `,
    },
  },

  {
    nom: {
      fr: "Pack Saisons",
      en: "Seasons Pack",
    },
    lien: "pack-saison",
    cat: {
      fr: "Les Packs",
      en: "Packs",
    },
    prix: 10,
    poids: 24,
    images: [
      "packsaison/saison.jpg",
      "packsaison/automne.jpg",
      "packsaison/ete.jpg",
      "packsaison/hiver.jpg",
      "packsaison/printemps.jpg",
    ],
  },

  {
    nom: {
      fr: "Carte Postale - Coeur",
      en: "Post card - Heart ",
    },
    lien: "carte-coeur",
    cat: {
      fr: "Cartes Postales",
      en: "Post cards",
    },
    prix: 2.5,
    poids: 5,
    images: ["/cartepostale/tanis_coeur.jpg"],
  },
  {
    nom: {
      fr: "Carte Postale - Renard Tanis",
      en: "Post card - Tanis Fox ",
    },
    lien: "carte-tanis-renard",
    cat: {
      fr: "Cartes Postales",
      en: "Post cards",
    },
    prix: 2.5,
    poids: 5,
    images: ["/cartepostale/tanis_renard.jpg"],
  },
  {
    nom: {
      fr: "Carte Postale - Trèfle",
      en: "Post card - Clover ",
    },
    lien: "carte-trefle",
    cat: {
      fr: "Cartes Postales",
      en: "Post cards",
    },
    prix: 2.5,
    poids: 5,
    images: ["/cartepostale/tanis_trefle.jpg"],
  },
  {
    nom: {
      fr: "Carte Postale - La Construction",
      en: "Post card - The Contruction",
    },
    lien: "carte-construction",
    cat: {
      fr: "Cartes Postales",
      en: "Post cards",
    },
    prix: 2.5,
    poids: 5,
    images: ["/cartepostale/construction.jpg"],
  },
  {
    nom: {
      fr: "Carte Postale - Dispersion",
      en: "Post card - Dispersion",
    },
    lien: "carte-dispersion",
    cat: {
      fr: "Cartes Postales",
      en: "Post cards",
    },
    prix: 2.5,
    poids: 5,
    images: ["/cartepostale/dispersion.jpg"],
  },
  {
    nom: {
      fr: "Carte Postale - Dualité",
      en: "Post card - Duality",
    },
    lien: "carte-dualite",
    cat: {
      fr: "Cartes Postales",
      en: "Post cards",
    },
    prix: 2.5,
    poids: 5,
    images: ["/cartepostale/dualite.jpg"],
  },
  {
    nom: {
      fr: "Carte Postale - Ralentissement",
      en: "Post card - Slow-down",
    },
    lien: "carte-ralentissement",
    cat: {
      fr: "Cartes Postales",
      en: "Post cards",
    },
    prix: 2.5,
    poids: 5,
    images: ["/cartepostale/ralentissement.jpg"],
  },
  {
    nom: {
      fr: "Carte Postale - Renard Oracle",
      en: "Post card - Fox Oracle",
    },
    lien: "carte-renard",
    cat: {
      fr: "Cartes Postales",
      en: "Post cards",
    },
    prix: 2.5,
    poids: 5,
    images: ["/cartepostale/renard.jpg"],
  },
  {
    nom: {
      fr: "Carte Postale - Hiver",
      en: "Post card - Winter",
    },
    lien: "carte-hiver",
    cat: {
      fr: "Cartes Postales",
      en: "Post cards",
    },
    prix: 2.5,
    poids: 5,
    images: ["/cartepostale/hiver.jpg"],
  },
]

export default produits.map((produit, i) => ({ ...produit, id: i }))
