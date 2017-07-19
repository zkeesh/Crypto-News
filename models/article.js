var Schema = mongoose.Schema

var articleSchema = new Schema({
  link: {
    type: String
  },
  image: {
    type: String
  }
})

var myModel = mongoose.model('article', articleSchema);

module.exports = myModel;
