import express from 'express';
import mongoose from 'mongoose';
import { app } from './app.js';
import articleRoutes from './articleRoutes.js';

const router = express.Router();

// Use article routes under /api/articles endpoint
router.use('/api/articles', articleRoutes);

mongoose
  .connect('mongodb://localhost:27017/lap3', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    // Use the central router
    app.use('/', router);

    app.listen(process.env.PORT || 3000, () =>
      console.log(`Server running on port: http://localhost:${process.env.PORT || 3000}`)
    );
  })
  .catch((e) => console.log(e));