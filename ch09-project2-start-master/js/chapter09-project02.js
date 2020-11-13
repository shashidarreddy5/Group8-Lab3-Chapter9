/* add code here */

window.onload = function () {

    document.getElementById("thumbnails").addEventListener("click", function(e) {
    
    var Img = document.getElementById("featured").getElementsByTagName('img')[0];
    
    var presentSrc = e.target.src
    
    var newSrc = "images/medium/"+presentSrc.substring(presentSrc.lastIndexOf('/'));
    
    Img.title = e.target.title;
    
    Img.src = newSrc;
    
    var figCap = document.getElementById("featured").getElementsByTagName('figcaption')[0];
    
    figCap.innerHTML = e.target.title
    
    
    
    });

   
 
    
    };
