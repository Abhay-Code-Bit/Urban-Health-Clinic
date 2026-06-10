// MENU TOGGLE
const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");

mobileMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// BOOK APPOINTMENT
function book(){
    let doc = document.getElementById("doctor").value;
    let date = document.getElementById("date").value;
    let msg = document.getElementById("msg");

    if(doc === "" || date === ""){
        msg.className="error";
        msg.style.display="block";
        msg.innerText="❌ Please select doctor & date!";
        return;
    }

    msg.className="success";
    msg.style.display="block";
    msg.innerText="✅ Appointment booked successfully!";
}
