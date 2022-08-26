
let user = JSON.parse(localStorage.getItem("EnrollData"));
console.log(user)

function getData(user){
    let h1 = document.createElement("h1");
    h1.innerText=`Welcome ${user.fname}!`

    document.getElementById("wlcm_name").append(h1)
}
getData(user);

