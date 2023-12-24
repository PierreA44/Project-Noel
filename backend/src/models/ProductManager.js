const AbstractManager = require("./AbstractManager");

class ProductManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "product" as configuration
    super({ table: "product" });
  }

  // CRUD

  // C

  async create(name, quantity, price, categoryId, manufacturerId) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (name, quantity, price, category_id, manufacturer_id) VALUES (?, ?, ?, ?, ?)`,
      [name, quantity, price, categoryId, manufacturerId]
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

  async update(id, quantity, isWish) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET quantity = ?, isWish = ? WHERE id = ?`,
      [quantity, isWish, id]
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

module.exports = ProductManager;
