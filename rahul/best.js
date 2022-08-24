let data=[
    {
        image:"https://www.rodanandfields.com/en-us/medias/ENHLSH01-Regimen-Explainer-R-F-Lash-Boost-570x570-Desktop.png?context=bWFzdGVyfGltYWdlc3wxMDc0OHxpbWFnZS9wbmd8aW1hZ2VzL2hmMS9oYWMvMTQ1MzIwNDI1ODgxOTAucG5nfDQyNTQ0OGUzYmMwZTJkM2YzNzE1MjE2NzQ1M2YxMWQ5M2E3ZWQ2MjAwMDA3MzFmNjQyOWUwNDU3OWZmMTkzZDY",
        title:"Applied nightly to promote the appearance of longer, stronger and darker-looking lashes. ",
        name:"R + F Lash Boost",
        price: 155,
    },
    {
        image:"https://www.rodanandfields.com/en-us/medias/TRFS-Regimen-Explainer-GLOBAL-570x570.png?context=bWFzdGVyfGltYWdlc3wyODM2M3xpbWFnZS9wbmd8aW1hZ2VzL2g5Yy9oNzcvMTM3NTgzODUzODk1OTgucG5nfGYyZGUwNzdmOWM3N2Q2M2FlMjM4Zjc4MjQxNWZkNmIzOTc0NjIyZWM3MDgyZTY3YzA5YjMyZjNhZWY3MGE3YzY",
        title:"Our most comprehensive anti-aging serum to revitalize and address all key signs of aging. ",
        name:"Total RF Serum",
        price: 175,
    },
    {
        image:"https://www.rodanandfields.com/en-us/medias/ENG010-What-sIncluded-570x570.png?context=bWFzdGVyfGltYWdlc3wxODU2NXxpbWFnZS9wbmd8aW1hZ2VzL2g5YS9oNjUvMTQ5NjkwODY1NDE4NTQucG5nfGNlNDBkMDdkYzlkMDFmZDQ1MDg4ZDFmMDA0MmUzYzc2NjgwNmQ3ZDgxNWExYmY3YWRmYzcwYzYyOWY3NTkyZmQ",
        title:"Multi-targeted skincare treatment that instantly and visibly firms, tightens + smooths.",
        name:"R+F Instant Targeted Firming Gel™",
        price: 105,
    },
    {
        image:"https://www.rodanandfields.com/en-us/medias/AAWA125-AATN125-AATT030-AAPM030-REDEFINE-Regimen-Explainer-570x570.png?context=bWFzdGVyfGltYWdlc3wzMTE2NXxpbWFnZS9wbmd8aW1hZ2VzL2hkNy9oMWMvMTM3NTgzODQwNzg4NzgucG5nfDE5NTM4Yzc1OTA0MWNiY2M5NzYwMDZhMTQ0NGVmZDEzZmRhYzVlZWE4YWRhODk3NWQ0ZGU1NDlhNzVjZTUyOTU",
        title:"Visibly lifts, sculpts + firms while minimizing the appearance of lines + deep wrinkles. ",
        name:"REDEFINE Regimen",
        price: 220,
    },
    {
        image:"https://www.rodanandfields.com/en-us/medias/MFEC-Regimen-Explainer-GLOBAL-570x570.png?context=bWFzdGVyfGltYWdlc3wyMzc3NHxpbWFnZS9wbmd8aW1hZ2VzL2gzNS9oZmMvMTM3NTgzODU0NTUxMzQucG5nfDNmYWYyNzdiZGY5OWIyY2UzMDYyZDliYmM2YmUzMTRmOGY3Yzg0YmY1ZjY2YjgyYWU1OGNhZDZiN2IzMjViZGI",
        title:"Visibly firms + lifts to improve the look of fine lines, wrinkles, sagging + crow’s feet. ",
        name:"REDEFINE Multi-Function Eye Cream",
        price: 70,
    },

]

let container=document.getElementById("container")
  let cart=JSON.parse(localStorage.getItem("cart-page")) || [];
  function Display(data){
    container.innerHTML=null;
    data.forEach(function (el) {
    let div = document.createElement("div");
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

    div.append(image_url, proName, dataPrice,price,btn);

    container.append(div);
  });
}
  function addToCart(product){
    let flag=false;
    for(let i=0;i<cartLS.length;i++){
      if(cart[i].name===product.name){
        alert("product already in cart");
        flag=true;
        return;
      }
    }
    if(flag==false){
    cart.push(product);
    alert("product added to cart");
    //console.log(cartLS)
    localStorage.setItem("cart-page",JSON.stringify(cart));
    }
  }
  Display(data)