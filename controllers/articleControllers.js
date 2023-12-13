const Article = require('./models/article');

// get all 
exports.getAllArticles = async (req, res) => {
    try {
      const articles = await Article.find();
      res.status(200).json({
        status: 'success',
        data: {
          articles,
        },
      });
    } catch (err) {
      res.status(500).json({
        status: 'error',
        message: 'Internal server error',
      });
    }
  };
  
  // Get a single article by ID
  exports.getArticleById = async (req, res) => {
    try {
      const article = await Article.findById(req.params.id);
      if (!article) {
        return res.status(404).json({
          status: 'fail',
          message: 'Article not found',
        });
      }
      res.status(200).json({
        status: 'success',
        data: {
          article,
        },
      });
    } catch (err) {
      res.status(500).json({
        status: 'error',
        message: 'Internal server error',
      });
    }
  };
  
  // Create a new article
  exports.createArticle = async (req, res) => {
    try {
      const newArticle = await Article.create(req.body);
      res.status(201).json({
        status: 'success',
        data: {
          article: newArticle,
        },
      });
    } catch (err) {
      res.status(400).json({
        status: 'fail',
        message: err.message,
      });
    }
  };
  
  // Update an existing article by ID
  exports.updateArticle = async (req, res) => {
    try {
      const updatedArticle = await Article.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );
      if (!updatedArticle) {
        return res.status(404).json({
          status: 'fail',
          message: 'Article not found',
        });
      }
      res.status(200).json({
        status: 'success',
        data: {
          article: updatedArticle,
        },
      });
    } catch (err) {
      res.status(400).json({
        status: 'fail',
        message: err.message,
      });
    }
  };
  
  // Delete an article by ID
  exports.deleteArticle = async (req, res) => {
    try {
      const deletedArticle = await Article.findByIdAndDelete(req.params.id);
      if (!deletedArticle) {
        return res.status(404).json({
          status: 'fail',
          message: 'Article not found',
        });
      }
      res.status(204).json({
        status: 'success',
        data: null,
      });
    } catch (err) {
      res.status(500).json({
        status: 'error',
        message: 'Internal server error',
      });
    }
  };