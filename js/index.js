// Create a new date object and store it in a variable named today
var today = new Date();

// Retrieve the current year from your date object and store it in a variable named thisYear
var thisYear = today.getFullYear();

// Using "DOM Selection", select the <footer> element from the DOM and store it in a variable named footer
var footer = document.querySelector('footer');

// Create a new paragraph (p) element and store it in a variable named copyright
var copyright = document.createElement('p');

// Set the inner HTML of your element to display your name and the current year
// Use unicode to insert a copyright symbol
// hint: use thisYear variable from earlier
// Learn more about unicode: https://www.w3schools.com/charsets/ref_html_entities_4.asp
copyright.innerHTML = `Leo Angelo Genota &#169 ${thisYear}`;

// Using "DOM Manipulation", append the element to the footer
// hint: appendChild method
footer.appendChild(copyright);

// List your technical skills by creating an Array of String values and store it in a variable named skills
let skills = ["HTML", "CSS", "JavaScript", "Python", "Java", "C#", "SQL"];

// Using "DOM Selection", select the #skills section by id and store it in a variable named skillsSection
// hint: querySelector or getElementById method
let skillsSection = document.getElementById("skills");

// Using "DOM Selection", query the skillsSection (instead of the entire document) to find the <ul> element and store it in a variable named skillsList
let skillsList = skillsSection.querySelector("ul");

// Create a for loop to iterate over your skills Array, starting at index 0
for (let i = 0; i < skills.length; i++) {
  // Inside the loop, create a new list item (li) element and store it in a variable named skill
  // hint: createElement method
  let skill = document.createElement("li");

  // On the next line, set the inner text of your skill variable to the value of the current Array element
  // hint: access the Array element using bracket notation
  skill.innerText = skills[i];

  // On the next line, append the skill element to the skillsList element
  // hint: appendChild method
  skillsList.appendChild(skill);
}