const express = require('express');
const app = express();
const PORT = 4000;

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`🦎 Lizard server running at http://localhost:${PORT}`);
});
