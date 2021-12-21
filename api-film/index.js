// let moovies;
// let searchThem = "";

function getFilm() {
    const search = document.getElementById("search")
    const results = document.getElementById("results")

    let url = "http://www.omdbapi.com/?apikey=f6e256e1&s=" + search.value
    fetch(url).then((res) => res.json())

    .then((data) => {
        console.log(data);
        data.Search.forEach(element => {
            let html = showMoovies(element)
            results.appendChild(html)
        });
    })
}
search.addEventListener("change", getFilm);

function showMoovies(data) {
    console.log(data);
    let html = document.createElement("div");
    html.innerHTML =
        ` <h2>${data.Title}</h2>
    
    <h3>${data.Year}</h3>
    <img class ="moovie-img" src="${data.Poster}" />
    
    `;
    return html
}