let form = document.getElementById("addUserForm");
let namee = document.getElementById("name");
let email = document.getElementById("email");
let paraname = document.getElementById("nameErrMsg");
let paraemail = document.getElementById("emailErrMsg");
let statuss = document.getElementById("status");
let gendermale = document.getElementById("genderMale");
let genderfemale = document.getElementById("genderFemale");

let dataform = {
    name: "",
    email: "",
    status: "",
    gender: "",
};

function pass_to_post(dataform) {
    let option = {
        method: "POST",
        headers: {
            "Content-Type": "Application/json",
            Accept: "Application/json",
            Authorization: "Bearer 819cedc5167a14fc6718c74411131d562c6e3bc6d6ce5f6bb558476aa355c102",
        },
        body: JSON.stringify(dataform)
    };

    fetch("https://gorest.co.in/public-api/users", option)
        .then(function(each) {
            return each.json();
        })
        .then(function(eachdata) {
            console.log(eachdata);
        });
}

form.addEventListener("submit", function(event) {
    event.preventDefault();

    pass_to_post(dataform);

});

namee.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        paraname.textContent = "*Required";
    } else {
        paraname.textContent = "";
    }
});

namee.addEventListener("change", function(event) {
    let valtwo = event.target.value;
    dataform.name = valtwo;
});

email.addEventListener("change", function(event) {
    let valthree = event.target.value;
    dataform.email = valthree;
});

email.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        paraemail.textContent = "*Required";
    } else {
        paraemail.textContent = "";
    }
});

statuss.addEventListener("change", function(event) {
    let valone = statuss.value;
    dataform.status = valone;
});

gendermale.addEventListener("change", function(event) {
    if (gendermale.checked) {
        dataform.gender = "Male";
    } else {
        dataform.gender = "Female";
    }
});

console.log(dataform);
