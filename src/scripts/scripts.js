const metroData = [
  // --- LÍNEAS TMB ---
  {
    id: "L1",
    name: "L1",
    color: "var(--L1)",
    operator: "TMB",
    stops: [
      { name: "Hospital de Bellvitge", isTransfer: false },
      { name: "Bellvitge", isTransfer: false },
      { name: "Av. Carrilet", isTransfer: true },
      { name: "Rambla Just Oliveras", isTransfer: false },
      { name: "Can Serra", isTransfer: false },
      { name: "Florida", isTransfer: false },
      { name: "Torrassa", isTransfer: true },
      { name: "Santa Eulàlia", isTransfer: false },
      { name: "Mercat Nou", isTransfer: false },
      { name: "Plaça de Sants", isTransfer: true },
      { name: "Hostafrancs", isTransfer: false },
      { name: "Espanya", isTransfer: true },
      { name: "Rocafort", isTransfer: false },
      { name: "Urgell", isTransfer: false },
      { name: "Universitat", isTransfer: true },
      { name: "Catalunya", isTransfer: true },
      { name: "Urquinaona", isTransfer: true },
      { name: "Arc de Triomf", isTransfer: true },
      { name: "Marina", isTransfer: false },
      { name: "Glòries", isTransfer: true },
      { name: "Clot", isTransfer: false },
      { name: "Navas", isTransfer: false },
      { name: "La Sagrera", isTransfer: true },
      { name: "Fabra i Puig", isTransfer: false },
      { name: "Sant Andreu", isTransfer: false },
      { name: "Torras i Bages", isTransfer: false },
      { name: "Trinitat Vella", isTransfer: false },
      { name: "Baró de Viver", isTransfer: false },
      { name: "Santa Coloma", isTransfer: false },
      { name: "Fondo", isTransfer: true },
    ],
  },
  {
    id: "L2",
    name: "L2",
    color: "var(--L2)",
    operator: "TMB",
    stops: [
      { name: "Paral·lel", isTransfer: true },
      { name: "Sant Antoni", isTransfer: false },
      { name: "Universitat", isTransfer: true },
      { name: "Passeig de Gràcia", isTransfer: true },
      { name: "Tetuan", isTransfer: false },
      { name: "Monumental", isTransfer: false },
      { name: "Sagrada Família", isTransfer: true },
      { name: "Encants", isTransfer: false },
      { name: "Clot", isTransfer: true },
      { name: "Bac de Roda", isTransfer: false },
      { name: "Sant Martí", isTransfer: false },
      { name: "La Pau", isTransfer: false },
      { name: "Verneda", isTransfer: false },
      { name: "Artigues | Sant Adrià", isTransfer: false },
      { name: "Sant Roc", isTransfer: false },
      { name: "Gorg", isTransfer: true },
      { name: "Pep Ventura", isTransfer: false },
      { name: "Badalona Pompeu Fabra", isTransfer: false },
    ],
  },
  {
    id: "L3",
    name: "L3",
    color: "var(--L3)",
    operator: "TMB",
    stops: [
      { name: "Zona Universitària", isTransfer: true },
      { name: "Palau Reial", isTransfer: false },
      { name: "Maria Cristina", isTransfer: false },
      { name: "Les Corts", isTransfer: false },
      { name: "Plaça del Centre", isTransfer: false },
      { name: "Sants Estació", isTransfer: true },
      { name: "Tarragona", isTransfer: false },
      { name: "Espanya", isTransfer: true },
      { name: "Poble Sec", isTransfer: false },
      { name: "Paral·lel", isTransfer: true },
      { name: "Drassanes", isTransfer: false },
      { name: "Liceu", isTransfer: true },
      { name: "Catalunya", isTransfer: true },
      { name: "Passeig de Gràcia", isTransfer: true },
      { name: "Diagonal", isTransfer: true },
      { name: "Fontana", isTransfer: false },
      { name: "Lesseps", isTransfer: true },
      { name: "Vallcarca", isTransfer: false },
      { name: "Penitents", isTransfer: false },
      { name: "Vall d'Hebron", isTransfer: true },
      { name: "Montbau", isTransfer: false },
      { name: "Mundet", isTransfer: false },
      { name: "Valldaura", isTransfer: false },
      { name: "Canyelles", isTransfer: false },
      { name: "Roquetes", isTransfer: false },
      { name: "Trinitat Nova", isTransfer: false },
    ],
  },
  {
    id: "L4",
    name: "L4",
    color: "var(--L4)",
    operator: "TMB",
    stops: [
      { name: "Trinitat Nova", isTransfer: false },
      { name: "Via Júlia", isTransfer: false },
      { name: "Llucmajor", isTransfer: false },
      { name: "Maragall", isTransfer: true },
      { name: "Guinardó | Hospital de Sant Pau", isTransfer: false },
      { name: "Alfons X", isTransfer: false },
      { name: "Joanic", isTransfer: true },
      { name: "Verdaguer", isTransfer: true },
      { name: "Girona", isTransfer: false },
      { name: "Passeig de Gràcia", isTransfer: true },
      { name: "Urquinaona", isTransfer: true },
      { name: "Jaume I", isTransfer: false },
      { name: "Barceloneta", isTransfer: true },
      { name: "Ciutadella | Vila Olímpica", isTransfer: false },
      { name: "Bogatell", isTransfer: false },
      { name: "Llacuna", isTransfer: false },
      { name: "Poblenou", isTransfer: false },
      { name: "Selva de Mar", isTransfer: false },
      { name: "El Maresme | Fòrum", isTransfer: true },
      { name: "Besòs Mar", isTransfer: false },
      { name: "Besòs", isTransfer: false },
      { name: "La Pau", isTransfer: false },
    ],
  },
  {
    id: "L5",
    name: "L5",
    color: "var(--L5)",
    operator: "TMB",
    stops: [
      { name: "Cornellà Centre", isTransfer: false },
      { name: "Gavarra", isTransfer: false },
      { name: "Sant Ildefons", isTransfer: false },
      { name: "Can Boixeres", isTransfer: false },
      { name: "Can Vidalet", isTransfer: false },
      { name: "Pubilla Cases", isTransfer: false },
      { name: "Ernest Lluch", isTransfer: false },
      { name: "Collblanc", isTransfer: false },
      { name: "Badal", isTransfer: false },
      { name: "Plaça de Sants", isTransfer: false },
      { name: "Sants Estació", isTransfer: true },
      { name: "Entença", isTransfer: false },
      { name: "Hospital Clínic", isTransfer: false },
      { name: "Diagonal", isTransfer: true },
      { name: "Verdaguer", isTransfer: true },
      { name: "Sagrada Família", isTransfer: true },
      { name: "Sant Pau | Dos de Maig", isTransfer: false },
      { name: "Camp de l'Arpa", isTransfer: false },
      { name: "La Sagrera", isTransfer: true },
      { name: "Congrés", isTransfer: false },
      { name: "Maragall", isTransfer: false },
      { name: "Virrei Amat", isTransfer: false },
      { name: "Vilapicina", isTransfer: false },
      { name: "Horta", isTransfer: false },
      { name: "El Carmel", isTransfer: false },
      { name: "El Coll | La Teixonera", isTransfer: false },
      { name: "Vall d'Hebron", isTransfer: true },
    ],
  },
  {
    id: "L9N",
    name: "L9 Nord",
    color: "var(--L9)",
    operator: "TMB",
    stops: [
      { name: "La Sagrera", isTransfer: true },
      { name: "Onze de Setembre", isTransfer: false },
      { name: "Bon Pastor", isTransfer: false },
      { name: "Can Peixauet", isTransfer: false },
      { name: "Santa Rosa", isTransfer: false },
      { name: "Fondo", isTransfer: true },
      { name: "Església Major", isTransfer: false },
      { name: "Singuerlín", isTransfer: false },
      { name: "Can Zam", isTransfer: false },
    ],
  },
  {
    id: "L9S",
    name: "L9 Sud",
    color: "var(--L9)",
    operator: "TMB",
    stops: [
      { name: "Aeroport T1", isTransfer: true },
      { name: "Aeroport T2", isTransfer: false },
      { name: "Mas Blau", isTransfer: false },
      { name: "Parc Nou", isTransfer: false },
      { name: "Cèntric", isTransfer: false },
      { name: "El Prat Estació", isTransfer: false },
      { name: "Les Moreres", isTransfer: false },
      { name: "Mercabarna", isTransfer: false },
      { name: "Parc Logístic", isTransfer: false },
      { name: "Fira", isTransfer: false },
      { name: "Europa | Fira", isTransfer: false },
      { name: "Can Tries | Gornal", isTransfer: false },
      { name: "Torrassa", isTransfer: true },
      { name: "Collblanc", isTransfer: false },
      { name: "Zona Universitària", isTransfer: true },
    ],
  },
  {
    id: "L10N",
    name: "L10 Nord",
    color: "var(--L10)",
    operator: "TMB",
    stops: [
      { name: "La Sagrera", isTransfer: true },
      { name: "Onze de Setembre", isTransfer: false },
      { name: "Bon Pastor", isTransfer: false },
      { name: "Llefià", isTransfer: false },
      { name: "La Salut", isTransfer: false },
      { name: "Gorg", isTransfer: true },
    ],
  },
  {
    id: "L10S",
    name: "L10 Sud",
    color: "var(--L10)",
    operator: "TMB",
    stops: [
      { name: "ZAL | Riu Vell", isTransfer: false },
      { name: "Ecoparc", isTransfer: false },
      { name: "Port Comercial | La Factoria", isTransfer: false },
      { name: "Zona Franca", isTransfer: false },
      { name: "Foc", isTransfer: false },
      { name: "Foneria", isTransfer: false },
      { name: "Ciutat de la Justícia", isTransfer: true },
      { name: "Provençana", isTransfer: false },
      { name: "Can Tries | Gornal", isTransfer: false },
      { name: "Torrassa", isTransfer: true },
      { name: "Collblanc", isTransfer: false },
    ],
  },
  {
    id: "L11",
    name: "L11",
    color: "var(--L11)",
    operator: "TMB",
    stops: [
      { name: "Trinitat Nova", isTransfer: false },
      { name: "Casa de l'Aigua", isTransfer: false },
      { name: "Torre Baró | Vallbona", isTransfer: false },
      { name: "Ciutat Meridiana", isTransfer: false },
      { name: "Can Cuiàs", isTransfer: false },
    ],
  },

  // --- LÍNEAS FGC ---
  {
    id: "L6",
    name: "L6",
    color: "var(--L6)",
    operator: "FGC",
    stops: [
      { name: "Plaça Catalunya", isTransfer: true },
      { name: "Provença", isTransfer: true },
      { name: "Gràcia", isTransfer: false },
      { name: "Sant Gervasi", isTransfer: false },
      { name: "Muntaner", isTransfer: false },
      { name: "La Bonanova", isTransfer: false },
      { name: "Les Tres Torres", isTransfer: false },
      { name: "Sarrià", isTransfer: true },
    ],
  },
  {
    id: "L7",
    name: "L7",
    color: "var(--L7)",
    operator: "FGC",
    stops: [
      { name: "Plaça Catalunya", isTransfer: true },
      { name: "Provença", isTransfer: true },
      { name: "Gràcia", isTransfer: false },
      { name: "Plaça Molina", isTransfer: false },
      { name: "Pàdua", isTransfer: false },
      { name: "El Putxet", isTransfer: false },
      { name: "Avinguda Tibidabo", isTransfer: true },
    ],
  },
  {
    id: "L8",
    name: "L8",
    color: "var(--L8)",
    operator: "FGC",
    stops: [
      { name: "Plaça Espanya", isTransfer: true },
      { name: "Magòria | La Campana", isTransfer: false },
      { name: "Ildefons Cerdà", isTransfer: false },
      { name: "Europa | Fira", isTransfer: false },
      { name: "Gornal", isTransfer: false },
      { name: "Sant Josep", isTransfer: false },
      { name: "L'Hospitalet | Av. Carrilet", isTransfer: true },
      { name: "Almeda", isTransfer: false },
      { name: "Cornellà | Riera", isTransfer: false },
      { name: "Sant Boi", isTransfer: false },
      { name: "Molí Nou | Ciutat Cooperativa", isTransfer: false },
    ],
  },
  {
    id: "L12",
    name: "L12",
    color: "var(--L12)",
    operator: "FGC",
    stops: [
      { name: "Sarrià", isTransfer: true },
      { name: "Reina Elisenda", isTransfer: false },
    ],
  },
];

const stopsList = document.getElementById("stops");
const selector = document.getElementById("line-options");

//function to renderize metro stops
function renderMetro(metroLine) {
  //metro line es el valor que li pases a la funcio, que en el nostre cas abaix es event target value per tant el valor del select
  let lineaId = metroLine; //saves the metro id line selectes
  let foundLine = metroData.find((item) => item.id === lineaId); //array value where its id its the same of the id selected
  if (!foundLine) {
    return; // Stops the function if there isn't any value
  }
  stopsList.innerHTML = ' '; //deletes previous html
  //loop to create a li element inside stopsList (ul) with the text of every element (trinitat nova, via julia, llucmajor...)
  foundLine.stops.forEach(element => {
    //create li element
    const li = document.createElement('li');
    //Add text in the li element
    li.textContent = element.name;
    //Add class to li
    li.className = "stopLi"
    //If its an important stop, add class
    if (element.isTransfer) {
      li.classList.add('importantStop')
    }
    //Child of ul
    stopsList.appendChild(li);
  })
}

//function to style the page and the renderized stops
function styleWithMetro(metroLine) {
    let lineaId = metroLine;
    const cssColor = `var(--${lineaId.toUpperCase()})`;
    //Creates a CSS variable with the line color depending on the seleccioned line. Use it as a CSS variable in CSS file
    document.body.style.setProperty('--line-color', cssColor);
}

//Event when selecting a Metro Line
selector.addEventListener("change", (event) => {
  renderMetro(event.target.value);
  styleWithMetro(event.target.value);
});
