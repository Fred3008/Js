let google = {

    "siegeSocial": "Googleplex, Mountain View, California, United States",
    "fondateurs": [{
            "name": "Larry Page",
            "birth": "26/03/1973",
            "city": "Michigan"
        },
        {
            "name": "Sergey Brin",
            "birth": " 21/08/1973",
            "city": "Moscou"
        }
    ],
    "transactions": [{
            "year": 2008,
            "valeur": 16.49
        },
        { "year": 2012, "valeur": 37.97 },
        { "year": 2016, "valeur": 89.46 },
        { "year": 2018, "valeur": 136.2 }
    ]


}


for (let name in google) {
    console.log(name);

}
let clee = Object.keys(google)
    //console.log(clee);

for (i = 0; i < clee.length; i++) {
    console.log(google[clee[i]]);
}
console.log(google.transactions[[1], [2]].valeur);