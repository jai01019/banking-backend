//models/User.js
const db = require('../config/db');

class User {
  static async findByEmail(email) {
    const [user] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
    return user;
  }

  static async findById(id) {
    const [user] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
    return user;
  }

  static async create(user) {
    const { name, email, password, role } = user;
    const hashedPassword = await bcrypt.hash(password, 8);
    const [result] = await db.query(
      'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)',
      [name, email, hashedPassword, role]
    );
    return result.insertId;
  }
}

module.exports = User;