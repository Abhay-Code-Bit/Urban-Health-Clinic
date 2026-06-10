// Hospital list (fixed data)
const hospitals = [
  { name: "Victoria Hospital", lat: 12.9634, lng: 77.5735 },
  { name: "Bowring Hospital", lat: 12.9789, lng: 77.6030 },
  { name: "Jayadeva Hospital", lat: 12.9166, lng: 77.6101 }
];

// Variables to store user and hospital data
let userLat, userLng, nearestHospital;

// Step 1: When user clicks Allow Location
document.getElementById("allowBtn").onclick = function () {

  // Get user's current location
  navigator.geolocation.getCurrentPosition(function (position) {

    userLat = position.coords.latitude;
    userLng = position.coords.longitude;

    // Find nearest hospital
    nearestHospital = hospitals[0]; // assume first hospital is nearest

    // Show confirmation screen
    document.getElementById("step1").style.display = "none";
    document.getElementById("step2").style.display = "block";

    document.getElementById("step2").innerHTML = `
      <h3>Nearest Hospital</h3>
      <p>${nearestHospital.name}</p>
      <button id="confirmBtn">Request Ambulance</button>
      <button id="cancelBtn">Cancel</button>
    `;

    // Button actions
    document.getElementById("confirmBtn").onclick = openMaps;
    document.getElementById("cancelBtn").onclick = reset;
  });
};

// Step 2: Open Google Maps for navigation
function openMaps() {
  const mapUrl =
    "https://www.google.com/maps/dir/?api=1" +
    "&origin=" + userLat + "," + userLng +
    "&destination=" + nearestHospital.lat + "," + nearestHospital.lng +
    "&travelmode=driving";

  window.open(mapUrl, "_blank");

  document.getElementById("step2").style.display = "none";
  document.getElementById("step3").style.display = "block";
}

// Reset back to start
function reset() {
  document.getElementById("step2").style.display = "none";
  document.getElementById("step1").style.display = "block";
}

// Done button
document.getElementById("doneBtn").onclick = reset;
