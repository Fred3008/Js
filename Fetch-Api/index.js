const header = document.getElementById("header");
const content = document.getElementById("content")

function getJjocke() {
    fetch("https://api.blablagues.net/?rub=blagues")
        .then((res) => res.json())
        .then((data) => {

            const joke = data.data.content;
            console.log(joke);


            header.textContent = joke.text_head
            content.textContent = joke.text !== "" ?
                joke.text :
                joke.text_hidden;
        });
}
getJjocke();

document.body.addEventListener("click", getJjocke)