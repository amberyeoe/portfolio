//projects page

let uxd=document.getElementById("uxd");
let srm=document.getElementById("srm");
let vap=document.getElementById("vap");
let uxd_index_btn=document.getElementById("uxd-btn")

function readurl(){
    const queryString = window.location.search;
    const view = queryString.split("=")[1];

    if (view == "uxd"){
        showuxd();
    }
    
    else if (view == "srm"){
        showsrm();
    }

    else if (view == "vap"){
        showvap();
    }
}

//reset category color
function resetColor() {
  document.getElementById("btn1").className="";
  document.getElementById("btn2").className="";
  document.getElementById("btn3").className="";
  document.getElementById("btn4").className="";
}

//reset projects
function resetDisplay(){
  uxd.className="uxd"
  srm.className="srm"
  vap.className="vap"
}

//show all the projects
function showAll() {
  let btn=document.getElementById("btn1");
  resetColor();
  resetDisplay();
  btn.classList="click" //only with this class name will the colour change
  uxd.classList.add("display"); //so that all faclities will be seen
  uxd.classList.add("top");
  srm.classList.add("display");
  vap.classList.add("display");
}

//show uxd
function showuxd(){
  let btn=document.getElementById("btn2");
  resetColor();
  resetDisplay();
  btn.classList="click"
  srm.classList.add('remove'); //section will be removed
  vap.classList.add("remove");
  uxd.classList.add("display");
  uxd.classList.add("top");
}

//show srm
function showsrm(){
  let btn=document.getElementById("btn3");
  resetColor();
  resetDisplay();
  btn.classList="click"
  uxd.classList.add("remove"); //section will be removed
  vap.classList.add("remove");
  srm.classList.add("display");
  srm.classList.add("top");
}

//show vap
function showvap(){
  let btn=document.getElementById("btn4");
  resetColor();
  resetDisplay();
  btn.classList="click"
  srm.classList.add("remove"); //section will be removed
  uxd.classList.add("remove");
  vap.classList.add("display");
  vap.classList.add("top");
}

// $.ajax({
//     window.location = "../pages/projects.html",
//     success:function(){
//     showuxd();
//  }
//  })

function force_load_uxd() {
    window.location = "../pages/projects.html";
}

// uxd_index_btn.addEventListener("click",function(){
//       force_load_uxd();
//       window.onload(showuxd());
//       alert("r u there");
// })