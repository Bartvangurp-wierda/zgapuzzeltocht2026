// ============================================================
//  CONFIGURATIE — pas hier alles aan voor jullie tocht
// ============================================================

export const DEBUG_MODE = false;

export const SCORE = {
  puzzleSolved: 10,
  wrongAttempt: -1,
  cheatCode: -5,
  hintUsed: -1,
};

export const PIN = "7334";
export const DEBUG_PIN = "9000";

export const WELCOME = {
  title: "Bert Vuik Sportdag Puzzeltocht 2026!",
  message:
    "Beste deelnemers,\n\nJullie quest voert jullie langs niet-exotische locaties, waar jullie zonder gevaar voor eigen leven onbelangrijke opdrachten dienen te vervullen. Volg het kompas om de eerste locatie te vinden.\n\n"
    + "BELANGRIJK:\n"
    + "Het kompas moet in het begin kalibreren. Het kan dan de verkeerde richting op wijzen of minder nauwkeurig zijn.\n"
    + "Loop eerst een tiental meters MET DE APP OPEN OP HET SCHERM. Eenmaal gekalibreerd blijft het kompas werken. Jullie hoeven dit dus alleen voor de eerste locatie te doen.\n"
    + "Vanaf dat moment hoef je de app niet continu open te hebben om batterij te besparen.\n"
    + "Onder het kompas staat hoe ver de locatie is. De afstand is vanaf het begin nauwkeurig. Wordt de afstand groter, dan lopen jullie de verkeerde kant op.\n"
    + "Hoe dichter jullie bij jullie doel zijn, hoe nauwkeuriger het kompas wordt.\n\n"
    + "Opent de locatie niet, terwijl jullie wel goed zitten, dan kunnen jullie bij ons een noodcode opvragen om de opdracht te openen.\n\n"
    + "Veel plezier en succes!",
  photo: `${import.meta.env.BASE_URL}logozga/zgalogo.png`,
};

export const STOPS = [
  {
    name: "Dierenweide Randerode",
    lat: 52.179301,
    lng: 5.947387,
    arrivalRadius: 20,
    showCat: true,
    cheatCode: "r2e9",
    arrivalMessage: "Dierenweide Randerode!\n\nDe dierenweide van Randerode wie kent het niet. Jullie zijn daar nu niet maar hier gaat wel de vraag over. De ezels en geiten hebben ondertussen ook al een nieuw onderkomen gevonden vanwege de nieuwbouw plannen. maar de volgende vraag gaat hier wel over. \n\n"
      + "Zet de foto's in de juiste volgorde. Begin met het grootste dier en eindig met de kleinste.\n"
      + "Je krijgt te zien hoeveel antwoorden je goed hebt.\n"
      + "Klik op de foto om te vergroten.Klik nog een keer om het weer te verkleinen.\n\n"
      + "Komen jullie er niet uit?\n"
      + "Onder 'Hint tonen' staat op willekeurige volgorde Hoeveel een dier gemiddeld weegt. Dit gaat natuurlijk wel van de punten telling af.\n",
     
    puzzle: {
      type: "photo-order",
      question: "Zet de foto's in de juiste chronologische volgorde van groot naar klein.\\n\n",
      photos: [
        { label: "A", url: `${import.meta.env.BASE_URL}Dierenweide/A.jpg` },
        { label: "B", url: `${import.meta.env.BASE_URL}Dierenweide/B.jpg` },
        { label: "C", url: `${import.meta.env.BASE_URL}Dierenweide/C.jpg` },
        { label: "D", url: `${import.meta.env.BASE_URL}Dierenweide/D.jpg` },
        { label: "E", url: `${import.meta.env.BASE_URL}Dierenweide/E.jpg` },
        { label: "F", url: `${import.meta.env.BASE_URL}Dierenweide/F.jpg` },
        { label: "G", url: `${import.meta.env.BASE_URL}Dierenweide/G.jpg` },
        { label: "H", url: `${import.meta.env.BASE_URL}Dierenweide/H.jpg` },
      ],
      answer: "ADEGFHCB",
      hints: [" 165kg; 7 milligram; 75kg; 27,5gr; 400gr; 3kg; 2kg; 20gr"],
    },
    completeMessage: "Dit was Dierenweide Randerode! \n\nOp juiste volgorde: Ezel 165kg, Geit 75kg, Konijn 3kg, Kip 2kg, Duif 400gr, Mus 27,5gr, Muis 20gr, Mier 7 milligram.\n\nHierbij een foto van 2 katten als beloning.\nOp naar de volgende stop.",
  },
  {
    name: "neptunnus2.0",
    lat: 51.839354,
    lng: 5.831450,
    arrivalRadius: 20,
    showCat: true,
    cheatCode: "c5h6",
    arrivalMessage: "Beste puzzel wizzards\n\nWe gaan beginnen met de Porseleinen Pubquiz. En het wordt vreselijk spannend! Want om door te gaan naar de volgende stop, moeten jullie alle vragen goed beantwoorden. Dat kan nog wel eens tegenvallen. Maar wees gerust: hoe vaker jullie verkeerd antwoorden, hoe meer informatie jullie krijgen.\n\nMeedoen is leuker dan vastzitten, dus veel succes!",
    puzzle: {
      type: "multi-choice",
      question: "Jullie mogen zo vaak raden als je wilt. Succes!",
      questions: [
        {
          question: "Hoe wordt een porseleinen huwelijk ook wel genoemd?",
          options: ["Koperen huwelijk", "Kristallen huwelijk", "Zilveren huwelijk", "Houten huwelijk", "Aardewerken huwelijk", "Eiken huwelijk"],
          answer: "B",
        },
        {
          question: "Wanneer begon de productie van porselein in Europa?",
          options: ["15e eeuw", "16e eeuw", "17e eeuw", "18e eeuw", "19e eeuw", "20e eeuw"],
          answer: "D",
        },
        {
          question: "Welke grondstof is essentieel voor de productie van porselein?",
          options: ["Bentoniet", "Porfier", "Kalksteen", "Chamotte", "Kaolien", "Zand"],
          answer: "E",
        },
        {
          question: "Welke artiest heeft GEEN nummer met porselein in de titel?",
          options: ["The National", "Moby", "Baxter Dury", "Courtney Barnett", "Sef", "Red Hot Chili Peppers"],
          answer: "A",
        },
        {
          question: "Waarnaar is porselein vernoemd?",
          options: ["Een varken", "Een schildpad", "Een vogel", "Een vis", "Een bloem", "Een zeeslak"],
          answer: "F",
        },
      ],
      hints: [
        "Dit is een variant op Mastermind. Belangrijk: de bolletjes geven alleen aan hoeveel antwoorden jullie goed hebben of op de verkeerde plek staan, maar ze geven niet aan om WELKE antwoorden het gaat. Tip als het te lastig is: vul eerst bij alle vragen antwoord A in. Kijk hoeveel er goed zijn. Doe vervolgens hetzelfde voor antwoord B, antwoord C, etc. Op die manier kun je achterhalen welke letters in het goede antwoord zitten.",
        "Dubbele antwoorden mogen"
      ],
    },
    completeMessage: "Dit was Café Hop en Heivuur. Goed gedaan: jullie zijn slimmer dan Hobbes met een cone om haar nek! Op naar de volgende stop.",
  }, 
  {
    name: "Winkel gebied de Voorwaarts",
    lat: 51.819329,
    lng: 5.865646,
    arrivalRadius: 15,
    showCat: true,
    cheatCode: "8ks4",
    arrivalMessage: "Winkel gebied de Voorwaarts: Hier heeft iedereen uit Apeldoorn wel eens gewinkeld. Weten jullie ook de antwoorden te vinden op de volgende vragen?",
    puzzle: {
      type: "multi",
      question: "Tip! Blijf op het terrein!",
      questions: [
        { question: "Welke dierenspeciaal zaak komt hier?", answers: ["Pets Place"] },
        { question: "hoeveelste filiaal van Hornbach zit hier?", answers: ["Zestiende"] },
        { question: "Welke volleybal vereniging zit in de Omnisport?", answers: ["Dynamo"] },
        { question: "Wat kost een sunday caramel bij de Burger King?", answers: ["€2,50"] },
        { question: "In welk jaar werd het sport en evenementencomplex gesloopt, die hier voorheen stond?", answers: ["2020"] },
      ],
    },
    completeMessage: "Dit was winkelgebied de Voorwaarts",
  },
  {
    name: "RSC",
    lat: 51.8185806,
    lng: 5.8669618,
    arrivalRadius: 20,
    showCat: true,
    cheatCode: "b9x4",
    arrivalMessage: "Reis je rot!\n\nVan USA tot India, van Luxemburg tot Japan. Van veilig in een vliegtuig, bus en trein tot ongelukjes in huurauto's: jullie reizen flink wat af.\n\nJullie reis begon bij ANS, maar hoe gaan jullie eindigen?\n\nOpdracht: \n- Jullie gaan zo meteen een reis maken door van plek naar plek te lopen. \n- Alleen verenigingen/organisatie tellen als locatie/plek/plaats. \n- Tussendoor maken jullie 5 tussenstops. \n- Volg de routebeschrijving om de juiste locaties te vinden. \n- Jullie starten bij ANS. \n\nDit zijn de reislocaties van rechts naar links: \nANS, Dance fever, MSV, AIESEC, ESN, SOFV, RAGweek, NSSR, Akku, United Netherlands, FNV, VOX. \nVoorbeeld: vanuit FNV 1 plek naar links is naar Vox. ",
    puzzle: {
      type: "text",
      question: "Routebeschrijving:\n- Start bij ANS. Ga op bezoek bij de man die zijn schoen mist. Loop vervolgens 1 locatie met hem mee. Dit is tussenstop 1.\n- Start bij tussenstop 1. Hoeveel G's zitten er in de volledige naam? Loop dat aantal verenigingen naar rechts. Is het logo blauw? Ga dan 4 verenigingen naar links. Is het groen, ga dan 7 verenigingen naar links. Dit is tussenstop 2.\n- Start bij tussenstop 2. Schuif 5 plaatsen op; Palestina wijst de weg. Loop vervolgens 1 plekje met de mensen mee. Dit is tussenstop 3.\n- Start bij tussenstop 3. Loop 7 plaatsen van de wereld richting de maan. Loop vervolgens het maximum aantal mensen naar rechts. Dit is tussenstop 4.\n- Start bij tussenstop 4. Ga het aantal blokjes op het boomblaadje richting roze streepje horizontaal. Ga vervolgens het aantal letters van de afkorting in de richting van de groene pijl. Dit is tussenstop 5.\n\n" 
      +"\n\nGeef met 5 letters antwoord op de grote vraag: Hoe eindigt jullie reis?",
      answer: "Samen",
      hints: ["Jullie hebben 5 tussenstops gemaakt en het antwoord bestaat uit 5 letters. Toevallig, hè?", "Misschien helpt het om jullie tussenstops een op een rijtje te zetten. Kijk eens of je er dan een woord uit kunt halen. Kijk vooral naar het begin van de woorden."],
    },
    completeMessage: "Dit was het RSC! Op naar de volgende stop.",
  },  
  {
    name: "LUX",
    lat: 51.8451501,
    lng: 5.867057,
    arrivalRadius: 10,
    showCat: true,
    cheatCode: "p3n7",
    arrivalMessage: " We love... The diaper smell of filmquiz!\n\nAan deze filmquiz zit zeker een luchtje. Kunnen jullie raden welke films hier uitgebeeld worden?\n\nKlik op de foto om te vergroten.\nKom je er echt niet uit, dan staat onder hints een lijst met films, waar de goede antwoorden tussen zitten.\n\nDisclaimer: No babies were harmed in the making of this quiz.",
    puzzle: {
      type: "photo-quiz",
      question: "Welke film zie je op elke foto?",
      photos: [
        { url: `${import.meta.env.BASE_URL}filmquiz/1.png`, answer: "Lion King" },
        { url: `${import.meta.env.BASE_URL}filmquiz/2.png`, answer: "Terminator" },
        { url: `${import.meta.env.BASE_URL}filmquiz/3.jpg`, answer: "Life of Pi" },
        { url: `${import.meta.env.BASE_URL}filmquiz/4.png`, answer: "Godzilla" },
        { url: `${import.meta.env.BASE_URL}filmquiz/5.png`, answer: "E.T." },
        { url: `${import.meta.env.BASE_URL}filmquiz/6.png`, answer: "Pretty Woman" },
        { url: `${import.meta.env.BASE_URL}filmquiz/7.png`, answer: "Madagascar" },
        { url: `${import.meta.env.BASE_URL}filmquiz/8.png`, answer: "Neverending Story" },
      ],
      hints: ["Alladin, Beethoven, Bolt, Catnado, Chicago, Chronicles of Narnia, Creature from the black lagoon, Cube, E.T., Eurovision Song Contest: The story of Fire Saga, Frankenstein, Garfield, George of the jungle, Godzilla, How to train your dragon, Jaws, Jumanji, Jungle Book, Jurassic Park, Life of Pi, Lion King, Madagascar, Men in Black, Monster Inc, Okja, Predator, Psycho, Rango, Shrek, The Goonies, The Hulk, The Matrix, The Never Ending Story, The Shining, The Sound of Music, The Terminator, The Tigger movie, The Wizard of Ozz, They live, Turks Fruit"],
    },
    completeMessage: "Dat was LUX! Op naar de volgende stop.",
  },
  {
    name: "Hertogstraat",
    lat: 51.845777,
    lng: 5.8686818,
    arrivalRadius: 10,
    showCat: true,
    cheatCode: "6fq2",
    arrivalMessage: "We gaan eens kijken naar hoe goed jullie de locaties van ZGA kennen.\n\nWe hebben 8 gebouwen van ZGA van Floor gehaald en een aantal van die foto's bewerkt. Geef per foto aan of die bewerkt (fout) of origineel (goed) is.\n\nTips:\nDe hint geeft aan hoeveel foto's bewerkt zijn.\nAls je een fout ziet, dan is het gelijk duidelijk. \n\nSucces!",
    puzzle: {
      type: "photo-authentic",
      question: "Welke foto's zijn origineel en welke zijn bewerkt?\n\nTik op een foto om hem te vergroten.",
      photos: [
        { url: `${import.meta.env.BASE_URL}hertogstraat/1.jpg`, authentic: true },
        { url: `${import.meta.env.BASE_URL}hertogstraat/2.jpg`, authentic: false },
        { url: `${import.meta.env.BASE_URL}hertogstraat/3.jpg`, authentic: false },
        { url: `${import.meta.env.BASE_URL}hertogstraat/4.jpg`, authentic: true },
        { url: `${import.meta.env.BASE_URL}hertogstraat/5.jpg`, authentic: false },
        { url: `${import.meta.env.BASE_URL}hertogstraat/6.jpg`, authentic: false },
        { url: `${import.meta.env.BASE_URL}hertogstraat/7.jpg`, authentic: true },
        { url: `${import.meta.env.BASE_URL}hertogstraat/8.jpg`, authentic: false },
      ],
      hints: ["Er zijn 5 foto's bewerkt."],
    },
    completeMessage: "Dat was de Hertogstraat! Op naar de volgende stop.",
  },
  {
    name: "Valkhof",
    lat: 51.847563,
    lng: 5.8705543,
    arrivalRadius: 30,
    showCat: true,
    cheatCode: "9mw5",
    arrivalMessage: "Het valkhof is één van de mooiste en oudste plekken van Nijmegen, vol geschiedenis, natuur en natuurlijk de leukste plek tijdens de Feesten!.\n\nMaar hebben jullie wel eens goed rond gekeken? Lees zo eerst de vragen en loop vervolgens een rondje. Jullie hoeven niet het valkhof af en geen trappen naar beneden te nemen.",
    puzzle: {
      type: "multi",
      question: "Beantwoord de vragen. Kijk bij de hint om te zien op welke plekken je moet zoeken.",
      questions: [
        {
          question: "Welke kleur, naast wit, heeft de circusachtige tent van het podium van de Kaaij?",
          answers: ["blauw"],
        },
        {
          question: "Wie keek knarsetandend toe, hoe wrekende Romeinse legers naderden?",
          answers: ["claudius"],
        },
        {
          question: "Zet de Nijmeegse geschiedenis op volgorde. Vul alleen de cijfers in: 1. Adelaar; 2. Leeuw; 3. Dubbelkoppige adelaar; 4. Drie leeuwen",
          answers: ["1432"],
        },
        {
          question: "Op welke route vind je een brandende kaars?",
          answers: ["Liberation route Europe"],
        },
        {
          question: "Zoek de plek waarvan de tekst vrij vertaald is: 'Weet ge mij een plaats te noemen, die op zooveel schoons kan roemen'? Geniet van het uitzicht van de Waal en vertel me: wat is Nijmegen?",
          answers: ["gastvrij"],
        },
      ],
      hints: [{ image: "valkhof/hint1.jpg" }],
    },
    completeMessage: "Dat was het Valkhof! Op naar de volgende stop.",
  },
  {
    name: "Eindlocatie",
    lat: 51.8376845,
    lng: 5.8325001,
    arrivalRadius: 5,
    arrivalMessage: "De laatste rebus! Los deze op om de tocht af te sluiten.",
    puzzle: {
      type: "rebus",
      question: "Los alle vijf delen op en vul de volledige zin in.",
      images: [
        `${import.meta.env.BASE_URL}cats/1.png`,
        `${import.meta.env.BASE_URL}cats/2.png`,
        `${import.meta.env.BASE_URL}cats/3.png`,
        `${import.meta.env.BASE_URL}cats/4.png`,
        `${import.meta.env.BASE_URL}cats/5.png`,
      ],
      parts: [
        "MET OPRECHTE AANDACHT",
        "MAKEN WIJ ELKE DAG",
        "HET VERSCHIL",
        "BIJ ZORGGROEP",
        "APELDOORN",
      ],
      answer: "MET OPRECHTE AANDACHT MAKEN WIJ ELKE DAG HET VERSCHIL BIJ ZORGGROEP APELDOORN",
    },
    showCat: true,
    isFinal: true,
  },

];
