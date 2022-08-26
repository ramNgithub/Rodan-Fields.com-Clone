

let joinNow = () =>{
    window.location.href="enroll.html"
}
let enrollNow = () =>{
    window.location.href="enroll.html"
}

let getDataCommunity = async()=>{
    try{
        let res = await fetch(`http://localhost:3000/Community`);
        let data= await res.json();
        console.log("data:",data)
        appendData(data)
    }catch(err){
        console.log("err:",err);
    }
}
getDataCommunity()

let appendData = (data)=>{
    data.forEach((el)=>{
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

let getDataStarted = async()=>{
    try{
        let res = await fetch(`http://localhost:3000/getStart`);
        let data= await res.json();
        console.log("data:",data)
        appendDataStarted(data)
    }catch(err){
        console.log("err:",err);
    }
}
getDataStarted()

 let appendDataStarted = (data)=>{
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