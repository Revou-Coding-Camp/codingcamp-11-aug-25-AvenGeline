console.log ("hello!");

welcomespeech();

//Call the function to prompt the user for their name and display a welcome message//
function welcomespeech() {
    let username = prompt("Please enter your name:"); 
    alert("Welcome " + username + "! I hope you enjoy exploring my work.");
    if (username != '') {
       document.getElementById("user-greeting").textContent = username;
    }
}


function sendmessage() {
    let message = document.getElementById("message").value;
    if (message != '') {
        alert("Pesan berhasil dikirim: " + message);
        document.getElementById("message").value = ''; // Clear the input field
    } else {
        alert("Silakan masukkan pesan sebelum mengirim.");
    }
}