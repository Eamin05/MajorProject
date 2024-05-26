const express = require('express');
const bodyParser = require('body-parser');
const registerRoute = require('./routes/register');
const loginRoute = require('./routes/login');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files from the "public" directory
app.use(express.static('public'));

app.use('/register', registerRoute);
app.use('/login', loginRoute);

// Define route handler for GET /dashboard
app.get('/dashboard', (req, res) => {
    // Here you can render the dashboard HTML page or perform any necessary actions
    res.sendFile(__dirname + '/public/dashboard.html'); // Assuming your dashboard HTML file is located in the "public" directory
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
