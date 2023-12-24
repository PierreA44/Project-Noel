const tables = require("../tables");

// BREAD

// B

const browse = async (req, res, next) => {
  try {
    const products = await tables.product.readAll();

    if (products == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(products);
    }
  } catch (error) {
    next(error);
  }
};

// R

const read = async (req, res, next) => {
  try {
    const product = await tables.product.read(Number(req.params.id));

    if (product == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(product);
    }
  } catch (error) {
    next(error);
  }
};

// E

const edit = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, quantity, isWish } = req.body;
    const updatedProduct = await tables.product.update(
      Number(id),
      Number(quantity),
      Number(isWish)
    );

    if (updatedProduct == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json({ message: `Product ${name} updated` });
    }
  } catch (error) {
    next(error);
  }
};

// A

const add = async (req, res, next) => {
  try {
    const {
      name,
      quantity,
      price,
      category_id: categoryId,
      manufacturer_id: manufacturerId,
    } = req.body;

    const newProduct = await tables.product.create(
      name,
      Number(quantity),
      Number(price),
      Number(categoryId),
      Number(manufacturerId)
    );

    if (newProduct == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json({ message: `Product ${name} created` });
    }
  } catch (error) {
    next(error);
  }
};

// D

const destroy = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedProduct = await tables.product.delete(Number(id));

    if (deletedProduct == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json({ message: `Product #${id} deleted` });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
};
