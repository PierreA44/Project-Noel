const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "item" as configuration
    super({ table: "user" });
  }

  async create(email, hashedPassword) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (email, hashed_password) VALUES (?,?)`,
      [email, hashedPassword]
    );
    return result.insertId;
  }

  async readByEmail(email) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE email=?`,
      [email]
    );

    return rows[0];
  }
}

module.exports = UserManager;
