// Student Data from localStorage
let data = JSON.parse(localStorage.getItem("students")) || [];

// Open & Close Modal
function openModal() {
    let modal = document.getElementById("addModal");
    if (modal) {
        modal.style.display = "flex";
    }
}

function closeModal() {
    let modal = document.getElementById("addModal");
    if (modal) {
        modal.style.display = "none";
    }
}

// Close modal when clicking on the dark background
window.addEventListener("click", function(event) {
    let modal = document.getElementById("addModal");
    if (event.target === modal) {
        closeModal();
    }
});

// Add Student
function addStudent(event) {
    if (event && event.preventDefault) {
        event.preventDefault();
    }

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let rollNo = document.getElementById("rollNo").value;
    let cls = document.getElementById("class").value;
    let section = document.getElementById("section").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;

    let student = {
        name: name,
        age: age,
        rollNo: rollNo,
        class: cls,
        section: section,
        email: email,
        phone: phone,
        address: address
    };

    data.push(student);
    localStorage.setItem("students", JSON.stringify(data));
    console.log(data);
    alert("Student added successfully!");

    let form = document.getElementById("studentForm");
    if (form) {
        form.reset();
    }

    closeModal();

    // Refresh view if it is currently displayed
    let view = document.getElementById("view");
    if (view && view.innerHTML.trim() !== "") {
        viewStudent();
    }
}

// View Student Details List
function viewStudent() {
    let view = document.getElementById("view");
    if (!view) return;

    if (data.length === 0) {
        view.innerHTML = "<div class='alert alert-info'>No student records found.</div>";
        return;
    }

    let html = "<h4>Student List (" + data.length + ")</h4>";
    html += "<div class='table-responsive mt-3'>";
    html += "<table class='table table-bordered table-striped'>";
    html += "<thead class='table-dark'>";
    html += "<tr>";
    html += "<th>Roll No</th>";
    html += "<th>Name</th>";
    html += "<th>Age</th>";
    html += "<th>Class</th>";
    html += "<th>Section</th>";
    html += "<th>Email</th>";
    html += "<th>Phone</th>";
    html += "<th>Address</th>";
    html += "</tr>";
    html += "</thead>";
    html += "<tbody>";

    for (let i = 0; i < data.length; i++) {
        html += "<tr>";
        html += "<td>" + data[i].rollNo + "</td>";
        html += "<td>" + data[i].name + "</td>";
        html += "<td>" + data[i].age + "</td>";
        html += "<td>" + data[i].class + "</td>";
        html += "<td>" + data[i].section + "</td>";
        html += "<td>" + data[i].email + "</td>";
        html += "<td>" + data[i].phone + "</td>";
        html += "<td>" + data[i].address + "</td>";
        html += "</tr>";
    }

    html += "</tbody></table></div>";
    view.innerHTML = html;
}