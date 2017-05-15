const mongoose = require('mongoose');
// Destructuring
const { Schema } = mongoose;

// Connecting to a DB that will be called recipes.
mongoose.connect('mongodb://localhost/recipes')
const { connection: db } = mongoose;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('connected to recipe database')
});

const ingredientSchema = new Schema ({
  name: {
    type: String,
    trim: true
  },
  created_at: {
    type: Date,
    default: Date.now
  }
})

const Ingredient = mongoose.model('Ingredient', ingredientSchema);

module.exports = Ingredient;
