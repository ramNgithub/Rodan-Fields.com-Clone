 // let flag=0;
 let left=1;
 let right=5;

 let L=1;
 let R=2;

 let Left=1;
 let Right=3;


function show(){

    for(let i=Left;i<=Right;i++){
        document.getElementById("E"+i).style.display="inline-block"
    }

    for(let i=L;i<=R;i++){
        document.getElementById("d"+i).style.display="inline-block"
    }

 for(let i=left;i<=right;i++){
     document.getElementById("c"+i).style.display="inline-block"
 }

}



function MoveLeft(){
    if(Left<=8){
        document.getElementById("E"+Left).style.display="none";
     Left+=1;
     Right+=1;
     for(let i=Left;i<=Right;i++){
         document.getElementById("E"+i).style.display="inline-block";
           
        }
     
    }
    
}

function MoveRight(){
    if(Right>=4){
        document.getElementById("E"+Right).style.display="none";
     Left-=1;
     Right-=1;
     for(let i=Left;i<=Right;i++){
         document.getElementById("E"+i).style.display="inline-block";
           
        }
     
    }
    
}


function moveL(){
    if(L<=1&&R<=2){
        document.getElementById("d"+L).style.display="none";
     L+=1;
     R+=1;
     for(let i=L;i<=R;i++){
         document.getElementById("d"+i).style.display="inline-block";
     }
    }
}

    function moveR(){
         if(L>=2){
            document.getElementById("d"+R).style.display="none";
         L-=1;
          R-=1;
         for(let i=L;i<=R;i++){
             document.getElementById("d"+i).style.display="inline-block";
         }
         }else{
            return;
         }


}
function moveLeft(){
 
 if(left<=6&& right<=10){
     document.getElementById("c"+left).style.display="none";
     left+=1;
     right+=1;
     for(let i=left;i<=right;i++){
         document.getElementById("c"+i).style.display="inline-block";
     }
 }
 
     
}    

function moveRight(){
     if(left>=2){
     document.getElementById("c"+right).style.display="none";
     left-=1;
     right-=1;
     for(let i=left;i<=right;i++){
         document.getElementById("c"+i).style.display="inline-block";
     }
 }

 }
   
 let Cart=JSON.parse(localStorage.getItem("cart"))||[]
 
 function addCart1(){
    let img="https://www.rodanandfields.com/en-us/medias/ENFG010-208X208-MOBILE.jpg?context=bWFzdGVyfGltYWdlc3wzNDU0fGltYWdlL2pwZWd8aW1hZ2VzL2gxZC9oMmMvMTQ5NjkwODY2NzI5MjYuanBnfDAxNGE2Nzc0OTlhYThjZjhhODQ4ZWE0MDExYjRmNThiM2FkZTI3MjA3ZTdmNWIxODY3Y2M3OGYwZWI5NjBlOWU"
    let name="R+F Instant Targeted Firming Gel"
    let price="$105";

    let obj={
          image:img,
          name:name,
          price:price,
    }
    Cart.push(obj);
    alert("Add to cart")
    localStorage.setItem("cart",JSON.stringify(Cart))

}

function addCart2(){
    let img="https://www.rodanandfields.com/en-us/medias/ESFB150-208x208-mobile-1.jpg?context=bWFzdGVyfGltYWdlc3w0NDM3fGltYWdlL2pwZWd8aW1hZ2VzL2g0MC9oY2MvMTAyOTE4Mjk0NDA1NDIuanBnfDFhM2EwMGZhYWIwMTBkZWE4OTljMDcyMzYyNDNkMDUzNWMzZGU1OGE0ZDVlNTRjZGMyMWY0MmFlZjE3NzE0OGQ"
    let name="ESSENTIALS Face + Body Sunscreen Broad Spectrum SPF 50"
    let price="$134";

    let obj={
          image:img,
          name:name,
          price:price,
    }
    Cart.push(obj);
    alert("Add to cart")
    localStorage.setItem("cart",JSON.stringify(Cart))

}

function addCart3(){
    let img="https://www.rodanandfields.com/en-us/medias/AAEY015-458x458.jpg?context=bWFzdGVyfGltYWdlc3wxMDQ2OHxpbWFnZS9qcGVnfGltYWdlcy9oMDYvaDljLzEzOTc3NTQ0NDI1NTAyLmpwZ3xiNzQ3NjJkOWU1Y2QxOWM5ZDQ4ZGQzZDA1ZjdkNzBhZmRhMjdkYzE5MTU0MWZiZjY5MDc3NzEyMjBkM2E1YThj"
    let name="REDEFINE Multi-Function Eye Cream"
    let price="$70";

    let obj={
          image:img,
          name:name,
          price:price,
    }
    Cart.push(obj);
    alert("Add to cart")
    localStorage.setItem("cart",JSON.stringify(Cart))

}

function addCart4(){
    let img="https://www.rodanandfields.com/en-us/medias/ENHEFG1-570x570-Desktop.png?context=bWFzdGVyfGltYWdlc3wyMjI3N3xpbWFnZS9wbmd8aW1hZ2VzL2g2NS9oYjUvMTQ1MzIxNjY4MTE2NzgucG5nfGNhNTQzZTUyNmU3NTMxZjAxZTc5NThjMmQ3MzU0YzVkNTY1OTExMThjNWEyMDBiYTIwMTFhNWM1Yzk4YTk3ODI"
    let name="R + F Active Hydration Serum"
    let price="$112";

    let obj={
          image:img,
          name:name,
          price:price,
    }
    Cart.push(obj);
    alert("Add to cart")
    localStorage.setItem("cart",JSON.stringify(Cart))

}

function addCart5(){
    let img="https://www.rodanandfields.com/en-us/medias/AASR160-208x208-MOBILE.jpg?context=bWFzdGVyfHJvb3R8MjYwNzJ8aW1hZ2UvanBlZ3xoOGMvaGU2Lzg4MjE4Njg1NjA0MTQuanBnfDk1NGI0ZGEyMDk4YTNhZmMwZmMxOWU0YjAwMjQ0ZTM3YzRmZTRjM2ZjYTcyNjg4MzFmODYzNzBhNmI4NzliMDk"
    let name="REDEFINE Intensive Renewing Serum"
    let price="$102";

    let obj={
          image:img,
          name:name,
          price:price,
    }
    Cart.push(obj);
    alert("Add to cart")
    localStorage.setItem("cart",JSON.stringify(Cart))

}

function addCart6(){
    let img="https://www.rodanandfields.com/en-us/medias/ENHEY15-thumb.jpg?context=bWFzdGVyfGltYWdlc3wxNTUwNnxpbWFnZS9qcGVnfGltYWdlcy9oYjMvaGU1LzEzNTMzMTczNzEwODc4LmpwZ3wyZTE2NTNkODFiNTlhNDFmNGU1YzA0NDViMjhkYzBiMzRmYmM5NzU0ZDQxYTAwN2Q1NDMxN2U1ZWNjOTNlNjM1"
    let name="Active Hydration Bright Eye Complex"
    let price="$72";

    let obj={
          image:img,
          name:name,
          price:price,
    }
    Cart.push(obj);
    alert("Add to cart")
    localStorage.setItem("cart",JSON.stringify(Cart))

}

function addCart7(){
    let img="https://www.rodanandfields.com/en-us/medias/ENBR001-458x458.jpg?context=bWFzdGVyfGltYWdlc3w3Nzc0fGltYWdlL2pwZWd8aW1hZ2VzL2g3MS9oMmQvMTM5Nzc1NDMzNzY5MjYuanBnfDMxMTEyY2E3ZDMzNTVjZDA0OGRmODE4NTk4NmNkZjcyMTQwNGM3NDMxNTRkNGEyNTI5MDI2ZTM4OWRkZmEzMzc"
    let name="Roadan + Fields Active Hydration Body Replenish"
    let price="$66";

    let obj={
          image:img,
          name:name,
          price:price,
    }
    Cart.push(obj);
    alert("Add to cart")
    localStorage.setItem("cart",JSON.stringify(Cart))

}

function addCart8(){
    let img="https://www.rodanandfields.com/en-us/medias/ENPS125-570x570-Desktop.png?context=bWFzdGVyfGltYWdlc3wxODU1NXxpbWFnZS9wbmd8aW1hZ2VzL2hlZC9oNTQvMTQ1MzIxNjc4Mjc0ODYucG5nfGM4NDE5OGU1OTUwOWZjYmM2ZjIyYmMyMzEyOTk5MmY1M2Y4ZDA2MGQ5YjBjNzRmMDQ1YmM2ZThkOGU5ZDllMzg"
    let name="Rodan + Fields Enhancements Micro-Dermabrasion Paste"
    let price="$183";

    let obj={
          image:img,
          name:name,
          price:price,
    }
    Cart.push(obj);
    alert("Add to cart")
    localStorage.setItem("cart",JSON.stringify(Cart))

}


function addCart9(){
    let img="https://www.rodanandfields.com/en-us/medias/ENFM030-Thumbnail-458x458.jpg?context=bWFzdGVyfGltYWdlc3wyNTQ2MHxpbWFnZS9qcGVnfGltYWdlcy9oZmQvaGQ2LzE0ODgyMTk1ODk4Mzk4LmpwZ3wyYThhMjQ0NTc4YjI1ZmQ1ODY3MDE5NGMyYjk3MjA2MTRmNDQ2MzdmOGVhYzMxYTFmMDk1YmIyY2Q5NDhjMzIw"
    let name="11 Total RF Serum"
    let price="$175";

    let obj={
          image:img,
          name:name,
          price:price,
    }
    Cart.push(obj);
    alert("Add to cart")
    localStorage.setItem("cart",JSON.stringify(Cart))

}

function addCart10(){
    let img="https://www.rodanandfields.com/en-us/medias/ENHLSH01-458x458.jpg?context=bWFzdGVyfGltYWdlc3w0MDkxfGltYWdlL2pwZWd8aW1hZ2VzL2gzNS9oODgvMTM5Nzc1NDQ2ODc2NDYuanBnfDlmYTEwMTFkMjFiNzMwYjlhNjU0NTNiYjU5ZDBmMGY3ZWIzNmNiZmYwMTJhMGYzMTFkMzA1ODhkOGI1MjdlMmE"
    let name="R + F Lash Boost"
    let price="$155";

    let obj={
          image:img,
          name:name,
          price:price,
    }
    Cart.push(obj);
    alert("Add to cart")
    localStorage.setItem("cart",JSON.stringify(Cart))

}

function addCart11(){
    let img="https://www.rodanandfields.com/en-us/medias/ENFM030-Thumbnail-458x458.jpg?context=bWFzdGVyfGltYWdlc3wyNTQ2MHxpbWFnZS9qcGVnfGltYWdlcy9oZmQvaGQ2LzE0ODgyMTk1ODk4Mzk4LmpwZ3wyYThhMjQ0NTc4YjI1ZmQ1ODY3MDE5NGMyYjk3MjA2MTRmNDQ2MzdmOGVhYzMxYTFmMDk1YmIyY2Q5NDhjMzIw"
    let name="Total RF Serum"
    let price="$175";

    let obj={
          image:img,
          name:name,
          price:price,
    }
    Cart.push(obj);
    alert("Add to cart")
    localStorage.setItem("cart",JSON.stringify(Cart))

}