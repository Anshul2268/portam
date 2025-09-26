function openSidebar() {
  document.getElementById("sidebar").classList.add("active");
  document.getElementById("overlay").classList.add("active");
  document.getElementById("menuBtn").classList.add("hidden");
}

function closeSidebar() {
  document.getElementById("sidebar").classList.remove("active");
  document.getElementById("overlay").classList.remove("active");
  document.getElementById("menuBtn").classList.remove("hidden");
}
// Highlight active link when clicked
const links = document.querySelectorAll(".sidebar-links a");

links.forEach(link => {
  link.addEventListener("click", function() {
    // remove "active" class from all links
    links.forEach(l => l.classList.remove("active"));
    // add "active" class to the clicked one
    this.classList.add("active");
  });
});


