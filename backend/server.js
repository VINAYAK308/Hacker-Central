// const express = require('express');
// const mysql = require('mysql2');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// // MySQL connection setup
// const db = mysql.createConnection({
//   host: 'localhost',     // Your MySQL host
//   user: 'root',          // Your MySQL user
//   password: 'Trushant@2001',  // Your MySQL password
//   database: 'user_management',   // Your MySQL database
// });

// // Connect to MySQL
// db.connect((err) => {
//   if (err) {
//     console.error('MySQL connection error: ', err);
//   } else {
//     console.log('Connected to MySQL');
//   }
// });

// // Login route to verify user credentials
// app.post('/login', (req, res) => {
//   const { username, password } = req.body;

//   const query = 'SELECT * FROM users_t WHERE username = ? AND password = ?';

//   db.query(query, [username, password], (err, results) => {
//     if (err) {
//       return res.status(500).send('Database error');
//     }

//     if (results.length > 0) {
//       // User exists, return success response
//       res.json({ success: true, message: 'Login successful' });
//     } else {
//       // No user found with provided credentials
//       res.json({ success: false, message: 'Invalid credentials' });
//     }
//   });
// });

// // Start the server
// const PORT = 3001;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL connection setup
const db = mysql.createConnection({
  host: 'localhost',     // Your MySQL host
  user: 'root',          // Your MySQL user
  password: 'Trushant@2001',  // Your MySQL password
  database: 'user_management',   // Your MySQL database
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('MySQL connection error: ', err);
  } else {
    console.log('Connected to MySQL');
  }
});

// Login route to verify user credentials
// app.post('/login', (req, res) => {
//   const { username, password } = req.body;

//   const query = 'SELECT * FROM users_t WHERE username = ? AND password = ?';

//   db.query(query, [username, password], (err, results) => {
//     if (err) {
//       return res.status(500).send('Database error');
//     }

//     if (results.length > 0) {
//       // User exists, return success response
//       res.json({ success: true, message: 'Login successful' });
//     } else {
//       // No user found with provided credentials
//       res.json({ success: false, message: 'Invalid credentials' });
//     }
//   });
// });
app.post('/login', (req, res) => {
  const { username, password, role } = req.body; // Include role

  const query = 'SELECT * FROM users_t WHERE username = ? AND password = ? AND role = ?';

  db.query(query, [username, password, role], (err, results) => {
    if (err) {
      return res.status(500).send('Database error');
    }

    if (results.length > 0) {
      // User exists, return success response with role
      const user = results[0]; // Assuming the first result is the user
      res.json({ success: true, message: 'Login successful', role: user.role }); // Return role
    } else {
      // No user found with provided credentials
      res.json({ success: false, message: 'Invalid credentials' });
    }
  });
});


// Start the server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});