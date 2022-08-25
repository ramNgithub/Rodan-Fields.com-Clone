
let Ano=JSON.parse(localStorage.getItem("pto"));
let large=document.getElementById("imge")
let imgo=document.getElementById("imgo")

function appen(Ano){
    large.innerHTML=null;
    let image=document.createElement("img")
    image.src=Ano.image;
    let p=document.createElement("p")
    p.innerText="#1 Premium Lash Serum in the U.S. in 2021!* Our famous lash conditioning serum is applied nightly to promote the appearance of longer, stronger and darker-looking lashes (or brows!)"+Ano.title;
    let name=document.createElement("h1")
    name.innerText=Ano.name;
    let size=document.createElement("h4")
    size.innerText="Size: 5 ML /  Use: Once daily, in the PM";
    
    let btn = document.createElement("button");
    btn.innerText = "ADD TO BAG";
    btn.addEventListener("click",function(){
      addToCart(el);

    });
    let price=document.createElement("h2")
    price.innerText= " $"+ Ano.price

    large.append(image);
    imgo.append(name,p,size,price,btn)
}
appen(Ano)