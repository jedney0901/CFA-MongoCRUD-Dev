var express = require('express');
var router = express.Router();

const ingredientController = require('../../../controllers/ingredientController')
const Ingredient = require('../../../models/Ingredient');

router.get('/', ingredientController.getIngredients);

router.post('/', ingredientController.createIngredients);

router.get('/api/v1ingredients/:id/edit', ingredientController.editIngredients);

router.post('/api/v1/ingredients/:id/edit', ingredientController.updateIngredients);

router.post ('/api/v1/ingredients/:id/delete', ingredientController.deleteIngredients);

module.exports = router;
