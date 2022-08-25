
let form = document.getElementById("form").addEventListener("submit",startJourney);


 function startJourney(e) {
    e.preventDefault();
    let obj = {
        fname : document.getElementById("fname").value,
        lname : document.getElementById("lname").value,
        email : document.getElementById("email").value,
        language : document.getElementById("lang").value
    }
    
    localStorage.setItem("EnrollData",JSON.stringify(obj));
    window.location.href="welcome.html"
}