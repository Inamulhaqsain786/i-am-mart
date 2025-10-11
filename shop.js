


// Toggle search bar visibility
function toggleSearch() {
    const box = document.getElementById("searchBox");
    box.style.display = box.style.display === "block" ? "none" : "block";
}

// Dummy search action
function performSearch() {
    const value = document.getElementById("searchInput").value;
    alert("Searching for: " + value);
}


// Toggle User Box
function toggleUser() {
    const userBox = document.getElementById("userBox");
    userBox.style.display = userBox.style.display === "block" ? "none" : "block";
}

// Dummy login
function loginUser() {
    const email = document.getElementById("userEmail").value;
    const pass = document.getElementById("userPassword").value;

    if (email && pass) {
        alert("Welcome, " + email + "!");
        toggleUser();
    } else {
        alert("Please enter email and password.");
    }
}
