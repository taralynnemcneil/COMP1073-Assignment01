"use strict";

// IIFE (Immediately Invoked Function Expression)
(function () {

    console.log("App Started...");
    
    // declare an anonymous fucntion with named alias
    var replaceFirstProject = function () {
        console.log("inside replaceFirstProject anonymous function");

        var firstProject;
        firstProject = document.getElementById("firstProject");
        firstProject.innerHTML = "Hello, My name is Tara McNeil and this is my portfolio site. To about me check out my about page. To see some of my graphic design and web development work check out the projects page. If you like what you see here you click the contact button below or the contact page tab at the top to get in touch with me.";
    };
    
    
    // call the replacefirstProject function
    replacefirstProject();


})();