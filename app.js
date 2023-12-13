const express = require('express');
const mongoose = require('mongoose');
const articleRoutes = require('./routes/articleRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/lap3', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());

// Use the routes under the /api/articles endpoint
app.use('/api/articles', articleRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});