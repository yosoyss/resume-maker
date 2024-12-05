document.addEventListener("DOMContentLoaded", () => {

    // Reference input fields and template elements
    const inputName = document.getElementById("inputName");
    const inputPhone = document.getElementById("inputPhone");
    const inputEmail = document.getElementById("inputEmail");
    const inputGithub = document.getElementById("inputGithub");

    const nameField = document.getElementById("name");
    const phoneField = document.getElementById("phone");
    const emailField = document.getElementById("email");
    const githubField = document.getElementById("github");

    const updateButton = document.getElementById("updateTemplate");

    // Function to update template data
    updateButton.addEventListener("click", () => {
        nameField.textContent = inputName.value || "[Your Name]";
        phoneField.textContent = inputPhone.value || "[Phone Number]";
        emailField.textContent = inputEmail.value || "[Email]";
        githubField.textContent = inputGithub.value ? `GitHub: ${inputGithub.value}` : "[GitHub Link]";
    });

    // Education Dynamic Input Fields
    const educationData = document.getElementById("educationData");
    const addEducationButton = document.getElementById("addEducation");

    // Function to add education dynamically
    addEducationButton.addEventListener("click", () => {
        const courseName = document.getElementById("inputCourseName").value || "N/A";
        const coursePercentage = document.getElementById("inputCoursePercentage").value || "N/A";
        const courseYear = document.getElementById("inputCourseYear").value || "N/A";
        const collegeName = document.getElementById("inputCollegeName").value || "N/A";

        // Create the new course entry
        const courseDiv = document.createElement("div");
        courseDiv.classList.add("courseData");
        courseDiv.innerHTML = `
    <div style="display:flex"><strong>${courseName}</strong> &nbsp; <div id="percentage">(${coursePercentage})</div></div>
    <div id="courseYear">${courseYear}</div>
    <button class="removeEducation no-print">X</button>
`;

        // Create the college entry
        const collegeDiv = document.createElement("div");
        collegeDiv.classList.add("courseColg");
        collegeDiv.innerHTML = `<p>${collegeName}</p>`;

        // Prepend the new data to the education section in the template
        educationData.prepend(collegeDiv); // Add college entry first
        educationData.prepend(courseDiv); // Add course entry after college

        // Add remove functionality to the new "Remove" button
        const removeButtons = document.querySelectorAll(".removeEducation");
        removeButtons.forEach(button => {
            button.addEventListener("click", (e) => {
                const courseEntry = e.target.closest('.courseData');
                const collegeEntry = courseEntry.nextElementSibling;
                if (courseEntry) courseEntry.remove();
                if (collegeEntry && collegeEntry.classList.contains('courseColg')) collegeEntry.remove();
            });
        });

        // Clear the input fields after adding
        document.getElementById("inputCourseName").value = "";
        document.getElementById("inputCoursePercentage").value = "";
        document.getElementById("inputCourseYear").value = "";
        document.getElementById("inputCollegeName").value = "";
    });


    // Experience Dynamic Input Fields
    const experienceData = document.getElementById("experienceData");
    const addExperienceButton = document.getElementById("addExperience");

    // Function to add experience dynamically
    addExperienceButton.addEventListener("click", () => {
        const jobTitle = document.getElementById("inputJobTitle").value || "N/A";
        const companyName = document.getElementById("inputCompanyName").value || "N/A";
        const experienceYear = document.getElementById("inputExperienceYear").value || "N/A";

        // Create the new experience entry
        const experienceDiv = document.createElement("div");
        experienceDiv.classList.add("data");
        experienceDiv.innerHTML = `
            <div><strong>${jobTitle}</strong> <div id="percentage">${companyName}</div></div>
            <div>${experienceYear}</div>
            <button class="removeExperience no-print">X</button>
        `;

        // Create the college entry
        const experienceColgDiv = document.createElement("div");
        experienceColgDiv.classList.add("courseColg");
        // experienceColgDiv.innerHTML = `<p>${companyName}</p>`;

        // Append the new data to the experience section in the template
        experienceData.appendChild(experienceDiv);
        experienceData.appendChild(experienceColgDiv);

        // Add remove functionality to the new "Remove" button
        const removeExperienceButtons = document.querySelectorAll(".removeExperience");
        removeExperienceButtons.forEach(button => {
            button.addEventListener("click", (e) => {
                const experienceEntry = e.target.closest('.data');
                const experienceColgEntry = e.target.closest('.courseColg');
                if (experienceEntry) experienceEntry.remove();
                if (experienceColgEntry) experienceColgEntry.remove();
            });
        });

        // Clear the input fields after adding
        document.getElementById("inputJobTitle").value = "";
        document.getElementById("inputCompanyName").value = "";
        document.getElementById("inputExperienceYear").value = "";
    });

    // Skills Dynamic Input Fields
    const skillData = document.querySelector(".skillData ul");
    const addSkillButton = document.getElementById("addSkill");

    // Function to add skill dynamically
    addSkillButton.addEventListener("click", () => {
        const skillName = document.getElementById("inputSkill").value || "N/A";

        // Create the new skill entry
        const skillItem = document.createElement("li");
        skillItem.innerHTML = `${skillName} <button class="removeSkill no-print">X</button>`;

        // Append the new skill to the skills section in the template
        skillData.appendChild(skillItem);

        // Add remove functionality to the new "Remove" button
        const removeSkillButtons = document.querySelectorAll(".removeSkill");
        removeSkillButtons.forEach(button => {
            button.addEventListener("click", (e) => {
                e.target.closest('li').remove();
            });
        });

        // Clear the input field after adding
        document.getElementById("inputSkill").value = "";
    });

    const projectData = document.getElementById("projectData");
    document.getElementById("addProject").addEventListener("click", () => {
        const projectName = document.getElementById("inputProjectName").value || "N/A";
        const projectDescription = document.getElementById("inputProjectDescription").value || "N/A";
        const projectLink = document.getElementById("inputProjectLink").value;

        const projectDiv = document.createElement("div");
        projectDiv.classList.add("projectItem");
        projectDiv.innerHTML = `
    <p><strong>${projectName} ${projectLink ? `<a href="${projectLink}" target="_blank">View Project</a>` : ""}</strong></p>
    <p>${projectDescription}</p><button class="removeProject no-print">X</button>
`;
        projectData.appendChild(projectDiv);

        // Add remove functionality
        const removeButtons = document.querySelectorAll(".removeProject");
        removeButtons.forEach(button => {
            button.addEventListener("click", (e) => {
                e.target.closest('.projectItem').remove();
            });
        });

        // Clear input fields
        document.getElementById("inputProjectName").value = "";
        document.getElementById("inputProjectDescription").value = "";
        document.getElementById("inputProjectLink").value = "";
    });


    const saveAsWord = () => {
        const templateContent = document.querySelector(".template1").outerHTML;

        // Prepare Word document structure with complete and valid HTML
        const wordDocument = `
<!DOCTYPE html>
<html xmlns:o='urn:schemas-microsoft-com:office:office' 
      xmlns:w='urn:schemas-microsoft-com:office:word' 
      xmlns='http://www.w3.org/TR/REC-html40'>
<head>
    <meta charset='UTF-8'>
    <title>Resume</title>
    <style>
        body { font-family: Arial, sans-serif; }
        .template1 { margin: 20px; }
        .header { background-color: #f4f4f4; padding: 10px; text-align: center; }
        .subheader { font-weight: bold; margin-bottom: 10px; }
        /* Add additional styles here */
    </style>
</head>
<body>
    ${templateContent}
</body>
</html>
`;

        // console.log(wordDocument);

        try {
            // Create a Blob for the Word document
            const blob = new Blob([wordDocument], { type: "application/msword" });

            // Create a link element for downloading the file
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = "resume.doc"; // Filename for the downloaded Word document
            link.click();
        } catch (error) {
            console.error("Error generating Word document:", error);
        }
    };

    // Add event listener for Save as Word button
    // document.getElementById("saveAsWord").addEventListener("click", saveAsWord);


    //summary function
    document.getElementById("summary").addEventListener("click", () => {
        document.getElementById("summarytxt").textContent = document.getElementById("inputSummary").value || "[Summary/Objective]";
    });


});

function tabs(activeTabId) {
    // Get all tab contents
    const allTabs = document.getElementsByClassName("tabContent");
    for (let i = 0; i < allTabs.length; i++) {0
        allTabs[i].style.display = "none"; // Hide all tab contents
    }

    // Show the active tab's content
    document.getElementById(activeTabId).style.display = "block";

    // Update tab button active state
    const allButtons = document.getElementsByClassName("tabButton");
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove("active");
    }
    document.querySelector(`.tabButton[onclick="tabs('${activeTabId}')"]`).classList.add("active"); // Add active class to clicked button
}


//preview model
function openModal(){
    document.getElementById('modal').style.display='block';
    document.querySelector('.template1').style.display='block';
    // alert("clicked")
}

function closeModal(){
    document.getElementById('modal').style.display='none';
    // document.querySelector('.template1').style.display='block';
    // alert("clicked")
}