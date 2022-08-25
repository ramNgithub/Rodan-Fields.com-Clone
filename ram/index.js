 // let flag=0;
 let left=1;
 let right=5;
function show(){

 for(let i=left;i<=right;i++){
     document.getElementById("c"+i).style.display="inline-block"
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