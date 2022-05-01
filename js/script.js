let form = document.querySelector(".form-container");
let input = document.querySelector(".input-email");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInput();
})


function checkInput() {
    let inputValue = input.value;
    let error = document.querySelector(".error");

    if(inputValue === "" || !checkEmail(inputValue)) {
        error.innerText = "Please enter a valid email address";
        error.style.visibility = "visible";
    }
}


function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
}
