function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function downloadFile() {
    // Replace the URL with the raw URL of your file
    var fileUrl = "https://github.com/tenos200/tenos200.github.io/blob/main/assets/Tim_Enos_Resume.pdf";
    
    // Trigger file download
    window.location.href = fileUrl;
}