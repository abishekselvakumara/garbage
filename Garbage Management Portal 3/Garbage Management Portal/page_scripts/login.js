document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Simulating stored credentials for user and admin
        const storedUserUsername = "user";
        const storedUserPassword = "user123";
        const storedAdminUsername = "admin";
        const storedAdminPassword = "admin123";

        if (username === storedUserUsername && password === storedUserPassword) {
            document.cookie = `username=${encodeURIComponent(username)}; path=/`;
            document.cookie = `password=${encodeURIComponent(password)}; path=/`;
            document.cookie = `role=user; path=/`;
            window.location = "main.html"; // Redirect to user panel
        } else if (username === storedAdminUsername && password === storedAdminPassword) {
            document.cookie = `username=${encodeURIComponent(username)}; path=/`;
            document.cookie = `password=${encodeURIComponent(password)}; path=/`;
            document.cookie = `role=admin; path=/`;
            window.location = "adminpanel.html"; // Redirect to admin panel
        } else {
            alert("Invalid username or password. Please try again.");
        }
    });
});
