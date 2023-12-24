const tables = require("../tables");

// BREAD

// B

const browse = async (req, res, next) => {
  try {
    const categories = await tables.category.readAll();
    if (categories == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(categories);
    }
  } catch (error) {
    next(error);
  }
};

// R

const read = async (req, res, next) => {
  try {
    const category = await tables.category.read(Number(req.params.id));

    if (category == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(category);
    }
  } catch (error) {
    next(error);
  }
};

// E

const edit = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const updatedCategory = await tables.category.update(Number(id), name);
    if (updatedCategory == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json({ message: `Category ${name} updated` });
    }
  } catch (error) {
    next(error);
  }
};

// A

const add = async (req, res, next) => {
  try {
    const { name } = req.body;

    const newCategory = await tables.category.create(name);

    if (newCategory == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json({ message: `Category ${name} created` });
    }
  } catch (error) {
    next(error);
  }
};

// D

const destroy = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedCategory = await tables.category.delete(Number(id));

    if (deletedCategory == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json({ message: `Category #${id} deleted` });
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
