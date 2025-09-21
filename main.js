// Gallery Section
let images = [
    "Images/laptop 1.jpg",
    "Images/laptop 2.jpg",
    "Images/laptop 3.jpg",
    "Images/camera 1.jpg",
    "Images/camera 2.jpg",
    "Images/camera 3.jpg",
    "Images/phone 1.jpg",
    "Images/phone 2.jpg",
    "Images/phone 3.jpg",
    "Images/phone 4.jpg",
    "Images/phone 5.jpg"
]

let currentIndex = 0;

function showImage(){
    document.getElementById("gallery-Image").src = images[currentIndex];
}

function nextImage(){
    currentIndex = (currentIndex + 1) % images.length;
    showImage();
}


function previousImage(){
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage();
}

setInterval(nextImage, 3000); 


// Contact Us Section
document.getElementById("myForm").onsubmit = function(event) {
    event.preventDefault(); // Prevent form submission

    let isValid = true;

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();

    // Clear previous error messages
    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";

    // Name validation
    if (name === "") {
        document.getElementById("nameError").style.color = "red";
        document.getElementById("nameError").innerText = "Name is required.";
        isValid = false;
    } else if (name.length < 3) {
        document.getElementById("nameError").style.color = "red";
        document.getElementById("nameError").innerText = "Name must be at least 3 characters.";
        isValid = false;
    }

    // Email validation
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email === "") {
        document.getElementById("emailError").style.color = "red";
        document.getElementById("emailError").innerText = "Email is required.";
        isValid = false;
    } else if (!email.match(emailPattern)) {
        document.getElementById("emailError").style.color = "red";
        document.getElementById("emailError").innerText = "Invalid email format.";
        isValid = false;
    }

    // If all validations passed
    if (isValid) {
        alert("Form submitted successfully!");
        document.getElementById("myForm").reset(); // Reset form fields
    }
};

