// Puts the current year in the footer.
// Loaded with "defer", so the footer exists by the time this runs.
//document.getElementById("year").textContent = new Date().getFullYear();

/* Display the current year in the footer */


const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}
