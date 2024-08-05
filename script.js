charge = "none"; // variable for outputting the charge of an element later
userInput = "none";
atomicNumber = "none";

// important for the loop later
searchValue = 0;

// data sets, no idea how to use json lmao suck it
// just remembered that nested arrays exist, too far in so idc anymore
    // nested arrays would probably be too much for my 5 iq mind to handle anyways
literallyEveryElement = [
    "hydrogen",
    "helium",
    "lithium",
    "beryllium",
    "boron",
    "carbon",
    "nitrogen",
    "oxygen",
    "fluorine",
    "neon",
    "sodium",
    "magnesium",
    "aluminum",
    "silicon",
    "phosphorus",
    "sulfur",
    "chlorine",
    "argon",
    "potassium",
    "calcium",
    "scandium",
    "titanium",
    "vanadium",
    "chromium",
    "manganese",
    "iron",
    "cobalt",
    "nickel",
    "copper",
    "zinc",
    "gallium",
    "germanium",
    "arsenic",
    "selenium",
    "bromine", // I LOVE BROMINE SO MUCH ALJSDFASDJL
    "krypton",
    "rubidium",
    "strontium",
    "yttrium",
    "zirconium",
    "niobium",
    "molybdenum",
    "technetium",
    "ruthenium",
    "rhodium",
    "palladium",
    "silver",
    "cadmium",
    "indium",
    "tin",
    "antimony",
    "tellurium",
    "iodine",
    "xenon",
    "caesium",
    "barium",
    "lanthanum",
    "hafnium",
    "tantalum",
    "tungsten",
    "rhenium",
    "osmium",
    "iridium",
    "platinum",
    "gold",
    "mercury",
    "thallium",
    "lead",
    "bismuth",
    "polonium",
    "astatine",
    "radon",
    "francium",
    "radium",
    "actinium",
    "rutherfordium",
    "dubnium",
    "seaborgium",
    "bohrium",
    "hassium",
    "meitnerium",
    "darmstadtium",
    "roentgenium",
    "copernicium",
    "nihonium",
    "flerovium",
    "moscovium",
    "livermorium",
    "tennessine",
    "oganesson",

    /* im adding data by going top to bottom on the periodic table
    so  these elements are gonna be here even thoug they should be
    somewhere in between some stuff
    */

    "cerium",
    "praseodymium",
    "neodynium",
    "promethium",
    "samarium",
    "europium",
    "gadolinium",
    "terbium",
    "dysprosium",
    "holmium",
    "erbium",
    "thulium",
    "ytterbium",
    "lutetium",
    "thorium",
    "protactinium",
    "uranium",
    "neptunium",
    "plutonium",
    "americium",
    "curium",
    "berkelium",
    "californium",
    "einsteinium",
    "fermium",
    "mendelevium",
    "nobelium",
    "lawrencium"
];
// do i actually have to manually write down every single element and its molar mass
// thinking about doing the charge of elements too and thats another god damn data set
literallyEveryMolarMass = [
    1.0078,
    4.0026,
    6.9410,
    9.0122,
    10.811,
    12.011,
    14.007,
    15.999,
    18.998,
    20.180,
    22.990,
    24.305,
    26.982,
    28.086,
    30.974,
    32.065,
    35.453,
    39.948,
    39.098,
    40.078,
    44.956,
    47.867,
    50.942,
    51.996,
    54.938,
    55.845,
    58.933,
    58.693,
    63.546,
    65.380,
    69.723,
    72.640,
    74.922,
    78.960,
    79.904, // YEAHHH I LOVE BROMINE
    83.798,
    85.468,
    87.620,
    88.906,
    91.224,
    92.906,
    95.950,
    98,
    101.07,
    102.91,
    106.42,
    107.87,
    112.41,
    114.82, // what if i messed up somewhere along the way
    118.71, // and everything is off
    121.76,
    127.60,
    126.90,
    131.29,
    132.91,
    137.33,
    138.91,
    178.49,
    180.95,
    183.84,
    186.21,
    190.23,
    192.22,
    195.08,
    196.97,
    200.59,
    204.38,
    207.20,
    208.98,
    209,
    210,
    222,
    223,
    226,
    227,
    267,
    262,
    269,
    264,
    269,
    278,
    281,
    282,
    285,
    286,
    289,
    289,
    293,
    294,
    294,

    // bottom elements

    140.12,
    140.91,
    144.24,
    145,
    150.36,
    151.96,
    157.25,
    158.93,
    162.5,
    164.93,
    167.26,
    168.93,
    173.04,
    174.97,
    232.04,
    231.04,
    238.03,
    237.05,
    244,
    243,
    247,
    247,
    251,
    252,
    257,
    258,
    259,
    262
];
// update, wrote down every single element and its corresponding molar mass. idk how to feel about this

// not gonna lie i really should look up a more efficient way to do this
literallyEveryElementSymbol = [
    "H",
    "He",
    "Li",
    "Be",
    "B",
    "C",
    "N",
    "O",
    "F",
    "Ne",
    "Na",
    "Mg",
    "Al",
    "Si",
    "P",
    "S",
    "Cl",
    "Ar",
    "K",
    "Ca",
    "Sc",
    "Ti",
    "V",
    "Cr",
    "Mn",
    "Fe",
    "Co",
    "Ni",
    "Cu",
    "Zn",
    "Ga",
    "Ge",
    "As",
    "Se",
    "Br",
    "Kr",
    "Rb",
    "Sr",
    "Y",
    "Zr",
    "Nb",
    "Mo",
    "Tc",
    "Ru",
    "Rh",
    "Pd",
    "Ag",
    "Cd",
    "In",
    "Sn",
    "Sb",
    "Te",
    "I",
    "Xe",
    "Cs",
    "Ba",
    "La",
    "Hf",
    "Ta",
    "W",
    "Re",
    "Os",
    "Ir",
    "Pt",
    "Au",
    "Hg",
    "Tl",
    "Pb",
    "Bi",
    "Po",
    "At",
    "Rn",
    "Fr",
    "Ra",
    "Ac",
    "Rf",
    "Db",
    "Sg",
    "Bh",
    "Hs",
    "Mt",
    "Ds",
    "Rg",
    "Cn",
    "Nh",
    "Fl",
    "Mc",
    "Lv",
    "Ts",
    "Og",
    "Ce",
    "Pr",
    "Nd",
    "Pm",
    "Sm",
    "Eu",
    "Gd",
    "Tb",
    "Dy",
    "Ho",
    "Er",
    "Tm",
    "Yb",
    "Lu",
    "Th",
    "Pa",
    "U",
    "Np",
    "Pu",
    "Am",
    "Cm",
    "Bk",
    "Cf",
    "Es",
    "Fm",
    "Md",
    "No",
    "Lr",

];

function query() {
    userInput = document.getElementById("textarea").value.toLowerCase();
    console.info("User inputted \"" + userInput +"\"");
    console.info("Parsing...")
    while (userInput != literallyEveryElement[searchValue]) {
        searchValue++;
        if (searchValue == 200) {
            alert("There were no elements that matched your search. Make sure you are using lowercase letters only.");
            console.error("No found element. Try searching using only lowercase letters.");
            break;
        }
    }
    console.info("Found element:", literallyEveryElement[searchValue]);
    console.info("Found Molar Mass:", literallyEveryMolarMass[searchValue]);


    // set info on the info section
    document.getElementById("elementInfo").textContent = literallyEveryElement[searchValue]; // Sets the "Element" thing on the info page to the selected element
    document.getElementById("molarMassInfo").textContent = literallyEveryMolarMass[searchValue]; // Sets the molar mass on the info page
    document.getElementById("elementSymbol").textContent = literallyEveryElementSymbol[searchValue];

    // ik this code looks bulky but at least i didnt use if statements to find the charge of an element one by one (coping)
    switch(searchValue) {

        // CHARGE IS 1
        case 0: // H
        case 2: // Li
        case 10: // Na
        case 18: // K
        case 36: // Rb
        case 54: // Cs
        case 72: // Fr
            charge = 1;
            break;

        // CHARGE IS 2
        case 3: // Be
        case 11: // Mg
        case 19: // Ca
        case 37: // Sr
        case 56: // Ba
        case 73: // Ra
            charge = 2;
            break;

        // CHARGE IS 3    
        case 4: // B
        case 13: // Al
        case 30: // Ga
        case 48: // In
        case 66: // Tl
        case 84: // Nh
            charge = 3;
            break;

        // CHARGE IS 4
        case 5: // C
        case 13: // Si
        case 31: // Ge
        case 49: // Sn
        case 66: // Pb
        case 85: // Fl
            charge = 4;
            break;

        // CHARGE IS -3
        case 6: // N
        case 13: // P
        case 31: // As
        case 49: // Sb
        case 68: // Bi
        case 86: // Mc
            charge = -3;
            break;

        // CHARGE IS -2
        case 7: // O
        case 15: // S
        case 33: // Se
        case 51: // Te
        case 69: // Po
        case 87: // Lv
            charge = -2;
            break;

        // CHARGE IS -1
        case 8: // F
        case 16: // Cl
        case 34: // Br
        case 52: // I
        case 70: // At
        case 88: // Ts
            charge = -1;
            break;

        // CHARGE IS 0
        case 1:
        case 9:
        case 17:
        case 35:
        case 53:
        case 71:
        case 89:
            charge = 0;
            break;
        default:
            charge = "none";
            break;
    }

    /*
    switch(searchValue) {
        default:
            atomicNumber = searchValue + 1;
            break;
    }
    */

    // this entire script is literally just spaghetti oh god why did i order the periodic table like this
    if (searchValue <= 56) {
        atomicNumber = searchValue + 1;
    } else if (searchValue <= 74) {
        atomicNumber = searchValue + 15;
    } else if (searchValue <= 89) {
        atomicNumber = searchValue + 29
    } else if (searchValue <= 103){
        atomicNumber = searchValue - 32;
    } else if (searchValue != 200) {
        atomicNumber = searchValue - 14;
    } else {
        atomicNumber = "none";
    }

    document.getElementById("atomicNumberInfo").textContent = atomicNumber;

    // send charge to info panel
    document.getElementById("chargeInfo").textContent = charge;
    console.info("Found charge:", charge);

    // allow the user to query again without having to refresh or do anything stupid
    searchValue = 0;
    atomicNumber =  "none";
    charge = "none";
}

// left click button go brrrr
// (run the getting info process when clicking the submit button)
document.getElementById("inputButton").onclick = function() {
    query();
}

// i hate my code