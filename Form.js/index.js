const inputs = document.querySelectorAll('input[type="text"], input[type="password]');

const pseudoChecked = (value) => {
    console.log(value);
}
const emailChecked = () => {

}
const passwordChecked = () => {

}
const confirmChecked = () => {

}

inputs.forEach((input) => {
    input.addEventListener("input", (e) => {
        console.log(e.target.value);
        switch (e.target.id) {
            case "pseudo":
                pseudoChecked(e.target.value);
                break;
            case "email":
                emailChecked();
                break
            case "password":
                passwordChecked();
                break
            case "confirm":
                confirmChecked();
                break
            default:
                null;
        }
    })
})