const metroData = [
    // --- LÍNEAS TMB ---
    {
        id: "L1",
        name: "L1",
        color: "#E1393E", 
        operator: "TMB",
        stops: [
            "Hospital de Bellvitge", "Bellvitge", "Av. Carrilet", "Rambla Just Oliveras", 
            "Can Serra", "Florida", "Torrassa", "Santa Eulàlia", "Mercat Nou", 
            "Plaça de Sants", "Hostafrancs", "Espanya", "Rocafort", "Urgell", 
            "Universitat", "Catalunya", "Urquinaona", "Arc de Triomf", "Marina", 
            "Glòries", "Clot", "Navas", "La Sagrera", "Fabra i Puig", "Sant Andreu", 
            "Torras i Bages", "Trinitat Vella", "Baró de Viver", "Santa Coloma", "Fondo"
        ]
    },
    {
        id: "L2",
        name: "L2",
        color: "#91338B", 
        operator: "TMB",
        stops: [
            "Paral·lel", "Sant Antoni", "Universitat", "Passeig de Gràcia", 
            "Tetuan", "Monumental", "Sagrada Família", "Encants", "Clot", 
            "Bac de Roda", "Sant Martí", "La Pau", "Verneda", "Artigues | Sant Adrià", 
            "Sant Roc", "Gorg", "Pep Ventura", "Badalona Pompeu Fabra"
        ]
    },
    {
        id: "L3",
        name: "L3",
        color: "#00A04B", 
        operator: "TMB",
        stops: [
            "Zona Universitària", "Palau Reial", "Maria Cristina", "Les Corts", 
            "Plaça del Centre", "Sants Estació", "Tarragona", "Espanya", "Poble Sec", 
            "Paral·lel", "Drassanes", "Liceu", "Catalunya", "Passeig de Gràcia", 
            "Diagonal", "Fontana", "Lesseps", "Vallcarca", "Penitents", 
            "Vall d'Hebron", "Montbau", "Mundet", "Valldaura", "Canyelles", 
            "Roquetes", "Trinitat Nova"
        ]
    },
    {
        id: "L4",
        name: "L4",
        color: "#FCAE22", 
        operator: "TMB",
        stops: [
            "Trinitat Nova", "Via Júlia", "Llucmajor", "Maragall", "Guinardó | Hospital de Sant Pau", 
            "Alfons X", "Joanic", "Verdaguer", "Girona", "Passeig de Gràcia", 
            "Urquinaona", "Jaume I", "Barceloneta", "Ciutadella | Vila Olímpica", 
            "Bogatell", "Llacuna", "Poblenou", "Selva de Mar", "El Maresme | Fòrum", 
            "Besòs Mar", "Besòs", "La Pau"
        ]
    },
    {
        id: "L5",
        name: "L5",
        color: "#006CA4", 
        operator: "TMB",
        stops: [
            "Cornellà Centre", "Gavarra", "Sant Ildefons", "Can Boixeres", 
            "Can Vidalet", "Pubilla Cases", "Ernest Lluch", "Collblanc", "Badal", 
            "Plaça de Sants", "Sants Estació", "Entença", "Hospital Clínic", 
            "Diagonal", "Verdaguer", "Sagrada Família", "Sant Pau | Dos de Maig", 
            "Camp de l'Arpa", "La Sagrera", "Congrés", "Maragall", "Virrei Amat", 
            "Vilapicina", "Horta", "El Carmel", "El Coll | La Teixonera", "Vall d'Hebron"
        ]
    },
    {
        id: "L9N",
        name: "L9 Nord",
        color: "#EF7A00", // Naranja TMB
        operator: "TMB",
        stops: [
            "La Sagrera", "Onze de Setembre", "Bon Pastor", "Can Peixauet", 
            "Santa Rosa", "Fondo", "Església Major", "Singuerlín", "Can Zam"
        ]
    },
    {
        id: "L9S",
        name: "L9 Sud",
        color: "#EF7A00", // Naranja TMB
        operator: "TMB",
        stops: [
            "Aeroport T1", "Aeroport T2", "Mas Blau", "Parc Nou", "Cèntric", 
            "El Prat Estació", "Les Moreres", "Mercabarna", "Parc Logístic", 
            "Fira", "Europa | Fira", "Can Tries | Gornal", "Torrassa", 
            "Collblanc", "Zona Universitària"
        ]
    },
    {
        id: "L10N",
        name: "L10 Nord",
        color: "#00ADEF", // Azul Celeste TMB
        operator: "TMB",
        stops: [
            "La Sagrera", "Onze de Setembre", "Bon Pastor", "Llefià", 
            "La Salut", "Gorg"
        ]
    },
    {
        id: "L10S",
        name: "L10 Sud",
        color: "#00ADEF", // Azul Celeste TMB
        operator: "TMB",
        stops: [
            "ZAL | Riu Vell", "Ecoparc", "Port Comercial | La Factoria", 
            "Zona Franca", "Foc", "Foneria", "Ciutat de la Justícia", 
            "Provençana", "Can Tries | Gornal", "Torrassa", "Collblanc"
        ]
    },
    {
        id: "L11",
        name: "L11",
        color: "#B0D095", // Verde Claro TMB
        operator: "TMB",
        stops: [
            "Trinitat Nova", "Casa de l'Aigua", "Torre Baró | Vallbona", 
            "Ciutat Meridiana", "Can Cuiàs"
        ]
    },

    // --- LÍNEAS FGC ---
    {
        id: "L6",
        name: "L6",
        color: "#5F4D93", 
        operator: "FGC",
        stops: [
            "Plaça Catalunya", "Provença", "Gràcia", "Sant Gervasi", "Muntaner", 
            "La Bonanova", "Les Tres Torres", "Sarrià"
        ]
    },
    {
        id: "L7",
        name: "L7",
        color: "#B0763D", 
        operator: "FGC",
        stops: [
            "Plaça Catalunya", "Provença", "Gràcia", "Plaça Molina", "Pàdua", 
            "El Putxet", "Avinguda Tibidabo"
        ]
    },
    {
        id: "L8",
        name: "L8",
        color: "#E26FA8", 
        operator: "FGC",
        stops: [
            "Plaça Espanya", "Magòria | La Campana", "Ildefons Cerdà", "Europa | Fira", 
            "Gornal", "Sant Josep", "L'Hospitalet | Av. Carrilet", "Almeda", 
            "Cornellà | Riera", "Sant Boi", "Molí Nou | Ciutat Cooperativa"
        ]
    },
    {
        id: "L12",
        name: "L12",
        color: "#B3CDE0", 
        operator: "FGC",
        stops: [
            "Sarrià", "Reina Elisenda"
        ]
    }
];