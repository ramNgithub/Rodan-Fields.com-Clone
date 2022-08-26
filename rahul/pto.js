
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
      addcart(Ano);

    });
    let price=document.createElement("h2")
    price.innerText= " $"+ Ano.price;
    let de=document.createElement("span")
    de.innerText="Best Seller"
    
    let more=document.createElement("div")
    let day=document.createElement("h4")
    day.innerText="60 Day Money Back Guarantee";
    more.append(day);

    large.append(image);
    imgo.append(name,p,size,price,btn,more)
}
appen(Ano)
let cart=JSON.parse(localStorage.getItem("cart")) || [];
function addcart(Ano){
  
  cart.push(Ano);
  alert("product added to cart");
  localStorage.setItem("cart",JSON.stringify(cart));
  
}

let image1=document.getElementById("image1")
let image2=document.getElementById("image2")
let image3=document.getElementById("image3")

function imgeadd(Ano){
  let img1=document.createElement("img")
  img1.src=Ano.image1;
  let img2=document.createElement("img")
  img2.src=Ano.image2;
  let img3=document.createElement("img")
  img3.src=Ano.image3;
  image1.append(img1);
  image2.append(img2);
  image3.append(img3);

}
imgeadd(Ano)