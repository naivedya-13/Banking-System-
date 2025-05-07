const db = require('../config/db');
const { v4: uuidv4 } = require('uuid');

class Token {
  static async create(userId) {
    const token = uuidv4();
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 1); // Token expires in 24 hours

    await db.query(
      'INSERT INTO AccessTokens (user_id, token, expires_at) VALUES (?, ?, ?)',
      [userId, token, expiresAt]
    );

    return token;
  }

  static async verify(token) {
    const [rows] = await db.query(
      'SELECT * FROM AccessTokens WHERE token = ? AND expires_at > NOW()',
      [token]
    );

    return rows.length ? rows[0] : null;
  }

  static async getUserByToken(token) {
    const [rows] = await db.query(
      `SELECT u.* FROM Users u
       JOIN AccessTokens t ON u.id = t.user_id
       WHERE t.token = ? AND t.expires_at > NOW()`,
      [token]
    );

    return rows.length ? rows[0] : null;
  }

  static async delete(token) {
    await db.query('DELETE FROM AccessTokens WHERE token = ?', [token]);
    return true;
  }
}

module.exports = Token;