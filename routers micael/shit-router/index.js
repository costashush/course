const app = require('./client/app');

// Start the server
const port = process.env.PORT || 3030;
app.listen(port);
console.log(`Server listening at ${port}`);

// refactored code for easier test and feature scale