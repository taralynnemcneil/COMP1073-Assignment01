"use strict";

// IIFE (Immediately Invoked Function Expression)
(function () {

    console.log("App Started...");

    // declared a named fucnction way
   /*  function replaceFirstParagraph() {
        
        console.log("inside replaceFirstParagraph function");
        
        var firstParagraph;
        firstParagraph = document.getElementById("firstParagraph");
        firstParagraph.innerHTML = "My New Paragraph Data";
        
    }*/
    
    // declare an anonymous fucntion with named alias
    var replaceFirstParagraph = function() {
        console.log("inside replaceFirstParagraph anonymous function");
        
        var firstParagraph;
        firstParagraph = document.getElementById("firstParagraph");
        firstParagraph.innerHTML = "Hello, My name is Tara McNeil and this is my portfolio site. To about me check out my about page. To see some of my graphic design and web development work check out the projects page. If you like what you see here you click the contact button below or the contact page tab at the top to get in touch with me.";
    };
    
    
    // call the replaceFirstParagraph function
    replaceFirstParagraph();
    

})();