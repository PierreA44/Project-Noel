const tables = require("../tables");

// BREAD

// B

const browse = async (req, res, next) => {
  try {
    const manufacturers = await tables.manufacturer.readAll();

    if (manufacturers == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(manufacturers);
    }
  } catch (error) {
    next(error);
  }
};

// R

const read = async (req, res, next) => {
  try {
    const manufacturer = await tables.manufacturer.read(Number(req.params.id));

    if (manufacturer == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(manufacturer);
    }
  } catch (error) {
    next(error);
  }
};

// E

const edit = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, production_country: productionCountry } = req.body;
    const updatedManufacturer = await tables.manufacturer.update(
      Number(id),
      name,
      productionCountry
    );

    if (updatedManufacturer == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json({ message: `Manufacturer ${name} updated` });
    }
  } catch (error) {
    next(error);
  }
};

// A

const add = async (req, res, next) => {
  try {
    const { name, production_country: productionCountry } = req.body;

    const newManufacturer = await tables.manufacturer.create(
      name,
      productionCountry
    );

    if (newManufacturer == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json({ message: `Manufacturer ${name} created` });
    }
  } catch (error) {
    next(error);
  }
};

// D

const destroy = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedManufacturer = await tables.manufacturer.delete(Number(id));

    if (deletedManufacturer == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json({ message: `Manufacturer #${id} deleted` });
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
