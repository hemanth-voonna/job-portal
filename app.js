console.log("App Connected");

// Get dropdown elements
const companySelect = document.getElementById("company");
const roleSelect = document.getElementById("role");

// Fill company dropdown
companies.forEach(function (company) {

    const option = document.createElement("option");

    option.value = company.name;
    option.textContent = company.name;

    companySelect.appendChild(option);

});


companySelect.addEventListener("change", function () {
    console.log("Company changed");

    roleSelect.innerHTML = '<option value="">Select Role</option>';

    const selectedCompany = companies.find(function (company) {
        return company.name === companySelect.value;
    });

    
    if (selectedCompany) {

        selectedCompany.roles.forEach(function (role) {

            const option = document.createElement("option");

            option.value = role.title;
            option.textContent = role.title;

            roleSelect.appendChild(option);

        });

    }

});
function searchJobs() {

    const companyName = companySelect.value;
    const roleName = roleSelect.value;

    if (companyName === "" || roleName === "") {
        alert("Please select company and role");
        return;
    }

    const company = companies.find(function (c) {
        return c.name === companyName;
    });

    const role = company.roles.find(function (r) {
        return r.title === roleName;
    });

    alert(
        "Company: " + companyName +
        "\nRole: " + roleName +
        "\nTotal Jobs: " + role.total +
        "\nAvailable: " + role.available +
        "\nClosed: " + role.closed
    );
}