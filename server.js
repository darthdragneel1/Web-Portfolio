const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the root directory
app.use(express.static(__dirname));

// Static files are handled by the express.static middleware above

app.listen(PORT, () => {
    console.log(`Portfolio is running at http://localhost:${PORT}`);
    console.log(`Press Ctrl+C to stop the server.`);
});
