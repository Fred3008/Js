/*les booucles for*/

function factoriser(num) {
    for (i = 1; num > 1; num--) {
        i = num * i;
    }

    return i;
}

console.log(factoriser(3)); /* 1x2 2x3*/

console.log(factoriser(5)); //* 1x5=5   2x5 = 10 3x5 = 30 4x5 =120

function multiply(number5, number6, number7) {
    resultMultiply = number5 * number6 * number7;
    return resultMultiply;
}

let a = 6;
let b = 5;
let result = multiply(a, b, a);

console.log(resultMultiply); // 180

/* les Arrays*/

let fruits = ["Pomme", "Bannane", "Orange", "Citron"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]); // POMME ORANGE ETC ..
}
fruits.length; // = 4
fruits.pop(); //enleve la derniere valeur
fruits.push("kiwi"); // rajoute une valeur
fruits.slice(2); // découpe affiche orange citron kiwi
console.log(fruits);

let myArray = [
    [0, 7],
    [5, 7],
    [12, 18],
];

console.log(myArray[2][1]); // affiche 18

// Les Objets
/*let dog = {
  name: "Fritz",
  color: "black",
  age: 7,
};

console.log(dog.age); = 4

for (let property in dog) {
  console.log(dog[property]);  Affiche toutes les valeurs du tableau
}*/
// autres sintax objet
let dog = new Object();
dog.name = "choupette";
dog.color = "white";
dog.age = 5;
dog.aboie = function(number) {
    while (number > 0) {
        console.log(number.toString() + "wouaff wouaff");
        number--;
    }
};
dog.aboie(3); // affiche 3 FOIS WOUAFF

// function constructeur
function Dog(name, color, age) {
    this.name = name;
    this.color = color;
    this.age = age;
    this.boi = function() {
        console.log(
            "wouaf wouaff" +
            " " +
            this.name +
            " " +
            this.color +
            " " +
            "age" +
            " " +
            this.age
        );
    };
}
let petitCaniche = new Dog("fritz", "black", 7);
//console.log(petitCaniche);
petitCaniche.boi();

function conversion(degCel) {
    if (typeof degCel === "number") {
        let degf = degCel * (9 / 5) + 32;
        return degf;
    } else {
        return "il faut rentré un nombre";
    }
}

console.log(conversion(50));

function finSimilaire(str, fin) {
    if (str.length < fin.length) {
        return "operation impossible";
    } else {
        if (str.slice(-fin.length) === fin) {
            return "la fin est similaire";
        } else {
            return "la fin n'est pas similaire";
        }
    }
}

console.log(finSimilaire("ours", "rs"));

function trouverLongueurMax(str) {
    /*let mots = str.split(" ");
    let longMax = 0;

    for (let i = 0; i < mots.length; i++) {
      if (mots[i].length > longMax) {
        longMax = mots[i].length;
      }
    }
    return longMax;*/
    let tab = str.split(" "); // permet de retourner la phrase dans un tableau
    let max = {
        longueur: 0,
        mot: null,
    };
    tab.forEach((mot) => {
        if (mot.length > max.longueur) {
            max.longueur = mot.length;
            max.mot = mot;
        }
        console.log(mot, mot.length);
    });
    /*let mots = str.split(" ");
    return mots.reduce(function (x, y) {
      return Math.max(x, y.length);
    }, 0);
    let mots = str.split(" ");
    if (mots.length === 1) {
      return mots[0].length;
    }
    if (mots[0].length >= mots[1].length) {
      mots.splice(1, 1);
      return trouverLongueurMax(mots.join(" "));
    }
    if (mots[0].length <= mots[1].length) {
      return trouverLongueurMax(mots.slice(1).join(" "));
    }*/
}

console.log(trouverLongueurMax("Du sublime au ridicule il n'y a qu'un pas."));

let url = "www.apple.com/fr/shop/buy-mac/mac-mini/processeur-intel-core";
const tableau = url.split("/");

console.log("tableau", tableau);

let tableauMajus = [];
tableau.forEach((mot) => {
    tableauMajus.push(mot.toUpperCase());
});

let resultat = tableauMajus.join("/");
console.log(resultat);

let myString = "Hello John";
let position = myString.indexOf("John"); // se trouve a l'ndex 6
let mynewString = myString.replace("John", "Tim"); // remplace le mot
console.log(mynewString);

let string1 = "Hello";
let string2 = "John";
let mynewStringa = string1 + " " + string2;
//permet de faire les espaces
console.log(mynewStringa);

let x = 12;
let y = 5;
let resul = x++; // rajout +1 A x
console.log(x);
//racourci x += 1  ou x =x+y

//les condition
let speed = 110;

if (speed <= 70) {
    console.log("tu roules a la bonne vitesse");
} else if (speed < 100) {
    console.log("il faut que tu ralentisses!");
} else {
    console.log("tu roules trop vite c'est dangereux ");
}
//LES BOUCLES  While Et FORs
let number = 0;
while (number < 3) {
    console.log(number);
    number++; // 0 1 2
}
for (let number = 0; number < 5; number++) {
    console.log(number); // 0 1 2 3 4
}
// funxtion flecher
let sum = (y, x) => x + y;
console.log(sum(45, 6)); // 51
// function flecher

/*function insere(str, num) {
  str.push(num);
  str.sort();
  console.log(str);
  return str.indexOf(num);
}*/
function insere(str, num) {
    str.sort();
    console.log(str.sort());
    for (let i = 0; i < str.length; i++)
        if (str[i] >= num) {
            return insere;
        }
}
console.log(insere([30, 45, 87, 96, 54, 29], 60));

//PROGRAMATION OBJET
function MusicPlayer(filetype) {
    this.filetype = filetype;
}
MusicPlayer.hello = function() {
    return "hello baby !";
};
let song = new MusicPlayer("MP3");
document.write(MusicPlayer.hello() + "<br>");
document.write(song.filetype + "<br>");
song.filetype = "MP4";
document.write(song.filetype + "<br>");

function memeLettres(str) {
    let test = str[1].toLowerCase();
    let cible = str[0].toLowerCase();

    for (i = 0; i < test.length; i++) {
        if (cible.indexOf(test[i]) === -1) {
            return false;
        }
    }
    return true;
}
document.write(memeLettres(["concupiscence", "kens"]) + "<br>");

function additioner(num) {
    let max = Math.max(num[0], num[1]);
    let min = Math.min(num[0], num[1]);
    let acc = 0;

    for (let i = min; i <= max; i++) {
        acc += i;
    }
    return acc;
}
document.write(additioner([4, 10]) + "<br>");

function difTab(tabl1, tabl2) {
    let recup = [];

    function checkDiff(premier, second) {
        for (let i = 0; i < premier.length; i++) {
            if (second.indexOf(premier[i] === -1)) {
                recup.push(premier[i]);
            }
        }
    }
    checkDiff(tabl1, tabl2);
    checkDiff(tabl2, tabl1);
    return recup;
}
document.write(difTab([1, 2, 3, 5], [1, 2, 3, 4, 5, 6]));

function trouverLaPersonne(data, source) {
    let srcKeys = Object.keys(source);
    console.log(srcKeys);
    return data.filter(function(obj) {
        for (let i = 0; i < srcKeys.length; i++) {
            if (
                obj.hasOwnProperty(srcKeys[i]) === false ||
                obj[srcKeys[i]] !== source[srcKeys[i]]
            ) {
                return false;
            }
        }
        return true;
    });
}
console.log(
    trouverLaPersonne(
        [
            { prenom: "Tom", nom: "durand" },
            { prenom: "julliette", nom: "garcia" },
            { prenom: "Jean", nom: "Lafite" },
            { prenom: "Lucien", nom: "Lafite" },
            { prenom: "Lucien", nom: "Lafite" },
        ], { nom: "Lafite" }
    )
);

function regexTime(str) {
    var regex = /[%-/0-9]/g;

    return str.replace(regex, "");
}
console.log(
    regexTime("I4l est te-mp///s de %sav/oir u845til85iser 6le re%gex !")
);

let year = 2016;
if ((year % 4 === 0 && year % 100 > 0) || year % 400 === 0) {
    console.log(year + " est bissextille");
} else {
    console.log(year + "n'est pas bissextille");
}

var number1 = 42;

var units = number1 % 10; // les unités =
var tens = (number1 - units) / 10;
console.log(tens);
console.log(units);

function bubbleSort(array) {
    return array.sort((a, b) => {
        return a - b;
    });
}

console.log(bubbleSort([1, 4, 4, 99, 56, 53, 22, 44]));

/*-------METHODE REGEX------*/

function nbDeVoyelles(txt) {
    let regexVoyelles = txt.match(/[aeiouy]/gi);
    console.log(regexVoyelles);
    if (regexVoyelles) {
        return regexVoyelles.length;
    } else {
        return 0;
    }
}

console.log(nbDeVoyelles("hbczkjlzeifuygrfoov,nz"));

function abreviation(str) {
    const prenomNom = str.trim().split(" ");
    //console.log(prenomNom);
    if (prenomNom.length > 2) {
        prenomNom.slice(0, 2);
    }
    if (prenomNom.length > 1) {
        return `${prenomNom[0]}  ${prenomNom[1].charAt(0)}.`;
    } else {
        return prenomNom[0];
    }
}
console.log(abreviation("John")); // John D.
console.log(abreviation("Romy Schneider")); // Romy S.
console.log(abreviation("             Alfred Hitchcock                 ")); // Alfred H.

//   if (prenomNom.length > 1) {
//     return `${prenomNom[0]} ${prenomNom[1].charAt(0)}.`;
//   } else {
//     return prenomNom[0];
//   }
// }
// console.log(abreviation("John Doe")); // John D.
// console.log(abreviation("Romy Schneider")); // Romy S.
// console.log(abreviation("             Alfred Hitchcock                 ")); // Alfred H.

function anagrame(strA, strB) {
    const chainClean = (str) => {
        return str
            .toLowerCase()
            .replace(/[^a-z]/g, "")
            .split("")
            .sort()
            .join("");
    };

    return chainClean(strA) == chainClean(strB);
}

console.log(anagrame("$/^^gare", "    /.!Ra ge"));
console.log(anagrame("Faible", "fiable"));
console.log(anagrame("bougie", "piano"));

function tableauxSansDoublons(...arrays) {
    let nvTab = [];

    arrays.forEach((item) => {
        //PERMET DE RECUPERER LES ELEMENTS DUN TABLEAUX
        nvTab = [...nvTab, ...item];
    });

    //console.log(new Set(nvTab));
    return Array.from(new Set(nvTab));
}

console.log(tableauxSansDoublons([5, 4, 5], [6, 3, 5]));
console.log(tableauxSansDoublons(["a", "d", "z"], ["z", "d", "e", "a"]));

function tabSansDoublons() {
    let newTab = [];

    const arrDeArg = Array.from(arguments);
    console.log(arrDeArg);
    arrDeArg.forEach((el) => {
        for (i = 0; i < el.length; i++) {
            newTab.push(el[i]);
        }
    });
    // fltrer
    let tabClean = newTab.filter((item, index) => newTab.indexOf(item) === index);
    return tabClean;
}

console.log(tabSansDoublons([5, 4, 5], [6, 3, 5]));
console.log(tabSansDoublons(["a", "d", "z"], ["z", "d", "e", "a"]));

function lePlusfrequent(tab) {
    let myObj = {};
    let tabCopie = tab;
    let compteur = 0;

    while (tabCopie.length > 0) {
        for (i = 0; i < tabCopie.length; i++) {
            if (tabCopie[0] === tabCopie[i]) {
                compteur++;
            }
        }

        myObj[`nombrDe${tabCopie[0]}`] = [tabCopie[0], compteur];
        compteur = 0;

        let varAct = tabCopie[0];
        tabCopie = tabCopie.filter((item) => item !== varAct);
        console.log(tabCopie);
    }
    //console.log(myObj);

    let plusGrand = 0;
    let itemPlusnombreux = [];

    for (prop in myObj) {
        if (myObj[prop][1] >= plusGrand) {
            plusGrand = myObj[prop][1];
        }
    }
    //console.log(pluGrand);
    for (prop in myObj) {
        if (myObj[prop][1] === 4) {
            itemPlusnombreux.push(myObj[prop][0]);
        }
    }
    //console.log(itemPlusnombreux);

    if (itemPlusnombreux.length > 1) {
        return `Les 2léments : ${itemPlusnombreux} sont apparues le plus souvent, pour un total de ${plusGrand} fois chacun `;
    } else {
        return ` L'élément : ${itemPlusnombreux} est apparues le plus sounent pour un total de : ${plusGrand} fois`;
    }
}

console.log(
    lePlusfrequent([3, "a", 3, 2, "a", "b", 2, "b", 4, "a", 4, 3, "a", 4, "b", 2])
);

function nbDeVoyelles(txt) {
    const voyelles = ["a", "e", "i", "o", "u", "y"];
    let nbDeVoyelles = 0;
    for (let lettre of txt.toLowerCase()) {
        if (voyelles.includes(lettre)) {
            nbDeVoyelles++;
        }
    }
    return nbDeVoyelles;
}

function nbDeVoyelles(txt) {

    let regexVoyelles = txt.match(/[aeiouy]/gi);
    if (regexVoyelles)
        return regexVoyelles.length;

    else
        return 0;

}


console.log(nbDeVoyelles("nozjoldiscoihjazeufhrv"));

function abreviation(str) {
    const prenomNom = str.trim().split(" ")
        // console.log(prenom);

    if (prenomNom.length > 2)
        prenomNom.slice(0, 2)
    if (prenomNom.length > 1)
        return (`${prenomNom[0]} ${prenomNom[1].charAt(0)}.`)
    else
        return prenomNom[0]

}



console.log(abreviation("    john   Dogae     "))


function anagram(strA, strB) {

    const chainClean = (str) => {

        return str.toLowerCase().replace(/[^a-z]/g, "").split("").sort().join("")

    }
    return chainClean(strA) == chainClean(strB)
}

console.log(anagram("Faible", "fiable"));
console.log(anagram("$*^^gare", "Rage"));
console.log(anagram("bougie", "piano"));

let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
for (i = 0; i < array.length; i++) {
    console.log(array[i]);
    console.log(array.reverse());
}