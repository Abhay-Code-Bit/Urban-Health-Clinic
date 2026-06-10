// Hospital Data

const hospitals = [
    // ---------------- INDIA – BANGALORE ----------------
    {
        name: "Victoria Government Hospital",
        location: "Bangalore, India",
        type: "Government",
        specialty: "Multi-specialty Emergency",
    },
    {
        name: "Bowring & Lady Curzon Hospital",
        location: "Bangalore, India",
        type: "Government",
        specialty: "General Medicine",
    },
    {
        name: "Vani Vilas Women & Children Hospital",
        location: "Bangalore, India",
        type: "Government",
        specialty: "Maternity & Pediatrics",
    },
    {
        name: "ESI Hospital Rajajinagar",
        location: "Bangalore, India",
        type: "Government",
        specialty: "Employee Health Services",
    },
    {
        name: "Jayadeva Institute of Cardiology",
        location: "Bangalore, India",
        type: "Government",
        specialty: "Heart Care",
    },

    // ---------------- NEPAL ----------------
    {
        name: "Bir Hospital",
        location: "Kathmandu, Nepal",
        type: "Government",
        specialty: "Multi-specialty Services",
    },
    {
        name: "Civil Service Hospital",
        location: "Kathmandu, Nepal",
        type: "Government",
        specialty: "General Medicine",
    },
    {
        name: "Paropakar Maternity & Women's Hospital",
        location: "Kathmandu, Nepal",
        type: "Government",
        specialty: "Pregnancy & Gynecology",
    },
    {
        name: "Lumbini Provincial Hospital",
        location: "Butwal, Nepal",
        type: "Government",
        specialty: "Emergency & General Care",
    },
    {
        name: "Nobel Medical College Teaching Hospital",
        location: "Biratnagar, Nepal",
        type: "Government",
        specialty: "Teaching & Multi-Specialty",
    },
];

// Display Hospitals

function displayHospitals(list) {
    const hospitalList = document.getElementById("hospitalList");
    hospitalList.innerHTML = "";

    list.forEach(hospital => {
        const card = document.createElement("div");
        card.className = "hospital-card";

        card.innerHTML = `
            <h4>${hospital.name}</h4>
            <p><b>Location:</b> ${hospital.location}</p>
            <p><b>Type:</b> ${hospital.type}</p>
            <p><b>Specialty:</b> ${hospital.specialty}</p>
            <button>View Details</button>
        `;

        hospitalList.appendChild(card);
    });
}

// Search Feature

function searchHospital() {
    const input = document.getElementById("searchInput").value.toLowerCase();

    const filtered = hospitals.filter(hospital =>
        hospital.name.toLowerCase().includes(input) ||
        hospital.location.toLowerCase().includes(input) ||
        hospital.specialty.toLowerCase().includes(input)
    );

    displayHospitals(filtered);
}

// Load All Hospitals On Page Start

window.onload = function () {
    displayHospitals(hospitals);
};
