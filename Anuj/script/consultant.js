

let joinNow = () =>{
    window.location.href="enroll.html"
}
let enrollNow = () =>{
    window.location.href="enroll.html"
}

// let getDataCommunity = async()=>{
//     try{
//         let res = await fetch(`http://localhost:3000/Community`);
//         let data= await res.json();
//         console.log("data:",data)
//         appendData(data)
//     }catch(err){
//         console.log("err:",err);
//     }
// }

let Community=[
    {
      "id": 1,
      "title": "Meet People Who Empower You",
      "para": "Our community is full of inspiring, supportive people from all kinds of backgrounds who generously + fearlessly empower each other.",
      "image":"https://www.rodanandfields.com/en-us/medias/Our-Community-Carousel-Meet-People-Who-Make-You-Feel-Good-Desktop.png?context=bWFzdGVyfHJvb3R8MTA1NDEyfGltYWdlL3BuZ3xoOTAvaDEyLzEzOTE2MzY4MDc2ODMwLnBuZ3xmNTFmZDAyYmU5MzkyZGUzOGJmMWJlNDY2ZTdmNjhhNzRkOWU1ZGIxYWE0MzY1OGMzNDQzZmE0OGY0OTlmZWEw"
    },
    {
      "id": 2,
      "title": "Everyone wants to win. You peers are your cheerleaders.",
      "para": " Azadeh, U.S. R+F independent consultant",
      "image":"https://www.rodanandfields.com/en-us/medias/Our-Community-Carousel-Quote-1-Card-Desktop.png?context=bWFzdGVyfHJvb3R8NTk1NTl8aW1hZ2UvcG5nfGg5Mi9oZTMvMTM5MTYzNjgzMzg5NzQucG5nfGY3YTM5OGU0YzkwM2Q2MmNkNzljODAyMmI0ZTJlOWIxZjg3YzQzZTM3OTRmMDMyZGY2NWRhNDFhMDY2OWZjZWQ"
    },
    {
      "id": 3,
      "title": "Take a leap of faith in yourself and know that there greats potential.",
      "para": "Melisa, Canada, R+F independent consultant",
      "image":"https://www.rodanandfields.com/en-us/medias/Our-Community-Carousel-Quote-2-Card-Desktop.png?context=bWFzdGVyfHJvb3R8NTYxMTR8aW1hZ2UvcG5nfGhjZC9oNGIvMTM5MTYzNjg2MDExMTgucG5nfGRjNzJlNDI5ZWZiN2NiNjUwZmUxOTVkMTVkYTE3ZjA1MzFkZDBmNTVjODM4OWQ2MmE5NWExZTExYTM4NzQ2NzY"
    },
    {
      "id": 4,
      "title": "We met as strangers and left as sisters.I felt loves gratitude and like I belonged",
      "para": "Tricia, US, R+F independent consultant",
      "image":"https://www.rodanandfields.com/en-us/medias/Our-Community-Carousel-Quote-4-Card-Desktop.png?context=bWFzdGVyfHJvb3R8Njg4MDh8aW1hZ2UvcG5nfGg5Ny9oYjQvMTM5MTYzNjkxMjU0MDYucG5nfDg2NjU1NmQ1Yjg4MjRkZjI1YmYwNDkwMDZiMDhiZDczNmU1YzdjZjhlNWVlMTNjN2U5ZjdjZGQyNWE1MTljM2Q"
    }
  ]
//   console.log(Community)
// // getDataCommunity()
append(Community)
 function append (Community){
    Community.forEach((el)=>{
        let div = document.createElement("div");
        let image = document.createElement("img");
        image.src=el.image;
        let title = document.createElement("h5");
        title.innerText=el.title;
        let para = document.createElement("p");
        para.innerText=el.para;

        div.append(image,title,para);
        document.getElementById("community").append(div)
    
    })
}

// let getDataStarted = async()=>{
//     try{
//         let res = await fetch(`http://localhost:3000/getStart`);
//         let data= await res.json();
//         console.log("data:",data)
//         appendDataStarted(data)
//     }catch(err){
//         console.log("err:",err);
//     }
// }
// getDataStarted()
let getStart=[
    {
      "id": 1,
      "title": "Buy Your Business Starter Pack",
      "para": "Get everything you need to jumpstart your business for a low, one-time fee of just $75.",
      "image":"https://www.rodanandfields.com/en-us/medias/Getting-Started-Business-Starter-Pack-Marketing-Landing-Page-752x358-US.jpg?context=bWFzdGVyfHJvb3R8NDY1MTN8aW1hZ2UvanBlZ3xoNDYvaGEwLzE0ODgyMjA0MzE5Nzc0LmpwZ3w0MTI1ZTVmMjgzNzk3ZmY0NTBlOGJiNzljMTU4MTZhYTRiZmZlYzM1YTgzOTBlMmY2ZGNiMDA0YjU2NDhhMjdm"
    },
    {
      "id": 2,
      "title": "Get Your Exclusive One-Time Offer",
      "para": "Benefit from a limited-time invitation to save an additional 30% off the Consultant price on recommended R+F products.",
      "image":"https://www.rodanandfields.com/en-us/medias/Getting-Started-Life-Changing-Products-Desktop.jpg?context=bWFzdGVyfHJvb3R8MjY5Mzh8aW1hZ2UvanBlZ3xoZTkvaDdjLzE0MzcyMDYxODM5MzkwLmpwZ3wwNGFmZmMyY2RmNTg3NWQxYjhlMDAxYzQ0YmZmOWI2YjhmNGMwNjBiNzQwMWZlODI3NjVmYTI0NjAzMjIzMDUz"
    },
    {
      "id": 3,
      "title": "Start Sharing Your Business",
      "para": "Enjoy unlimited access to a full support system including an easy-to-use app to manage your business, ongoing trainings, innovative tools, corporate resources and more.",
      "image":"https://www.rodanandfields.com/en-us/medias/Getting-Started-Resources-And-Support-Desktop.jpg?context=bWFzdGVyfHJvb3R8Nzg4MDB8aW1hZ2UvanBlZ3xoNTkvaGJmLzE0MzcyMDYxOTA0OTI2LmpwZ3w2NzEyMzc2ZjJmYjhhM2RlY2VmMjQ2Mjc5YTg0ZDFhNWIwMjFhYTIxYTRjMGE3MzJjYTgzYjI3ODZkMDZmYTBj"
    }
  ]

  appendDataStarted(getStart)
 function appendDataStarted(data){
    data.forEach((el)=>{
        let div = document.createElement("div");
        let image = document.createElement("img");
        image.src=el.image;
        let title = document.createElement("h5");
        title.innerText=el.title;
        let para = document.createElement("p");
        para.innerText=el.para;

        div.append(image,title,para);
        document.getElementById("get_start").append(div)
    
    })
}

function func(){
  window.location.href="/endurable-advice-917/ram/index.html"
}