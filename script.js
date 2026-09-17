let students = [];

function addStudent() {

    let name = document.getElementById("name").value;
    let rollno = document.getElementById("rollno").value;
    let department = document.getElementById("department").value;
    let year = document.getElementById("year").value;

    if (name == "" || rollno == "" || department == "" || year == "") {
        alert("Please fill all fields");
        return;
    }

    let student = {
        name: name,
        rollno: rollno,
        department: department,
        year: year
    };

    students.push(student);

    displayStudents();

    document.getElementById("name").value = "";
    document.getElementById("rollno").value = "";
    document.getElementById("department").value = "";
    document.getElementById("year").value = "";
}


function displayStudents() {

    let table = document.getElementById("studentTable");

    table.innerHTML = "";

    for (let i = 0; i < students.length; i++) {

        table.innerHTML += `
        <tr>

            <td>${students[i].name}</td>

            <td>${students[i].rollno}</td>

            <td>${students[i].department}</td>

            <td>${students[i].year}</td>

            <td>

                <button class="edit"
                onclick="editStudent(${i})">
                Edit
                </button>

                <button class="delete"
                onclick="deleteStudent(${i})">
                Delete
                </button>

            </td>

        </tr>
        `;
    }
}


function deleteStudent(index) {

    students.splice(index, 1);

    displayStudents();
}


function editStudent(index) {

    document.getElementById("name").value =
        students[index].name;

    document.getElementById("rollno").value =
        students[index].rollno;

    document.getElementById("department").value =
        students[index].department;

    document.getElementById("year").value =
        students[index].year;

    students.splice(index, 1);

    displayStudents();
}


function searchStudent() {

    let search =
        document.getElementById("search").value.toLowerCase();

    let rows =
        document.getElementById("studentTable").getElementsByTagName("tr");

    for (let i = 0; i < rows.length; i++) {

        let name =
            rows[i].getElementsByTagName("td")[0];

        if (name) {

            let text = name.textContent.toLowerCase();

            if (text.includes(search)) {
                rows[i].style.display = "";
            } else {
                rows[i].style.display = "none";
            }
        }
    }
}
