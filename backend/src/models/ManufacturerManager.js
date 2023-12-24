const AbstractManager = require("./AbstractManager");

class ManufacturerManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "manufacturer" as configuration
    super({ table: "manufacturer" });
  }

  // CRUD

  // C

  async create(name, productionCountry) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (name, production_country) VALUES (?, ?)`,
      [name, productionCountry]
    );

    return result.insertId;
  }

  // Rs

  async read(id) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE id = ?`,
      [id]
    );

    return rows[0];
  }

  async readAll() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);

    return rows;
  }

  // U

  async update(id, name, productionCountry) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET name = ?, production_country = ? WHERE id = ?`,
      [name, productionCountry, id]
    );

    return result.affectedRows;
  }

  // D

  async delete(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ?`,
      [id]
    );

    return result.affectedRows;
  }
}

module.exports = ManufacturerManager;
