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
    const [rows] = await this.database.query(
      `SELECT p.id, p.name, p.price, p.quantity, p.is_fav, m.name AS manufacturer, c.name AS category FROM ${this.table} AS p INNER JOIN manufacturer AS m ON m.id=p.manufacturer_id INNER JOIN category AS c ON c.id=p.category_id ORDER BY p.id ASC`
    );

    return rows;
  }

  // U

  async update(id, quantity, isFav) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET quantity = ?, is_fav = ? WHERE id = ?`,
      [quantity, isFav, id]
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
