let cartLS = JSON.parse(localStorage.getItem("cart")) || [];
let sum=0;
console.log(cartLS);
let Display= (cartLS)=>{
  let container= document.getElementById("container");
  cartLS.forEach(function (ele){
    let div=document.createElement("div");
    let img=document.createElement("img");
    img.src=ele.image;
    let name=document.createElement("h2");
    name.innerText=ele.name;
    let price=document.createElement("h4");
    price.innerText=ele.price;
    let h1=document.getElementById("total");
    sum+=parseInt(ele.price);
    h1.innerText="Total Price:- "+sum;
    div.append(img,name,price);
    container.append(div);
  })
}
Display(cartLS);
  



