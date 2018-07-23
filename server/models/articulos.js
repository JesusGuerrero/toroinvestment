
var Mongoose = require('mongoose'),
  schema = Mongoose.Schema({
    title: {type: String, required: true},
    link: {type: String, lowercase: true, unique: true, required: true},
    deck: {type: String},
    type: {type: String, default: 'Article'},
    sections: [String],
    tags: [String],
    created: { type: Date, default: Date.now },
    creator: {type: Mongoose.Schema.Types.ObjectId, ref: 'User'},
    published: {type: Boolean},
  }),
  Articulo = Mongoose.model('Articulos', schema);

module.exports = Articulo;
