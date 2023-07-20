let currentDate = new Date();
let thisYear = currentDate.getFullYear();

const footer = document.querySelector("footer");
const copyright = document.createElement("p");
copyright.innerHTML = `<small>Leo Angelo Genota &copy; ${thisYear}</small>`;

footer.appendChild(copyright);

let skills = ["HTML", "CSS", "JavaScript", "C#", "C++", "Java", "C", ".NET", "Angular", "Typescript", "Spring Boot", "SQL", "Git", "GitHub", "SharePoint", "Jira", "Confluence", "Visual Studio", "Visual Studio Code", "Eclipse", "IntelliJ", "Postman", "Wireshark", "Kali Linux", "macOS", "Windows", "Linux", "Microsoft Azure", "Microsoft Azure DevOps", "Microsoft Azure Active Directory"];

let skillsSelection = document.getElementById("skills");
let skillsList = skillsSelection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.innerText = skills[i];

  skillsList.appendChild(skill);
}

// Using “DOM Selection”, select the “leave_message” form by name attribute and store it in a variable named messageForm
const messageForm = document.getElementsByName("leave_message")[0];
const messages = document.getElementById("messages");
const messageSection= document.getElementById("message-section");

messages.parentNode.style.display = "none";

// Add an event listener to the messageForm element that handles the “submit” event
//Event listener to append message and userInfo to message list
messageForm.addEventListener("submit", (event) => {
  event.preventDefault();

  //grabs user info and message and puts it into newMessage variable
  const usersName = event.target.usersName.value;
  const usersEmail = event.target.usersEmail.value;
  let usersMessage = event.target.usersMessage.value;
  const newMessage = document.createElement("li");
  newMessage.innerHTML = `<a href='mailto:${usersEmail}'>${usersName} </a><p>${usersMessage}</p>`;

  //toggles messageSection to default display behavior when appending message
  messages.parentNode.style.display = "";

  //creates a remove button
  const removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  removeButton.type = "button";

  // appends message and buttons
  newMessage.appendChild(removeButton);
  messages.appendChild(newMessage);

  // resets the form
  messageForm.reset();
});

messages.addEventListener("click", (e) => {
  if (e.target.type === "button") {
    const button = e.target.innerText;
    const entry = e.target.parentNode;

    const buttonActions = {
      remove: () => {
        entry.remove();
        if (messages.children.length === 0) {
          messages.parentNode.style.display = "none";
        }
      }
    };

    buttonActions[button](e);
  }
});

const githubRequest = new XMLHttpRequest();
githubRequest.open(
  "GET",
  "https://api.github.com/users/leooangeloo/repos"
);
githubRequest.send();
githubRequest.onload = () => {
  repositories = JSON.parse(githubRequest.response);
  console.log(repositories);

  const projectSection = document.getElementById("projects");
  const projectList = projectSection.querySelector("ul");
  for (let i = 0; i < repositories.length; i++) {
    if(repositories[i].private !== true){
      const project = document.createElement("li");
      const projectLink = document.createElement("a");
      projectLink.setAttribute("href", `${repositories[i].html_url}`);
      
      if(repositories[i].description !== null){
        projectLink.innerText = `${repositories[i].name} : ${repositories[i].description}`;
      } else  {
        projectLink.innerText = `${repositories[i].name}`;
      }

      project.appendChild(projectLink);
      projectList.appendChild(project);
    }
  }
};

var modalTexts = {
  microsoft: "Software Engineer/Airgap Engineer • April 2022 – Present •	Currently working on an internally used full-stack application that provides email content management and delivery services to customers in regions around the world. Serving as a high-side Designated Responsible Individual (DRI) and engineer responsible for the health and management of Azure Airgap Cost Management services while on-call. As a Primary Azure Airgap DRI, handling incidents and customer issues ranging in severity, working to investigate and mitigate issues at hand. Ensure that the services are healthy and functional and that any issues that arise are handled properly and within the designated timeframes.",
  raytheon: "Senior Software Engineer – Falls Technology LLC • August 2021 – April 2022 and Senior Software Engineer II – Raytheon Intelligence & Space • July 2020 – August 2021 •	Full Stack Web Development: Proficient in utilizing notable and widely used web technologies for developing robust, secure, and production-ready web applications with high visibility. Technology Stack: Experienced in working with Angular as a web application framework, coding in TypeScript and JavaScript, as well as using Java and Spring Boot for the backend development.",
  northrop: "Cyber Software Engineering Intern • June 2019 – May 2020 •	Research and development on macOS and Linux operating systems and related technologies and methodologies. Utilized Gogs Git service to document project goals, achievements, and instructional wiki pages and to enhance collaboration. Presented current work to the customer and provided proof of concepts being researched through demonstrations.",
  fbi: "Information Technology Honors Intern • June 2018 – April 2019 •	Designed and developed SharePoint 2013 and SharePoint Online sites using HTML, CSS, and JavaScript. Provided customer support for SharePoint 2013 and SharePoint Online. Assisted customers with managing content and configuring permissions. Trained SharePoint users. Captured and analyzed user technical requirements to solve business process challenges using SharePoint. ",
  bowie: "Bachelor of Science in Computer Science • Bowie State University - Bowie, Maryland • Relevant Courses: Computer Science I & II, Discrete Structures, Data Structures and Algorithms, Internet Programming, Systems Programming I & II, Object-Oriented Design, Database Management, Computer Organization, Programming Languages, Computer Ethics, Computer Architecture, Operating Systems, Computer Graphics, Artificial Intelligence, Design & Analysis of Algorithms",
  jmu: "Master of Science in Computer Science • James Madison University - Harrisonburg, Virginia (Graduating Spring 2024) • Relevant Courses: Secure Programming, Networks and Network Security, Operating Systems, Computer Security, Ethics Law and Policy in Cyberspace, Computer Forensics, Cryptography: Algorithms and Applications, Advanced Network Security"
};

function openModal(modalId) {
  var modalContainer = document.getElementById('modalContainer');
  var modalText = document.getElementById('modalText');

  // Get the text from the modalTexts object based on the provided modalId
  var text = modalTexts[modalId];

  modalText.textContent = text;
  modalContainer.style.display = 'block';
}

function closeModal() {
  var modalContainer = document.getElementById('modalContainer');
  modalContainer.style.display = 'none';
}

// Show the scroll-to-top button when the user scrolls down
window.onscroll = function () {
  var button = document.querySelector('.scroll-top-btn');
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      button.classList.add('show');
      button.classList.add('top'); // Add the "top" class when the button is shown
  } else {
      button.classList.remove('show');
      button.classList.remove('top'); // Remove the "top" class when the button is hidden
  }
};

// Scroll to the top of the page when the button is clicked
function scrollToTop() {
  // Scroll smoothly to the top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}