// Student Information Web App

// Student data
const student = {
    name: "Emima",
    course: "BCA",
    department: "Computer Applications",
    semester: "6th Semester"
};


// Function to display student information
function showStudentInfo() {
    const studentInfo = document.getElementById("studentInfo");

    studentInfo.innerHTML = `
        <h2>Student Information</h2>
        <p><strong>Name:</strong> ${student.name}</p>
        <p><strong>Course:</strong> ${student.course}</p>
        <p><strong>Department:</strong> ${student.department}</p>
        <p><strong>Semester:</strong> ${student.semester}</p>
    `;

    studentInfo.style.display = "block";
}


// Function to show welcome message
function showWelcomeMessage() {
    alert("Welcome to the Student Information Web App!");
}


// Function to validate student form
function validateForm() {

    const name = document.getElementById("name").value.trim();
    const course = document.getElementById("course").value.trim();

    if (name === "") {
        alert("Please enter the student's name.");
        return false;
    }

    if (course === "") {
        alert("Please enter the student's course.");
        return false;
    }

    alert("Student information submitted successfully!");

    return true;
}


// Function to clear the form
function clearForm() {

    const name = document.getElementById("name");
    const course = document.getElementById("course");

    if (name) {
        name.value = "";
    }

    if (course) {
        course.value = "";
    }
}
