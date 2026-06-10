document.getElementById("loginForm").onsubmit = function(e) {
    e.preventDefault();

    const enteredUser = document.getElementById("loginUser").value;
    const enteredPass = document.getElementById("loginPass").value;

    const storedUser = localStorage.getItem("username");
    const storedPass = localStorage.getItem("password");

    if (enteredUser === storedUser && enteredPass === storedPass) {
        alert("Login successful!");
        window.location.href = "dashboard.html"; // Redirect to new table/page
    } else {
        alert("Invalid username or password! Please register if new.");
        window.location.href = "register.html"; // Redirect to registration page
    }
};
