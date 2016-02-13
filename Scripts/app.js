"use strict";

// IIFE (Immediately Invoked Function Expression)
(function () {
    // project one
    var replaceFirstProject = function () {
        var firstProject;
        firstProject = document.getElementById("firstProject");
        firstProject.innerHTML = "This project was to name and create a dieline for snowboarding goggles for adult males. I went with a simple layout with a flat flue color for a calm feeling and triangle shapes to create the mountains.";
    };
    
    // call the functions
    replaceFirstProject();
    
})();