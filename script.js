function calculateDashboard() {

    let total =
        Number(document.getElementById("totalStudents").value);

    let placed =
        Number(document.getElementById("placedStudents").value);

    let companies =
        Number(document.getElementById("companies").value);

    let offers =
        Number(document.getElementById("offers").value);


    if (total == 0) {

        alert("Please enter total students");

        return;
    }


    if (placed > total) {

        alert("Placed students cannot be greater than total students");

        return;
    }


    let efficiency = (placed / total) * 100;


    document.getElementById("studentCount").innerText = total;

    document.getElementById("placedCount").innerText = placed;

    document.getElementById("companyCount").innerText = companies;

    document.getElementById("offerCount").innerText = offers;

    document.getElementById("percentage").innerText =
        efficiency.toFixed(2) + "%";
}
