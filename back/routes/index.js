var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

// MongoDBの接続設定
mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Mongooseスキーマとモデルの定義
var itemSchema = new mongoose.Schema({
  name: String,
});

var Item = mongoose.model('Item', itemSchema);

router.get('/api/items', function (req, res, next) {
  Item.find()
    /* GET MONGO_DB */
    .then((items) => {
      res.json(['itemstest']);
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    })
    .finally(() => {
      res.json(['itemstest']);
    });
});

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
