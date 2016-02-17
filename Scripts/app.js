// IIFE (Immediately Invoked Function Expression)
(window.onload = function () {
    "use strict";
    /* ---------------------------------- 
             About Page
     ------------------------------------- */
    
    // personal info
    var replacePersonalInfo = function () {
        var personalInfo;
        personalInfo = document.getElementById("personalInfo");
        personalInfo.innerHTML = "Hello, My name is Tara Lynne McNeil. I am 23 years of age and I am from a town called Smiths Falls, ON. I have always enjoyed the arts so in 2011 I decided to come to Barrie to go for a career in Graphic Design.<br /><br />For part of the Graphic Design program, we had to complete a 4 week placement. I did my placement with my mother's business PDG Media. I did anything from print design to media design. I really enjoyed the Graphc Design side but when we had out web design classes I realize that I was more drawn to the development side than the design itself. I graduated the Graphic Design program at Georgian College in Barre in 2015.<br /><br />I am now currently enrolled in the Interactive Web Design and Development Program and I am very interested to see where this path takes me.";
    };
    
    
    /* ---------------------------------- 
            Project Page
    ------------------------------------- */
    
    // project one
    var replaceFirstProject = function () {
        var firstProject;
        firstProject = document.getElementById("firstProject").innerHTML = "This project was to name and create a dieline for snowboarding goggles for adult males. I went with a simple layout with a flat flue color for a calm feeling and triangle shapes to create the mountains.";
    };
    
    // project two
    var replaceSecondProject = function () {
        var secondProject;
        secondProject = document.getElementById("secondProject").innerHTML = "Shawn Pankow is the mayor of Smiths Falls, ON., while I was working for PDG Media he asked for a header with his photo for a column in the Hometown News Paper.";
    };
    
    // project three
    var replaceThirdProject = function () {
        var thirdProject;
        thirdProject = document.getElementById("thirdProject").innerHTML = "I was brought this project by two clients who wanted to split the cost of an ad by splitting one ad. So I had to split the ad in two but keep it looking as if it was one ad. The 'Z' makes your eyes flow from one side of the page to the other.";
    };
    
    // project four
    var replaceFourthProject = function () {
        var fourthProject;
        fourthProject = document.getElementById("fourthProject").innerHTML = "Pretty much the same as the yoga ad, Coffee Culture wanted an ad that is split to promote 3 different things.";
    };
    
    // project five
    var replaceFifthProject = function () {
        var fifthProject;
        fifthProject = document.getElementById("fifthProject").innerHTML = "This was a website banner ad I had created for Coffee Culture for the PDG Media site and for the Hometown News website.";
    };
    
    /* ---------------------------------- 
            Call Functions 
    ------------------------------------- */
    
    /* about page */
    replacePersonalInfo();
    
    /* project page */
    replaceFirstProject();
    replaceSecondProject();
    replaceThirdProject();
    replaceFourthProject();
    replaceFifthProject();


})();
