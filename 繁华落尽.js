let showPic=document.getElementById("showPic")
let picContainer = document.querySelector(".pic")

showPic.onclick=function(){
    if(picContainer.style.display ==="none"|| !picContainer.style.display){
        picContainer.style.display = "flex";
        showPic.innerHTML="点击隐藏";
    }else{
        picContainer.style.display="none";
        showPic.innerHTML="点击查看";
    }
}

let showPic1=document.getElementById("showPic1")
let picContainer1 = document.querySelector(".oc")

showPic1.onclick=function(){
    if(picContainer1.style.display ==="none"|| !picContainer1.style.display){
        picContainer1.style.display = "flex";
        showPic1.innerHTML="点击隐藏";
    }else{
        picContainer1.style.display="none";
        showPic1.innerHTML="点击查看";
    }
}