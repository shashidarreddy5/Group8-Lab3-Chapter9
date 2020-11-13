
/* add code here  */


function BlurFunc1(){
    var title=document.getElementById("title");
    title.classList.remove("highlight");
    }
    function BlurFunc2(){
    var description=document.getElementById("description");
    description.classList.remove("highlight");
    }
    function BlurFunc3(){
    var medium=document.getElementById("medium");
    medium.classList.remove("highlight");
    }
    function BlurFunc4(){
    var year=document.getElementById("year");
    year.classList.remove("highlight");
    }
    function BlurFunc5(){
    var museum=document.getElementById("museum");
    museum.classList.remove("highlight");
    }
    
    function FocusFunc1(){
    var title=document.getElementById("title");
    title.classList.add("highlight");
    title.classList.remove("error");
    }
    function FocusFunc2(){
    var description=document.getElementById("description");
    description.classList.add("highlight");
    description.classList.remove("error");
    }
    function FocusFunc3(){
    var medium=document.getElementById("medium");
    medium.classList.add("highlight");
    mediumk.classList.remove("error");
    }
    function FocusFunc4(){
    var year=document.getElementById("year");
    year.classList.add("highlight");
    year.classList.remove("error");
    }
    function FocusFunc5(){
    var museum=document.getElementById("museum");
    museum.classList.add("highlight");
    museum.classList.remove("error");
    }
    
    function preventDefault(){
    var title=document.getElementById("title");
    var description=document.getElementById("description");
    var medium=document.getElementById("medium");
    var year=document.getElementById("year");
    var museum=document.getElementById("museum");
    
    if(title.value==""){
    title.classList.add("error");
    }
    else{
    title.classList.remove("error");
    }
    
    
    if(description.value==""){
    description.classList.add("error");
    }
    else{
    description.classList.remove("error");
    }
    
    
    if(year.value==""){
    year.classList.add("error");
    }
    else{
    year.classList.remove("error");
    }
    
    
    return(false);
    }