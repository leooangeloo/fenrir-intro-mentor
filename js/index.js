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

// Using “DOM Selection”, select the “leave_message” form by name attribute and store it in a variable named messageForm
let messageForm = document.querySelector('[name="leave_message"]');

// Add an event listener to the messageForm element that handles the “submit” event
messageForm.addEventListener("submit", function(event) { 
    event.preventDefault();
    // Inside the callback function for your event listener, create a new variable for each of the three form fields and retrieve the value from the event
    let name = event.target.usersName.value; let email = event.target.usersEmail.value; let message = event.target.usersMessage.value;
    // Inside the callback function for your event listener, add a console.log statement to log the three variables you created in the previous step
    console.log(name, email, message);

    // Selecting #messages section by id
    const messageSection = document.querySelector('#messages');

    // Querying the messageSection to find the <ul> element
    const messageList = messageSection.querySelector('ul');

    // Create a new list item (li) element
    const newMessage = document.createElement('li');

    // Set the inner HTML of newMessage
    newMessage.innerHTML = `
      <a href="mailto:${email}">${name}</a>
      <span>${message}</span>
    `;

    // Create a new <button> element
    const removeButton = document.createElement('button');

    // Set the inner text and type attribute of removeButton
    removeButton.innerText = 'remove';
    removeButton.type = 'button';

    // Add an event listener to removeButton
    removeButton.addEventListener('click', function() {
      // Find the button's parent element
      const entry = removeButton.parentNode;

      // Remove the entry element from the DOM
      entry.remove();
    });

    // Append the removeButton to the newMessage element
    newMessage.appendChild(removeButton);

    // Append the newMessage to the messageList element
    messageList.appendChild(newMessage);

    // Show the #messages section including its header if there are messages
    messageSection.style.display = 'block';

    // Clear the form
    form.reset();
  });

function toggleMenu() {
  var menu = document.querySelector('.menu');
  var hamburgerIcon = document.querySelector('.hamburger-icon');

  menu.classList.toggle('active');
  hamburgerIcon.classList.toggle('active');
}

function scrollToSection(sectionId) {
  var menu = document.querySelector('.menu');
  if (menu.classList.contains('active')) {
    toggleMenu();
  }

  var section = document.querySelector(sectionId);
  var offsetTop = section.offsetTop;

  var stickyHeaderHeight = document.querySelector('.sticky-header').offsetHeight;
  var offset = offsetTop - stickyHeaderHeight;

  window.scrollTo({
    top: offset,
    behavior: 'smooth'
  });
}

window.addEventListener('click', function(event) {
  var menu = document.querySelector('.menu');
  var hamburgerMenu = document.querySelector('.hamburger-menu');

  if (!menu.contains(event.target) && !hamburgerMenu.contains(event.target) && menu.classList.contains('active')) {
    toggleMenu();
  }
});

//Create a new XMLHttpRequest object
var githubRequest = new XMLHttpRequest();

//Fetch GitHub Repositories
githubRequest.open("GET", "https://api.github.com/users/leooangeloo/repos");
githubRequest.send();

//Handle Response from Server
//// Add a "load" event listener on githubRequest object
githubRequest.addEventListener("load", function(event) {
    var repositories = JSON.parse(this.response);

    //Display Repositories in List
    let projectSection = document.getElementById('projects');

    let reposList = projectSection.querySelector('ul');

    for (let i = 0; i < repositories.length; i++) {
        let repo = document.createElement('li');
        let link = document.createElement("a");

        repo.className="project_item";

        //Add repo name and link
        link.href = repositories[i].html_url;
        link.innerText = repositories[i].name;
        repo.appendChild(link);

        reposList.appendChild(repo);

    }
});