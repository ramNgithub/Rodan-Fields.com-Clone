
let container=document.getElementById("container")
let cart=JSON.parse(localStorage.getItem("cart")) || [];
function Display(data){
  container.innerHTML=null;
  data.forEach(function (el) {
  let div = document.createElement("div");
  div.addEventListener("click",function(){
    show(el);
  })
  let image_url = document.createElement("img");
  image_url.setAttribute("src", el.image);

  let btn = document.createElement("button");
  btn.innerText = "ADD TO BAG";
  btn.addEventListener("click",function(){
    addToCart(el);

  })
  let proName = document.createElement("h2");
  proName.innerText = el.name;
  let dataPrice = document.createElement("p");
  dataPrice.innerText =el.title;
  let price=document.createElement("h1")
  price.innerText="$"+el.price;
  let t=document.createElement("h6")
  t.innerText="Best Seller";

  div.append(image_url,t, proName, dataPrice,price,btn);

  container.append(div);
});
}
Display(cart);