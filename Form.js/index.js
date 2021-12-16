function validateName() {
    let name = document.getElementById("firstName").value;
    if (name.length == 0) {
        prompt('Name is required', 'name-error', 'red')

        return false
    }
}
validateName()

let submit = document.querySelector('button')

function onSubmit() {
    console.log("submit")
}
onSubmit()