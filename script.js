document.addEventListener("DOMContentLoaded", () => {

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