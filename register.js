document.getElementById("regForm").onsubmit = function(e) {
    e.preventDefault();

    const user = document.getElementById("regUser").value;
    const pass = document.getElementById("regPass").value;

    // Store user credentials in localStorage
    localStorage.setItem("username", user);
    localStorage.setItem("password", pass);

    alert("Registration successful!");
    window.location.href = "dashboard.html"; // Redirect to dashboard/table
};
