const heaDer = document.getElementById("headar");
const nAv = document.querySelector(".navigate");
const bookMarkLogo = document.getElementById("logofill");
const closeOpen = document.querySelector(".mobile_bar_container");
const hamburger = document.getElementById("menu-bar");
const closeMenuIcon = document.getElementById("close-icon");
const navBholder = document.querySelectorAll(".nav_but_holder");
const navButton = document.querySelectorAll(".nav_button");
const socialIconsContainer = document.querySelector(".nav_social_icons");
const mAIn = document.getElementById("mAin");



hamburger.addEventListener("click", ()=>{
    hamburger.classList.add("inactive");
    closeMenuIcon.classList.add("active");
    bookMarkLogo.classList.add("active");
    heaDer.classList.add("mobile-menu");
    mAIn.classList.add("menu");
    navBholder.forEach(e=>{
        e.classList.add("active")
    })
    socialIconsContainer.classList.add("active");
})

closeMenuIcon.addEventListener("click", ()=>{
    hamburger.classList.remove("inactive");
    closeMenuIcon.classList.remove("active");
    bookMarkLogo.classList.remove("active");
    heaDer.classList.remove("mobile-menu");
    mAIn.classList.remove("menu");
    navBholder.forEach(e=>{
        e.classList.remove("active")
    })
    socialIconsContainer.classList.remove("active");
})

navButton.forEach(e=>{
    e.addEventListener("click", ()=>{
        hamburger.classList.remove("inactive");
        closeMenuIcon.classList.remove("active");
        bookMarkLogo.classList.remove("active");
        heaDer.classList.remove("mobile-menu");
        navBholder.forEach(e=>{
            e.classList.remove("active")
        })
        socialIconsContainer.classList.remove("active");

    })
})

//HEADER CODE ENDS HERE

var leftTabContainer = document.querySelector(".left_content");

const shape = document.createElement("span");
const shapeS = document.createElement("span");
const presetShape = document.getElementById("blue-curvy-img");


const ilustrations = [
    "./images/illustration-features-tab-1.svg",
    "./images/illustration-features-tab-2.svg",
    "./images/illustration-features-tab-3.svg"
    ]

// Select all buttons with the class "tab_changer"
const buttons = document.querySelectorAll(".tab_changer");

// Set the initial style for the first button
buttons[0].style.borderBottom = "2px solid red";

// Add a click event listener to each button
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    // Remove the bottom border color from all buttons
    buttons.forEach((btn) => {
      btn.style.borderBottom = "";
    });

    // Add the red bottom border color to the clicked button
    event.currentTarget.style.borderBottom = "2px solid red";

    // Your existing code for manipulating the DOM based on the clicked button
    let currentButton = event.currentTarget.classList;

    if (currentButton.contains("B")) {
      document.querySelector(".picsOne").src = ilustrations[0];
      document.querySelector(".headsOne").textContent = "Bookmark in one click";
      document.querySelector(".graphOne").textContent = "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.";
      presetShape.classList.remove("searchii");
      presetShape.classList.remove("sharee");
    } 

    else if (currentButton.contains("S")) {
      document.querySelector(".picsOne").src = ilustrations[1];
      document.querySelector(".headsOne").textContent = "Intelligent search";
      document.querySelector(".graphOne").textContent = "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.";
      presetShape.classList.add("searchii");
      presetShape.classList.remove("sharee");
    }
    
    else {
      document.querySelector(".picsOne").src = ilustrations[2];
      document.querySelector(".headsOne").textContent = "Share your bookmarks";
      document.querySelector(".graphOne").textContent = "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.";
      presetShape.classList.remove("searchii");
      presetShape.classList.add("sharee");
    }
    
  });
});




var tabTwosearch = ()=>{

  leftTabContainer.removeChild()
  
  shape.setAttribute("id","shapeSearch");
  leftTabContainer.appendChild(shape);
  leftTabContainer.removeChild(shapeS);

}




/* FAQS CODE STARTS HERE */

const QUEST1 = document.querySelector("#quest-1");
const ANS1 = document.querySelector("#ans1");
const arrow2 = document.querySelector(".arrow2");
const QUEST2 = document.querySelector("#quest-2");
const ANS2 = document.querySelector("#ans2");
const arrow3 = document.querySelector(".arrow3");
const QUEST3 = document.querySelector("#quest-3");
const ANS3 = document.querySelector("#ans3");
const arrow4 = document.querySelector(".arrow4");
const QUEST4 = document.querySelector("#quest-4");
const ANS4 = document.querySelector("#ans4");


const arrow1 = document.querySelector(".arrow1");


arrow1.addEventListener("click", function(){
    arrow1.classList.toggle("active");
    ANS1.classList.toggle("active");
    QUEST1.classList.toggle("opened");
  });
  
  arrow2.addEventListener("click", function(){
    arrow2.classList.toggle("active");
    ANS2.classList.toggle("active");
    QUEST2.classList.toggle("opened");
  });
  
  arrow3.addEventListener("click", function(){
    arrow3.classList.toggle("active");
    ANS3.classList.toggle("active");
    QUEST3.classList.toggle("opened");
  });
  
  arrow4.addEventListener("click", function(){
    arrow4.classList.toggle("active");
    ANS4.classList.toggle("active");
    QUEST4.classList.toggle("opened");
  });


  /* MAIL VERIFICATION STARTS HERE */

  const contactButton = document.querySelector("#mail-submit-button");
let usersMail = document.querySelector(".email-input");
const wrongMailAlert = document.querySelector("#wrong-mail-alert");

  usersMail.addEventListener("keyup", function(){
    usersMail.classList.toggle("border");
  });
  
  contactButton.addEventListener("click", function () {
    let test= usersMail.value;
    let patt = /^[(\w\d\W)+]+@[\w+]+\.[\w+]+$/i;
  
    if (patt.test(test)=== true)
    {
      wrongMailAlert.style.display = "none";
      usersMail.value = "";
    }
    else{
      wrongMailAlert.classList.toggle("active");
      usersMail.classList.toggle("errorsignal");
      usersMail.value = "";
    }
  });
