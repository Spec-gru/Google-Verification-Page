document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the values from the form fields
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Log the data to the console (for demonstration purposes)
    console.log('Username:', username);
    console.log('Password:', password);

    // Example using Fetch API to send data to a server
    fetch('https://example.com/login', { // Replace with your server's URL
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Response from server:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
